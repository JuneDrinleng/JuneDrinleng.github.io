---
layout: post
title: "Quick management and uploading of blog images"
date: 2024-11-17
tags: [others]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces how to manage and quickly upload pictures to achieve rapid blogging of md.
<!-- more -->
## Background

I just recently established my personal website. In order to move all my past notes to my blog homepage as quickly as possible, I have been thinking about how to improve the efficiency of the move.

In fact, compared to the md file of the blog, the most important thing is the management of pictures.

Pictures on blogs are generally linked using the picture bed, but locally I prefer to use pictures stored in a folder with the relative path of the folder name .assets. In order to achieve quick conversion, I proposed the following solution.

## Precautions when inserting pictures when editing md files

I first discovered that the problem was that my notes were recorded using obsidian, but the pictures inserted into all obsidian files were in wiki format instead of markdown format, so my typora could not recognize it, so if you use obsidian, be sure to uncheck the wiki format of the pictures.

![image-20241118003836633](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118003836633.png)

## Configure typora

The image bed used here is the image bed combination of picgo+github. To configure the image bed upload in typora, you can find the image settings in File-Preferences:

![image-20241118004233677](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004233677.png)

Set the upload service settings, select picgo in the upload service, and then locate the exe of the picgo program. If you are not sure, you can click to verify the image upload option.

## Update blog

### Set the picgo image bed upload target

Since I want the folder where the pictures in my picture bed are located to be consistent with the md file name, I need to set the upload location of picgo's picture bed:

![image-20241118004446321](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004446321.png)

For example, the warehouse of the picture bed I set up here is the warehouse where my blog is located. Just select main as the branch, and the token needs to be found in the setting.

The storage path is the img/md file name under the blog warehouse. For example, if I want to upload 2024-09-23_PGM_1_LocalProbabilisticMode, I will set the storage path as shown in the picture: img/2024-09-23_PGM_1_LocalProbabilisticMode/

**Note the path ends with /**

After setting, click OK

### Blog posts and pictures uploaded

I usually use Typora to edit everything locally and copy the blog that needs to be uploaded and the folder where the pictures are located in the _post folder of the blog repo, then use Typora to open the md note I just copied, select Format - Picture - Upload all local pictures.

![image-20241118004855933](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004855933.png)

Finally, name the md file according to the naming rules of the blog, and delete the previously copied pictures in the _post folder.