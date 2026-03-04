---
layout: post
title: "Web Development Practical - Terrarium Project"
date:   2025-01-16
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

This note mainly introduces how to use html+css+js to implement a terrarium project, including the layout of the web frontend and the implementation of drag-and-drop operations for objects on the webpage
<!-- more -->
## 0 Background
After learning and understanding the basic syntax of JS, we can start working on our first frontend project. Here we refer to [Microsoft's frontend development learning guide](https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/3-terrarium/3-intro-to-DOM-and-closures). In this project, we will follow its guidance to create a terrarium with basic layout and drag-and-drop operations for each plant. The specific project process consists of the following three operations: constructing basic webpage elements using html, styling webpage objects with css including colors and operational properties, and finally implementing drag-and-drop operations for webpage objects using JavaScript.
## 1 HTML Basic Layout
First, construct the basic structure of html. To ensure browser compatibility, we adopt `<!DOCTYPE html>`, and the html file format starts as follows:
~~~
<!DOCTYPE html>
<html>
    // details
</html>
~~~
The html file mainly includes three parts: <head>, <body>, and <footer>, which we will introduce sequentially:
### 1.1 head Part
The head part generally includes the following basic contents: the webpage title <title>, the webpage character set <meta charset>, browser compatibility and rendering mode <meta http-equiv="X-UA-Compatible" content="IE=edge" />, and webpage viewport scaling information <meta name="viewport" content="width=device-width, initial-scale=1" />, with the specific code as follows:
~~~
<head>
    <title>Welcome to my Terrarium</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"  />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
~~~
The content within <tilte></title> is the webpage title, <meta charset="utf-8" /> indicates we use utf-8 character set for the webpage to ensure compatibility with as many languages as possible, the third line ensures the webpage uses the latest browser rendering mode, and the last line ensures the webpage can display normally on different devices.
### 1.2 footer Part
The footer part of the webpage is mainly used to place copyright information, generally placed at the bottom of the webpage, and can insert some tag objects or other objects to achieve information display like the body part.
### 1.3 body Part
The body part is the main part of the webpage, including the main content of the webpage, generally implemented through tag objects such as `<div>`, `<img>`, `<p>`, etc. These tag objects can be styled with css and also achieve some interactive operations with js, such as drag-and-drop operations.  
In the terrarium project, we only need to place 12 plant texture images. We build them according to the following structure: the left container object ("left-container" div), the right container object ("right-container" div), and the terrarium object (terrarium div):  
For the terrarium, there are the following subclasses:  
`jar-top`, `jar-walls`, `jar-bottom`, which are the top, walls, and bottom of the terrarium, respectively, and also the dirt `dirt` object
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
For the left and right containers, each container has 7 plant texture objects, and the two containers are in the same page object:
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
Through the above operations, we can see that the basic elements of the webpage are ready. The next step is to beautify the webpage layout, which requires css styling design.
To enable the introduction of designed CSS styles, we need to import the CSS file in the head section, with the specific code as follows:
~~~
<head>
    <link rel="stylesheet" href="./style.css" />
    \\other contents
</head>
~~~
At this point, the head section of index.html becomes:
~~~
    <head>
        <link rel="stylesheet" href="./style.css" />
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
~~~
Next, we can proceed to design styles for objects in the style.css file.
Firstly, for the h1 tag:
~~~
h1 {
	color: #3a241d;
	text-align: center;
}
~~~
Secondly, for the body tag, overall font settings are applied:
~~~
body {
	font-family: helvetica, arial, sans-serif;
}
~~~
Note that the CSS formatting for tags, objects, and id selectors differs. For tags, it's simply the tag name {}; for objects, it's .object{}; and for ids, it's #id{}.
For example, for the two id selectors of the left and right containers:
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
For the sub-objects of the terrarium (flower arrangement bottle), it would be:
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
In addition, formatting needs to be applied to plant objects, such as:
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
## 3 JavaScript Implementation of Dragging Operations
To implement JavaScript operations, we need to import the relevant JavaScript file into the HTML file, with the specific code as follows:
~~~
<script src="./script.js" defer></script>
~~~
At this point, the head section of index.html becomes:
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
For our target movement, there are several issues to address:
Record the original mouse position, capture the mouse position when it is pressed, calculate the mouse movement distance when it moves, and then move the object to the new position. When the mouse is released, stop the movement. Finally, if there is no dragging behavior, stop recording.
Applying the above operations to each plant element will achieve the desired effect.
To implement the above steps, the following code can be used:
~~~
function dragElement(terrariumElement) {
    // Initialize four variables to store the pointer dragging position
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    // Trigger when the user presses the mouse or touches the screen
    terrariumElement.onpointerdown = pointerDrag;
  
    function pointerDrag(e) {
      e.preventDefault(); // Prevent default behavior (e.g., selecting text)
  
      // Get the initial pointer position
      pos3 = e.clientX; // X coordinate of the pointer
      pos4 = e.clientY; // Y coordinate of the pointer
  
      // Trigger pointerMove when the pointer moves
      document.onpointermove = pointerMove;
  
      // Stop dragging when the pointer is lifted
      document.onpointerup = stopDrag;
    }
  
    function pointerMove(e) {
      // Calculate the pointer movement distance
      pos1 = pos3 - e.clientX; // Horizontal movement distance
      pos2 = pos4 - e.clientY; // Vertical movement distance
      pos3 = e.clientX; // Update the current X coordinate of the pointer
      pos4 = e.clientY; // Update the current Y coordinate of the pointer
  
      // Update the element's position (via CSS's `top` and `left` properties)
      terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
      terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }
  
    function stopDrag() {
      // Remove event listeners to prevent unnecessary performance consumption
      document.onpointermove = null;
      document.onpointerup = null;
    }
  }
~~~
By doing this, the position of the plant image can be updated according to the dragging operation, thereby achieving the dragging functionality for the plant images. After setting up the above method, apply it to each plant image object:
~~~
// Get all elements with the "plant" class
const plants = document.querySelectorAll(".plant");

// Enable dragging functionality for each plant element
plants.forEach((plant) => {
  // Ensure the element has a position style
  plant.style.position = "absolute";
  dragElement(plant);
});
~~~
Finally, the terrarium can be viewed in the browser.
## 4 DOM /think
DOM is the abbreviation for Document Object Model (Document Object Model), which serves as a programming interface for HTML and XML documents. It represents a document (such as an HTML page) as a tree-like structure, enabling developers to access and manipulate the document's content, structure, and style through programming languages like JavaScript.

It can be simply understood as: DOM is a way provided by the browser that allows developers to use code to manipulate the structure and content of a webpage.

document is the entry point of DOM, representing the entire HTML document. Through it, one can access the page content and manipulate elements.

Common functions:

Accessing elements:
document.getElementById('id'): Access an element by its ID.
document.querySelector('selector'): Access an element by a CSS selector.
document.querySelectorAll('selector'): Access all matching elements.
Creating elements:
document.createElement('tagName'): Create a new element.
Accessing attributes:
document.title: Access or modify the page title.
document.body: Access the <body> element.

In essence, it's a convenient way to use JavaScript to manipulate HTML elements, such as accessing elements, creating elements, and accessing attributes, etc.
## 5 Closures
A closure refers to the combination of a function and the variables accessible within that function. In JavaScript, functions are first-class citizens, meaning they can be passed as parameters to other functions and returned as values from other functions. When a function returns, its scope chain is not destroyed, allowing inner functions to still access variables from the outer function. This mechanism is known as a closure.