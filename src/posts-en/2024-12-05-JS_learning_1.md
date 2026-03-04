---
layout: post
title: "Front-end study notes 1 JavaScript basics"
date: 2024-12-05
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

This note mainly learns the basic knowledge of JavaScript. It is referenced from [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/1-data-types/translations/README.zh-cn.md)
<!-- more -->
## 0 Preface
I have learned some C before, and the one I am more familiar with now is python, so this lesson plan note is mainly based on the author's existing python knowledge for category learning.

## 1 Variables and Constants
It seems that the knowledge related to constants was not involved in my past studies, but in JavaScript, there are concepts of both variables and constants, so special attention is needed here.### 1.1 Variables
Variables are the same as in Python and other languages. To create and declare variables, you can use `let` or `var`. I feel that `var` is more common, but in the lesson plan, `let` is more advocated.
~~~
let a;
~~~
This completes the declaration of a variable. In addition, it can also be assigned a value:
~~~
a=1;
~~~
Since it is a variable, we can assign it multiple times to continuously change the value stored in the variable.
~~~
a=2;
~~~
You can also assign values when initializing variables:```
let a=2;
```### 1.2 Constants
The concept opposite to variables is constants. Constants can only be assigned a value once and will not change after initialization.
~~~
constPI=3.14
~~~
Use const for initialization. It cannot be changed after assignment. Constants are generally in all uppercase letters.
In constants, the object is protected, but the value of the object's key-value pair is not protected:
~~~
const obj = { a: 3 };
obj = { b: 5 } // error report
~~~```
const obj = { a: 3 };
obj.a = 5;  // 允许
```## 2 Data type
JavaScript has six basic data types: string, number, bigint, boolean, undefined and symbol
In python, they seem to be str, int, float, list, dict, bool, etc. Compared with Javascript, the last four common data types in JS are relatively unfamiliar and need to be relearned.

### 2.1 Value
For numerical values, it seems that there is no distinction between integers and floating points like other languages.
| Symbol | Description | Example |
|---|---|---|
| + | Addition: Calculates the sum of two numbers | 1 + 2 // The result is 3
| - | Subtraction: Calculates the difference between two numbers | 1 - 2 // The result is -1
| * | Multiplication: Calculates the product of two numbers | 1 * 2 // The result is 2
| / | Division: Calculate the quotient of two numbers | 1 / 2 // The result is 0.5
| % | Remainder: Calculate the remainder when dividing two numbers | 1 % 2 // The result is 1

### 2.2 String
Strings include single quotes and double quotes (it seems that json and yaml have different requirements for single and double quotes, I can’t remember...)`"this is a str"`, `"this is a str"` are both strings
Like python, string concatenation can be achieved using `+`
example:
~~~
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
~~~
Templating is another important aspect of strings. It is implemented in python in the following form:
~~~
a='hello'
b='world'
c=f"{a},{b}!"
~~~
The end result is `hello, world!`
In JavaScript, the dollar sign `$` is used as the formatter:
~~~
let myString1 = "Hello";
let myString2 = "World";`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
~~~
### 2.3 Boolean value
Like python, there are only two values: `true` or `false`

If a variable evaluates to true, we call it truthy. An interesting thing is that in JavaScript, all values ​​are true unless they are defined as falsy.
## 3.Others
It seems that the following data types are not mentioned in the lesson plan, maybe because they are not very important, hahaha