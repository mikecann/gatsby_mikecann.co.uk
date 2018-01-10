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
date: 2017-01-10 14:51:40
---

In my last post on Machine Learning we went a little deeper into machine learning by starting from scratch and trained a model to on a vastly simplified version of mr nibbles. In this post we will explore what happens when we step it up a notch and introduce more complexity.

<!-- more -->

# The Series

If you are new to the series I recommend you checkout the previous posts first, here's the whole series:

0. [A Game Developer Learns Machine Learning - Intent](/machine-learning/a-game-developer-learns-machine-learning-intent/)
1. [A Game Developer Learns Machine Learning - Getting Started](/machine-learning/a-game-developer-learns-machine-learning-getting-started/)
2. [A Game Developer Learns Machine Learning - A Little Deeper](/machine-learning/a-game-developer-learns-machine-learning-a-little-deeper/)
3. A Game Developer Learns Machine Learning - Mr Nibbles Basics

# TLDR;

We start from scratch and construct a basic world for an ml-agent to learn. It doesnt work perfectly but we get something working and have a good idea how to progress next time.

{% youtube MiY6DiZovRg %}

# Mr Nibbles Forever vs Mr Nibbles

Okay so the idea way back in my [Intent](/machine-learning/a-game-developer-learns-machine-learning-intent/) post was to teach an ML agent to learn Mr Nibbles Forever. After some more thought however I think what might be easier is to actually train a model on my original game that "Mr Nibbles Forever" was based on "[Mr Nibbles](http://mr-nibbles.com/)".

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

    state.Add(_player.transform.position.x);
    state.Add(_player.transform.position.y);

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

The next issue is, how do I deal with different level sizes? [This GitHub issue](https://github.com/Unity-Technologies/ml-agents/issues/139) states that the state size needs to be fixed. I believe this is to do with the way TensorFlow works under the hood. 

Because our levels are different sizes with a different number of tiles its going to make things tricky.

For now my solution is just to make sure the levels are quite small then grab all the tiles in a certain bounds. If the tile is empty I set its type to "0" if its a solid tile its "1" and if its a spider its "2". 
