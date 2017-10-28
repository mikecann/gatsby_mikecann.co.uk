---
title: Recursive v.1.1
tags:
  - chrome
  - crawler
  - extension
  - HTML
  - Javascript
  - recursing
  - spider
  - Tool
  - typescript
  - Update
url: 2270.html
id: 2270
categories:
  - Recursive
date: 2012-12-16 18:38:53
---

[![Screenshot_001](https://mikecann.co.uk/wp-content/uploads/2012/12/Screenshot_001-1024x423.png)](https://mikecann.co.uk/personal-project/recursive-v-1-1/attachment/screenshot_001/)

I have found a little more time this evening to fix some bugs and make some improvements to my Chrome extension [Recursive](https://chrome.google.com/webstore/detail/recursive/hbgbcmcmpiiciafmolmoapfgegbhbmcc?hl=en). The changes are as follows:
<!-- more -->
> ----- v.1.1 ------
> 
> - Now only displays recursive icon on tabs with https:// and https://
> 
> - Full screen now works (uncommented that line of code, doh!)
> 
> - Pause and reseting a recurse now works correctly
> 
> - Renamed the title page of the app
> 
> - Some Performance improvments
> 
> - There is now an option in the settings to define a custom file filter
> 
> - There is now a setting to disable removing duplicate files

One of the main new additions is the ability to add  a custom filter in the settings which recursive uses when parsing a file:

[![Screenshot_002](https://mikecann.co.uk/wp-content/uploads/2012/12/Screenshot_002.png)](https://mikecann.co.uk/personal-project/recursive-v-1-1/attachment/screenshot_002/)

If any are found they are then displayed in the files dialog:

[![Screenshot_003](https://mikecann.co.uk/wp-content/uploads/2012/12/Screenshot_003.png)](https://mikecann.co.uk/personal-project/recursive-v-1-1/attachment/screenshot_003/)

As I say, just a quick update this evening. I plan on writing some more in-depth blog posts this week explaining some of the nuts and bolts of Recursive.