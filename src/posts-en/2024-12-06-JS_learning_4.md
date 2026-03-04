---
layout: post
title: "Frontend Learning Notes 4: Arrays and Loop Statements in JavaScript"
date:   2024-12-06
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

This notes mainly focus on the basics of JavaScript, including arrays and loop statements, where loop statements cover for loops and while loops, referencing from [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/4-arrays-loops/translations/README.zh-cn.md)
<!-- more -->

## 0 Introduction
I have previously learned some C, and now the one I use slightly more familiar is Python, so this lesson notes are mainly based on the author's existing Python knowledge for category learning

## 1 Arrays
Compared to Python's rich data structures, this only introduces one JavaScript structure - array, similar to Python's list. However, some details like Python's len() function and how to debug in JavaScript are not clearly explained in these lesson notes, which need to be learned through future practice  

The definition of an array is [] brackets, and arrays can store both numbers and strings:
~~~
let myArray = [];
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
~~~
To retrieve specific values in an array, you need to use index values, same as Python, JavaScript arrays are indexed from 0   
~~~
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; // "Vanilla"
~~~
You can also use index + assignment to change the value at a specific position in the array
~~~
iceCreamFlavors[4] = "Butter Pecan"; // Replace "Rocky Road" with "Butter Pecan"
iceCreamFlavors[5] = "Cookie Dough"; // Add a new item "Cookie Dough"
~~~
Calling the length method can know the number of elements in the array, same as Python's len():
~~~
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; // 5
~~~
## 2 Loops
The for loop statement sets a counter i when iterating:
~~~
for (let i=0; i<10; i++) {
    a = i;
}
~~~
In the condition, you need to define the counter variable, judgment condition, and iteration method  

While loops require creating a counter variable outside the loop, and adding an iteration statement inside the loop to meet the loop condition:
~~~
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
~~~
Using loops, we can iterate through each element in an array to perform operations on all elements  

There are also other statements to iterate through arrays like `forEach`, `for-of`, and `map`, but the lesson didn't cover them, so I won't expand on them here 😄