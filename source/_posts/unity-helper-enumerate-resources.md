---
title: Unity Helper - Enumerate Resources
tags:
  - Editor
  - open-source
  - Resources
  - unity
  - Util
id: 5001
categories:
  - 'C#'
  - Programming
  - Unity
date: 2014-06-04 01:48:28
---

Following on from [yesterdays post](https://www.mikecann.co.uk/programming/unity-helpers-utilities-and-extensions-for-unity/) on my [Unity-Helpers](https://github.com/mikecann/Unity-Helpers) I have added another utility to the library.

**Enumerate Resources**

Enumerate Resources is a handy util for creating type-safe resource references. Traditionally you have to manually create constant strings to load resources at runtime:

[code lang="csharp"]
Resources.Load(&quot;Prefabs/Cars/Porsche&quot;);
[/code]

This is fragile. If the asset is moved you wont know about the crash until you run the game, this line of code may not be executed often and hence introduces a bug that may only present itself at a later date.

Enumerate Resources scans a resources directory and generates a type-safe alternative:

[code lang="csharp"]
Resources.Load(GameResources.Prefabs.Cars.Porsche);
[/code]

Now if you move the resource and run the enumerator you will get a compile error.

For added sugar there is a method to add the loaded resource as a child of a game object (handy for prefabs):

[code lang="csharp"]
obj.LoadChild(GameResources.Prefabs.Icons.IndicatorArror);
[/code]

You can grab the project, source and tests over at Github: [https://github.com/mikecann/Unity-Helpers](https://github.com/mikecann/Unity-Helpers)