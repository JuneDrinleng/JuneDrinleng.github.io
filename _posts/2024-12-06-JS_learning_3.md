---
layout: post
title: "前端学习笔记3 JavaScript中的判断语句"
date:   2024-12-06
tags: [web-dev]
comments: true
author: junedrinleng
toc: true
---

该笔记主要学习JavaScript的基础知识中的判断语句，包括布尔值、比较运算和if相关的语句，以及逻辑语句，参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/3-making-decisions/translations/README.zh-cn.md)
<!-- more -->

## 0 前言
本人在之前学习过一些C，现在使用的稍微熟悉一点的还是python，所以这个教案笔记主要是基于作者已有的python知识进行类别学习的

## 1 布尔值回顾
在第一讲中我们已经学了布尔值相关的知识，只包含`true`和`false`两种情况，我们可以给变量赋值布尔值
~~~
let a=true;
let b=false;
~~~
## 2 比较运算符
常见的`>`,`<`,`>=`, `<=`都很符合直觉，但需要注意的是不等于和严格等于这两种情况，不等于在python中是用`!=`表示，而在JavaScript中则是使用`!==`，这里有两个等号。  
严格等于在JavaScript中则是以三个等号的形式出现：`===`

|符号|	描述	|示例|
|---|---|---|
|<|	小于：比较两个值，如果左边的值小于右边的值则返回true	|5 < 6 // true
|<=	|小于或等于：比较两个值，如果左边的值小于或等于右边的值则返回 true	|5 <= 6 // true
|>|	大于：比较两个值，如果左边的值大于右边的值则返回 true	|5 > 6 // false|
|>=|	大于或等于：比较两个值，如果左边的值大于或等于右边的值则返回 true |	5 >= 6 // false|
|===|	严格等于：比较两个值，如果左边的值等于右边的值且数据类型相同则返回 true |	5 === 6 // false|
|!==	|不等于：比较两个值，返回与“严格等于”运算结果相反的布尔值	|5 !== 6 // true|

## 3 if 语句
### 3.1 基础if语句
和python一样，在JavaScript中判断语句也是由if和else驱动的：  
在python中：
~~~
if a>b:
    print(a)
    pass
~~~
而在JavaScript中：
~~~
if (condition){
    // 如果 condition 为 true，这个块中的代码将会运行。
}
~~~
__记得打分号哦__

example in javascript
~~~
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    // 如果条件为 true，这个块中的代码将会运行。
    console.log("Getting a new laptop!");
}
~~~
### 3.2 if else语句
if else语句只需要在if后面再加一个表示else的大括号就行了：
~~~
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    // 如果条件为 true，这个块中的代码将会运行。
    console.log("Getting a new laptop!");
}
else{
    // 如果条件为 false，这个块中的代码将会运行。
    console.log("Can't afford a new laptop, yet!");
}
~~~
## 4 逻辑运算
逻辑运算符相较于python的`and`.`or`等语法而言，可读性没那么接近自然语言，不过只需要记住符号即可，感觉有点类似于C语言中的逻辑运算符号：
|符号	|描述	|示例|
|---|---|---|
|&&|	逻辑与（AND）：比较两个布尔表达式，只有在两边都是真时返回真	|(5 > 6) && (5 < 6 ) // 一边为假，另一边为真，返回假|
| \|\|	|逻辑或（OR）：比较两个布尔表达式，在至少一边为真时返回真	|(5 > 6) \|\| (5 < 6) // 一边为假，另一边为真，返回真|
|!	|逻辑非（NOT）：返回与一个布尔表达式相反的布尔值|	!(5 > 6) // 5 并不比 6 大，但 "!" 会返回真|

因此我们可以用逻辑运算来进行判断，我感觉本质都是在if(condition)里产生布尔值，至于是基于判断还是基于逻辑运算都没什么关系：
~~~
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) // 打八折后的笔记本电脑价格

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    // 如果条件为 true，这个块中的代码将会运行。
    console.log("Getting a new laptop!");
}
else {
    // 如果条件为 false，这个块中的代码将会运行。
    console.log("Can't afford a new laptop, yet!");
}
~~~
布尔值结果取逆可以使用`!`来实现：
~~~
if (!condition) {
  // 如果 condition 为 false 则运行
} else {
  // 如果 condition 为 true 则运行
}
~~~
## 5 三元运算
可以在定义变量的时候掺入判断条件，如果为真返回一种情况，如果为假返回另一种情况（这个好像在python中没遇到过）
~~~
let variable = condition ? <若为 true 则返回这个> : <若为 false 则返回这个>
~~~
例如：
~~~
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
~~~
这玩意的本质就是判断+赋值语句的简写