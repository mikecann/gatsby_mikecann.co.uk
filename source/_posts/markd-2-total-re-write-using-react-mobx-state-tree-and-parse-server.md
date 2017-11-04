---
title: 'Markd 2 - Total Re-Write using React, Mobx-State-Tree and Parse-Server'
date: 2017-11-04T07:01:30.343Z
coverImage: /assets/images/markd2-header.jpg
categories:
  - markd
tags:
  - coding
  - freelance
  - markd
  - projects
---
I last wrote about Markd [back in September of last year](https://mikecann.co.uk/markd/portfolio/projects/introducing-markd-pinterest-for-people/) so its about time I gave an update on the latest work on the project.

Just a quick reminder about Markd; its a super cool project that I worked on for my long-term client and friend Brandon. It is a chrome-extension that lets you "bookmark people", so for example, say you stumble across a cool games developer on Twitter and you want to make a note of him for a project you have planned in the future then you can simply "mark" them to add you your collection, they then become easy to find in the future.

Check out the video below for a quick demonstration:

<iframe width="950" height="768" src="https://www.youtube.com/embed/0TH_JNTOPdg?rel=0" frameborder="0" allowfullscreen></iframe>

So as [mentioned previously](https://mikecann.co.uk/markd/portfolio/projects/introducing-markd-pinterest-for-people/) the tech stack was a combination of Aurelia for the extension with Microsoft's ASP.net Core on the backend all hosted on Azure. 

The problem was that I was never very happy with the way things were on the code level. There was no sharing between the extension and the client which led to many issues and bugs in conversion from one data format to another. I also had problems building Aurelia as every time I went back to it, everything had changed and I could no longer build. None of the docs matched what I had and it was generally a nightmare.

I decided I need a do-over, this time I decided that I wanted the entire thing in the same language so I could share the code between the client, server and extension 
