---
layout: post
title: "前端学习笔记5 html语言简介"
date:   2024-12-06
tags: [web-dev]
comments: true
author: junedrinleng
toc: true
---

该笔记前端知识中的html语言，包括head，body等部分的介绍，具体内容参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/1-intro-to-html/translations/README.zh-cn.md)
<!-- more -->

## 1 HTML的介绍
前端较为常见的几个语言有HTML, CSS和JavaScript，这几个语言的关系是:  
HTML是网页的骨架，CSS负则修饰和点缀HTML，而JavaScript则负则画龙点睛让网页更加生动。  
HTML包括head，footer和body几个部分
## 2 html声明
在HTML一开始就需要声明文件类型是html，同时添加根元素，一般我们只需要将以下的两行加入到新的HTML文件开头就行了：
~~~
<!DOCTYPE html>
<html></html>
~~~
这里第一行是声明，有许多种模式，包括所谓的怪异模式和标准模式，其能够一定程度上支持老旧浏览器
## 3 HTML Head
在HTML的head部分，需要声明网页的名字，编码方式（字符集），浏览器的信息以及视图加载的时候应该如何表示大小缩放信息
一般以<head>开头，以</head>结尾，中间都是我们需要在head中填写的部分
~~~
<head>
    <title>Welcome to my Terrarium</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"  />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
~~~
经过上述两步之后，html文件变成了以下的样子：
~~~
<!DOCTYPE html>
<html>
    <head>
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
</html>
~~~
## 4 HTML的body部分
在构造了HTML的head之后，接下来就要构造body部分，页面中的元素也是通过body部分添加你想要内容，就像有`<head>`和`</head>`，`<body>`和`</body>`一样，几乎大多数标签都既有开始的标签，又有结束的标签，开始和结束之间的则是标签的内容。
只不过有一个不需要结束标签的例外就是`<img>`,因为他已经包含了渲染该项所需要的所有信息