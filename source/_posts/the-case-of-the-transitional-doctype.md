---
title: The Case of The Transitional Doctype
tags:
  - HTML
  - Programming
  - Projects
  - WBFG
  - Websites
id: 785
categories:
  - HTML
  - PHP
  - Websites
date: 2009-12-10 20:44:37
---

I took a little break from my 'top secret' project (more on this coming soon) this evening to do some much needed repair work on one of my flash games portals [www.worldsbestflashgames.com](www.worldsbestflashgames.com).

Top of my list was the fact that the index page doesn't render correctly in IE7\. What makes it odd is the fact that the category pages which are essentially identical to the index page rendered fine.This is what it looked like:

[![ScreenHunter_01 Dec. 10 19.28](https://mikecann.co.uk/wp-content/uploads/2009/12/ScreenHunter_01-Dec.-10-19.28.jpg "ScreenHunter_01 Dec. 10 19.28")](https://mikecann.co.uk/wp-content/uploads/2009/12/ScreenHunter_01-Dec.-10-19.28.jpg)

Normally when you hear that there is an issue with a site on IE and not on FF or other browsers you automatically assume its CSS, and so did I. After stripping the site down to its bear bones however, comparing the index page against the category page I will still getting this oddness.

To cut a long story short I worked my way up from the bottom of the page to the top until I reaced the very top line:
<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"&gt;</pre>
This line was the only line that differed in the index to the category page, which read:
<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"&gt;</pre>
So I took out the "Transitional" and low and behold it worked!

[![ScreenHunter_02 Dec. 10 19.41](https://www.mikecann.co.uk/wp-content/uploads/2009/12/ScreenHunter_02-Dec.-10-19.41-1024x484.jpg "ScreenHunter_02 Dec. 10 19.41")](https://mikecann.co.uk/wp-content/uploads/2009/12/ScreenHunter_02-Dec.-10-19.41.jpg)

No idea what Transitional does, but I hope this helps someone else out in the future!