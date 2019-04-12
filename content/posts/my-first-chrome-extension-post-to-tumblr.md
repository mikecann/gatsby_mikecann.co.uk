---
title: My First Chrome Extension - "Post To Tumblr"
tags:
  - chrome
  - extension
  - HTML
  - Javascript
  - json
  - Personal
  - Plugin
  - Project
  - tumblr
url: 1392.html
id: 1392
categories:
  - Post To Tumbr
  - Uncategorized
date: 2010-10-14 20:02:33
---

[![](https://mikecann.co.uk/wp-content/uploads/2010/10/Shot_002.png "Shot_002")](https://mikecann.co.uk/wp-content/uploads/2010/10/Shot_002.png)

Mummy wow! Im a big boy now! I have just published my first Chrome extension.

<!-- more -->

It was really annoying me that when I found a funny cat or some other silly image I would have to go through a whole ball-ache process to get that image on [my Tumblr account](https://mikeysee.tumblr.com).

What I really wanted was some right-click-post action going on and wondered why no one had one it yet. So with an hour or so to spare I whipped this extension up really quick.

It uses the Chrome 6 Context Menu API so you obviously need to have Chrome 6 to be able to use it.

Currently it only posts images as that's all I needed for now but if enough people want more then ill whip out the other data types.

The source couldn't be any simpler really, infact this is it here:

[codesyntax lang="javascript" lines="normal" blockstate="expanded"]

<pre>chrome.contextMenus.create({"title": "Post Image To Tumblr", "contexts":["image"], "onclick": postImage});

function postImage(info, tab)
{
	var email = localStorage["tumblr_email"];
	var password = localStorage["tumblr_pass"];

	if(!email || email=="" || !password || password=="")
	{
		alert("Need to set your Tumblr username and password in the options before posting!");
	}
	else
	{
		var o =
		{
			"email":email,
			"password":password,
			"type":"photo",
			"source":info.srcUrl
		};

		var success = function(data,textStatus,request)
		{
			if(textStatus=="success"){ alert("Image posted to Tumblr. Image -&gt; "+info.srcUrl); }
			else { alert("Bad email or password"); }
		}

		$.post("https://www.tumblr.com/api/write",o, success);
	}
}</pre>

[/codesyntax]

Simples!

Theres even an option page where you put in your Tumblr details:

[![](https://mikecann.co.uk/wp-content/uploads/2010/10/Shot_003.png "Shot_003")](https://mikecann.co.uk/wp-content/uploads/2010/10/Shot_003.png)

Oh, there is one issue.

No matter what I tried I couldn't manage to get the Tumblr API to return an error. So if you enter your username or password incorrectly it still reports success, not entirely sure why, if someone knows I would love to hear why!

Interested? You can go grab it over on the chrome extensions gallery page -&gt; [HERE](https://chrome.google.com/extensions/detail/dbpicbbcpanckagpdjflgojlknomoiah?hl=en)
