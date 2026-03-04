---
layout: post
title: "Front-end study notes 3 Judgment statements in JavaScript"
date: 2024-12-06
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

This note mainly learns the judgment statements in the basic knowledge of JavaScript, including Boolean values, comparison operations and if-related statements, as well as logical statements. It is referenced from [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/3-making-decisions/translations/README.zh-cn.md)
<!-- more -->

## 0 Preface
I have learned some C before, and the one I am more familiar with now is python, so this lesson plan note is mainly based on the author's existing python knowledge for category learning.

## 1 Boolean Review
In the first lecture, we have learned the knowledge related to Boolean values, which only includes two cases: `true` and `false`. We can assign Boolean values to variables.
~~~
let a=true;
let b=false;
~~~
## 2 Comparison operators
The common `>`, `<`, `>=`, `<=` are very intuitive, but it should be noted that the two cases of inequality and strict equality are not equal to each other. In Python, inequality is represented by `!=`, while in JavaScript, it is represented by `!==`. There are two equal signs here.  
Strict equality appears in the form of three equal signs in JavaScript: `===`

|Symbol| Description |Example|
|---|---|---|
|<| Less than: Compares two values and returns true if the value on the left is less than the value on the right |5 < 6 // true
|<= |Less than or equal to: Compares two values and returns true if the value on the left is less than or equal to the value on the right |5 <= 6 // true
|>| Greater than: Compares two values and returns true if the value on the left is greater than the value on the right |5 > 6 // false|
|>=| Greater than or equal to: Compares two values and returns true if the value on the left is greater than or equal to the value on the right | 5 >= 6 // false|
|===| Strict equals: compares two values, if the value on the left is equal to the value on the right and the data type is the same, then true is returned | 5 === 6 // false|
|!== |Not equal to: Compares two values and returns a Boolean value that is the opposite of the "strictly equal" operation result |5 !== 6 // true|

## 3 if statement
### 3.1 Basic if statement
Like python, judgment statements in JavaScript are also driven by if and else:
In python:
~~~
if a>b:
    print(a)
    pass
~~~
And in JavaScript:
~~~
if (condition){
    // If condition is true, the code in this block will run.
}
~~~
__Remember to put a semicolon__

example in javascript
~~~
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    // If the condition is true, the code in this block will run.
    console.log("Getting a new laptop!");
}
~~~
### 3.2 if else statement
The if else statement only needs to add a brace indicating else after if:
~~~
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    // If the condition is true, the code in this block will run.
    console.log("Getting a new laptop!");
}
else{
    // If the condition is false, the code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
~~~
## 4 Logical operations
Compared with Python's `and`.`or` and other syntaxes, the readability of logical operators is not so close to natural language, but you only need to remember the symbols. It feels a bit similar to the logical operation symbols in C language:
|Symbol |Description |Example|
|---|---|---|
|&&| Logical AND (AND): Compares two Boolean expressions and returns true only if both sides are true |(5 > 6) && (5 < 6) // If one side is false and the other side is true, return false|
| \|\| |Logical OR (OR): Compares two Boolean expressions and returns true when at least one side is true |(5 > 6) \|\| (5 < 6) // If one side is false and the other side is true, returns true|
|! |Logical NOT (NOT): returns the Boolean value that is the opposite of a Boolean expression| !(5 > 6) // 5 is not greater than 6, but "!" will return true|

Therefore, we can use logical operations to make judgments. I feel that the essence is to generate Boolean values in if (condition). It doesn’t matter whether it is based on judgment or logical operations:
~~~
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) // Laptop price after 20% discount

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    // If the condition is true, the code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    // If the condition is false, the code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
~~~
The inversion of a Boolean result can be achieved using `!`:
~~~
if (!condition) {
  // run if condition is false
} else {
  // run if condition is true
}
~~~
## 5 Ternary operation
You can incorporate judgment conditions when defining variables. If it is true, it will return one situation, if it is false, it will return another situation (this seems to have never been encountered in python)
~~~
let variable = condition ? <If true, return this> : <If false, return this>
~~~
For example:
~~~
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
~~~
The essence of this thing is the abbreviation of judgment + assignment statement