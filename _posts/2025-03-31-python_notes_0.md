---
layout: post
title: "python课程学习笔记1"
date:   2025-03-31
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录Harford的[CS50](https://cs50.harvard.edu/python/2022/)课程笔记，本笔记是lecture0的笔记，其主要介绍的是python作业的入门的变量和函数
<!-- more -->

~~~python
code hello.py
~~~

可以打开vscode，创建一个叫`hello.py`的文件。

~~~python
print("hello world")
~~~

然后在终端输入

~~~python
python hello.py
~~~

然后终端就会打印`hello world`

`function`实际上就像`verb`一样，是个动词，表示一些动作，比如`print`动作，`input`动作

`bug`则用于描述，人类编程时与标准解释器设置的不一样导致计算机无法正确运行代码，此时解释器会告诉你有些什么问题

~~~python
input("what's your name?")
print("hello world")
~~~

但上述并不能实现对输入的人名打招呼，这是因为我们需要一些存储输入的东西的方式，这就是`variable`。 `varialbe`可以存储数值、文本等等的信息

~~~python
name=input("what's your name?")
print("hello world")
~~~

ps.对于`print`，默认`print`以换行结尾，但你也可以设置`end=`:

~~~python
print("hello",end="!!!")
# finally print: hello!!!
~~~



需要注意的是，等号在这不表示等于，而是分配或者赋值

我们希望`print`出`name`内的信息，直接`print("hello name")`是不行的，相反应该：

~~~python
name=input("what's your name?")
print(f"hello {name}")
~~~

`comments`注释，计算机会忽略你在`comments`内的内容

~~~python
# say hello to your code
name=input("what's your name?")
print(f"hello {name}")
~~~

`Pseudocode`是伪代码，辅助学你进行代码构思

当然你也可以使用字符串加法`"hello,"+name`实现

> 阅读官方文档总归是了解函数使用的一个重要方式

如果想使用`“”`在`print`中，可以使用单双引号交替，也可以使用转义：

~~~
print("hello,\"David\"")
# or
print('hello,"David"')
~~~

对于字符串，字符串本身有很多函数操作，包括去除空格，大小写等：

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

# Print the output
print(f"hello, {name}")
~~~

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

# Capitalize the first letter of sentence
name = name.capitalize()

# Print the output
print(f"hello, {name}")
~~~

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

# Capitalize the first letter of each word
name = name.title()

# Print the output
print(f"hello, {name}")
~~~

当然，去除空格和大写可以在一行内搞定：

~~~python
name = name.strip().title()
~~~

取决于你自己的代码风格

除此之外你还可以使用`split`来分割字符串