---
title: Mikes Mirror - Hardware
categories:
  - Projects
coverImage: header.jpg
coverMeta: out
tags:
  - Mirror
  - Electron
  - React
  - Typescript
  - Woodworking
  - Hardware
  - Linux
date: 2018-04-25 14:51:40
---

So I decided to build a Smart Mirror as a hobby project. I knew that I could handle the software side of thing but building a frame and wiring the electronics up was going to be a whole new adventure.

<!-- more -->

# Parts

This is a 3 part series, find the other parts here:

1) [Mikes Mirror - Overview](/projects/mikes-mirror-overview/)
2) Mikes Mirror - Hardware
3) [Mikes Mirror - Software](/projects/mikes-mirror-software/)

# Research

So first thing I did when trying to work out how to build this thing was to look at other people's efforts. I watched hours of Youtube videos and read just about every post on the [Magic Mirror forum](https://forum.magicmirror.builders/category/12/show-your-mirror).

I recorded some of the best ones I liked in a [Trello Board](https://trello.com/b/dYbx0Zc0/smart-mirror):

[![](./trello-board.png)](./trello-board.png)

# Requirements

After doing some research I realised there were tons of different options so I would try to narrow my possibilities down a little by enumerating my requirements:

1) It must be able to fit in the little alcove near my front door:

[![](./alcove.jpg)](./alcove.jpg)

2) Ideally it will blend in with the other wooden furniture in the apartment.
3) Its a rental apartment so we cant put holes in the wall, so it must be light enough to be able to be supported by stick-on hooks.
4) It must have enough power to run Facial Recognition, Speech Recognition and a display at a decent framerate all at the same time.
5) Shouldnt cost too much

# The Computer

To smarts of the mirror I knew that I needed a computer of some sort and it had to be small and light enough that I could attach it behind the mirror.

One of the most obvious and well known choices is the Raspberry Pi. Through my research however I discovered that there were a great many other types of devices with significantly higher specs than the Pi. This great article lists 20 of them: https://www.techrepublic.com/pictures/want-a-more-powerful-raspberry-pi-choose-from-these-20-alternatives/

In the end I decided on not one but two machines. Firstly the Pine Rock64:

[![](./rock64.jpg)](./rock69.jpg)

This is a cheap ARM powered board the size of a credit card that according to reviews is significantly more powerful and more memory for the price than the Raspberry Pi 3.

I also decided to buy an Up Core, which is about 4 times as expensive at the Rock64 but is even more powerful and significantly, it runs on an Intel x86 CPU instead of an ARM CPU. This is important because I knew from past experience that there may be issues trying to get things to work on ARM powered devices. 

Projects on github tend to be written with x86 in mind and drivers tend to expect common operating systems, so with the Up Core being x86 means that I can run Ubuntu or even Windows if I want. 

# The Display

I decided early on that I wanted the display to reach all the way to the edges of the mirror. Some people mount a smaller display behind a large mirror thus giving the illusion of a large screen. 

[![](./submount.jpg)](./submount.jpg)

I was concerned however that this might be noticeable under some lighting conditions also I wanted to be able to show things in each corner of the mirror. So for me I needed to have a single large display that covered the entire mirror.

At first I considered using a touch sensitive display of some-sort but after thinking about it a little more I realised that it could be dangerous having people poking the screen on the wall when its only attached by sick-on hooks. Instead of touch I would use voice and camera as input.

I had a choice to make around whether I wanted to use a PC computer monitor or a TV. LED TVs usually start at about 32" and go all the way up. I had about 40" of space to work with in the little alcove but as mentioned before I was weight constrained and TVs tend to be heavy. 

Another factor that made me decide on a PC monitor instead of a TV was the resolution. I was concerned that because you would stand relatively close to the mirror you might notice a lower resolution (720-1080p) TV.

[![](./tvpixel.jpg)](./tvpixel.jpg)

So for those reasons I decided on a monitor. After some searching on Gumtree for 32" inch (about as big as they affordable get) displays I decided that it didnt cost that much more to buy one new. That way I could get exactly what I wanted whereas I was constantly compromising on Gumtree.

So the one I picked up in the end was [INSERT NAME OF MY DISPLAY] from Office Works:

[INSERT PICTURE OF THE DISPLAY]

Its got everything I need [INSERT LIST OF SPECS] and critically only weighed [WEIGHT] once I had taken it apart.

[INSERT PICTURE OF IT TAKEN APART]

# The Glass

Another of the key components of a Smart Mirror is the two-way glass. It functions in much the same way a pair of mirrored sunglasses work. Its reflects all light from one direction but allows light from the other direction to pass through. This means that when a pixel in the display is white then it will shine through and be visible otherwise you eye will just assume there is nothing there and see the reflection instead.

[INSERT PICTURE DEMONSTRATING THE TWO WAY EFFECT]

Just like the display I had a lot of different potential options for the glass. 

1) A pre-cut two way mirrored glass
2) A two-way laminate plastic which you can stick onto a regular piece of cit glass.
3) An acrylic two-way layer.

I decided against number 3) because I had seen examples of it where it had warped a little bit which detracted from the effect somewhat. I thought about 2) but in the end I decided it would probably be safer just to get it premade and thus save me the potential of making a mistake applying the laminate.

So option 1) it was. I ended up phoning around a whole bunch of glass supplers and recording their prices and availability on Trello:

[INSERT PICTURE OF TRELLO OF ME GLASS RESEARCHING]

In the end I chose the cheapest supplier... I should have known that something was up when they quoted me half the price of all the others... 

About a week later I got a call saying that the glass was ready for me to come pick up, so I excitedly hopped in the car and drove the 30 minutes to pick it up. It was wrapped up so I didnt get to check it out until I got home:

[INSERT PICTURE OF THE FIRST GLASS]

At first I was impressed, then I turned it over and realised that it was mirrored on BOTH SIDES. Doh! I gave them a call and explained to them that when I asked for a "two way mirrored glass" I didnt mean it was mirrored on both sides... They tried to argue with me for a while, I even quoted the definition of "two way mirror" to them:

[INSERT QUOTE OF TWO WAY MIRROR HERE]

In the end they relented and decided to give me a refund. Sigh. 

So now I was onto the next cheapest supplier. I placed an order and a week later I went to collect it. I got it home and unpacked it to discover it looked great:

[INSERT PICTURE OF THE SECOND MIRROR]

Except for that engraved logo at the bottom of the mirror.. FFS! I cant have that on a mirror that is supposed to have a display shining through!

I called them up and they explained that it was common practice for them to engrave on all their "safety glass". Well as I wasnt aware of that fact and it wasnt mentioned to me on their website or anything they agreed to cut me another piece and not engrave it this time.

So another week goes by and I finally pick up a piece of glass that is actually "two-way" and doesnt have an engraved logo on it, huzzah!

# Building the Frame

Okay now I have the display and the glass I can finally start the part that was concerning me most, the wooden frame that contains them.

I was concerned because I had very little experience with woodworking and had virtually no tools. So after watching a few more videos of people making wooden mirror frames I thought I had a basic idea of how I was going to put it together.

[INSERT A PICTURE OF HOW I PLANNED THE FRAME]

It was basically going to be make in two parts which I was then going to glue together. According to the videos I had watched, woodglue was apparently really strong and up to the task of keeping it all together. 

So off to Bunnings I went and picked up bunch of tools and wood and got to work on the frame. 

First I cut 4 bits of wood for the box part of the frame:

[INSERT PICTURES OF ME CUTTING THE WOOD FOR THE BOX]

I joined them together with some nails and glue. 

Then I cut some more pieces for the front part of the frame and started to glue them to the box:

[INSERT PICTURES OF ME GLUEING THEM TO THE BOX]

Things were going well.. that was until I noticed that I had a slight overlap issue:

[INSERT PICTURE OF THE OVERLAP ISSUE]

Unfortunately I didnt have any more spare wood so I decided that it was something that I could fix with sandpaper... lots of sandpaper:

[INSERT THE CORNER FIXED]

Hey presto! Its fixed :) Its a little thinner on one side but you cant really notice it unless you are looking. 

One other problem. I didnt do a very good job sawing the 45 degree angles for the front of the frame. This was definately a problem as that was a part you were going to be looking at all the time so that gap really detracted from the quality of the frame.

It was at that point that Kelsie's dad introduced me to the wonders of wood putty:

[INSERT WOOD PUTTY FRAME]

Huzzah! Problem sovled, just a little more sandpaper and you couldnt tell my rookie mistake was made. 

Next up I needed to cut out holes for the speakers for the frame.

[SHOW HOLES CUT OUT FOR THE SPEAKERS]

To be honest, the speakers are on of the main reasons for the mirrors thickness. I think if I was to do it again I might rethink where I place the speakers so that I can try to make the mirror a little thinner.

[SHOW ANOTHER PICTURE OF THE MIRROR WITH SPEAKERS]

So now the frame is done its on to staining it to the same colour as the rest of the furniture in the apartment.

[SHOW A PICTURE OF THE STAINING]

[SHOW A PICTURE OF THE CORNER]

Hey its starting to look quite good, now I just have to worry about assembling it all and attaching it to the wall.

# Assembly

Now I had all the parts I started to assemble them together.

First I laid down the glass mirror side down, then placed the display ontop of it:

[SHOW THE MIRROR AND DISPLAY PIC]

I then attached the speakers and the display control board using double sided padded tape. Then wired it all up.

[SHOW IT ALL WIRED UP]

If you look closely in the above picture you can see that I use angled brackets to hold the display in place and stop it from moving around when I put it on the wall. These are screwed into the wood in a way which meant it would be tricky to remove.

I also screwed in two hooks which I then fastened a piece of yellow string between, this part was suprisingly tough to do. Because I used nylon string it kept stretching and going slack. I wish I knew more about knots, perhaps some sort of self-tightening knot would have done it?

I then grabbed a HDMI cable and attached the Up Core to it and powered it on..

[SHOW A PICTURE OF IT UPSIDOWN]

It works! But its upsidown.. Whoops! Now that I had screwed everything in, it wasnt really going to be feesable to unscrew it and turn it around. I didnt want to risk splittig the wood.

Fortunately I was able to change it in software so all is not lost, onwards!

# Attaching to the Wall

Now this was the bit that had me the most worried in the entire project. 

Because its a rental we werent allowed to put nails or screws in the wall so I had to do the whole thing with adhesive wallhooks. 

I whipped out the scales. The whole thing weighed 10.5 kgs which meant I would need 4 of the strongest adhesive hooks I could find at bunnings:

[SHOW PICTURE OF THE WALL HOOKS FROM BUNNINGS]

After a bit of help from Kelsie we finally managed to get it up on the wall and it held!

[SHOW IT UP ON THE WALL]

We decided it was probably a good idea to leave it there over night to make sure that it was going to hold before doing anything else. 

[SHOW IT WIH PILLOWS UNDERNEATH]

Needless to say we werent sure it was going to work.

# Final Touches

Phew! It survived the night and that means we are on the home stretch, just a coupple more things. I attached the Up Core board to the back using some more padded doubble sided tape to prevent shorts.

[SHOW UP CORE ATTACHED]

I then put it back on the wall and noticed that the wires looked kind of messy:

[SHOW CROPPED PART OF THE FRAME WITH MESSY WIRES]

So I picked up some cable tidies from ebay

[SHOW CABLE TIDIES]

Ahh much better, looking good! Now I just have to make the software work. As a professional software developer that should be easy.. right?

# Conclusions

So it turns out, woodworking is actually much harder than I had expected. It seems that being good at making software doesnt automatically translate to being good at hardware, who would have thought it! 

I made plenty of mistakes but im actually really happy with the result. I dont expect it to last a million years like a Ron Swanson crafted masterpiece but it does the job and doesnt look too out of place with the rest of the furniture :)

# Moar!

This is a 3 part series, find the other parts here:

1) [Mikes Mirror - Overview](/projects/mikes-mirror-overview/)
2) Mikes Mirror - Hardware
3) [Mikes Mirror - Software](/projects/mikes-mirror-software/)