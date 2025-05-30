---
layout: post
title: "前端学习笔记5 html语言简介"
date:   2024-12-06
tags: [cs_basic]
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

在项目中，我们把所有要渲染的图片都放在目录的image子文件夹里，现在我们更新index.html的body部分：
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
上述的代码包括一个总容器——也就是id="page"的div，这个总容器里包括两个子容器，分别是左容器和右容器，id="left-container" 和 id="right-container"; 每个容器内包含7个植物图片的子容器。植物图片子容器包含img class类名，alt图片渲染不出时的替代文本，id是图片分配id，src是图片所存在的未知    

通过上述几个部分的代码就可以构造一个基本的网页, 用浏览器打开HTML文件就已经可以渲染出内容了  
## 5 语义化标签
使用语义化标签也就是使用 HTML 标签来表示它们所被设计的数据或交互的类型，不同的交互类型用不同的标签，例如核心标题使用
~~~
<h1>My Terrarium</h1>
~~~
除此之外还有：标题使用 `<h1>` 、无序列表使用 `<ul>` ，这样能帮助屏幕阅读器理解页面的内容。一般来说，按钮需要写作 `<button>` 而列表被写作 `<li>`。并且我们当然 可以 使用有特殊样式的包含点击处理的 `<span> `元素来当作按钮使用，但如果元素以按钮的形式出现，残疾用户可以很方便的使用现有的技术来确定按钮在页面上的位置，并与之交互。因此，尽量使用语义化的标记。
最后还得添加上以下代码：
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
以便创造一个玻璃容器，包括jar的顶部，容器壁的光泽长短，泥土，jar底部等内容
## 6 后记
总得来说，由于我个人对html类的语言不是很熟悉，感觉这一节课学习下来主要是跟着教案复习和阅读代码，并没有完全掌握html的精髓，后期还依赖于多多进行实践