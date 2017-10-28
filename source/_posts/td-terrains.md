---
title: TD Terrains
url: 175.html
id: 175
categories:
  - 'C#'
  - Projects
  - TD Project
  - XNA
date: 2007-05-22 11:25:34
tags:
---

Well i havent updated in a while one the TD project, not because I wasnt working on anything but mainly because i have been struggling with the nuts and bolts of 3D RTS game development. 
<!-- more -->
Normal game development is fine when you only expect ever to have your game to simply run. When you want to make it run as a game but also act as a tool at the same time you have problems. The way the TD project is structured we have a game &quot;Engine&quot; project that contains all the code to display our objects on the screen, then we have a &quot;Tool&quot; project that contains all the code for making maps, it creates an instance of the Engine so that it can render those objects. We also have a &quot;Game&quot; project that will be the actual game and will contain all the other game type logic like menu systems etc. 

Getting all these to work nice and happily and in an efficient way is proving to be umm difficult. The problem is confounded by the fact that the tool requires multiple rendering windows to display things at once, causing me to redesign alot of the way the game works. When you only have one window open you can set classes to be static all over the place, but if you need those classes to interact in a non static way then you have to use managers to sort out how they should interact, introducing more complexity nightmares!

But anyways, enough of that. Time for pretty pictures:

![](https://www.mikecann.co.uk/Work/TDProject/terrain01.jpg)

As you can see Mr Graham 'Golden' Furner has been making good progress on his terrain generation algorithm for the project. Hopefully I will beable to get enough of the structure in place so we can begin to merge the two parts of the project together!