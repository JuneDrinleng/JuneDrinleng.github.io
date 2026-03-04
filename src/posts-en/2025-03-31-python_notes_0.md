---
layout: post
title: "python course study notes 1"
date: 2025-03-31
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

This note mainly records Harford’s [CS50](https://cs50.harvard.edu/python/2022/) course notes. This note is the note of lecture0. It mainly introduces the variables and functions of the introductory python assignment.
<!-- more -->

## 1 hello world

~~~python
code hello.py
~~~

You can open vscode and create a file called `hello.py`.

~~~python
print("hello world")
~~~

Then enter in the terminal

~~~python
python hello.py
~~~

Then the terminal will print `hello world`

`function` is actually just like `verb`, it is a verb, expressing some actions, such as `print` action, `input` action

`bug` is used to describe when human programming is different from the standard interpreter settings, causing the computer to be unable to run the code correctly. At this time, the interpreter will tell you what the problem is.

~~~python
input("what's your name?")
print("hello world")
~~~

## 2 input and variable

But the above cannot achieve greeting the entered person's name. This is because we need some way to store the entered things, which is `variable`. `varialbe` can store information such as numerical values, text, etc.

~~~python
name=input("what's your name?")
print("hello world")
~~~

ps. For `print`, by default `print` ends with a newline, but you can also set `end=`:

~~~python
print("hello",end="!!!")
# finally print: hello!!!
~~~



It should be noted that the equal sign here does not mean equal, but allocation or assignment.

We want `print` to print out the information in `name`. Direct `print("hello name")` will not work. Instead, we should:

~~~python
name=input("what's your name?")
print(f"hello {name}")
~~~

`comments` comments, the computer will ignore your content in `comments`

~~~python
# say hello to your code
name=input("what's your name?")
print(f"hello {name}")
~~~

`Pseudocode` is pseudocode, which helps you to conceive of codes.

## 3 string function

Of course, you can also use string addition `"hello,"+name` to achieve

> Reading official documentation is always an important way to understand the use of functions

If you want to use `""` in `print`, you can alternate single and double quotes, or you can use escaping:

~~~
print("hello,\"David\"")
# or
print('hello,"David"')
~~~

For strings, there are many function operations on the string itself, including removing spaces, case, etc.:

~~~python
#Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

#Print the output
print(f"hello, {name}")
~~~

~~~python
#Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

# Capitalize the first letter of sentence
name = name.capitalize()

#Print the output
print(f"hello, {name}")
~~~

~~~python
#Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

# Capitalize the first letter of each word
name = name.title()

#Print the output
print(f"hello, {name}")
~~~

Of course, removing spaces and capitalization can be done in one line:

~~~python
name = name.strip().title()
~~~

Depends on your own coding style

In addition, you can also use `split` to split the string

## 4 int

In Python, integers are called ints.
In the world of mathematics we are familiar with +, -, *, / and % (modulo operations)

We can set some variables to be certain integers:

~~~python
x = 1
y=2

z = x + y

print(z)
~~~

In addition, we can use input to get the input number. It should be noted that input gets a string. We need to use the `int` function to convert it into an integer.

~~~python
x = input("What's x? ")
y = input("What's y? ")

z = int(x) + int(y)

print(z)
~~~

It should be noted that it is generally best for your code to have a certain degree of readability (for example, one-line flow code is not very recommended)

## 5 Float type

In addition to strings and integers, there are also floating point numbers that represent many decimals. This is the third data type we need to pay attention to.

~~~
x = float(input("What's x? "))
y = float(input("What's y? "))

print(x + y)
~~~

In this way, the results input by the user can be converted into floating point by using `float` method

In addition, you can also use `round` to achieve rounding

~~~
round(number[,ndigits])
~~~

The number is the number you want to round, and the number after the comma is the precision of the number of decimal places after the rounding.

For example:

~~~
#Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result and round
z = round(x / y, 2)

# Print the result
print(z)
~~~



In addition, if there are many digits, we can use the following method to make the number appear like a comma `2,500` for every 3 digits:

~~~
#Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Create a rounded result
z = round(x + y)

# Print the formatted result
print(f"{z:,}")
~~~

You can also control the number of decimal points using:

~~~
#Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result
z=x/y

# Print the result
print(f"{z:.2f}")

~~~

The implementation of `fstring` in: `f"{value:.2f}"` is to retain two decimal places

## 6 def function

For multiple repeated operations, we can define a function to avoid repeated code duplication for repeated operations:

~~~python
def hello():
    print("hello")


name = input("What's your name? ")
hello()
print(name)
~~~

Here, `hello` after `def` is the function name, and `()` is the parameter of the function. It is empty here. Of course, we can also set parameters:

~~~python
# Create our own function
def hello(to):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)
~~~

Here is a parameter `to` set for the `hello` function, so 1 we need to pass in the parameter when using it: `hello(name)`

We can set initial values for parameters so that we have a default value even if no parameters are passed in. Setting the initial value is achieved through `=` in `()`:~~~python
# Create our own function
def hello(to="world"):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)

# Output without passing the expected arguments
hello()
~~~

Here is the initial default value of the setting parameter `to` is `"world"`. Once you pass in `name`, the value of `to` is no longer the default `"world"` but the content in `name`

Defining functions is like making tools. After having several tools, we need to define workflows, which is usually achieved by defining the `main` function:

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

But the above only defines the main function and does not execute it, so we need to add the execution statement `main()`:

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

Sometimes, when we define a function, we not only need to perform operations, but also need to process the data we input and output it. So here we use `return` to return the result output of the function to the main program:

~~~python
def main():
    x = int(input("What's x? "))
    print("x squared is", square(x))


def square(n):
    return n*n


main()
~~~