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
## 2 传参
和python一样，传参都是在函数的括号中加入参数就行了  

在python中：
~~~
def hello_world(param,param2):
    print(f"{param},{param2}!")
    pass
~~~
而在JavaScript中：
~~~
function  HelloWorld(param,param2){
    str_total="${param},${param2}!";
    console.log(str_total);
}
~~~
调用函数同理
## 3 默认值与返回值
默认值和python一样，在传参的时候加入赋值就行了   

在python中：
~~~
def hello_world(param='hello',param2='world'):
    print(f"{param},{param2}!")
    pass
~~~
而在JavaScript中：
~~~
function  HelloWorld(param='hello',param2='world'){
    str_total="${param},${param2}!";
    console.log(str_total);
}
~~~
调用的时候JavaScript和python一样：
~~~
HelloWorld("Hello","june");
~~~
__记得打分号!!!!!!!!!__

返回也和python基本一致，只需要添加一个return就好啦，不过将返回值赋值的时候记得用`const`等方式声明
~~~
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}

const greetingMessage = createGreetingMessage('Christopher');
~~~
##  4 将函数作为参数传入函数
对于 setTimeout，其会开启一个计时器，在倒计时结束时执行代码。我们需要告诉它我们希望它执行什么代码。这听起来正是函数该做到的事！

如果你执行下方的代码，三秒后你就可以看到   `3 秒过去了` 这条消息：
```
function displayDone() {
  console.log('3 秒过去了');
}
// 计时器的时间单位是毫秒
setTimeout(displayDone, 3000);
```
而所谓匿名函数就是在上述定义函数的过程嵌合到传参中以简化代码复杂度：
~~~
setTimeout(function() {
  console.log('3 秒过去了');
}, 3000);
~~~
还可以用箭头`=>`来简化掉`function`
~~~
setTimeout(() => {
  console.log('3 秒过去了');
}, 3000);
~~~