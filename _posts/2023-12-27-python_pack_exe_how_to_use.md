---
layout: post
title: "python打包成exe指南"
date:   2023-12-27
tags: [python]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍python程序打包成exe的过程问题，并列举了几个较为常见的例子
<!-- more -->

# python打包成exe指南

## 0 前言

之所以用这个指南是因为发现直接打包混乱且庞大，因此写了这个指南方便后续的使用

## 1 环境

最开始尝试在python的conda环境下打包，然后发现打包出的exe特别大，包含了很多不需要的包，因此研究了一番pip env，最终研究明白了，此处建议对每一个项目新建一个虚拟环境（使用pip env），当然平时写的时候可以用conda环境，最后打包的时候只需要把使用了的包安装在pip env里就行了。这样可以最大程度的减小exe的大小

如何创建pip env虚拟环境参见[pip env 使用指南](./pip_env_how_to_use.md)

## 2 安装打包所需的包

先激活你的环境，然后输入下列：

~~~
pip3 install pyinstaller
~~~

安装好后，cd在源代码所在的文件夹，如果有logo的话也可以放在这个文件夹里

## 3 打包

输入（三选一，根据情况来）：

~~~
Pyinstaller -F py_word.py # 打包exe

Pyinstaller -F -w py_word.py #不带控制台的打包

Pyinstaller -F -w -i chengzi.ico py_word.py #打包指定exe图标打包
~~~

这里的-w是不保留命令行窗口，改成-c即可保留命令行窗口。

这里的chengzi.ico是exe的图标所需的文件，可以改成你的logo的文件名

这里的py_word.py是他的源代码，换成你的源代码名字即可

要命名生成的exe，请加-n 你的名字，例如我希望名字是exo，则可以输入

~~~python
Pyinstaller -F -c -i chengzi.ico py_word.py -n exo
~~~

## 4 形成压缩包

把dist文件夹里的exe拿出来，和build，.spec文件，以及可能的示例数据example、readme都打包到一个zip，就形成了release

## 5 参考

[别再问我Python打包成exe了（最适合小白的终极解答）！](https://zhuanlan.zhihu.com/p/370914926)
