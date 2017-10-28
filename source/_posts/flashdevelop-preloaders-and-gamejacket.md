---
title: 'FlashDevelop, Preloaders and GameJacket'
url: 247.html
id: 247
categories:
  - Actionscript
  - Programming
date: 2008-06-11 15:53:03
tags:
---

This is a clone of the post i made on the GameJacket developer forums here: [https://gamejacket.com/forum/topic.asp?TOPIC_ID=59](https://gamejacket.com/forum/topic.asp?TOPIC_ID=59) but i think it deserves a re-post here so it can be googled :)
<!-- more -->
&nbsp;<span class="spnMessageText" id="msg">As i had quite abit of trouble getting GameJacket to fit into my work flow properly and have no finally managed it I have decided to share my experiences and write a tutorial.

So this is a tutorial for using FlashDevelop with the Flex Complier to build a game with a pre-loader that passes the GameJacket security checks.</span>

<span class="spnMessageText" id="msg"><!--more-->

Firstly i assume you have downloaded and installed Flash Develop successfully (if you havent grab it from here [https://www.flashdevelop.org/community/viewforum.php?f=11&amp;sid=322bc6ebe846fdaba31f86627ac2c3ac](https://www.flashdevelop.org/community/viewforum.php?f=11&amp;sid=322bc6ebe846fdaba31f86627ac2c3ac) and follow the install instructions). And i assume you have downloaded the GameJacket developer pack.

Next lets setup a project to work in:

![](../../../../../flash/GameJacketTutorial/01.png)

Now we have our project setup lets add a little code into the in our Main.as which will represent our game:

</span>

package 

{

&nbsp;&nbsp;&nbsp; import flash.display.Bitmap;

&nbsp;&nbsp;&nbsp; import flash.display.Sprite;

&nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; public class Main extends Sprite

&nbsp;&nbsp;&nbsp; {

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; [Embed(source = &quot;cat.gif&quot;)]

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; public var Cat:Class;

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; public function Main():void

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {&nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; var bm : Bitmap = Bitmap(new Cat());

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; addChild(bm);

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }

&nbsp;&nbsp;&nbsp; }

}

<span class="spnMessageText" id="msg">You will obviously replace this with your actual game code but for the purposes of this tutorial the game consists of a very large picture of a cat. 

Try running this now, as you should expect there is our &quot;game&quot; up and running.

The next step is to add the GameJacket security code. To do this lets add a new class to the project and call it GJCheck.as:

![](../../../../../flash/GameJacketTutorial/02.png)

Now we are going to fill this with the same code as there is in the &quot;main.as&quot; of the AS3 folder of the GameJacket Developer Pack:</span>

package 

{

&nbsp;&nbsp;&nbsp; import flash.display.Sprite;

&nbsp;&nbsp;&nbsp; import flash.display.LoaderInfo;

&nbsp;&nbsp;&nbsp; import flash.events.Event;

&nbsp;&nbsp;&nbsp; import flash.text.TextField;

&nbsp;&nbsp;&nbsp; import flash.text.TextFieldAutoSize;

&nbsp;&nbsp;&nbsp; public class GJCheck extends Sprite 

&nbsp;&nbsp;&nbsp; {

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; public var GameJacketSec : GameJacketAS3 = new GameJacketAS3();

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; public function GJCheck() 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; // Setup and run GameJacket Security Code

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; // GameJacketAS3.as file must be in the same folder as your fla when publishing

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; GameJacketSec.setVariables(LoaderInfo(this.root.loaderInfo));

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; // Add Event Listeners so we know the outcome of the security checks

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; GameJacketSec.addEventListener(&quot;GameJacketPass&quot;, securityOK);

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; GameJacketSec.addEventListener(&quot;GameJacketFail&quot;, securityError);&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; private function securityOK(e:Event):void

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; // Remove the event listeners

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; GameJacketSec.removeEventListener(&quot;GameJacketPass&quot;, securityOK);

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; GameJacketSec.removeEventListener(&quot;GameJacketFail&quot;, securityError);&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; private function securityError(e:Event):void

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; // Remove the event listeners

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; GameJacketSec.removeEventListener(&quot;GameJacketPass&quot;, securityOK);

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; GameJacketSec.removeEventListener(&quot;GameJacketFail&quot;, securityError);

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; // This function will run if the game does not pass the security checks

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; var tf : TextField = new TextField();

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; tf.text = &quot;An error has occured please contact: you@webmaster.com&quot;;

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; tf.autoSize = TextFieldAutoSize.CENTER;&nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; tf.x = (stage.stageWidth / 2)-(tf.textWidth/2);

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; tf.y = stage.stageHeight / 2;

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; addChild(tf);&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }

&nbsp;&nbsp;&nbsp; }

}

<span class="spnMessageText" id="msg">   As you can see this is just the standard Game Jacket security check code but with a little more helpful message if the the security check fails.

Now this is in we need to make sure that this is our new &quot;document&quot; class for the game, to do this in FlashDevelop right-click GJCheck.as and select always compile:

![](../../../../../flash/GameJacketTutorial/03.png)

Now you can test run your game again and unsurprisingly you should be presented with &quot;An error has occured please contact: [you@webmaster.com](mailto:you@webmaster.com)&quot;, this is because your game hasnt been uploaded to the GameJacket website yet and hasnt been approved. 

To get around the security check and make the rest of this tutorial possible change the constructor in GJCheck.as to add this line:

</span>

public function GJCheck() 

{

&nbsp;&nbsp;&nbsp; ...&nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; securityOK(null); // Dont forget to remove this line before submitting to GJ

}

&nbsp;

<span class="spnMessageText" id="msg">   Also add this line so that when the security succeeds we start the Preloader:

</span>

private function securityOK(e:Event):void

{

&nbsp;&nbsp;&nbsp; ...

&nbsp;&nbsp;&nbsp; 

&nbsp;&nbsp;&nbsp; // Start the preloader

&nbsp;&nbsp;&nbsp; addChild(new Preloader());&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 

}

<span class="spnMessageText" id="msg">   And now add a new class to the project and call it Preloader.as and make it extend Sprite. Before we write the code for the preloader we need to setup flash develop so that it compiles our game into the second frame of the Flash Movie, this way our preloader can sit on the first frame and monitor the loading progress of the second frame.

To do this we need to change add some additional compiler options to the flex compile line. To do this right click the project in the project explorer and select properties then go to the compiler options tab and enter &quot;-frame two Main&quot; in the Additional Compiler Options box:

![](../../../../../flash/GameJacketTutorial/04.png)

Now our preloader should be loaded by flash first and then the game second.

Next we just have to flesh out the preloader, i have omitted the code here but you can view all the code in the source provided in this turorial.

And thats all there is to it, you can now test out your game, if you do test it locally you probablly wont see any loading progress as it loads too fast, but if you upload it to the web somewhere you will see the loading percent tick up and then finally you will be presented with a start button to start the game!

![](../../../../../flash/GameJacketTutorial/05.png)

**!!DONT FORGET!!** Dont forget to remove the &quot;securityOK(null);&quot; in the GJCheck constructor before you try to upload to GameJacket or else you will pass the security check every time when you are supposed to fail. 

Download project source code: [https://www.mikecann.co.uk/flash/GameJacketTutorial/GameJacketProject.zip](../../../../../flash/GameJacketTutorial/GameJacketProject.zip)</span>