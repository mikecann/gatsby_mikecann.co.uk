---
title: Mikes Mirror - My Smart Mirror Project (Overview)
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
date: 2018-06-08 14:51:40
---

I have been wanting to do this for a while and I found myself with a little time on my hands so I decided to finally do it... build a Smart Mirror.

<!-- more -->

# TL;DR

Checkout the [video](#video).

# What Is a Smart Mirror?

Put simply it is just a computer display behind a two-way mirror so you can both see your reflection and the monitor behind.

![Mirror explode](./mirrorexplode.jpg)
*(img src https://magicmirror.builders/)*

The key concept is that much like a pair of sunglasses or a police interrogation room, you can only see whats behind the mirrored surface if there is light shining through. This means that when the screen is dark you will get a reflection but when the monitor is displaying something you will see that through the mirror instead.

Connected to the display is a small lower-power computer such as a Raspberry Pi, this lets you show whatever you want on the mirror.

# Why?

Good Question. The short answer is: why not? The long answer is: I think its just a cool fun project plus there are a number of things this could be useful for. Its basically your own personal dashboard so on mine I have it showing the weather, time, and hopefully in the future my Fitbit stats from my watch.

![Mirror explode](./healthmock.jpg)
*(img src http://daniel-erhart.com/smartmirror.html)*

When you pair the mirror with some Facial Recognition or Audio Commands then it could become the smart-hub for your home except unlike pure audio devices such as Alexa or Google Home you can have a visual representation too.

# Building

The building of the mirror was quite an involved process so im going to dedicate posts to both the [software](/projects/mikes-mirror-software/) and [hardware](/projects/mikes-mirror-hardware/) side of things.

# Cost

So how much did the whole thing cost to build? 

* Monitor - Office Works - $257
* UpCore - $181
* Two Way Glass - $150
* Random Cables - $25
* Woodworking Tools - $112
* Wood - $25

**Total: 750 AUD**

Which is quite a bit more that is strictly neccessary and would probably be quite a bit cheaper if I was to do it again. 

For example the monitor I bought brand new from Office Works. I had very specific requirements for the screen (read more in the [hardware](/projects/mikes-mirror-hardware/) post) and although I could have found a cheaper one second hand there would have been compomises.

The UpCore x86 processessor was definately more expensive than some alternatives. I did buy a cheaper processor ARM processor too but I was concerned about compatability and performance so I decided to grab the more expensive UpCore x86 CPU as a backup. Im glad I did as its a great little machine and really powerful.

As I had no woodworking tools either, I had to spend about $100 to buy some. This cost would obviously not be needed next time, tho next time I think I would probably go for one that didnt need a frame, read more in the [hardware](/projects/mikes-mirror-hardware/) post.

# Time

To be honest im not sure exactly how long it took. I really depends on how to measure the time, some things were done in parallel, but here is a rough breakdown:

* The thinking planning and reasearch was over a week or two
* Time taken waiting for the CPUs to arrive was a coupple of weeks to here in Australia
* Getting the glass cut (three times) was a few weeks
* Building the frame and assembling was done over about 3 days
* Writing the software has been off and on again for a few months (probably could be analysed from the [GitHub repo](https://github.com/mikecann/mikes-mirror))

So probably off and on again I have been working on for the last 

# <a name="video"></a> Video Demo

# Conclusions

# More Reading

This is a 3 part series, find the other parts here:

1) [Mikes Mirror - Overview](/projects/mikes-mirror-overview/)
2) [Mikes Mirror - Hardware](/projects/mikes-mirror-hardware/)
3) [Mikes Mirror - Software](/projects/mikes-mirror-software/)