---
title: 'XNAGPUParticles (1,000,000 Dynamic Particles)'
id: 163
categories:
  - 'C#'
  - HLSL
  - XNA
date: 2007-03-30 10:30:40
tags:
---

![](https://www.mikecann.co.uk/Images/Others/particles17.png)This is another submission of work i have done in my final year. This time the project is all my own work.

The project is a continuation based on [work from before Christmas](https://www.mikecann.co.uk/?p=148) and is an experiment into state preserving particle systems. I started out with examining the basic particle systems such as a static system and one that updates on the CPU. I then moved onto more advanced systems such as the GPU based system described by [Lance Latta](https://www.2ld.de/gdc2004/) and others. I soon discovered however that XNA doesn't support "uber buffers" and as such had to invent a new solution using vertex textures. The result is a particle system written in XNA that is able to update and render 1,000,000 particles at about 22 frames a second with 4 forces.

To view this demo you first need to have the XNA runtimes. If you dont have those just go [HERE](https://xnamatrix.com/xnareq.php).[![](https://www.mikecann.co.uk/Images/Others/particles18.png)](./Images/Others/particles18.png)

Once installed you can grab the binary for this project [https://www.mikecann.co.uk/Work/XNAGPUParticles.zip](https://www.mikecann.co.uk/Work/XNAGPUParticles.zip)

If you are interested in seeing the source code for this project, just drop me an email: mike.cann@gmail.com

Oh also, the written report for this can be found [https://www.mikecann.co.uk/Work/GPUParticles2003.doc](GPUParticles2003.doc)

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="640" height="505" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="https://www.youtube.com/v/vxrg1YavBIg&amp;hl=en_GB&amp;fs=1?rel=0" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="640" height="505" src="https://www.youtube.com/v/vxrg1YavBIg&amp;hl=en_GB&amp;fs=1?rel=0" allowscriptaccess="always" allowfullscreen="true"></embed></object>