---
title: Mikes Mirror - Hardware
categories:
  - Projects
coverImage: header.jpg
coverMeta: out
tags:
  - Mirror
  - Electron
  - React
  - Typescript
  - Woodworking
  - Hardware
  - Linux
date: 2018-04-25 14:51:40
---

So I decided to build a Smart Mirror as a hobby project. I knew that I could handle the software side of thing but building a frame and wiring the electronics up was going to be a whole new adventure.

<!-- more -->

# Parts

This is a 3 part series, find the other parts here:

1) [Mikes Mirror - Overview](/projects/mikes-mirror-overview/)
2) Mikes Mirror - Hardware
3) [Mikes Mirror - Software](/projects/mikes-mirror-software/)

# Research

So first thing I did when trying to work out how to build this thing was to look at other people's efforts. I watched hours of Youtube videos and read just about every post on the [Magic Mirror forum](https://forum.magicmirror.builders/category/12/show-your-mirror).

I recorded some of the best ones I liked in a [Trello Board](https://trello.com/b/dYbx0Zc0/smart-mirror):

[![](./trello-board.png)](./trello-board.png)

# Requirements

After doing some research I realised there were tons of different options so I would try to narrow my possibilities down a little by enumerating my requirements:

1) It must be able to fit in the little alcove near my front door:

[![](./alcove.jpg)](./alcove.jpg)

2) Ideally it will blend in with the other wooden furniture in the apartment.
3) Its a rental apartment so we cant put holes in the wall, so it must be light enough to be able to be supported by stick-on hooks.
4) It must have enough power to run Facial Recognition, Speech Recognition and a display at a decent framerate all at the same time.
5) Shouldnt cost too much

# The Computer

To smarts of the mirror I knew that I needed a computer of some sort and it had to be small and light enough that I could attach it behind the mirror.

One of the most obvious and well known choices is the Raspberry Pi. Through my research however I discovered that there were a great many other types of devices with significantly higher specs than the Pi. This great article lists 20 of them: https://www.techrepublic.com/pictures/want-a-more-powerful-raspberry-pi-choose-from-these-20-alternatives/

In the end I decided on not one but two machines. Firstly the Pine Rock64:

[![](./rock64.jpg)](./rock69.jpg)

This is a cheap ARM powered board the size of a credit card that according to reviews is significantly more powerful and more memory for the price than the Raspberry Pi 3.

I also decided to buy an Up Core, which is about 4 times as expensive at the Rock64 but is even more powerful and significantly, it runs on an Intel x86 CPU instead of an ARM CPU. This is important because I knew from past experience that there may be issues trying to get things to work on ARM powered devices. 

Projects on github tend to be written with x86 in mind and drivers tend to expect common operating systems, so with the Up Core being x86 means that I can run Ubuntu or even Windows if I want. 

# The Display

I decided early on that I wanted the display to reach all the way to the edges of the mirror. Some people mount a smaller display behind a large mirror thus giving the illusion of a large screen. 

[![](./submount.jpg)](./submount.jpg)

I was concerned however that this might be noticeable under some lighting conditions also I wanted to be able to show things in each corner of the mirror. So for me I needed to have a single large display that covered the entire mirror.

At first I considered using a touch sensitive display of some-sort but after thinking about it a little more I realised that it could be dangerous having people poking the screen on the wall when its only attached by sick-on hooks. Instead of touch I would use voice and camera as input.

I had a choice to make around whether I wanted to use a PC computer monitor or a TV. LED TVs usually start at about 32" and go all the way up. I had about 40" of space to work with in the little alcove but as mentioned before I was weight constrained and TVs tend to be heavy. 

Another factor that made me decide on a PC monitor instead of a TV was the resolution. I was concerned that because you would stand relatively close to the mirror you might notice a lower resolution (720-1080p) TV.

[![](./tvpixel.jpg)](./tvpixel.jpg)

So for those reasons I decided on a monitor. After some searching on Gumtree for 32" inch (about as big as they affordable get) displays I decided that it didnt cost that much more to buy one new. That way I could get exactly what I wanted whereas I was constantly compromising on Gumtree.



# The Glass

# Building the Frame

# Assembly

# Attaching to the Wall

# More Reading

# Conclusions

So it turns out, woodworking is actually much harder than I had expected. It seems that being good at making software doesnt automatically translate to being good at hardware, who would have thought it.

This is a 3 part series, find the other parts here:

1) [Mikes Mirror - Overview](/projects/mikes-mirror-overview/)
2) Mikes Mirror - Hardware
3) [Mikes Mirror - Software](/projects/mikes-mirror-software/)