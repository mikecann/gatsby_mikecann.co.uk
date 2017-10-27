---
title: Fixing Unity's Internal Compiler Error
id: 4987
categories:
  - 'C#'
  - Programming
  - Unity
date: 2014-05-13 05:25:14
tags:
---

As mentioned in my [last post](https://www.mikecann.co.uk/personal-project/parse-com-type-safe-extensions-for-unity/), I am working on a Unity game that takes advantage of [Parse](https://parse.com) for Asyncronous multiplayer. Well one nice feature of parse is that it uses Tasks to handle its asynchronicity.

[Tasks](https://www.parse.com/docs/unity_guide#tasks) are very much like JS promises (except they are type-safe) and return when the operation has completed. For example:

[code lang="csharp"]
obj.SaveAsync().ContinueWith(task =&gt;
{
    if (task.IsCanceled)
    {
        // the save was cancelled.
    }
    else if (task.IsFaulted)
    {
        AggregateException exception = task.Exception;
    }
    else
    {
        // the object was saved successfully.
    }
});
[/code]

You can chain tasks together like so:

[code lang="csharp"]
var query = new ParseQuery&lt;ParseObject&gt;(&quot;Student&quot;)
    .OrderByDescending(&quot;gpa&quot;);

query.FindAsync().ContinueWith(t =&gt;
{
    var students = t.Result;
    IEnumerator&lt;ParseObject&gt; enumerator = students.GetEnumerator();
    enumerator.MoveNext();
    var student = enumerator.Current;
    student[&quot;valedictorian&quot;] = true;
    return student.SaveAsync();
}).Unwrap().ContinueWith(t =&gt;
{
    return query.FindAsync();
}).Unwrap().ContinueWith(t =&gt;
{
    var students = t.Result;
    IEnumerator&lt;ParseObject&gt; enumerator = students.GetEnumerator();
    enumerator.MoveNext();
    enumerator.MoveNext();
    var student = enumerator.Current;
    student[&quot;salutatorian&quot;] = true;
    return student.SaveAsync();
}).Unwrap().ContinueWith(t =&gt;
{
    // Everything is done!
});
[/code]

The problem is that if you want to catch errors you must manually check the task return for errors inside each handler. This seemed wasteful to me as all I wanted was a global error handler for that particular task chain, such as can be achieved with [Javascript Promises](https://www.parse.com/docs/js_guide#promises-errors).

Fortunately someone else also had noticed this problem and [solved it](https://www.rizalalmashoor.com/blog/exception-handling-wrappers-for-taskcontinuewith/):

[code lang="csharp"]
Task.Factory.StartNew(StartBusyIndicator)
	.Then(task =&gt; GetWebResponseAsync(url))
	.Then(task =&gt; Console.WriteLine(task.Result.Headers))
	.Finally(ExceptionHandler, StopBusyIndicator);
[/code]

The only problem is that when I tried to implement his C# library Unity started throwing the dreaded Internal Compiler Error:

> **Internal compiler error. See the console log for more information. output was:**> 
> ** Unhandled Exception: System.ArgumentNullException: Argument cannot be null.**

It took me a while to work out what was going on. I managed to simplify the entire problem down to this simple example:

[code lang="csharp"]
public static class TaskHelpers
{
	public static void Then&lt;TIn&gt;(this Task&lt;TIn&gt; task, Action&lt;Task&lt;TIn&gt;&gt; next)
	{
		task.ContinueWith(t =&gt;
		{		
		});    
	}
}
[/code]

I posted about this on the [Unity forum](https://forum.unity3d.com/threads/242919-Internal-compiler-error) on Parse's Forum and even on Parse's bug tracking system but no one was interested, Parse even told me its not a Parse issue. 

It took me quite a while to work out what was going on, but I eventually worked out that if I separated the handler from the Continue With call it would work:

[code lang="csharp"]
public static class TaskHelpers
{
	public static void Continue&lt;TIn&gt;(this Task&lt;TIn&gt; task, Action&lt;Task&lt;TIn&gt;&gt; next)
	{
		Action&lt;Task&gt; a = t =&gt; { };
		task.ContinueWith(a);    
	}
}
[/code]

Huzzah! It compiles. So I guess this is a lesson learnt. With the Unity Mono compiler, if you are getting Internal Compiler errors then perhaps try separating out the lambdas into variables.