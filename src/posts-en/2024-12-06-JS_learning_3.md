---
layout: post
title: "Front-end Learning Notes 3: Conditional Statements in JavaScript"
date: 2024-12-06
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2024-12-06-JS_learning_3
source_lang: zh
source_title: "前端学习笔记3 JavaScript中的判断语句"
title_key: course_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.184Z"
source_hash: 5480697f962bdb4dbb83f83669633093bfef7458399d1233cbc990805f80900e
---

This note primarily focuses on conditional statements in JavaScript basics, including boolean values, comparison operators, if-related statements, and logical statements, referencing [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/3-making-decisions/translations/README.zh-cn.md)
<!-- more -->

## 0 Introduction
I previously learned some C, and now the one I use slightly more familiarly is Python, so this lesson note is mainly based on the author's existing Python knowledge for category learning

## 1 Boolean Values Review
In the first lecture, we already learned about boolean values, which only include `true` and `false` two cases, we can assign boolean values to variables
~~~
let a = true;
let b = false;
~~~
## 2 Comparison Operators
Common `>`, `<`, `>=`, `<=` are intuitive, but it's important to note the cases of not equal and strict equal. In Python, not equal is represented by `!=`, while in JavaScript it uses `!==`, which has two equals signs.  
Strict equality in JavaScript appears as three equals signs: `===`

| Symbol | Description | Example |
|---|---|---|
| < | Less than: compares two values, returns true if the left value is less than the right value | 5 < 6 // true |
| <= | Less than or equal to: compares two values, returns true if the left value is less than or equal to the right value | 5 <= 6 // true |
| > | Greater than: compares two values, returns true if the left value is greater than the right value | 5 > 6 // false |
| >= | Greater than or equal to: compares two values, returns true if the left value is greater than or equal to the right value | 5 >= 6 // false |
| === | Strict equality: compares two values, returns true if the left value equals the right value and the data types are the same | 5 === 6 // false |
| !== | Not equal: compares two values, returns the opposite boolean value of "strict equality" operation | 5 !== 6 // true |

## 3 if Statement
### 3.1 Basic if Statement
Like Python, in JavaScript, conditional statements are driven by if and else:  
In Python:
~~~
if a > b:
    print(a)
    pass
~~~
In JavaScript:
~~~
if (condition){
    // If condition is true, the code in this block will run.
}
~~~
__Remember to add semicolons__

Example in JavaScript
~~~
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    // If the condition is true, the code in this block will run.
    console.log("Getting a new laptop!");
}
~~~
### 3.2 if else Statement
The if else statement only needs to add an else block after if:
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
## 4 Logical Operations
Compared to Python's `and`, `or` syntax, the readability of logical operators in JavaScript is less close to natural language, but just need to remember the symbols, it feels somewhat similar to the logical operators in C language:
| Symbol | Description | Example |
|---|---|---|
| && | Logical AND (AND): compares two boolean expressions, returns true only when both sides are true | (5 > 6) && (5 < 6 ) // one side is false, the other is true, returns false |
| \|\| | Logical OR (OR): compares two boolean expressions, returns true if at least one side is true | (5 > 6) \|\| (5 < 6) // one side is false, the other is true, returns true |
| ! | Logical NOT (NOT): returns the opposite boolean value of a boolean expression | !(5 > 6) // 5 is not greater than 6, but "!" will return true |

Therefore, we can use logical operations for judgment, I feel the essence is to generate a boolean value in if(condition), whether it's based on judgment or logical operations doesn't matter:
~~~
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) // laptop price after 20% discount

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    // If the condition is true, the code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    // If the condition is false, the code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
~~~
The negation of a boolean result can be achieved using `!`:
~~~
if (!condition) {
  // Runs if condition is false
} else {
  // Runs if condition is true
}
~~~
## 5 Ternary Operation
Conditional judgments can be embedded during variable definition. If the condition is true, return one scenario; if false, return another. (This seems unfamiliar in Python)
~~~
let variable = condition ? <return this if true> : <return this if false>
~~~
Example:
~~~
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
~~~
This essentially represents a shorthand for judgment + assignment statement
