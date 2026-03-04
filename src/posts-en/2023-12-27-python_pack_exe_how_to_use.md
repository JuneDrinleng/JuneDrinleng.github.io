---
layout: post
title: "Guide to packaging python into exe"
date: 2023-12-27
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces the process of packaging python programs into exe, and lists several common examples.
<!-- more -->

# Python packaged into exe guide

## 0 Preface

The reason why I use this guide is because I found that direct packaging is confusing and bulky, so I wrote this guide to facilitate subsequent use.

## 1 Environment

I first tried to package in the conda environment of python, and then found that the packaged exe was very large and contained many unnecessary packages, so I studied pip env, and finally understood it. It is recommended to create a new virtual environment (using pip env) for each project. Of course, you can use the conda environment when writing. In the final packaging, you only need to install the used packages in pip env. This can reduce the size of the exe to the greatest extent

For how to create a pip env virtual environment, please refer to [pip env usage guide](./pip_env_how_to_use.md)

## 2 Install the packages required for packaging

First activate your environment, then enter the following:

~~~
pip3 install pyinstaller
~~~

After installation, cd in the folder where the source code is located. If there is a logo, it can also be placed in this folder.

## 3 Packing

Input (choose one of three, depending on the situation):

~~~
Pyinstaller -F py_word.py # Package exe

Pyinstaller -F -w py_word.py #Packaging without console

Pyinstaller -F -w -i chengzi.ico py_word.py #Package the specified exe icon package
~~~

The -w here does not retain the command line window. Change it to -c to retain the command line window.

The chengzi.ico here is the file required for the exe icon, which can be changed to the file name of your logo.

The py_word.py here is his source code, just replace it with your source code name

To name the generated exe, please add -n your name. For example, if I want the name to be exo, I can enter

~~~python
Pyinstaller -F -c -i chengzi.ico py_word.py -n exo
~~~

## 4 Form a compressed package

Take out the exe in the dist folder and package it with the build, .spec files, and possible sample data example and readme into a zip to form a release

## 5 Reference

[Don’t ask me again about Python being packaged into exe (the ultimate answer for beginners)! ](https://zhuanlan.zhihu.com/p/370914926)