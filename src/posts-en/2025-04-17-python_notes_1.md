---
layout: post
title: "python course study notes 2"
date: 2025-04-17
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

This note mainly records Harford’s [CS50](https://cs50.harvard.edu/python/2022/) course notes. This note is a compilation of `str` related usage, lecture3 and lecture4 related courses, including `try` statements, and `random`, `statistic` and other packages
<!-- more -->

## 1 str common usage

There are many common operations on strings, such as case conversion, splitting, removing spaces, and output formatting. For specific documentation, please refer to [here](https://docs.python.org/3/library/stdtypes.html#string-methods)

### 1.1 Case conversion

Lowercase all letters in a string:

~~~python
str.lower()
~~~

Determine whether it is lowercase:

~~~python
str.islower
~~~

Titleization (capitalize the first letter of each word. Example: I Like My Home)

~~~python
str.title()
~~~

Determine whether it is titled:

~~~python
str.istitle()
~~~

Capitalize the first letter of sentences:

~~~python
str.capitalize()
~~~

Determine whether the first letter of a sentence is capitalized:

~~~python
str.iscapitalize()
~~~

Make the letters of a string all uppercase:

~~~python
str.upper()
~~~

Similarly, determine whether it is all capital letters:

~~~python
str.isupper
~~~



### 1.2 Start with xx and end with xx

~~~python
str.startswith(symbol_str)
~~~

The symbol_str here is the type of start you want to determine. If you want to know whether it starts with `hello`, you can use `str.startswith("hello")`

Same ending:

~~~python
str.endswith(symbol_str)
~~~

### 1.3 Removal of content

Remove spaces

~~~python
str.strip()
~~~

Remove the specified string:

![image-20250417110713887](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250417110713887.png)

### 1.4 Split and replace

#### 1.4.1 Split statement `split`

If you need to split a string, you can use the `split` syntax, which returns a list of split results. The `maxsplit` parameter controls how many times `split` is used:

~~~python
str.split(sep,maxsplit)
~~~

If sep is filled with nothing, it will be divided by spaces ` ` by default.

![image-20250417111043507](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250417111043507.png)

Of course, if we know that a string is in the form of yyyy/mm/dd, and we only need to segment the year, then we can:

~~~python
str_date=2020/2/12
year,others_str = str_date.split("/",maxsplit=1)
~~~

There is no need to perform assignment operations from the separated list, and directly store the split results into variables: `year` is 2020, `others_str` is 2/12

#### 1.4.2 Replacement statement

~~~python
str.replace(old, new, count=-1)
~~~

Here old is the string to be replaced, and new is the part of the string used for replacement. The number of replacements is controlled by count:

~~~python
str_hello='hello'
str_hello=str_hello.replace("l","",1)
~~~

Replace the `l` in `hello` with nothing, only replace it once, then after the above operation, `str_hello` becomes `helo`

### 1.5 Determine whether a string is a number

Since sometimes we enter a month, for example, it may be a letter like June or the number 6, so in order to extract the information we need to determine whether it is a number.

~~~python
str.isdigit()
~~~

The `isdigit` function can achieve the above

~~~python
month='June'
if not month.isdigit():
	month=6
~~~

It should be noted that `9` will be judged as non-digit in `isdigit()`, so it is best to `strip` the space before judging.

## 2 Dictionary sorting output values alphabetically by key

Since it is often unnecessary for us to add key-value pairs to the dictionary, in order to sort the output, we can use the following method

~~~python
dict={
"banana":3,
"apple":2
}
for i in sorted(dict.keys()):
	print(dict[i])
~~~

Implemented using sorted function

## 3 try statement

~~~python
try:
	#something we try to do
except ValueError:
	# if ValueError occurs, what we need to do
else:
	# if no error occurs, what we need to do
~~~

We can use break to break the while loop, or we can use pass to continue without anything happening.

##