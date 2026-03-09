---
layout: post
title: "Frontend Learning Notes 2: Functions in JavaScript"
date: 2024-12-05
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2024-12-05-JS_learning_2
source_lang: zh
source_title: "前端学习笔记2 JavaScript中的函数"
title_key: course_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.180Z"
source_hash: fcaaf84d9f524297df6974580efbe5d628457d3e90a2a7f55b6386b63a250517
---

This note primarily focuses on the function section of JavaScript basics, including explicit functions and implicit functions, referencing [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/2-functions-methods/translations/README.zh-cn.md)
<!-- more -->

## 0 Introduction
I previously learned some C, and the one I'm slightly more familiar with is Python. Therefore, this lesson note is mainly based on the author's existing Python knowledge for category learning.

## 1 Creating and Calling Functions
Function creation in Python is done using `def`, while in JavaScript it's mainly defined through `function`:
~~~
function nameOfFunction() { // Function definition
 // Function definition / Function body
}
~~~
Note that unlike Python's strict indentation requirements, JavaScript requires function bodies to be enclosed in curly braces.

For example:
```
function displayGreeting() {
  console.log('Hello, world!');
}
```
Calling the function is simply `functionName()`:
~~~
// Calling our function
displayGreeting();
~~~

When naming functions, the lesson recommends using camelCase and descriptive naming, with specific functions handling specific tasks.

## 2 Passing Parameters
Like Python, parameters are added within the function's parentheses in JavaScript:

In Python:
~~~
def hello_world(param, param2):
    print(f"{param},{param2}!")
    pass
~~~
In JavaScript:
~~~
function HelloWorld(param, param2){
    str_total="${param},${param2}!";
    console.log(str_total);
}
~~~
Function calls are similar.

## 3 Default Values and Return Values
Default values work the same as in Python, with assignments added during parameter passing:

In Python:
~~~
def hello_world(param='hello', param2='world'):
    print(f"{param},{param2}!")
    pass
~~~
In JavaScript:
~~~
function HelloWorld(param='hello', param2='world'){
    str_total="${param},${param2}!";
    console.log(str_total);
}
~~~
Calling the function is the same in both JavaScript and Python:
~~~
HelloWorld("Hello","june");
~~~
__Remember to add semicolons! ! ! ! ! !__

Returns are largely consistent with Python, requiring only a `return` statement. However, when assigning return values, use `const` or similar declarations:
~~~
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}

const greetingMessage = createGreetingMessage('Christopher');
~~~

## 4 Passing Functions as Parameters
For `setTimeout`, it initiates a timer that executes code after a delay. We need to inform it what code to execute, which is precisely what functions are for!

If you run the code below, you'll see the message `3 seconds have passed` after three seconds:
```
function displayDone() {
  console.log('3 seconds have passed');
}
// Timer units are in milliseconds
setTimeout(displayDone, 3000);
```
An anonymous function embeds the function definition directly into the parameter passing to simplify code complexity:
~~~
setTimeout(function() {
  console.log('3 seconds have passed');
}, 3000);
~~~
You can further simplify it using the arrow `=>`:
~~~
setTimeout(() => {
  console.log('3 seconds have passed');
}, 3000);
~~~
