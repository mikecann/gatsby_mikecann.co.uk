---
title: Picking and Bounding Boxes
id: 177
categories:
  - 'C#'
  - Projects
  - TD Project
  - XNA
date: 2007-05-29 18:13:36
tags:
---

[![](https://www.mikecann.co.uk/Work/TDProject/engine06.png)](https://www.mikecann.co.uk/Work/TDProject/engine06.png)

Got the next essential small step of the project in today, picking, that is selecting an object that exists within a 3D world from a mouse click in the 2D world. Found some really good resources for this including the [Hazy Mind](https://www.thehazymind.com/archives/2005/10/tutorial_9_picking_objects_fro.htm) site again and a new one I discovered by accident by [Charles Humphrey](https://randomchaosuk.blogspot.com/2007/05/engine-design-ray-picking.html). I had a little trouble at first with working out how to calculate a bounding box, but yet again the XNA community came to my rescue. Thanks to [Andy and his blog ](https://andyq.no-ip.com/blog/?p=16)I now have a custom content pipeline that generates a bounding box for my mesh automatically.

Now that you can select a unit on the map the next step will be to add the ability to add properties and *gulp* custom scripts!