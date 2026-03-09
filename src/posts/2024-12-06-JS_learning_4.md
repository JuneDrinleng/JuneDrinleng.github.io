---
layout: post
title: "前端学习笔记4 JavaScript中的数组与循环语句"
date: 2024-12-06
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2024-12-06-JS_learning_4
title_key: course_note
---

该笔记主要学习JavaScript的基础知识中的数组和循环语句，其中循环语句包含for循环和while循环，参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/4-arrays-loops/translations/README.zh-cn.md)
<!-- more -->

## 0 前言
本人在之前学习过一些C，现在使用的稍微熟悉一点的还是python，所以这个教案笔记主要是基于作者已有的python知识进行类别学习的

## 1 数组
感觉相较于python丰富的数据结构，在这仅介绍了数组一种JavaScript的结构，类似于python中的列表，不过肯定有一些细节比如python中是取len而在JavaScript中怎么调试这些教案都没有讲清楚，有待之后的实践来学习了  

数组的定义就是[]方括号，数组中既可以存放数也可以存放字符串：
~~~
let myArray = [];
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
~~~
想提出数组中的特定值，需要使用索引值，和python一样，JavaScript中的数组是从0开始索引的   
~~~
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; // "Vanilla"
~~~
当然也可以使用索引+赋值来改变数组中特定位置的值
~~~
iceCreamFlavors[4] = "Butter Pecan"; // 把 "Rocky Road" 改成 "Butter Pecan"
iceCreamFlavors[5] = "Cookie Dough"; // 加了一项 "Cookie Dough"
~~~
只需要调用length方法就可以和python中的len一样知道数组中有多少个元素了：
~~~
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; // 5
~~~
## 2 循环
for循环语句在迭代时设置计数器i:
~~~
for (let i=0;i<10,i++){
    a=i;
}
~~~
在condition里需要定义计数变量，判断条件和迭代方法   

while循环则是需要在循环外创建计数变量，同时在循环内增加迭代语句以便达到循环条件：
~~~
let i=0;
while (i<=10){
    console.log(i);
    i++;
}
~~~
利用循环我们可以便利数组中的每一个元素来实现对数组所有元素的操作  

当然还有一些其他的语句来实现便利数组比如`forEach`、`for-of`和`map`不过教案没有讲，这里暂时就不拓展学习了😀
