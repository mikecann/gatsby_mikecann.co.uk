---
title: 'Terrainicles [WebGL & HaXe]'
id: 1713
categories:
  - GLSL
  - HaXe
  - Programming
  - Projects
  - WebGL
date: 2011-10-29 14:14:07
tags:
---

I have been playing with this thing, tweaking it, making changes for weeks. Theres so many different things I want to add. Different options, scenarios, optimisations etc. I decided however just to follow the 'release early and often' mantra and get this thing out now.

<!--more-->

Before I go any further check out what im talking about here:

[https://mikecann.co.uk/projects/WebGLTerrainicles/
(You will need a WebGL compatible browser, that means no IE) ](https://mikecann.co.uk/projects/WebGLTerrainicles/)

Its a continuation of my earlier work on [GPU particles using WebGL and HaXE](https://mikecann.co.uk/personal-project/gpu-state-preserving-particle-systems-with-webgl-haxe/). Im trying to emulate some work I did years ago in XNA, on the [LieroXNA project](https://mikecann.co.uk/lieroxna/project-update/).

It uses the same techniques for updating and rendering particles entirely on the GPU as my previous post. What that means is that is possible have millions of particles interacting updating and rendering simultaneously as all the operations are performed on the GPU.

What I have added this time is another texture for the particles to collide with as they move. I was originally working with the same dirt and grass texture as my XNA project but I thought as it was Halloween I would get into the spirit a little ;)

There are several options on the right hand side that can be used to tweak the properties of the simulation. I spent alot of time playing around with these, there are some really cool effects you can achieve with just simple modifications.

There are so many things I could add to improve this. You can see some of them in a video I made years ago:

<object width="700" height="505" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="https://www.youtube.com/v/MocF1IU-5dc?version=3&amp;hl=en_US" /><param name="allowfullscreen" value="true" /><embed width="700" height="505" type="application/x-shockwave-flash" src="https://www.youtube.com/v/MocF1IU-5dc?version=3&amp;hl=en_US" allowFullScreen="true" allowscriptaccess="always" allowfullscreen="true" /></object>

There we have some cool stuff like Bloom, forces and multiple rendering layers going on. It would be nice to get those in this sample too.

For now however I think im going to have a break from this sample. I have spent quite a few weeks to get to this point so far, and I think I need a break for a little bit so I can work on other things. I may come back to it soon tho If people are interested or if (probably more likely) I think of some 'cool new thing' that will 'only take 5 mins'.

I have uploaded the source for this sample to Github for people to lookat/fork if they wish:

[https://github.com/mikecann/WebGLTerrainicles](https://github.com/mikecann/WebGLTerrainicles)

Enjoy!

&nbsp;

&nbsp;

&nbsp;