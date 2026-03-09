---
layout: post
title: "Python Course Notes 1"
date: 2025-03-31
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2025-03-31-python_notes_0
source_lang: zh
source_title: "python课程学习笔记1"
title_key: course_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.253Z"
source_hash: 9fa04c4b6b3399052bc2682ecac32c285ee0ed44fad2391fe25bdb82fb2ceddb
---

This note mainly records the course notes from Harford's [CS50](https://cs50.harvard.edu/python/2022/) course, which is the lecture0 notes. It primarily introduces the basics of Python assignments, including variables and functions
<!-- more -->

## 1 Hello World

~~~python
code hello.py
~~~

You can open VSCode and create a file named `hello.py`.

~~~python
print("hello world")
~~~

Then enter the following in the terminal:

~~~python
python hello.py
~~~

The terminal will then print `hello world`.

`Function` is actually like a `verb`, representing an action, such as the `print` action or `input` action.

`Bug` is used to describe situations where human programming differs from the standard interpreter settings, causing the computer to fail to execute the code correctly. At this point, the interpreter will inform you of what issues exist.

~~~python
input("what's your name?")
print("hello world")
~~~

## 2 Input and Variable

However, the above code cannot greet the user by their name, because we need a way to store the input, which is `variable`. `Variable` can store numerical values, text, etc.

~~~python
name=input("what's your name?")
print("hello world")
~~~

ps. For `print`, the default ends with a newline, but you can set `end=`:

~~~python
print("hello",end="!!!")
# finally print: hello!!!
~~~

Note that the equals sign here does not represent equality, but rather assignment or value allocation.

We want to print the information stored in `name`, directly using `print("hello name")` is not possible. Instead, you should:

~~~python
name=input("what's your name?")
print(f"hello {name}")
~~~

`Comments` are annotations that the computer will ignore the content within.

~~~python
# say hello to your code
name=input("what's your name?")
print(f"hello {name}")
~~~

`Pseudocode` is pseudocode that assists in coding构思.

## 3 String Function

You can also use string addition `"hello,"+name` to achieve this.

> Reading official documentation is always an important way to understand function usage.

If you want to use `“”` in `print`, you can alternate single and double quotes or use escaping:

~~~
print("hello,\"David\"")
# or
print('hello,"David"')
~~~

For strings, there are many functions for string operations, including removing whitespace, case conversion, etc.:

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the string
name = name.strip()

# Print the output
print(f"hello, {name}")
~~~

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the string
name = name.strip()

# Capitalize the first letter of the sentence
name = name.capitalize()

# Print the output
print(f"hello, {name}")
~~~

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the string
name = name.strip()

# Capitalize the first letter of each word
name = name.title()

# Print the output
print(f"hello, {name}")
~~~

Of course, removing whitespace and capitalization can be done in one line:

~~~python
name = name.strip().title()
~~~

It depends on your coding style.

In addition, you can use `split` to split strings.

## 4 int
In Python, integers are called `int`.  
In the mathematical world, we are familiar with `+`, `-`, `*`, `/`, and `%` (modulo operation).  

We can set some variables to certain integers:  

```python
x = 1
y = 2

z = x + y

print(z)
```  

In addition, we can use `input()` to obtain numerical inputs. Note that `input()` returns a string, and we need to use the `int` function to convert it into an integer:  

```python
x = input("What's x? ")
y = input("What's y? ")

z = int(x) + int(y)

print(z)
```  

Note that it is generally better to have code with readability (for example, one-liners are not recommended).  

## 5 Float type  

Besides strings and integers, there is also the float type for representing many decimals, which is the third data type we need to pay attention to.  

```python
x = float(input("What's x? "))
y = float(input("What's y? "))

print(x + y)
```  

This converts user input into a float using the `float` method.  

In addition, we can use `round` to achieve rounding:  

```python
round(number[, ndigits])
```  

`number` is the value to be rounded, and the number after the comma is the precision of decimal places.  

For example:  

```python
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result and round
z = round(x / y, 2)

# Print the result
print(z)
```  

In addition, if the number has many digits, we can use the following method to format the number with commas every three digits, like `2,500`:  

```python
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Create a rounded result
z = round(x + y)

# Print the formatted result
print(f"{z:,}")
```  

Controlling decimal places can also be achieved using:  

```python
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result
z = x / y

# Print the result
print(f"{z:.2f}")
```  

The `fstring` implementation: `f"{value:.2f}"` retains two decimal places.  

## 6 def function  

For repeated operations, we can define a function to avoid repeatedly copying code:  

```python
def hello():
    print("hello")


name = input("What's your name? ")
hello()
print(name)
```  

Here, `def` followed by `hello` is the function name, `()` is the function's parameter, which is empty here. Of course, we can also set parameters:  

```python
# Create our own function
def hello(to):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)
```  

Here, we set a parameter `to` for the `hello` function, so we need to pass an argument when using it: `hello(name)`.  

We can set initial values for parameters to have a default value even if no arguments are passed. Setting initial values is done via `=` in `()`:  

```python
# Create our own function
def hello(to="world"):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)

# Output without passing the expected arguments
hello()
```  

Here, the parameter `to` is set with an initial default value of `"world"`. Once you pass `name`, the value of `to` is no longer the default `"world"` but the content of `name`.  

Defining functions is like making tools. Once we have several tools, we need to define workflows, typically by defining a `main` function:  

```python
def main():

    # Output using our own function
    name = input("What's your name? ")
    hello(name)

    # Output without passing the expected arguments
    hello()


# Create our own function
def hello(to="world"):
    print("hello,", to)
```  

However, the above only defines the `main` function without execution, so we need to add the execution statement `main()`:  

```python
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
```  

Sometimes, defining functions not only requires operations but also processes input data and outputs it. In such cases, we use `return` to output the function's result back to the main program:  

```python
def main():
    x = int(input("What's x? "))
    print("x squared is", square(x))


def square(n):
    return n * n


main()
```
