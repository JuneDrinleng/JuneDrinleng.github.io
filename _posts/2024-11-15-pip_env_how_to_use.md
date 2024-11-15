---
layout: post
title: "pip env 使用指南"
date:   2024-11-15
tags: [python]
comments: true
author: junedrinleng
TOC: true

---

该笔记主要介绍python程序打包成exe时的虚拟环境问题，之所以不用conda是因为conda环境生成exe体积很大且会打包很多不必要的包，因此选择pip env实现
<!-- more -->
# pip env 使用指南

pip env主要是在你的项目下新建一个虚拟环境，但是会面临以下几个问题

其一是新建环境位于c盘容易寄，其二是命名随机

因此，为了方便使用，首先先要对环境变量进行添加

## 1 环境变量的添加

### 1.1修改系统环境变量WORKON_HOME

修改系统环境变量 WORKON_HOME，如果没有就新建，其值设置为 **.**

解释：. 代表是对于工作目录来说的当前目录，设置完之后的作用是虚拟环境会安装在项目代码的工作目录下。

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-15-pip_env_how_to_use/fbac368be13c4cd49d8a288b87334c05.png)

### 1.2 新建并修改系统环境变量 PIPENV_CUSTOM_VENV_NAME

新建并修改系统环境变量 PIPENV_CUSTOM_VENV_NAME，其值设置后的作用是虚拟环境所在文件夹的命名不是随机生成的了，而是根据这个字符变量。比如我设置成下图中的venv，那么最后我的虚拟环境文件夹名就是venv，当然这个名字你也可以自己改成其他的

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-15-pip_env_how_to_use/5014664d3bfc47b795a1869c4dc87166.png)

## 2 创建虚拟环境

### 2.0 安装pipenv

安装python是从官网下载某一版本的python，然后添加到环境变量

如果你的电脑安装python之后没有安装过pipenv，那么需要经过这步

~~~
pip install pipenv
~~~

### 2.1 cd到虚拟环境的位置

首先第一步cd 到你的工作目录，请用cmd实现，因为终端已经添加了conda路径，两个在一起会打架

### 2.2 创建虚拟环境

~~~
pipenv install
~~~

### 2.3 激活新创建的虚拟环境

~~~
pipenv shell
~~~

### 2.4 安装依赖

需要注意的是，这里的requirements和conda生成的是不一样的，不能混淆了

~~~
pipenv install -r requirements.txt
~~~

注：如何生成requirements文件

~~~
pip freeze > requirements.txt
~~~



### 2.5 删除环境

cd 到你的虚拟环境位置，例如venv文件夹是虚拟环境，那就cd到他的上一级

~~~
pipenv --rm
~~~

## 3 参考

[python项目结合pipenv创建requirements.txt实现快速安装依赖包](https://ww4k.com/python/requirements_pipenv.html)

[Python Docs](https://hellogitlab.com/backend/python/)
