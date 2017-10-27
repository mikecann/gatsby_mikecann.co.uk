---
title: URI Parser For HaXe
tags:
  - chromecrawler
  - Code
  - haxe
  - Javascript
  - parse
  - tips
  - uri
id: 1538
categories:
  - Chrome Crawler
  - HaXe
  - Programming
  - Projects
date: 2011-04-11 21:01:51
---

Continuing on my [theme of the moment haXe](https://mikecann.co.uk/programming/haxe/haxe-jqueryextern-gotcha/), I have another post  regarding the development of my haXe rewrite of  [ChromeCrawler](https://mikecann.co.uk/personal-project/chrome-crawler-v0-4-background-crawling-more/).

I was in need of a way to split a URL into its various parts. To do this in previous versions of ChromeCrawler I used a[ ready built one I found on the web](https://blog.stevenlevithan.com/archives/parseuri).

I thought it should be a fairly simple matter to port this to haXe, unfortunately however this wasn't the case. The problem was that haXe, unlike JS, doesnt have the exec() method on its regular expression function. What this meant is that the URL couldnt be split in the same way.

Confused I jumped on the haXe IRC, unfortunately the solutions the kind people there provided didnt work. Instead I posted a message on the mailing list and within a few hours I had my answer. The solution was to use EReg.match() then EReg.matched() to get each part.

Anyways, I promised to share the code when I was done so here it is:

[codesyntax lang="javascript"]
<pre>package utils;
import haxe.Http;

/**
 * ...
 * @author mikecann.co.uk
 */

class URLParser
{
	// Publics
	public var url : String;
	public var source : String;
	public var protocol : String;
	public var authority : String;
	public var userInfo : String;
	public var user : String;
	public var password : String;
	public var host : String;
	public var port : String;
	public var relative : String;
	public var path : String;
	public var directory : String;
	public var file : String;
	public var query : String;
	public var anchor : String;

	// Privates
	inline static private var _parts : Array&lt;String&gt; = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];

	public function new(url:String)
	{
		// Save for 'ron
		this.url = url;

		// The almighty regexp (courtesy of https://blog.stevenlevithan.com/archives/parseuri)
		var r : EReg = ~/^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?://)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(d*))?)(((/(?:[^?#](?![^?#/]*.[^?#/.]+(?:[?#]|$)))*/?)?([^?#/]*))(?:?([^#]*))?(?:#(.*))?)/;

		// Match the regexp to the url
		r.match(url);

		// Use reflection to set each part
		for (i in 0..._parts.length)
		{
			Reflect.setField(this, _parts[i],  r.matched(i));
		}
	}

	public function toString() : String
	{
		var s : String = "For Url -&gt; " + url + "n";
		for (i in 0..._parts.length)
		{
			s += _parts[i] + ": " + Reflect.field(this, _parts[i]) + (i==_parts.length-1?"":"n");
		}
		return s;
	}

	public static function parse(url:String) : URLParser
	{
		return new URLParser(url);
	}
}</pre>
[/codesyntax]

So for example the following use:

[codesyntax lang="javascript"]
<pre>trace(new URLParser("https://www.mikecann.co.uk/programming/haxe/haxe-jqueryextern-gotcha?somevar=1242#home"));</pre>
[/codesyntax]

Will print the following:

[codesyntax lang="text"]
<pre>For Url -&gt; https://www.mikecann.co.uk/programming/haxe/haxe-jqueryextern-gotcha?somevar=1242#home
source: https://www.mikecann.co.uk/programming/haxe/haxe-jqueryextern-gotcha?somevar=1242#home
protocol: http
authority: www.mikecann.co.uk
userInfo: undefined
user: undefined
password: undefined
host: www.mikecann.co.uk
port: undefined
relative: /programming/haxe/haxe-jqueryextern-gotcha?somevar=1242#home
path: /programming/haxe/haxe-jqueryextern-gotcha
directory: /programming/haxe/haxe-jqueryextern-gotcha
file:
query: somevar=1242
anchor: home</pre>
[/codesyntax]

Simples!

Im not sure how performant the reflection usage would be on the various platforms haXe targets but atleast it would work and its fairly elegant to boot ;)

Edit: Thank you Adrian Cowen for posting this as a haXe snippet: [https://haxe.org/doc/snip/uri_parser](https://haxe.org/doc/snip/uri_parser)