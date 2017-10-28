---
title: Chrome Crawler v0.4 - Background Crawling & More!
tags:
  - api
  - background
  - chrome
  - crawl
  - Javascript
  - spider
  - Update
url: 1475.html
id: 1475
categories:
  - Chrome Crawler
date: 2010-12-19 22:54:33
---

[![](https://mikecann.co.uk/wp-content/uploads/2010/12/Shot_0041.png "Shot_004")](https://mikecann.co.uk/wp-content/uploads/2010/12/Shot_0041.png)

I have been asked by several peeps now to add the ability to persist crawls when the pop-up window closes so I rolled out this update.
<!-- more -->
Now when you close the Chrome Crawler popup your crawl is saved so that when you open it up again you can resume.

Not only that but thanks to the awesomeness of the background page API in chrome I have now added the ability to crawl even when the popup isnt open.

To enable this head over to the option and untick the "Pause crawling when popup closes" option.

While I was at it I made a few other changes and improvements. The main one being that the "src" attribute on tags is also searched for when you crawl. What this means is that "interesting" images should show up in the files tab if you have images as interesting file types.

You should automatically get the update next time you restart chrome, or if you dont have the extension yet [head over to the gallery to get it!](https://chrome.google.com/extensions/detail/amjiobljggbfblhmiadbhpjbjakbkldd/)