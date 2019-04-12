---
title: Mr Nibbles Forever - A Prototype
tags:
  - 2d
  - "C#"
  - endless runner
  - Game
  - nibbles
  - prototype
  - unity
url: 5506.html
id: 5506
categories:
  - Mr Nibbles Forever
coverImage: "https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-15-22.png"
coverMeta: out
date: 2015-01-19 00:50:46
---

About a week ago I had an idea: what would [Mr Nibbles](https://www.mikecann.co.uk/portfolio/mr-nibbles-2/) look like if it was turned into an endless runner? Well in-between other things I knocked out a gameplay prototype using my weapon of choice these days, Unity.

<!-- more -->

After just a couple of days I had the basics of the Mr Nibbles game mechanics working, its amazing how fast you can make things in Unity when you have all the assets already:

[embed]https://www.youtube.com/watch?v=j0nkTm4_028[/embed]

The two fundamental ideas I had for this game was that you couldn't ever stop running and the levels would be randomly generated. You can control the speed of Mr Nibbles by tilting the device (or using the arrow keys) but you cant actually bring him to a stop or cause him to turn around like you can in the original.

This restriction creates an interesting mechanic where you have to carefully control your speed through the air as not to land on spiders.

Speaking of spiders, I always thought they deserved a little more motion to bring them alive so now they can jump a small way out towards Mr Nibbles when he gets close:

[embed]https://www.youtube.com/watch?v=uK7EZcRagmc[/embed]

As for making the the game endless, I needed a way to proceduralally generate Mr Nibbles levels. The easiest way I could think of doing that is by breaking up levels into small sections called "chunks" and then stitching those together as the player moves along:

[embed]https://www.youtube.com/watch?v=UzrYv3AxTuM[/embed]

Chunks must have an entrance and at least one exit tho they can have multiple exits which makes for some interesting player choices:

[![2015-01-16_14-35-50](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-35-50.png)](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-35-50.png)

For now there are 26 chunks in the game and they are randomly picked as the player moves through the world. The idea is to grade these chunks by difficulty and the longer the level goes on for the harder the chunks spawned are.

[![2015-01-16_14-55-28](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-55-28-150x150.png)](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-55-28.png)[![2015-01-16_14-56-42](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-56-42-150x150.png)](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-56-42.png)[![2015-01-16_14-57-49](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-57-49-150x150.png)](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-57-49.png)[

To help with building chunks I took advantage of what I consider to be the single greatest strength of Unity, its tools customisability, to write some level building and testing tools:

[embed]https://www.youtube.com/watch?v=jBGAm1I9VP4[/embed]

After the hard work was done it was just a matter of adding a little more polish, some basic menus and sound effects and a few more game mechanics such as destructible floors and spring traps.

[embed]https://www.youtube.com/watch?v=x_NHCxBwcXQ[/embed]

So for now the game is very basic, there is no progression and nothing in the way of challenges. My thinking is if people enjoy the raw gameplay in its prototype form then I can add Jetpack Joyride style missions and more varied themes and powerups and more mechanics.

So this is where you can come in, give the game a try, see what you think and let me know by leaving a comment or emailing me at: <a href="mailto:mike.cann@gmail.com">mike.cann@gmail.com](https://www.mikecann.co.uk/wp-content/uploads/2015/01/2015-01-16_14-58-34.png)

You can download and try the desktop version here: [https://goo.gl/yDAFUm](https://goo.gl/yDAFUm)

Or you can [email me](mailto:mike.cann@gmail.com) and ill send you a link with the iOS version so you can play on your phone or tablet.
