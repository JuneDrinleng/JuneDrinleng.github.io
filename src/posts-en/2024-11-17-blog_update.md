---
layout: post
title: "Quick Management and Upload of Blog Images"
date:   2024-11-17
tags: [others]
comments: true
author: junedrinleng
toc: true
---

This note mainly introduces how to manage and quickly upload images to achieve rapid blog conversion from markdown files  
<!-- more -->
## Background

Recently, I have established my personal website. To efficiently migrate my previous notes to my blog homepage, I have been thinking about how to improve the migration efficiency.  
In fact, for markdown files of blogs, the most important part is image management.  
Blog images are typically linked through an image hosting service. I prefer to store images locally in a folder named "assets" under the file directory. To achieve rapid conversion, I propose the following solution.

## Notes on Inserting Images in MD Files

Initially, I discovered that my notes are recorded using Obsidian, but all images inserted in Obsidian are in wiki format rather than markdown format, making them unrecognizable by Typora. Therefore, if using Obsidian, please ensure to uncheck the wiki format for images.

![image-20241118003836633](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118003836633.png)

## Configure Typora

The image hosting service used here is a combination of PicGo and GitHub. To configure the image hosting service in Typora, find the image settings under File - Preferences:

![image-20241118004233677](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004233677.png)

After setting up the upload service, select PicGo as the upload service, and locate the PicGo executable file. You can click the verify image upload option for safety.

## Update Blog

### Set PicGo Image Hosting Target

Since I want the folder containing images in the image hosting service to match the md file name, I need to set the image hosting upload path in PicGo:

![image-20241118004446321](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004446321.png)

For example, I set the image hosting repository to my blog's repository, and select the main branch. The token needs to be found in the settings.  
The storage path is set to the img directory under the blog repository with the md file name, such as for uploading 2024-09-23_PGM_1_LocalProbabilisticMode, I set the storage path as img/2024-09-23_PGM_1_LocalProbabilisticMode/  
**Note: The path should end with /**

After setting, click OK to confirm.

### Upload Blog and Images

I usually edit all content locally with Typora, then copy the folder containing the blog and its images to the _posts folder of the blog repository. Then open the copied md notes in Typora, select Format - Image - Upload All Local Images

![image-20241118004855933](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004855933.png)

Finally, rename the md file according to the blog's naming convention, and delete the previously copied images in the _posts folder.