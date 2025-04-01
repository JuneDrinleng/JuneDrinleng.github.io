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

## 1 hello world

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

## 2 input and variable

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

## 3 string function

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

## 4 int

在Python中，整数称为int。
在数学世界中，我们熟悉 +， - ， *， /和％（取模操作）

我们可以设定一些变量是某些整数：

~~~python
x = 1
y = 2

z = x + y

print(z)
~~~

除此之外我们可以用input的方式来获取输入的数字，需要注意的是input得到的是字符串，我们需要用`int`函数将其转化为整数

~~~python
x = input("What's x? ")
y = input("What's y? ")

z = int(x) + int(y)

print(z)
~~~

需要注意的是，一般最好是的自己的代码有一定的可读性（比如说一行流的代码就不是很建议）

## 5 Float type

除了字符串和整数之外，还有浮点数表示许多的小数，这便是我们需要关注的第三个数据类型

~~~
x = float(input("What's x? "))
y = float(input("What's y? "))

print(x + y)
~~~

这样就可以将用户输入的结果转化成浮点by using `float`方式

除此之外，还可以使用`round`实现四舍五入

~~~
round(number[,ndigits])
~~~

number是你要四舍五入的，逗号后面的是四舍五入的小数点后位数精度

例如：

~~~
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result and round
z = round(x / y, 2)

# Print the result
print(z)
~~~



除此之外，如果数字位数很多，我们可以使用以下方式使得数字呈现每3位数一个逗号`2,500`一样的形式：

~~~
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Create a rounded result
z = round(x + y)

# Print the formatted result
print(f"{z:,}")
~~~

控制小数点位数还可以使用：

~~~
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result
z = x / y

# Print the result
print(f"{z:.2f}")

~~~

中的`fstring`实现：`f"{value:.2f}" `是保留两位小数

## 6 def function

对于多次重复的操作，我们可以定义一个函数，从而避免重复的操作反复的复制代码：

~~~python
def hello():
    print("hello")


name = input("What's your name? ")
hello()
print(name)
~~~

这里，`def`后面的`hello`是函数名，`()`是函数的参数，这里为空，当然我们也可以设置参数：

~~~python
# Create our own function
def hello(to):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)
~~~

这里就是给`hello`函数设置了一个参数`to`，所以1我们在使用的时候需要传入参数：`hello(name)`

我们可以为参数设置初始值，使得即便没有参数传入我们也有一个默认值，设置初始值在`()`中通过`=`实现:

~~~python
# Create our own function
def hello(to="world"):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)

# Output without passing the expected arguments
hello()
~~~

这里就是设置参数`to`的初始默认值是`"world"`，一旦你传入了`name`，那么`to`的值就不再是默认的`"world"`而是`name`中的内容

定义函数就像是造工具，那么有了若干工具之后，我们需要定义工作流，一般通过定义`main`函数的方式实现：

~~~python
def main():

    # Output using our own function
    name = input("What's your name? ")
    hello(name)

    # Output without passing the expected arguments
    hello()


# Create our own function
def hello(to="world"):
    print("hello,", to)
~~~

但上述的只是定义了main函数，没有执行，所以还需要加上执行语句`main()`：

~~~
def main():

    # Output using our own function
    name = input("What's your name? ")
    hello(name)

    # Output without passing the expected arguments
    hello()


# Create our own function
def hello(to="world"):
    print("hello,", to)


main()
~~~

有时候，我们定义函数不仅仅需要进行操作，还需要将我们输入的数据处理后输出，那么这里使用`return`的方式，将函数的结果输出返回到主程序中：

~~~python
def main():
    x = int(input("What's x? "))
    print("x squared is", square(x))


def square(n):
    return n * n


main()
~~~

