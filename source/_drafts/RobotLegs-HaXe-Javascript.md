---
title: RobotLegs & HaXe & Javascript
id: 1809
categories:
  - Uncategorized
tags:
---

Recently I have been working on a new version of my (apparently) popular chrome extension [PostToTumblr](https://chrome.google.com/webstore/detail/dbpicbbcpanckagpdjflgojlknomoiah).

I decided it was time to give it a bit of a facelift and upgrade considering alot of people were requesting some features. It also gave me an excuse to play with the Javascript target of HaXe in a different way to my recent [WebGL experiments](https://mikecann.co.uk/personal-project/hxaria-infinite-terrain-haxe-webgldat-gui/).

I think that chrome extensions are a natural fit for the JS target of HaXe. Chrome extensions are in effect small apps that are continually running in the browser waiting for user action before they do something. For me (and im probably going to get flamed for this) I think JS is good for hacking some functionality into a page but not great for application development. The lack of type safety and lack of 'proper' classes and interfaces and other OO goodness just seems to me like a recipe for disaster on anything more complicate than a few click handlers.

I have been doing a lot of tools development at Playdemic recently to support the various development teams. My usual weapons of choice are flex with RobotLegs. I have found that these two together are just great for developing medium to large size applications. RobotLegs' MVCS architecture reduces spagetti in your code by encouraging Separation of Concerns (SoC). With some other nifty tricks like Signals and SignalCommand maps im able to develop Flex apps pretty quick and feel confident in their reliability and ability to add more features later on.

So when I started thinking about how I wanted the new version of PostToTumlbr to work I realised I was going to need alot more javascript and HTML to handle the greatly improved User Interface I was looking for. The

&nbsp;