---
layout: post
title: "Front-end study notes 2 Functions in JavaScript"
date: 2024-12-05
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

This note mainly studies the function part of the basic knowledge of JavaScript, including explicit functions and implicit functions. It is referenced from [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/2-functions-methods/translations/README.zh-cn.md)
<!-- more -->

## 0 Preface
I have learned some C before, and the one I am more familiar with now is python, so this lesson plan note is mainly based on the author's existing python knowledge for category learning.## 1 Create and call functions
The creation of functions is implemented using def in python, and in js it is mainly defined through function:
~~~
function nameOfFunction() { // function definition
 // Function definition / Function body
}
~~~
It should be noted that since indentation is not strictly required in python, the function body needs to be enclosed in curly brackets in js.

For example:```
function displayGreeting() {
  console.log('Hello, world!');
}
```To call, you only need `function name()`:
~~~
// call our function
displayGreeting();
~~~

When naming functions, the lesson plan recommends using camel case naming, descriptive naming, and specific functions to do specific things.
## 2 Passing parameters
Just like Python, when passing parameters, you just need to add the parameters in the parentheses of the function.

In python:
~~~
def hello_world(param,param2):
    print(f"{param},{param2}!")
    pass
~~~
And in JavaScript:
~~~
function HelloWorld(param,param2){
    str_total="${param},${param2}!";
    console.log(str_total);
}
~~~
Same as calling functions
## 3 Default value and return value
The default value is the same as python, just add the assignment when passing parameters.In python:
~~~
def hello_world(param='hello',param2='world'):
    print(f"{param},{param2}!")
    pass
~~~
And in JavaScript:
~~~
function HelloWorld(param='hello',param2='world'){
    str_total="${param},${param2}!";
    console.log(str_total);
}
~~~
When called, JavaScript is the same as python:
~~~
HelloWorld("Hello","june");
~~~
__Remember to put the semicolon!!!!!!!!!__

Return is basically the same as python. You only need to add a return. However, when assigning the return value, remember to declare it using `const` or other methods.
~~~
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}const greetingMessage = createGreetingMessage('Christopher');
~~~
## 4 Pass the function into the function as a parameter
For setTimeout, it starts a timer and executes the code when the countdown ends. We need to tell it what code we want it to execute. This sounds like exactly what a function should do!

If you execute the code below, you will see the message `3 seconds passed` after three seconds:```
function displayDone() {
  console.log('3 秒过去了');
}
// 计时器的时间单位是毫秒
setTimeout(displayDone, 3000);
```The so-called anonymous function is embedded in the parameter passing process during the above-mentioned function definition to simplify the code complexity:
~~~
setTimeout(function() {
  console.log('3 seconds passed');
}, 3000);
~~~
You can also use the arrow `=>` to simplify `function`
~~~
setTimeout(() => {
  console.log('3 seconds passed');
}, 3000);
~~~