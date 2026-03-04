---
layout: post
title: "Web Development Practice-Flower Vase Project"
date: 2025-01-16
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

This note mainly introduces how to use html+css+js to implement a flower vase project, including the layout of the front-end of the web page and the drag operation of objects in the web page.

<!-- more -->

## 0 Background

After learning and understanding the basic syntax of JS, we can start working on the first front-end project. The reference here is [Microsoft's front-end development learning guide](https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/3-terrarium/3-intro-to-DOM-and-closures). In this project, we will follow its guidance to complete the production of a flower vase with a basic layout and drag operations for each plant. The specific project process consists of the following three operations, which are to construct basic web page element objects through HTML, then use CSS to style the web page objects, including colors and operational attributes, and finally use JavaScript to implement dragging and other operations on web page objects.

## 1 html basic layout

First, we construct the basic structure of html. For the sake of browser compatibility, we use `<!DOCTYPE html>`. The file format of html starts as follows:

```
<!DOCTYPE html>
<html>
    // details
</html>
```

In the html file, it mainly includes three parts: <head>, <body> and <footer>. We will introduce them in turn:

### 1.1 head part

The head part generally includes the following basic contents, namely the title of the web page <title>, the character set of the web page <meta charset>, the browser compatibility and rendering method <meta http-equiv="X-UA-Compatible" content="IE=edge" />, and the view scaling information of the web page <meta name="viewport" content="width=device-width, initial-scale=1" />. The specific code is as follows:

```
<head>
    <title>Welcome to my Terrarium</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

The content in <tilte></title> is the title of the web page. <meta charset="utf-8" /> means that the web page characters we choose are utf-8 to be compatible with as many languages as possible. The third line is to ensure that the web page uses the latest browser rendering method, and the last line is to ensure that the web page can be displayed normally on different devices.

### 1.2 footer part

The footer part of the web page is mainly used to place the copyright information of the web page. It is usually placed at the bottom of the web page. Like the body part, some tag objects or other objects can be inserted to display information.

### 1.3 body part

The body part is the main part of the web page, including the main content of the web page. It is generally implemented through tag objects, such as `<div>`, `<img>`, `<p>`, etc. These tag objects can be styled through CSS, and some interactive operations can also be implemented through JS, such as dragging and other operations.  
In the flower vase project, we only need to place 12 plant texture materials. We build them according to the following structure, namely the container object on the left ("left-container" div), the container object on the right ("right-container" div), and the flower vase object (terrarium div):
For floral vase terrarium, there are the following subcategories:
`jar-top`, `jar-walls`, `jar-bottom`, respectively the top, wall and bottom of the flower vase, in addition to the dust `dirt` object

```
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

For the left and right containers, there are 7 mapped plant objects in each container, and the two containers are in the same page object:

```
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
```

Through the above operations, we can see that the basic elements of the web page are all available. The next thing we need to do is to beautify the web page layout, which also requires our css style design..

## 2 css style design

In order to introduce the designed css style, we need to introduce the css file in the head part. The specific code is as follows:

```
<head>
    <link rel="stylesheet" href="./style.css" />
    \\other contents
</head>
```

At this time, the head part of index.html becomes:

```
    <head>
        <link rel="stylesheet" href="./style.css" />
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
```

Next we can style the object in the style.css file.
First, the title tag `h1`:

```
h1 {
	color: #3a241d;
	text-align: center;
}
```

The second step is to set the overall font for the body tag:

```
body {
	font-family: helvetica, arial, sans-serif;
}
```

It should be noted that the css formats for tags, objects and id selectors are different. For tags, it is just the tag name {}, for objects it is .object{}, and for id it is #id{}
For example, for the two id selectors of the left and right containers:

```
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
```

For the sub-object of the floral vase terrarium, it is:

```
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
```

In addition, the plant objects also need to be formatted, such as:

```
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
```

## 3 js implements drag operation

To implement js operations, you must introduce js related files into html files. The specific code is as follows:

```
<script src="./script.js" defer></script>
```

At this time, the head part of index.html becomes:

```
    <head>
        <link rel="stylesheet" href="./style.css" />
        <script src="./script.js" defer></script>
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
```

So for our target movement, there are the following questions:
Record the original position of the mouse. When the mouse is pressed, record the mouse position. When the mouse moves, calculate the mouse movement distance, then move the object to the new position. When the mouse is released, stop moving. The last thing is to stop recording if there is no dragging behavior.  
Just apply the above operations to each plant element.  
To implement the above steps, you can use the following code:

```
function dragElement(terrariumElement) {
    // Initialize four variables to save the position of the pointer dragging
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Fired when the user presses the mouse or touches the screen
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
      e.preventDefault(); // Prevent default behavior (such as selected text, etc.)

      // Get the initial position of the pointer
      pos3 = e.clientX; // X coordinate of the pointer
      pos4 = e.clientY; // Y coordinate of the pointer

      // pointerMove is triggered when the pointer moves
      document.onpointermove = pointerMove;

      // Stop dragging when the pointer is raised
      document.onpointerup = stopDrag;
    }

    function pointerMove(e) {
      // Calculate the movement distance of the pointer
      pos1 = pos3 - e.clientX; // Lateral movement distance
      pos2 = pos4 - e.clientY; // Vertical movement distance
      pos3 = e.clientX; // Update the current X coordinate of the pointer
      pos4 = e.clientY; // Update the current Y coordinate of the pointer

      // Update the position of the element (via the CSS `top` and `left` properties)
      terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
      terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }

    function stopDrag() {
      // Disable the event listener to prevent unnecessary performance consumption
      document.onpointermove = null;
      document.onpointerup = null;
    }
  }
```

In this way, the dragged position of the plant map is updated according to the drag operation, thereby realizing the drag operation of the plant map. After setting up the above method, apply it to each plant map object:

```
// Get all elements with class "plant"
const plants = document.querySelectorAll(".plant");// Enable drag functionality for each plant element
plants.forEach((plant) => {
  // Make sure the element has position style
  plant.style.position = "absolute";
  dragElement(plant);
});
```

Finally, you can get the above-mentioned flower vase in the browser.

## 4 DOM

DOM is the abbreviation of Document Object Model and is a programming interface for HTML and XML documents. It represents a document (such as an HTML page) as a tree structure, allowing developers to access and manipulate the content, structure, and style of the document through programming languages ​​(such as JavaScript).

It can be simply understood as: DOM is a method provided by browsers that allows developers to use code to manipulate the structure and content of web pages.

document is the entry point of the DOM and represents the entire HTML document. It provides access to page content and action elements.

Common functions:

Get elements:
document.getElementById('id'): Get the element by ID.
document.querySelector('selector'): Get elements through CSS selectors.
document.querySelectorAll('selector'): Get all matching elements.
Create element:
document.createElement('tagName'): Create a new element.
Access properties:
document.title: Access or modify the page title.
document.body: accesses the <body> element.

That is to say, it is actually convenient to use js to operate HTML elements, such as getting elements, creating elements, accessing attributes, etc.

## 5 Closure

A closure is a combination of a function and the variables that can be accessed inside the function. In JavaScript, functions are first-class citizens and can be passed as arguments to other functions and as return values ​​from other functions. When a function returns, its scope chain is not destroyed, so the inner function can still access the outer function's variables. This mechanism is closure.
