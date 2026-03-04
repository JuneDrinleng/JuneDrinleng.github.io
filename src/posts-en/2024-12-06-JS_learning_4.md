---
layout: post
title: "Front-end study notes 4 Arrays and loop statements in JavaScript"
date: 2024-12-06
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

This note mainly learns arrays and loop statements in the basic knowledge of JavaScript. The loop statements include for loops and while loops. It is referenced from [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/4-arrays-loops/translations/README.zh-cn.md)
<!-- more -->

## 0 Preface
I have learned some C before, and the one I am more familiar with now is python, so this lesson plan note is mainly based on the author's existing python knowledge for category learning.

## 1 array
I feel that compared to the rich data structures of python, here we only introduce arrays, a structure of JavaScript, which is similar to lists in python. However, there must be some details, such as how to get len in python and how to debug in JavaScript. These teaching plans have not made it clear. We need to learn it through later practice.

The definition of an array is [] square brackets. An array can store both numbers and strings:
~~~
let myArray = [];
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
~~~
To retrieve a specific value in an array, you need to use an index value. Like Python, arrays in JavaScript are indexed starting from 0
~~~
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; // "Vanilla"
~~~
Of course, you can also use index + assignment to change the value at a specific position in the array.
~~~
iceCreamFlavors[4] = "Butter Pecan"; // Change "Rocky Road" to "Butter Pecan"
iceCreamFlavors[5] = "Cookie Dough"; // Added "Cookie Dough"
~~~
Just call the length method to know how many elements there are in the array just like len in python:
~~~
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; // 5
~~~
## 2 Loop
The for loop statement sets counter i while iterating:
~~~
for (let i=0;i<10,i++){
    a=i;
}
~~~
Counting variables, judgment conditions and iteration methods need to be defined in condition

The while loop requires creating a count variable outside the loop and adding an iteration statement inside the loop to achieve the loop condition:
~~~
let i=0;
while (i<=10){
    console.log(i);
    i++;
}
~~~
Using loops we can facilitate each element in the array to operate on all elements of the array

Of course, there are some other statements to implement convenience arrays such as `forEach`, `for-of` and `map`, but the lesson plan does not cover it, so I will not expand the study here for now😀