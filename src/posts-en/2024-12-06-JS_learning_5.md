---
layout: post
title: "Frontend Learning Notes 5: Introduction to HTML Language"
date:   2024-12-06
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

This note covers the HTML language in frontend knowledge, including introductions to parts such as head and body. The specific content is referenced from [Microsoft's web-dev project](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/1-intro-to-html/translations/README.zh-cn.md)
<!-- more -->

## 1 Introduction to HTML
Common frontend languages include HTML, CSS, and JavaScript. Their relationship is:  
HTML serves as the skeleton of a webpage, CSS is responsible for styling and embellishing HTML, while JavaScript adds the finishing touches to make webpages more dynamic.  
HTML consists of several parts including head, footer, and body.

## 2 HTML Declaration
At the beginning of an HTML file, it is necessary to declare the file type as HTML and add the root element. Generally, we only need to include the following two lines at the start of a new HTML file:
~~~
<!DOCTYPE html>
<html></html>
~~~
The first line is a declaration with various modes, including the so-called quirks mode and standards mode, which can support older browsers to some extent.

## 3 HTML Head
In the HTML head section, it is necessary to declare the webpage's name, encoding method (character set), browser information, and how the viewport should be represented in terms of size and scaling when loading.
Typically, it starts with <head> and ends with </head>, with the content to be filled in the head section in between:
~~~
<head>
    <title>Welcome to my Terrarium</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"  />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
~~~
After the above two steps, the HTML file becomes the following:
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

## 4 HTML Body Section
After constructing the HTML head, the next step is to construct the body section. Page elements are added through the body section, similar to having `<head>` and `</head>`, `<body>` and `</body>`. Almost all tags have both opening and closing tags, with the content between them being the tag's content.
There is an exception without a closing tag: `<img>`, as it already contains all the information needed for rendering the item.

In the project, we place all images to be rendered in the image subfolder of the directory. Now we update the body section of index.html:
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
The above code includes a total container—namely the div with id="page"—which contains two child containers: the left container and the right container, with ids "left-container" and "right-container" respectively. Each container contains seven child containers with plant images. The plant image child containers include img class names, alt text for alternative rendering when images cannot be displayed, ids for image assignment, and src for the location of the image.

By combining the code from these sections, a basic webpage can be constructed. Opening the HTML file in a browser will render the content.

## 5 Semantic Tags
Using semantic tags means employing HTML tags to represent the type of data or interaction they are designed for. Different interaction types are indicated by different tags. For example, core titles use `<h1>My Terrarium</h1>`. In addition, titles use `<h1>`, unordered lists use `<ul>`, which helps screen readers understand the content of the page. Generally, buttons should be written as `<button>` and lists as `<li>`. We can also use `<span>` elements with special styling and click handling as buttons, but if an element appears as a button, disabled users can conveniently determine its position on the page and interact with it using existing technologies. Therefore, it is preferable to use semantic markup as much as possible.  
Finally, add the following code:  
```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```  
to create a glass container including elements such as the jar's top, glossy long/short walls, dirt, and jar bottom.  
## 6 Epilogue  
In summary, due to my limited familiarity with HTML languages, I felt that this lesson mainly involved reviewing the lesson plan and reading code, without fully grasping the essence of HTML. In the future, I will need to rely on more practice to master it.