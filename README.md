# JuneDrinleng.github.io README
 这是一个我的GitHub个人博客主页的存放仓库

## 博客主页
[JuneDrinleng.github.io](https://junedrinleng.github.io/)
建站参考：[可能是最全面的github pages搭建个人博客教程](https://github.com/lemonchann/lemonchann.github.io)

## 文件夹以及文件结构
- _includes: 存放一些设置文件，例如[analytics.html](./_includes/analytics.html)用于Google Analytics的设置,可以直接复制谷歌的Google Analytics的代码来实现网站的访问统计
    - analytics.html: Google Analytics的设置文件
    - footer.html: 网站的页脚(也就是底部的github链接等)
    - svg.html: 网站页脚的图标设置
- _posts: 存放博客文章的文件夹，文件名格式为`yy-mm-dd-标题.md`,例如[2024-11-15-Hello-World.md]
- img: 存放博客文章中的素材图片
- about.md: 个人简介页面
- _config.yml: 网站的配置文件,包括配置谷歌分析，网站首图，版权声明栏，社媒信息

## 博客文章的格式
博客文章的格式为Markdown格式，可以使用Markdown编辑器来编辑，例如[Typora](https://typora.io/)
博客文章的头部格式如下：
```markdown
---
layout: post
title: "title"
date:   2024-11-15
tags: [python]
comments: true
author: junedrinleng
---

摘要
<!-- more -->
正文
```
需要注意的是，图床的路径千万不能有中文，有中文之后整个笔记就无法显示了