---
layout: post
title: "Frontend Learning Notes 1: JavaScript Basics"
date: 2024-12-05
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2024-12-05-JS_learning_1
source_lang: zh
source_title: "前端学习笔记1 JavaScript基础"
title_key: course_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.173Z"
source_hash: a0bacd44bc34c86606f87b14942b959e910f68de7f9408b67b11b723a40c1db7
---

This note primarily focuses on JavaScript fundamentals, referencing [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/1-data-types/translations/README.zh-cn.md)
<!-- more -->
## 0 Preface
Previously, I learned some C, and the language I am more familiar with now is Python. Therefore, this lesson note is mainly based on the author's existing Python knowledge for category learning.

## 1 Variables and Constants
In previous learning, constants were not mentioned, but JavaScript has both variables and constants. This requires special attention.

### 1.1 Variables
Like Python, variables in JavaScript can be declared using `let` or `var`. `var` is more commonly used, but the lesson advocates for `let`.
~~~
let a;
~~~
This completes variable declaration. Additionally, you can assign values:
~~~
a = 1;
~~~
As variables, we can reassign them multiple times to change the stored value:
~~~
a = 2;
~~~
You can also assign values during initialization:
```
let a = 2;
```
### 1.2 Constants
The opposite concept of variables is constants, which can only be assigned once. After initialization, they remain unchanged.
~~~
const PI = 3.14
~~~
Use `const` for initialization. Once assigned, they cannot be modified. Constants are generally written in all caps. Objects are protected in constants, but their key-value pairs are not:
~~~
const obj = { a: 3 };
obj = { b: 5 } // Error
~~~
```
const obj = { a: 3 };
obj.a = 5;  // Allowed
```
## 2 Data Types
JavaScript has six basic data types: string, number, bigint, boolean, undefined, and symbol. In Python, it seems to be str, int, float, list, dict, and bool. Compared to JavaScript, the latter four data types are less familiar and require relearning.

### 2.1 Numbers
Unlike other languages, JavaScript does not distinguish between integers and floating points.
| Symbol | Description | Example |
|---|---|---|
| + | Addition: calculates the sum of two numbers | 1 + 2 // Result is 3
| - | Subtraction: calculates the difference between two numbers | 1 - 2 // Result is -1
| * | Multiplication: calculates the product of two numbers | 1 * 2 // Result is 2
| / | Division: calculates the quotient of two numbers | 1 / 2 // Result is 0.5
| % | Modulo: calculates the remainder of division | 1 % 2 // Result is 1

### 2.2 Strings
Strings can be enclosed in single or double quotes (JSON/YAML may have different requirements for single/double quotes, but I'm not sure...).
"this is a str", "this is a str" are both strings. Like Python, string concatenation can be achieved with `+`.
Example:
~~~
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
~~~
String templating is another important aspect. In Python, it's implemented as:
~~~
a = 'hello'
b = 'world'
c = f"{a},{b}!"
~~~
Resulting in `hello,world!`. In JavaScript, it uses the dollar sign `$` as a formatter:
~~~
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
~~~
### 2.3 Booleans
Like Python, there are only two values: `true` or `false`. If a variable's computation result is `true`, it is called a "truthy" value. Interestingly, in JavaScript, all values are truthy unless defined as falsy.
## 3 Other
The subsequent data types in the lesson seem to be omitted, possibly because they are less important. 😄
