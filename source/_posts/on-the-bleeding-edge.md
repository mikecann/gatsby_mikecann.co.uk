---
title: On the Bleeding Edge
tags:
  - AIR
  - Flex
  - Inputtie
  - Java FX
  - Mate
  - Programming
  - Projects
  - Robot Legs
  - Signals
url: 895.html
id: 895
categories:
  - Actionscript
  - AIR
  - 'C#'
  - Flex
  - Java
  - JavaFX
  - Programming
  - Projects
date: 2010-02-10 23:26:38
---

Well it thought it was about time I did some posting about my personal project im working on at the moment as I havent spoken about my coding for a while.
<!-- more -->
For a while now (alot longer than I had hoped for) I have been working on a project that falls outside the realms of my usual kind of games-related projects. Im not ready do describe exactly what it is yet but im excited about it.

For months I have been struggling with the techinal challenges the project has entailed and I have dabbled with many new and highly diverse technologies including [JavaFX](https://www.mikecann.co.uk/programming/flirting-with-javafx/) (Java), Qt (C++) and Mono (C#).  I have been looking for a cross-platform technology that will get the job done that I need and doing it in an elegant manner.

I thought I had found it with a combination of JavaFX and straight Java using the PureMVC framework. I however was plagued with problems throughout with Bonjour, jGroups, JmDNS, JNI and JNA.

So after months of work, hardship and struggles I read a very interesting article on the up-and-coming Adobe AIR 2.0  that was opened for beta in December. With 2.0 Adobe are bringing NativeProcess  to Air. What this means is that you can you can execute native code (.dlls, .so, .jar etc) from Air. To me this was bloody brilliant as I had been[ playing with Air reccently](https://www.mikecann.co.uk/programming/audiobook-organiser-v1-3-0-dragndrop/) and my [day-job](https://www.mikecann.co.uk/photos-personal/playdemic-my-fist-day/) heavily involves Flex and I simply love the power and beauty of Flex.

So what this meant to me was that I could write the bulk of my project including its interface in my much preferred Adobe Flex (Air) and then use Native Process to communicate with a small kernel of Java that would do all the dirty work that Air itself cant do.

So after a little playing with [Flerry](https://www.riaspace.net/2010/01/flerry-flex-java-bridge-for-adobe-air-2-0/) for Air-&gt;Java bridge I started to think about the structure of the code and the framework I would use. For my initial few runs at this project I had been using the Java version of PureMVC. I really like some aspects of PureMVC but I think its can be so overly cumbersome in some circumstances (ill write another post on this in the future I think). So instead I looked at the alternatives.

I have been using [Mate](https://mate.asfusion.com/) alot recently at work and on my own mini-project the [Audio Book Organiser](https://www.mikecann.co.uk/programming/audio-book-organiser-air-mate-flex-4/). However as this project is partly for my own learning and personal growth I decided to look at what else there was out there. From the videos by [Jessie Warden](https://www.mikecann.co.uk/fun-videos/jessie-warden-flash-flex-videos/) I had heard about [Robot Legs](https://www.robotlegs.org). Apparently this framework has been around for a while, but it was the first I had heard of it. Taking at look at it I immediately became very excited as it looks like it offers all the things that make PureMVC great but without the extra coding-baggage that goes with it.

To add to my interest it appears another very interesting, very new action-script technology has been introduced into Robot Legs called [Signals ](https://github.com/robertpenner/as3-signals)by Robert Penner. Signals is an alternative to the standard events dispatching method found throughout flash (more on this in another post).

So why have I called this post "the bleeding edge?". Well Adobe Air 2.0 is still in beta and has only been for a month or so. Its so new that some parts still havent been documented atall and the only way to find out how they work is to post a msg to the devs on the forums. Signals is also new and its integration into Robot Legs is very new indeed (last coupple of weeks). So at the moment I feel as if im at the forefront of some very new, very exciting technology, a stark contrast to my fiddlings with the ancient Java.

I realise this post is very text and tech-heavy but I needed to post about it before I forgot all the pain I have gone through with this project to get where I am at the moment. Future posts ill be delving a little deeper into some of my experiments with these new technologies ;)