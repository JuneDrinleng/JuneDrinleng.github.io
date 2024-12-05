---
layout: post
title: "前端学习笔记2 JavaScript中的函数"
date:   2024-12-05
tags: [web-dev]
comments: true
author: junedrinleng
toc: true
---

该笔记主要学习JavaScript的基础知识中的函数部分，包括显函数和隐函数，参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/2-functions-methods/translations/README.zh-cn.md)
<!-- more -->

## 0 前言
本人在之前学习过一些C，现在使用的稍微熟悉一点的还是python，所以这个教案笔记主要是基于作者已有的python知识进行类别学习的

## 1 创建和调用函数
函数的创建在python中是用def实现，在js中主要是通过function来定义：
~~~
function nameOfFunction() { // 函数定义
 // 函数定义 / 函数体
}
~~~
需要注意的是，由于不像python中严格要求缩进，所以在js中需要把函数体用大括号括起来  

例如：
```
function displayGreeting() {
  console.log('Hello, world!');
}
```
调用的话只需要`函数名()`即可：
~~~
// 调用我们的函数
displayGreeting();
~~~

在函数命名的时候，教案建议使用驼峰命名法，描述性命名，同时特定函数干特定的事情