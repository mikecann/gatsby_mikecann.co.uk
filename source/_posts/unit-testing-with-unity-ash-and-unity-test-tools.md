---
title: Unit Testing with Unity Ash and Unity Test Tools
tags:
  - architecture
  - engine
  - Framework
  - testing
url: 5777.html
id: 5777
categories:
  - Unity-Ash
  - UnityAsteroids
coverImage: 'https://www.mikecann.co.uk/wp-content/uploads/2015/11/tested-header.png'
coverMeta: out
date: 2015-11-02 09:45:01
---

So I promised in my [last post](https://www.mikecann.co.uk/programming/unity-ash-a-different-way-of-thinking-about-making-games-in-unity/) to show how how [Unity-Ash](https://github.com/mikecann/Unity-Ash) can make things easyier when it comes to Unit Testing. 
<!-- more -->
I have added some tests to the [Unity Asteroids](https://github.com/mikecann/UnityAshteroids) example game. Lets take a look at one of the simpler systems as an example, the DeathThroesSystem:

[code lang="csharp"]
public  class DeathThroesSystem : NodelessSystem&lt;DeathThroes, Entity, Audio&gt;
{
    public DeathThroesSystem()
    {
        _updateCallback = OnUpdate;
        _nodeAddedCallback = OnNodeAdded;
    }

    private void OnNodeAdded(DeathThroes death, Entity entity, Audio audio)
    {
        audio.Play(death.deathSound);
    }

    private void OnUpdate(float delta, DeathThroes death, Entity entity, Audio audio)
    {
        death.countdown -= delta;
        if (death.countdown &lt;= 0)
            entity.Destroy();
    }
}
[/code]

We can see its a really simple system that does a couple of things. 

First we want to test that when a node is added to the system we play a sound effect. Using Unity-Test tools you can quickly whip up a test case:

[code lang="csharp"]
[TestFixture]
public class DeathThroesSystemTests : UnityUnitTest
{
    private IEngine _engine;
    private DeathThroesSystem _system;

    [SetUp]
    public void Setup()
    {
        _system = new DeathThroesSystem();
        _engine = new Engine();
        _engine.AddSystem(_system, 0);
    }

    [Test]
    public void WhenANodeIsAdded_DeathSoundPlays()
    {
        var e = AddEntityToEngine();

        Assert.AreEqual(1, e.GetComponent&lt;Audio&gt;().toPlay.Count);
        Assert.AreEqual(e.GetComponent&lt;DeathThroes&gt;().deathSound, e.GetComponent&lt;Audio&gt;().toPlay[0]);
    }

    private GameObject AddEntityToEngine()
    {
        var obj = CreateGameObject();
        obj.AddComponent&lt;DeathThroes&gt;();
        obj.AddComponent&lt;Audio&gt;();
        obj.AddComponent&lt;Entity&gt;();
        _engine.AddEntity(obj.AddComponent&lt;Entity&gt;());
        return obj;
    }
}
[/code]

I wrote a little helper that adds an entity to the engine with the necessary components. In the future we could use reflection to looup the types on the Nodeless system, but for now its enough to satisfy the test:

[![2015-11-02_17-28-19](https://www.mikecann.co.uk/wp-content/uploads/2015/11/2015-11-02_17-28-19.png)](https://www.mikecann.co.uk/wp-content/uploads/2015/11/2015-11-02_17-28-19.png)

Next we want to check that after update the countdown is decremented.

[code lang="csharp"]
[Test]
public void AfterUpdate_CountdownDecremented()
{
    var e = AddEntityToEngine();

    var before = e.GetComponent&lt;DeathThroes&gt;().countdown;

    _engine.Update(1.5f);

    Assert.AreEqual(before - 1.5f, e.GetComponent&lt;DeathThroes&gt;().countdown, 0.01f);
}
[/code]

Easy, now we want to check that when the countdown is less than or equal to zero, the entity is destroyed:

[code lang="csharp"]
[Test]
public void AfterCountdownTimerEnds_EntityDestroyed()
{
    var e = AddEntityToEngine();

    var before = e.GetComponent&lt;DeathThroes&gt;().countdown;

    _engine.Update(before + 1);

    Assert.IsTrue(e.GetComponent&lt;Entity&gt;().IsDestroyed);
}
[/code]

Sweet and thats it! Sure we could add a few more tests for some of the corner cases but as an example I think it serves its purpose.

Let me know in the comments or email me: mike.cann@gmail.com with what you think!