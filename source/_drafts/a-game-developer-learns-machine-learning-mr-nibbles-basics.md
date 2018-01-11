---
title: A Game Developer Learns Machine Learning - Mr Nibbles Basics
categories:
  - Machine Learning
coverImage: header.jpg
coverMeta: out
tags:
  - Games
  - Machine Learning
  - AI
  - Mr Nibbles
  - Programming
  - Unity
  - C#
  - Python
  - AGDLML
date: 2018-01-10 14:51:40
---

In my last post on Machine Learning we went a little deeper into machine learning by starting from scratch and trained a model to on a vastly simplified version of mr nibbles. In this post we will explore what happens when we step it up a notch and introduce more complexity.

<!-- more -->

# The Series

If you are new to the series I recommend you checkout the previous posts first, here's the whole series:

0. [A Game Developer Learns Machine Learning - Intent](/machine-learning/a-game-developer-learns-machine-learning-intent/)
1. [A Game Developer Learns Machine Learning - Getting Started](/machine-learning/a-game-developer-learns-machine-learning-getting-started/)
2. [A Game Developer Learns Machine Learning - A Little Deeper](/machine-learning/a-game-developer-learns-machine-learning-a-little-deeper/)
3. A Game Developer Learns Machine Learning - Mr Nibbles Basics

# Mr Nibbles Forever vs Mr Nibbles

Okay so the idea way back in my [Intent](/machine-learning/a-game-developer-learns-machine-learning-intent/) post was to teach an ML agent to learn Mr Nibbles Forever. After some more thought however I think what might be easier is to actually train a model on my original game that "[Mr Nibbles Forever](http://epicshrimp.com/app/mrnibblesforever/)" was based on "[Mr Nibbles](http://mr-nibbles.com/)".

{% youtube lyAf7VVLdKg %}

Rather than an endless procedurally generated game like Mr Nibbles Forever, Mr Nibbles is a level-based platform-puzzler. 

I think that aiming to solve this game with ML may be a little easyier as it will be simpler to construct the level and to control the learning process. There is also an issue with how to feed the state into tensorflow which I will discuss a little later.

# The Environment

So before I go any further with my ML work I need a way to build levels. Mr Nibbles was originally made many years ago in HaXe and thus I will need a way to build levels in Unity.

Fortunately Unity recently launched a whole [slew of tooling](https://docs.unity3d.com/Manual/Tilemap-Painting.html) for generating tile-based games.

So I set to work and was able to construct a number of levels:

[INSERT VIDEO OF LEVEL CONSTRUCTION]

I then borrowed some code from Unity's [set of tutorials on platform games](https://unity3d.com/learn/tutorials/topics/2d-game-creation/creating-basic-platformer-game) to build a "Platform Controller" for Mr Nibbles.

I added a little of flourish in the way of big tubes to represent the entrance and exit points for the level. I even wrote some code that animated Mr Nibbles through the tubes but I found that it caused issues in the training so I decided to drop that aspect for now, perhaps ill add it again later.

The end result is that you are able to play a number of levels as mr nibbles. When you reach the exit another level is randomly selected and Mr Nibbles is spawned into that.

[INSERT VIDEO OF MANUALLY PLAYING THE LEVELS]

# The Agent

Okay with the environment construct it was now time to construct my agent. 

## State

First things first, what state am I going to train on? 

Well we obviously need to supply the position of Mr Nibbles and the position of the exit point. 

```csharp
public override List<float> CollectState()
{
    var state = new List<float>();
  
    state.Add(_exitPoint.transform.position.x);
    state.Add(_exitPoint.transform.position.y);

    state.Add(_platformController.transform.position.x);
    state.Add(_platformController.transform.position.y);

    return state;
}
```

We should probably also supply a variable to help with learning the potential set of actions depending if the player is in the air or not. 

```csharp
public override List<float> CollectState()
{
    var state = new List<float>();
  
    ...

    state.Add(_player.IsGrounded ? 1 : 0);

    return state;
}
```

Im not sure if this is really needed but I thought it cant hurt.

Now for the hard part. How do I represent the level? I cant really pass in the collision data as that would probably be too complicated to represent as floats, plus I dont think I need to. Because the level is constructed as tiles, everything sits on a uniform grid. 

Thus I should only need to pass in the centre point of each tile in the level along with its type and hopefully that should be enough for the agent to learn the relative relationship between.

[INSERT IMAGE TO DEMONSTRATE THIS HERE]

The next issue is, how do I deal with different level sizes? [This GitHub issue](https://github.com/Unity-Technologies/ml-agents/issues/139) mentions that the state size needs to be fixed. I believe this is to do with the way TensorFlow works under the hood. 

This restriction is going to make things a little tricky because our levels are different sizes with a different number of tiles, so keeping the state size the same for each level may be a problem (more on potential solutions to that later).

For now my solution is just to make sure the levels are quite small then grab all the tiles in a certain bounds. If the tile is empty I set its type to "0" if its a solid tile its "1" and if its a spider its "2". 

[INSERT IMAGE TO DEMONSTRATE THIS]

When each level changes I grab the tiles from the tilemaps:

```csharp
public BoundsInt tileBoundsToIncludeInState = new BoundsInt(-25, -1, 0, 40, 1, 1);

public override void AgentReset()
{
    ...
    _tiles = _game.CurrentLevel.GetComponentInChildren<TilesController>().GetTiles(tileBoundsToIncludeInState);
    ...
}
```

Then feed them into the state list:

```csharp
public override List<float> CollectState()
{
    ...

    foreach (var tile in _tiles)
    {
        state.Add(tile.position.x);
        state.Add(tile.position.y);
        state.Add(tile.type);
    }
    
    ...
}
```

Now there should be enough information there for the network to learn the relationships between the states.

## Actions

Now we have our state setup we need to allow the agent to take and action and receive a reward or punishment for that action.

```csharp
public override void AgentStep(float[] actions)
{
    PerformActions(actions);
    UpdateRewards();
}
```

Digging into `PerformActions` first:

```csharp
public const int None = 0;
public const int MoveLeft = 1;
public const int MoveRight = 2;
public const int Jump = 3;

...

private void PerformActions(float[] actions)
{
    var nothing = (int) actions[None] == 1;
    var moveLeft = (int) actions[MoveLeft] == 1;
    var moveRight = (int) actions[MoveRight] == 1;
    var jump = (int) actions[Jump] == 1;

    var isJumping = false;
    var hozMove = 0f;

    if (moveLeft)
        hozMove = -1f;
    if (moveRight)
        hozMove = 1f;
    if (jump)
        isJumping = true;

    _platformController.Tick(hozMove, isJumping);
}
```

I handle the condition where the player can perform none, one or all of the actions simultaneously. I then pass those actions to the platform controller component which updates the physics of mr nibbles.

Now we need to handle how to reward the agent for its actions:

```csharp
private void UpdateRewards()
{
    if (_exitPoint.IsTriggered)
    {
        Wins++;
        reward = 10;
        done = true;
    }
    else if (_spiders.IsTriggered)
    {
        Deaths++;
        reward = -10;
        done = true;
    }
    else
    {
        reward = -0.01f;
    }
}
```

The agent is rewarded to reaching the exit, punished for touching the spiders and given a small punishment for each moment that goes by that it doesnt reach the exit. 

Im not sure if these are the correct values, I played around with a few different values, but as we will see later I may not be correct here.

# Defining Brain and Academy

Next up I need to set the properties on my brain and academy

[INSET PICTURE OF THAT HERE]

[TALK ABOUT THAT A LITTLE BIT HERE]

# Testing

Final step before training is to make sure we have everything set up correctly I set the mode on the brain to be "Player" then hit play, and sure enough I can play the game.

[INSERT VIDEO SHOWING THIS0]

# Training

With the environment constructed lets move onto training. First I need to get the hyperparameters right for the PPO algorithm. I re-read [the unity best practices doc](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/best-practices-ppo.md) on this and took a guess at the following hyperparams:

```python
[INSERT HYPERPARAMS HERE!!]
```

I then kicked off training and fired up TensorBoard. After a few different attempts I felt like I had something that was training so I let it run for an hour or so:

[INSERT PIC OF TENSORBOARD HERE]

It looks okay, we can see that the cumulative reward increases sharply and levels off and the episode length decreases as the agent learns to play the level.

Unfortunately when we try our model out in the game we see this:

[INSERT VIDEO OF MR NIBBLES GETTING STUCK]

On the positive side, it looks like he is attempting to move towards the exit point when the exit is to the right of the spawn point. On the negative side he doesnt ever seem to want to try going left and also seems to get stuck for a long time at a small hurdle.

I think whats going on is that because the levels where the exit point is to the left of the spawn point have spiders they are significantly more difficult for the agent to solve than the levels where the exit point is to the right of the spawn point. As a result the agent has learnt that probably it should always just go right and is unable to learn that it can jump over the spiders.

# Future Work

I tried a few smaller tweaks but none seemed to have a significant effect. I think what I need to to rethink my strategy. 

## Curriculum Training

While browsing through the Unity docs I came across the concept of [curriculum training](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/curriculum.md). From what I understand, it lets you incrementally train your agent with progressively more difficult scenarios. 

I think I can use this to much more slowly introduce game features to mr nibbles to learn. This should hopefully result in a much stronger agent.

## Tile Radius State

## Reward Tweaking

