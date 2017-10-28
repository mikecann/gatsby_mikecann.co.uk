---
title: Windows Taskbar Monitor v0.3
url: 1646.html
id: 1646
categories:
  - 'C#'
  - Programming
  - Taskbar Monitor
date: 2011-10-01 10:02:07
tags:
---

[![](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_01.png "Shot_01")](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_01.png)

I have just pushed a few small changes to one of my projects, [Windows Taskbar Monitor](https://code.google.com/p/win7-taskbar-mon/).

One of the users of the app noted that they find it rather annoying having the animated progress bars and asked whether it would be possible to add an option to disable it. I agreed that it could get a little distracting so I added the option to disable the bars.
<!-- more -->
While I was there I also added a couple of command line arguments to the app so that you could configure each instance from a shortcut.

&nbsp;

The options are:

**-bars [true/false]**

This tells the app to startup with the bars enabled or not, the default is true.

**-type [cpu/mem/net]**

This tells which of the three monitors the app should start up with, cpu, memory or network.

&nbsp;

One way to get all three to start with different monitors when windows startup would be to use the statup folder in windows.

**1) Click the windows start icon, then right click on "all programs" and click open:**

[![](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_04.png "Shot_04")](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_04.png)

**2) Navigate to Programs &gt; Startup then make three shortcuts to Windows Taskbar Monitor v0.3 you can rename the shortcuts if you like:**

[![](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_05.png "Shot_05")](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_05.png)

**3) For each shortcut, right click and select properties:**

[![](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_06.png "Shot_06")](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_06.png)

**4) Now enter your command line arguments in the Target field after the final .exe:**

[![](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_07.png "Shot_07")](https://mikecann.co.uk/wp-content/uploads/2011/10/Shot_07.png)

&nbsp;

Et voilà when windows starts you should now have three different monitors opening!

I have pushed all the source code and the new binary files to my google code project: [https://code.google.com/p/win7-taskbar-mon/](https://code.google.com/p/win7-taskbar-mon/)

Enjoy!

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;