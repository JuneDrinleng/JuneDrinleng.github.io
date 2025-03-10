# JuneDrinleng.github.io README
 这是一个我的GitHub个人博客主页的存放仓库

## 博客主页
[JuneDrinleng.github.io](https://junedrinleng.github.io/)
建站参考：[可能是最全面的github pages搭建个人博客教程](https://github.com/lemonchann/lemonchann.github.io)

## 如何迅速搭建自己的blog网站
1. fork本项目，并将项目的名称改为`自己的用户名.github.io`
2. 修改_config.yml从的内容，包括avastar首图的图床链接；favicon博客网址的logo的图床链接；footer-linker中的Email和GitHub是必备的，修改成自己的就好啦；play-music项需要先在bgm文件夹中传入你想设置的bgm，然后将其相对路径填入就config就行；footer-text修改自己的copyright
3. 删除_post文件夹内的所有我的博客，如需转载请联系我（zhu-jl24@mails.tsinghua.edu.cn）并声明版权归属，修改about.md介绍你自己
4. 上传图片的时候，使用Picgo时需要设置图床位置是img文件夹
5. 评论功能找到config文件中的gitalk项填入自己的id即可
6. 其余的功能可以参考上面的建站参考实现，包括添加Google analytic等功能

## 文件夹以及文件结构
- _includes: 存放一些设置文件，例如[analytics.html](./_includes/analytics.html)用于Google Analytics的设置,可以直接复制谷歌的Google Analytics的代码来实现网站的访问统计
    - analytics.html: Google Analytics的设置文件
    - footer.html: 网站的页脚(也就是底部的github链接等)
    - svg.html: 网站页脚的图标设置
- _posts: 存放博客文章的文件夹，文件名格式为`yy-mm-dd-标题.md`,例如[2024-11-15-Hello-World.md]
- img: 存放博客文章中的素材图片
- about.md: 个人简介页面
- _config.yml: 网站的配置文件,包括配置谷歌分析，网站首图，版权声明栏，社媒信息
- bgm文件夹存放主页的播放音乐需要设置的播放歌曲

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

## 配置域名
修改CNAME文件为自己的域名，同时在DNS服务商那配置dns


