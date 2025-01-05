---
layout: post
title: "WSL使用指南"
date:   2025-01-04
tags: [system]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录本人在使用WSL时遇到的问题以及解决方案，以及一些常用的命令。
<!-- more -->


## 0 前言

最近在进行项目环境测试的时候，遇见了路径的一些问题，开发环境的路径都是基于Linux的，因此在Windows下的路径就会出现一些问题，而本人在调试的时候不打算使用服务器，因此折腾起了wsl

## 1 wsl的安装
    to do……


## 2 git的配置
    to do……

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


