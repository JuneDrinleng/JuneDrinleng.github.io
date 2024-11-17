---
layout: post
title: "博客图片的快速管理与上传"
date:   2024-11-17
tags: [others]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍如何管理以及快速的上传图片实现md的迅速博客化
<!-- more -->
## 背景

最近刚刚建立了我的个人网站，为了尽可能快的将自己以往的笔记都搬运上我的博客主页我一直在思考怎么能够提高搬运效率  

其实相对博客的md文件来说，最为重要的是图片的管理

博客的图片一般都是使用图床进行链接，而我在本地则更倾向于使用图片存储在相对路径为文件夹名.assets的文件夹里，为了实现快速转换，我提出了以下的方案。

## md文件编辑插入图片时的注意事项

我最开始发现问题是我的笔记都是用obsidian进行记录的，但是所有的obsidian的文件插入的图片是wiki格式的而不是markdown格式的，以至于我的typora并不能识别，所以如果使用obsidian的话请务必取消勾选图片的Wiki格式

![image-20241118003836633](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-17-blog_update/image-20241118003836633.png)

## 配置typora

这里使用的图床是picgo+github的图床组合，配置typora中的图床上传可以在文件-偏好设置里找到图片的设置：

![image-20241118004233677](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-17-blog_update/image-20241118004233677.png)

设置好上传服务设定，选择上传服务中的picgo，然后定位好picgo程序的exe的位置，不放心的可以点击验证图片上传选项

## 更新博客

### 设置picgo图床上传目标

由于我希望我的图床中图所在的文件夹与md文件名保持一致，所以需要设置一下picgo的图床上传位置：

![image-20241118004446321](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-17-blog_update/image-20241118004446321.png)

例如在这我设置的图床的仓库就是我的博客所在的仓库，分支选择main就好，token则需要在setting中找到

存储路径则选择的是博客仓库下的img/md文件名，例如我要上传2024-09-23_PGM_1_LocalProbabilisticMode我就设置如图所示的存储路径：img/2024-09-23_PGM_1_LocalProbabilisticMode/

**注意路径以/结尾**

设置好后点击确定即可

### 博文以及其图片上传

我一般会在本地使用typora编辑完所有之后将需要上传的博客以及其图片所在的文件夹复制在博客repo的_post文件夹里，然后用typora打开刚刚复制的md笔记，选择格式-图片-上传所有本地图片

![image-20241118004855933](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-17-blog_update/image-20241118004855933.png)

最后把md文件按照博客的命名规则命名，同时删除_post文件夹中之前复制的图片即可