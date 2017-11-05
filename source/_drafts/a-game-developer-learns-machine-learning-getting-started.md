---
title: A Game Developer Learns Machine Learning - Getting Started
categories:
  - Machine Learning
coverImage: ml-header.jpg
coverMeta: out
tags:
  - Machine Learning
  - Unity
  - Games
  - Coding
  - Programming
date: 2017-11-05 14:51:40
---

So the [intent is to](/machine-learning/a-game-developer-learns-machine-learning-intent/) eventually write an AI to play [Mr Nibbles Forever](http://epicshrimp.com/app/mrnibblesforever/) better an any player. But before we can get anywhere near there we need to get the very basics working first.

<!-- more -->

# TLDR; 

We will use Reinforcement Learning to train an agent to balance a ball.

{% youtube ZnBfvARKXeo %}

# Unity ML Agents

The best way I find to learn is get something working first, then hack around with it for a little bit to understand the very basics. So rather than starting from total scratch im going to look for something that already exists. 

As luck would have it, Unity have [just come out with](https://blogs.unity3d.com/2017/09/19/introducing-unity-machine-learning-agents/) with a new set of tools to help teach game developers machine learing techniques, perfect!

# Getting Setup

First things first, I clone the Unity ML Agents repo https://github.com/Unity-Technologies/ml-agents. 

Then I start following their [Getting Started With Balance Ball](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Getting-Started-with-Balance-Ball.md) docs. 

So apparently the first thing I need to do is get my computer ready for machine learning, so I follow this guide to do so: https://unity3d.college/2017/10/25/machine-learning-in-unity3d-setting-up-the-environment-tensorflow-for-agentml-on-windows-10/

This process takes quite a while, make sure you follow the instructions EXACTLY. At the bottom of that page is a video which is helpful.

{% youtube qxicgknzUG8 %}

# Jupyter Notebook

So with my system now setup I return back to the [Balance Ball](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Getting-Started-with-Balance-Ball.md) doc.

The next step is to open Jupyter Notebook which is a popular tool with ML community for training models.

[![](./jupyter-basics.png)](./jupyter-basics.png)

Its actually pretty cool, basically a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) mixed with docs.

You can write code inside of the doc in chunks then execute the chunks individually and see the result below. 

# Testing the Bridge

So I followed the "Testing Python API" section of the docs and learnt the basics. 

In Unity you compile your game into an exe, this is whats known as your "environment".

[![](./showing-exe.png)](./showing-exe.png)

Python in the notebook then talks to the "brain" in the environment. So its a sort of native bridge between the hardcore machine learning and your "game" / "environment".

[![](./bridge.png)](./bridge.png)

The environment is actually opened as a separate window on your computer. This surprised me as I was expecting it to be hidden from you. They have however made the window very tiny presumably so your GFX card doesnt have to waste too much power rendering and can instead crunch the numbers for learning.

[![](./env-window.png)](./env-window.png)

The brain is able to receive commands which are called "actions". When an action runs, it changes the "state" of the environment which is returned back to Python. That process is then looped to train a model.

[![](./learn-loop.png)](./learn-loop.png)

# Training the Model

I then moved onto the next section called "Training with PPO". In this section we actually train the model for real. 

One of the steps tells you that you can view more details on the training process by using "TensorBoard"

[![](./tensorboard1.png)](./tensorboard1.png)

Im not 100% sure on what all those stats mean but thats okay at this stage. 

The main thing is my model is busy training itself as evidenced by the changing graphs and my pegged CPU 😜

[![](./pegged-cpu.png)](./pegged-cpu.png)

# Testing the Model

Once the "cumulative_reward" is above 75 the model is apparently fully baked and ready to rock. So I stop the training process in Jupyter.

Before I can test how well the model performs in Unity however I must add some support for TensorFlow in the form of the TensorFlowSharp library.  

[![](./tf-sharp.png)](./tf-sharp.png)

It requires the new experimental .Net 4.6 support in Unity. Thats something to note because as our goal is to eventually get this working on Mr Nibbles Forever which is built on the old .Net 3.5

With the library installed we copy over the generated model into the game and huzzah! It works!

[![](./it-works.png)](./it-works.png)

# Adding some Dynamics

Its a little boring however, just some wobbling tables. Its hard to tell if this is actually balancing the ball dynamically or not. I think we can do a little better. Lets add this script to each of the platforms:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallNudger : MonoBehaviour
{
    public Color nudgeColor = Color.red;
    public float forceMultiplier = 5f;
    public float colorChangeTime = 0.5f;

    private bool _isNudging = false;
    private Renderer _renderer;
    private Rigidbody _rigidBody;
    private Color _startingColor;
    private float _colorChangeAge;

    void Awake()
    {
        _renderer = GetComponent<Renderer>();
        _rigidBody = GetComponent<Rigidbody>();
        _startingColor = _renderer.material.color;
        _colorChangeAge = colorChangeTime;
    }

    void OnMouseDown()
    {
        _colorChangeAge = 0;
        var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;
        if (Physics.Raycast(ray, out hit))
            _rigidBody.AddForceAtPosition(ray.direction * forceMultiplier,
                hit.point, ForceMode.Impulse);
    }

    void Update()
    {
        _colorChangeAge += Time.deltaTime;
        _renderer.material.color = _colorChangeAge < colorChangeTime ? 
            nudgeColor : _startingColor;
    }

    private Vector3 GetRandomForce()
    {
        return new Vector3(
            Random.Range(-forceMultiplier, forceMultiplier),
            Random.Range(-forceMultiplier, forceMultiplier),
            Random.Range(-forceMultiplier, forceMultiplier));
    }
}
```

Now when we click the ball, it changes color and gets a little nudge. Now we can see that yes indeed the AI is able to balance the ball dynamically as the input changes.

{% youtube ZnBfvARKXeo %}

# Conclusion

Cool! Well that wasnt as hard as I thought it was going to be. 

Sure I havent actually done any of the hard work or really learnt much about the fundamentals yet but at least I have something working, ready for me to hack with.

So stay tuned, subscribe below as next episode im going to dive a little deeper.