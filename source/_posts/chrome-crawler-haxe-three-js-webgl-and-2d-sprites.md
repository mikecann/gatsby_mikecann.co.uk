---
title: 'Chrome Crawler, HaXe, Three.js, WebGL and 2D Sprites'
tags:
  - chrome
  - extension
  - haxe
  - js
  - Plugin
  - three.js
  - WebGL
id: 1555
categories:
  - Chrome Crawler
  - HaXe
  - Javascript
  - Programming
date: 2011-06-12 18:13:14
---

[![](https://mikecann.co.uk/wp-content/uploads/2011/06/banbanbnanbab.jpg "banbanbnanbab")](https://mikecann.co.uk/wp-content/uploads/2011/06/banbanbnanbab.jpg)

Had a little free time this weekend so thought I would scratch an itch that has been bugging me for a while.

I started the second version of my [Chrome Crawler](https://mikecann.co.uk/personal-project/chrome-crawler-a-web-crawler-written-in-javascript/) extension a little while back. I have been using the language [HaXe ](https://haxe.org/)to develop it in. It's a great language and I wanted to explore its JS target a little more so I thought, why not make a chrome extension using it. I have had several emails from various people requesting features for Chrome Crawler so I thought I would extend the extension and rewrite it in HaXe at the same time.

I managed to get the basics of the crawler working a few months back but through lack of time got no further. The second thing I wanted to work on after the basic crawling code was how to represent the crawled data. The current method is simply as a list:

![](https://mikecann.co.uk/wp-content/uploads/2010/12/Shot_002.png)

&nbsp;

A while back however I recieved a mail from "**[MrJimmyCzech](https://www.youtube.com/user/MrJimmyCzech)**" who sent me a link to a video he had made using Chrome Crawler and Gephi:

&nbsp;

<object width="700" height="428"><param name="movie" value="https://www.youtube.com/v/C8P6ZttaZRo?version=3&amp;hl=en_GB&amp;hd=1" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" width="700" height="428" src="https://www.youtube.com/v/C8P6ZttaZRo?version=3&amp;hl=en_GB&amp;hd=1" allowscriptaccess="always" allowfullscreen="true"></embed></object>

&nbsp;

As you can see its pretty cool, visually graphed out as a big node tree.

So it got me thinking, can I replicate this directly in Chrome Crawler? To do this I would need to be able to render thousands of nodes and hopefully have them all moving about in a spring like manner determined by the relationships of the crawled pages.

The first thing I tried was using the [HaXe version of the Raphael library](https://lib.haxe.org/p/raphaelExtern). The library is designed for graphing and uses the Canvas with SVG for rendering, so I thought it would be perfect for replicating Gephi. I tested it however and only managed about 300 circles moving and updating at 25FPS:

[![](https://mikecann.co.uk/wp-content/uploads/2011/06/outttt.jpg "outttt")](https://mikecann.co.uk/wp-content/uploads/2011/06/outttt.jpg)

&nbsp;

300 nodes just wasnt going to cut it, I needed more.

Enter the recent [HaXe externs](https://github.com/jgranick/three.js-completion) for [Three.js](https://mrdoob.com/blog/post/693) and its WebGL renderer. Three.js is rapidly becoming the defacto 3D engine for Javascript and takes alot of the headaches away from setting up and rendering to WebGL.

After a little jiggery pokery with the [still very new externs](https://haxe.1354130.n2.nabble.com/Extern-classes-for-three-js-Javascript-3D-like-ro-me-td6447961.html) I managed to get something running:

[![](https://mikecann.co.uk/wp-content/uploads/2011/06/threjsjsjs.jpg "threjsjsjs")](https://mikecann.co.uk/wp-content/uploads/2011/06/threjsjsjs.jpg)

Thats 2000 sprites running at 25fps which is less that I would have hoped for WebGL but still probably enough for ChromeCrawler. Im not too sure why the sprites are upside-down, nothing I can do seems to right them, perhaps someone can suggest the solution?

If you have a[ compatible browser](https://www.doesmybrowsersupportwebgl.com/) you can check it out [here](https://mikecann.co.uk/Work/ChromeCrawler/01/crawlerTab.html). I have also uploaded the [source to its own project](https://code.google.com/p/chrome-crawler/source/browse/#svn%2Ftrunk%2FHaXe) if you are interested.

The next step is to take the data from the crawl and then render it as a node graph, exiting stuff!