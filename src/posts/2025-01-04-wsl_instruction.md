---
layout: post
title: "WSL使用指南"
date:   2025-01-04
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录本人在使用WSL时遇到的问题以及解决方案，以及一些常用的命令。
<!-- more -->


## 0 前言

最近在进行项目环境测试的时候，遇见了路径的一些问题，开发环境的路径都是基于Linux的，因此在Windows下的路径就会出现一些问题，而本人在调试的时候不打算使用服务器，因此折腾起了wsl

## 1 wsl的安装

在powershell中输入WSL的以下命令：

    wsl --install

安装特定的Linux发行版可以通过微软商店来实现

## 2 git的配置

首先得确认所使用的Linux发行版是否有git

    git --version

如果有的话，那么就会有git的版本信息，没有的话可以用以下命令进行安装：（Ubuntu）

~~~
sudo apt update
sudo apt install git
~~~

接下来就是在命令行中配置git的账户：

~~~
# 配置用户名
git config --global user.name "Your Name"

# 配置邮箱
git config --global user.email "your.email@example.com"
~~~

这里的`global`是全局设置账户的意思，如果不想要全局设置的话可以省略。这里的用户名和配置的邮箱如果要在GitHub中使用的话最好和GitHub的注册用户名以及邮箱保持一致

（option）GitHub的ssh配置

生成一个ssh密钥：

~~~
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
~~~

这里的邮箱就是你的GitHub的邮箱

将上述生成的ssh公私钥匙对中的私钥部署到.ssh文件夹中：（个人倾向于直接在vscode的ssh里手动移动）

~~~
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
~~~

最后复制公钥内容并在GitHub的settings-->SSH and GPG keys -> New SSH key中创建新的公钥，将复制的公钥粘贴进去

测试是否配置成功：

~~~
ssh -T git@github.com
~~~

之后就可以比较方便的使用ssh进行git的操作后push或者pull到GitHub了

## 3 copilot的配置

    因为使用copilot的时候往往会遇到网络问题而导致无法链接，相对于折腾wsl的网络，更合适的是直接在vscode中配置copilot为ui模式：  
    
    1. 在vscode中安装copilot插件
    2. 在vscode的设置中输入remote.extensionKind，打开设置的json文件，添加以下的内容：
    ```json
    "remote.extensionKind": {
            "GitHub.copilot-chat": [
        "ui"
    ],
        "GitHub.copilot": [
            "ui"
        ],
    }
    ```
    然后重启wsl的vscode即可

