---
title: Printomi Maps
id: 1914
categories:
  - HTML
  - Printomi
  - Programming
  - Projects
  - Projects
date: 2012-05-16 19:36:28
tags:
---

Well since we have made the [decision to discontinue Printomi](https://mikecann.co.uk/printomi/sunsetting-printomi/) I have been backing up the databases and downloading the 90GB+ of images that users have uploaded.

Well it wouldn't be like me if I didn't start thinking about what cool things I do with all those pixels. I remember seeing those [cool Mincraft maps](https://www.deadworkerspartynetwork.com/theshaft/map1/mapalt1/map.html?worldX=980&amp;worldY=0&amp;worldZ=160&amp;zoom=6) that use the Google Maps API to explore the Minecraft servers and it got me thinking if it could be possible to do something like that but for the Printomi images.

<!--more-->

Well it turns out yes, you can: [https://storage.googleapis.com/printomimaps/index.html](https://storage.googleapis.com/printomimaps/index.html)

Its only 1,024 of the total 27,497 images that were uploaded but even this small ratio results in a total map size of 115,200 x 86,400 pixels. The Google Maps obviously cant handle an image that large and it would take forever to download so you must split it up into many tiles. To achieve the zooming and performance you must also provide the map at various sizes.

With a map of 32x32 image with each image at 3600x2700 pixels and each tile at 450x337 this results in 87,000 tiles at 8 zoom levels! Generating and uploading all that data takes several days. But the result is you can pan and zoom around what seems like one huge 115k x 84k image.

If you are interested I have uploaded the source code I wrote to generate the 349k tiles at the various zoom levels from the 1024 3600x2700 input images. You can find it over on Github: [https://github.com/mikecann/PrintomiMaps](https://github.com/mikecann/PrintomiMaps)

If I had enough disk space on my web server I would love to do the whole 37,000 images in this way. If I did 128x128 that would use 16,384 of the images. This would result in 10 zoom levels and a map 460,800 x 345,600 pixels large. I have no idea or how long it would take to generate and upload all those tiles :P