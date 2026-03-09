---
layout: post
title: "Python Packaging into EXE Guide"
date: 2023-12-27
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2023-12-27-python_pack_exe_how_to_use
source_lang: zh
source_title: "python打包成exe指南"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.105Z"
source_hash: 5a83ca17b3baceaaf6eaa3a40d320cd015e7a917ac528505c3646e595940619a
---

This note mainly introduces the process of packaging Python programs into EXE files, and lists several common examples
<!-- more -->

# Python Packaging into EXE Guide

## 0 Introduction

This guide was created because direct packaging resulted in chaotic and large files. This guide is written to facilitate future use.

## 1 Environment

Initially, I tried packaging in a Python Conda environment, but the generated EXE file was excessively large, containing many unnecessary packages. After researching pip env, I finally understood the process. It is recommended to create a new virtual environment for each project (using pip env). While writing code, you can use a Conda environment. When packaging, simply install the required packages in the pip env. This approach minimizes the EXE file size to the maximum extent.

How to create a pip env virtual environment, refer to [pip env Usage Guide](./pip_env_how_to_use.md)

## 2 Install Packaging Required Packages

Activate your environment first, then input the following:

~~~
pip3 install pyinstaller
~~~

After installation, navigate to the folder containing the source code. You can also place a logo file in this folder if available.

## 3 Packaging

Input (choose one of the three options based on your situation):

~~~
Pyinstaller -F py_word.py # Package EXE

Pyinstaller -F -w py_word.py # Package without console

Pyinstaller -F -w -i chengzi.ico py_word.py # Package with specified EXE icon
~~~

The -w option hides the console window; change it to -c to keep the console window.

The chengzi.ico file is the icon required for the EXE file. You can replace it with your own logo file name.

The py_word.py is the source code file; replace it with your own source code name.

To name the generated EXE file, add -n followed by your desired name. For example, if you want the name to be "exo", you can input:

~~~python
Pyinstaller -F -c -i chengzi.ico py_word.py -n exo
~~~

## 4 Create a Compressed Archive

Extract the EXE file from the dist folder, and package it together with the build folder, .spec file, and possibly example data (example), readme, into a single ZIP file to form the release.

## 5 References

[Don't Ask Me Again About Python Packaging into EXE (Ultimate Guide for Beginners)!](https://zhuanlan.zhihu.com/p/370914926)
