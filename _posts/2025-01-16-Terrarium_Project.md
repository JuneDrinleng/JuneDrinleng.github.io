---
layout: post
title: "web开发实战-花艺瓶项目"
date:   2025-01-16
tags: [web-dev]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍介绍如何使用html+css+js实现一个花艺瓶的项目，包括网页前端的布局以及实现对于网页中对象的拖动操作
<!-- more -->
## 0 背景
在学习和了解了JS的基本语法之后，我们可以开始着手第一个前端项目，这里参考的是[微软的前端开发学习指南](https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/3-terrarium/3-intro-to-DOM-and-closures)，在这个项目中我们将根据其指导完成制作一个花艺瓶，具有基本的布局以及对每一种植物进行拖动的操作。具体的项目流程由以下的三个操作构成，分别是通过html构造基本的网页元素对象，然后使用css对网页对象的样式，包括颜色和操作属性，最后通过JavaScript来实现对网页对象的拖动等操作。
## 1 html基本布局
首先构造html的基本结构，为了浏览器兼容性的需要，我们采用的是`<!DOCTYPE html>`，html的文件格式开局如下：
~~~
<!DOCTYPE html>
<html>
    // details
</html>
~~~
在html文件中，主要包括<head>,<body>和<footer>三个部分，我们依次进行介绍：
### 1.1 head部分
head部分一般包括以下的几个基本的内容，分别是网页的标题<title>，网页的字符集<meta charset>，浏览器的兼容性与渲染方式<meta http-equiv="X-UA-Compatible" content="IE=edge" />，以及网页的视图缩放信息<meta name="viewport" content="width=device-width, initial-scale=1" />，具体的代码如下：
~~~
<head>
    <title>Welcome to my Terrarium</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"  />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
~~~
其中<tilte></title>内的内容是网页的标题，<meta charset="utf-8" />意味着我们选用的网页字符是utf-8以便兼容尽可能多的语言，第三行是保证网页使用最新的浏览器渲染方式，最后一行则是保证网页在不同的设备上能够正常显示。
### 1.2 footer部分
网页的footer部分主要用于放置网页的版权信息，一般是放在网页的最底部，与body部分一样可以插入一些标签对象或者其他的对象来实现信息的展示
### 1.3 body部分
body部分是网页的主要部分，包括了网页的主要内容，一般是通过标签对象来实现的，比如`<div>`,`<img>`,`<p>`等等，这些标签对象可以通过css来进行样式的设计，也可以通过js来实现一些交互操作，比如拖动等操作。  
在花艺瓶项目中，我们仅有12个植物的贴图的素材是需要放置的，我们按照以下的结构来进行构建，分别是左边的容器对象("left-container" div)，右边的容器对象("right-container" div)，以及花艺瓶对象（terrarium div）：  
对于花艺瓶terrarium，有以下的几个子类：  
`jar-top`,`jar-walls`,`jar-bottom`，分别是花艺瓶的顶部，墙壁和底部，除此之外还有尘土`dirt`对象
~~~
<div id="terrarium">
    <div class="jar-top"></div>
    <div class="jar-walls">
        <div class="jar-glossy-long"></div>
        <div class="jar-glossy-short"></div>
    </div>
    <div class="dirt"></div>
    <div class="jar-bottom"></div>
</div>
~~~
而对于左右容器来说，每个容器内有7个贴图植物对象，两个容器在同一个page对象之中：
~~~
<div id="page">
    <div id="left-container" class="container">
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
        </div>
    </div>
    <div id="right-container" class="container">
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
        </div>
    </div>
</div>
~~~
通过上述的操作我们便可以看到网页的基本元素都具备了，接下来需要做的就是美化网页布局，这也就需要我们的css样式设计了。
## 2 css样式设计
为了能够引入设计好的css样式，我们需要在head部分引入css文件，具体的代码如下：
~~~
<head>
    <link rel="stylesheet" href="./style.css" />
    \\other contents
</head>
~~~
此时index.html的head部分就变成了：
~~~
    <head>
        <link rel="stylesheet" href="./style.css" />
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
~~~
接下来我们就可以在style.css文件中对于对象进行样式设计了。
首先时标题标签`h1`:
~~~
h1 {
	color: #3a241d;
	text-align: center;
}
~~~
其次是对于body标签整体进行字体的设置：
~~~
body {
	font-family: helvetica, arial, sans-serif;
}
~~~
需要注意的是，对于标签、对象和id选择器的css格式是不一样的，标签的话直接就是标签名{}即可，而对象则是 .object{}，id则是#id{}
例如对于左右容器这俩id选择器来说：
~~~
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
~~~
而对于花艺瓶terrarium的子对象来说则是：
~~~
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
~~~
除此之外还需要对植物对象进行格式设置，比如：
~~~
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
~~~
## 3 js实现拖动操作
要实现js操作还得把js的相关文件引入到html文件中，具体的代码如下：
~~~
<script src="./script.js" defer></script>
~~~
此时index.html的head部分就变成了：
~~~
    <head>
        <link rel="stylesheet" href="./style.css" />
        <script src="./script.js" defer></script>
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
~~~
那么对于我们的目标移动来说，有以下几个问题：
记录鼠标的原始位置，当鼠标按下时，记录鼠标的位置，当鼠标移动时，计算鼠标的移动距离，然后将对象移动到新的位置，当鼠标松开时，停止移动。最后就是如果没有拖动行为，就停止记录。   
将上述操作应用到每一个plant元素中即可。  
要实现上述的步骤，可以使用以下代码：
~~~
function dragElement(terrariumElement) {
    // 初始化四个变量，用于保存指针拖动的位置
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    // 当用户按下鼠标或触摸屏幕时触发
    terrariumElement.onpointerdown = pointerDrag;
  
    function pointerDrag(e) {
      e.preventDefault(); // 防止默认行为（如选中文本等）
  
      // 获取指针的初始位置
      pos3 = e.clientX; // 指针的 X 坐标
      pos4 = e.clientY; // 指针的 Y 坐标
  
      // 当指针移动时触发 pointerMove
      document.onpointermove = pointerMove;
  
      // 当指针抬起时停止拖动
      document.onpointerup = stopDrag;
    }
  
    function pointerMove(e) {
      // 计算指针的移动距离
      pos1 = pos3 - e.clientX; // 横向移动距离
      pos2 = pos4 - e.clientY; // 纵向移动距离
      pos3 = e.clientX; // 更新指针的当前 X 坐标
      pos4 = e.clientY; // 更新指针的当前 Y 坐标
  
      // 更新元素的位置（通过 CSS 的 `top` 和 `left` 属性）
      terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
      terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }
  
    function stopDrag() {
      // 解除事件监听器，防止不必要的性能消耗
      document.onpointermove = null;
      document.onpointerup = null;
    }
  }
~~~
通过这样来根据拖动操作更新植物贴图拖动后的位置，进而实现对于植物贴图的拖动操作。在设置好上述方法后，再将其应用于每一个植物贴图对象：
~~~
// 获取所有具有 "plant" 类的元素
const plants = document.querySelectorAll(".plant");

// 为每个 plant 元素启用拖动功能
plants.forEach((plant) => {
  // 确保元素有 position 样式
  plant.style.position = "absolute";
  dragElement(plant);
});
~~~
最后在浏览器中就可以得到上述的花艺瓶了
## 4 DOM
DOM 是 Document Object Model（文档对象模型）的缩写，是 HTML 和 XML 文档的编程接口。它将文档（如 HTML 页面）表示为一个 树状结构，使得开发者可以通过编程语言（如 JavaScript）访问和操作文档的内容、结构和样式。

可以简单理解为：DOM 是浏览器提供的一种方式，让开发者可以用代码操作网页的结构和内容。  

document 是 DOM 的入口点，表示整个 HTML 文档。通过它可以访问页面内容和操作元素。

常用功能：

获取元素：
document.getElementById('id')：通过 ID 获取元素。
document.querySelector('selector')：通过 CSS 选择器获取元素。
document.querySelectorAll('selector')：获取所有匹配的元素。
创建元素：
document.createElement('tagName')：创建一个新元素。
访问属性：
document.title：访问或修改页面标题。
document.body：访问 <body> 元素。

也就是实际上是方便使用js来操作html的元素，比如获取元素，创建元素，访问属性等等。
## 5 闭包
闭包是指函数和函数内部能访问到的变量的组合。在 JavaScript 中，函数是一等公民，可以作为参数传递给其他函数，也可以作为其他函数的返回值。当函数返回时，它的作用域链并不会被销毁，因此内部函数仍然可以访问外部函数的变量。这种机制就是闭包。