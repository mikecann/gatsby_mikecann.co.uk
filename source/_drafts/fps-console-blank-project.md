---
title: FPS & Console Blank Project
url: 225.html
id: 225
categories:
  - 'C#'
  - HLSL
tags:
---

Well as im starting blank for this new project in XNA 2.0 i thought i would share my blank slate for others to enjoy.

It includes an FPS counter and a simple Console that i have been using in LieroXNA.

The FPS counter times how long each update and draw loop takes (accurate to 1ms) and displays it on the screen. It also displays the&nbsp; current FPS for your games [even if you are running in a fixed timestep](https://blogs.msdn.com/shawnhar/archive/2007/11/23/game-timing-in-xna-game-studio-2-0.aspx).

The Console is pretty simple tho i have found it increadibly useful during the LieroXNA project. Here is an example of how to define a command:&nbsp;

[code lang=&quot;c#&quot;] _console.AddCommand(&quot;fps&quot;, &quot;toggles if the fps meter is visible or not&quot;, delegate { _fps.Visible = !_fps.Visible; }); [/code]

&nbsp;<flv href="https://mikecann.co.uk/wp-content/uploads/2007/12/1.flv" width="496" height="375" autostart="false"></flv>

**Download:** [download#9] (187 KB)