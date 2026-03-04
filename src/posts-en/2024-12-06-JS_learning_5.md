---
layout: post
title: "Front-end study notes 5 Introduction to html language"
date: 2024-12-06
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

The HTML language in the front-end knowledge of this note, including the introduction of head, body and other parts, the specific content is referenced from [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/1-intro-to-html/translations/README.zh-cn.md)
<!-- more -->

## 1 Introduction to HTML
Some of the more common front-end languages include HTML, CSS and JavaScript. The relationship between these languages is:
HTML is the skeleton of the web page, CSS modifies and embellishes the HTML, and JavaScript adds the finishing touch to make the web page more vivid.  
HTML includes head, footer and body parts
## 2 html declaration
At the beginning of HTML, you need to declare that the file type is html and add the root element. Generally, we only need to add the following two lines to the beginning of the new HTML file:
~~~
<!DOCTYPE html>
<html></html>
~~~
The first line here is a statement that there are many modes, including the so-called weird mode and the standard mode, which can support old browsers to a certain extent.
## 3 HTML Head
In the head part of HTML, you need to declare the name of the web page, encoding method (character set), browser information and how the size and scaling information should be expressed when the view is loaded.
Generally it starts with <head> and ends with </head>, and the middle part is the part we need to fill in the head.
~~~
<head>
    <title>Welcome to my Terrarium</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
~~~
After the above two steps, the html file becomes as follows:
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
## 4 The body part of HTML
After constructing the HTML head, the next step is to construct the body part. The elements in the page also add the content you want through the body part, just like `<head>` and `</head>`, `<body>` and `</body>`. Almost most tags have both a start tag and an end tag, and the content between the start and the end is the content of the tag.
The only exception that does not require a closing tag is `<img>`, because it already contains all the information needed to render the item.

In the project, we put all the images to be rendered in the image subfolder of the directory. Now we update the body part of index.html:
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
The above code includes a total container - that is, a div with id="page". This total container includes two sub-containers, namely the left container and the right container, id="left-container" and id="right-container"; each container contains 7 sub-containers of plant pictures. The plant image subcontainer contains the img class name, the alternative text when the alt image cannot be rendered, id is the image allocation id, and src is the unknown existence of the image.Through the above several parts of code, you can construct a basic web page, and open the HTML file with a browser to render the content.
## 5 Semantic tags
Using semantic tags is to use HTML tags to represent the type of data or interaction they are designed for. Different interaction types use different tags, such as the use of core titles.
~~~
<h1>My Terrarium</h1>
~~~
In addition, use `<h1>` for titles and `<ul>` for unordered lists, which can help screen readers understand the content of the page. Generally speaking, buttons need to be written `<button>` and lists are written `<li>`. And of course we can use a specially styled `<span>` element that contains click processing as a button, but if the element appears in the form of a button, disabled users can easily use existing technologies to determine the button's position on the page and interact with it. Therefore, try to use semantic markup.
Finally, you have to add the following code:
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
In order to create a glass container, include the top of the jar, the glossy length of the container wall, soil, the bottom of the jar, etc.
## 6 Postscript
In general, since I am not very familiar with HTML-like languages, I feel that after studying this class, I mainly followed the lesson plan to review and read the code. I did not fully grasp the essence of HTML. Later, I still relied on a lot of practice.