---
layout: post
title: "前端学习笔记1 JavaScript基础"
date:   2024-12-05
tags: [web-dev]
comments: true
author: junedrinleng
toc: true
---

该笔记主要学习JavaScript的基础知识，参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/1-data-types/translations/README.zh-cn.md)
<!-- more -->
## 0 前言
本人在之前学习过一些C，现在使用的稍微熟悉一点的还是python，所以这个教案笔记主要是基于作者已有的python知识进行类别学习的

## 1 变量与常量
在过去的学习中好像并没有涉及到常量的相关知识，而在JavaScript中则既有变量又有常量的概念，在此需要特别的注意  
  
### 1.1 变量
变量和python等语言一样，创建和声明变量可以使用`let`或者`var`,感觉更为常见的是`var`但是在教案中更为提倡的是`let`  
~~~
let a;
~~~
如此就完成了一个变量的声明，除此之外还可以对其进行赋值：
~~~
a=1;
~~~
由于是变量，我们可以对其进行多次的赋值不断改变变量内所存储的值
~~~
a=2;
~~~
也可以在初始化变量的时候就进行赋值：
```
let a=2;
```
### 1.2 常量
与变量相对的概念是常量，常量只能赋值一次，完成初始化之后就不再改变
~~~
const PI=3.14
~~~
使用const来初始化，在赋值后就不能再改了，对于常量一般采用全大写  
在常量中，对象是会受到保护的，但对象的键值对的值是不受保护的：
~~~
const obj = { a: 3 };
obj = { b: 5 } // 报错
~~~
```
const obj = { a: 3 };
obj.a = 5;  // 允许
```
## 2 数据类型
JavaScript 有六种基本数据类型：string、number、bigint、boolean、undefined 和 symbol  
在python里好像则是str、int、float、list、dict、bool之类的，感觉对比Javascript而言，JS后四项常见的数据类型都比较陌生需要重新学习  

### 2.1 数值
对于数值好像并不像其他语言一样区分整型和浮点  
| 符号	| 描述	| 例子 |
|---|---|---|
| +	| 加法：计算两个数的和	| 1 + 2 // 结果是 3
| -	| 减法：计算两个数的差	| 1 - 2 // 结果是 -1
| *	| 乘法：计算两个数的积	| 1 * 2 // 结果是 2
| /	| 除法：计算两个数的商	| 1 / 2 // 结果是 0.5
| %	| 取余：计算两个数相除的余数	| 1 % 2 // 结果是 1

### 2.2 字符串
字符串包括单引号和双引号两种（好像json还是yaml对于单双引号的要求是不一样的，记不清了……）

`"this is a str"`，`"this is a str"`都是字符串  
和python一样，字符串的链接可以用`+`实现
example：
~~~
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
~~~
模板化是字符串另外一个比较重要的内容，在python中是以如下形式实现的：
~~~
a='hello'
b='world'
c=f"{a},{b}!"
~~~
最终结果是`hello,world!`  
而在JavaScript中，则是用美元符号`$`作为格式符：
~~~
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
~~~
### 2.3 布尔值
和python一样，只有两个值： `true` 或 `false`  

如果一个变量的计算结果是 true，我们就把它称为“真值（truthy）”。一个有意思的事是，在 JavaScript 中，所有值都是真值，除非它们被定义为假值（falsy）。
## 3.其他
好像后面的几种数据类型教案没有提及，可能因为不是很重要吧哈哈哈