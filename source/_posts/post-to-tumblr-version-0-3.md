---
title: Post To Tumblr Version 0.3
tags:
  - browser
  - chrome
  - extension
  - Javascript
  - notification
  - Plugin
  - Update
  - upgrade
  - version
  - Video
url: 1422.html
id: 1422
categories:
  - Post To Tumbr
date: 2010-10-31 11:04:26
---

[![](https://mikecann.co.uk/wp-content/uploads/2010/10/Shot_004.png "Shot_004")](https://mikecann.co.uk/wp-content/uploads/2010/10/Shot_004.png)

Just made a quick little update to my chrome extension "Post To Tumblr".
<!-- more -->
In this update I finally worked out how to catch bad username or password returns from the Tumbr API. Basically it just involved me using the ajax rather than the post jQuery function and using "async:false" like so:

[codesyntax lang="javascript"]
<pre>$.ajax({
		  url: 'https://www.tumblr.com/api/write',
		  type: 'POST',
		  data:o,
		  async: false,
		  complete: function(transport)
		  {
				if(transport.status == 200 || transport.status == 201)
				{
					 postingNote.cancel();
					 var postedNote = webkitNotifications.createNotification('images/icon48.png', "Image Posted!", info.srcUrl);
					 setTimeout(function() { postedNote.cancel(); }, 5000);
					 postedNote.show();
				}
				else if(transport.status == 403)
				{
					postingNote.cancel();
					var errorNote = webkitNotifications.createNotification('images/icon48.png', "Posting Error!", "Bad email or password");
					setTimeout(function() { errorNote.cancel(); }, 5000);
					errorNote.show();
				}

			}
		 });</pre>
[/codesyntax]

In addition I have added some notifications to indicate when the extension is doing something.

I have made a little demo video below to show this off:

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="700" height="550" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="https://www.youtube.com/v/Rr7JxuUmZt8?fs=1&amp;hl=en_GB&amp;rel=0" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="700" height="550" src="https://www.youtube.com/v/Rr7JxuUmZt8?fs=1&amp;hl=en_GB&amp;rel=0" allowscriptaccess="always" allowfullscreen="true"></embed></object>

Chrome should auto update for you. If you dont have the extension yet [head over to the extension gallery to grab it now](https://chrome.google.com/extensions/detail/dbpicbbcpanckagpdjflgojlknomoiah)!