---
layout: post
title: "Python Course Learning Notes 2"
date: 2025-04-17
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2025-04-17-python_notes_1
source_lang: zh
source_title: "python课程学习笔记2"
title_key: course_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.272Z"
source_hash: 8996c5e1ba37a249da0ac5f2172b4a61b28b3eefcc6c3fdedc4f363be9418aac
---

This note mainly records the lecture notes from Harford's [CS50](https://cs50.harvard.edu/python/2022/) course, focusing on the usage of `str`, lectures 3 and 4, including `try` statements, as well as `random`, `statistic` packages, etc.
<!-- more -->

## 1 Common String Operations

There are many common operations for strings, such as case conversion, splitting, removing whitespace, and formatting output. Detailed documentation can be referenced [here](https://docs.python.org/3/library/stdtypes.html#string-methods)

### 1.1 Case Conversion

Convert all letters in the string to lowercase:

~~~python
str.lower()
~~~

Check if it is lowercase:

~~~python
str.islower
~~~

Title case (the first letter of each word is capitalized. For example: I Like My Home)

~~~python
str.title()
~~~

Check if it is title-cased:

~~~python
str.istitle()
~~~

Capitalize the first letter of the sentence:

~~~python
str.capitalize()
~~~

Check if the first letter of the sentence is capitalized:

~~~python
str.iscapitalize()
~~~

Convert all letters in the string to uppercase:

~~~python
str.upper()
~~~

Similarly, check if it is all uppercase:

~~~python
str.isupper
~~~

### 1.2 Starts with/Ends with

~~~python
str.startswith(symbol_str)
~~~

Here, `symbol_str` is the type of the starting character you want to check. For example, to check if it starts with `"hello"`, use `str.startswith("hello")`.

The ending is similar:

~~~python
str.endswith(symbol_str)
~~~

### 1.3 Removing Content

Remove whitespace:

~~~python
str.strip()
~~~

Remove specified string:

![image-20250417110713887](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250417110713887.png)

### 1.4 Splitting and Replacing

#### 1.4.1 Splitting with `split`

Use the `split` syntax to split a string, returning a list of split results. The `maxsplit` parameter controls how many times `split` is performed:

~~~python
str.split(sep, maxsplit)
~~~

If `sep` is left blank, it defaults to splitting by space ` `.

![image-20250417111043507](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250417111043507.png)

Of course, if we know a string is in the form of yyyy/mm/dd and we only need to extract the year, we can:

~~~python
str_date = "2020/2/12"
year, others_str = str_date.split("/", maxsplit=1)
~~~

No need to assign values from the split list again; directly assign the split results to variables: `year` is 2020, `others_str` is 2/12.

#### 1.4.2 Replacing

~~~python
str.replace(old, new, count=-1)
~~~

Here, `old` is the string to be replaced, and `new` is the string used for replacement. The replacement count is controlled by `count`:

~~~python
str_hello = 'hello'
str_hello = str_hello.replace("l", "", 1)
~~~

Replace the `l` in `hello` with an empty string, replacing only once. After the above operation, `str_hello` becomes `helo`.

### 1.5 Checking if a String is a Number

Sometimes, when we input, for example, a month, it could be June (a letter) or 6 (a number). To extract information, we need to determine if it is a number.

~~~python
str.isdigit()
~~~

The `isdigit()` function can achieve this.

~~~python
month = 'June'
if not month.isdigit():
    month = 6
~~~

Note that `  9` (with spaces) is considered non-numeric by `isdigit()`, so it's best to `strip` whitespace before checking.

## 2 Dictionary Key Alphabetical Order Sorting Output Values
Since adding key-value pairs to a dictionary is often unnecessary, we can use the following approach to sort the output:

~~~python
dict={
"banana":3,
"apple":2
}
for i in sorted(dict.keys()):
	print(dict[i])
~~~

Implementing with the sorted function

## 3 try statement

~~~python
try:
	#something we try to do
except ValueError:
	# if ValueError occurs, what we need to do
else:
	# if no error occurs, what we need to do
~~~

We can use break to break out of a while loop, or use pass to let nothing happen and continue proceeding

## 
 /think
