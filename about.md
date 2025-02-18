---
layout: page
title: About Me
permalink: /about/
---

## 关于我
欢迎来到我的博客主页，我是华清带学化学系的一名博士生，现在是博士{% assign current_date = "now" | date: "%Y%m" | plus: 0 %}{% assign start_date = 202409 %}{% assign current_year = current_date | slice: 0, 4 %}  {% assign start_year = start_date | slice: 0, 4 %}      {% assign current_month = current_date | slice: 4, 2 %} {% assign start_month = start_date | slice: 4, 2 %}     {% assign year_diff = current_year | minus: start_year %}  {% assign month_diff = current_month | minus: start_month %}  {% assign total_months = year_diff | times: 12 | plus: month_diff %}{% assign year = total_months | divided_by: 12 | floor | plus: 1 %}{{ year }}年级。

### 我的教育经历：  
- 2020-2024年 清华大学 致理书院 化学专业 学士学位
- 2024-至今 清华大学 化学系 分析化学专业 博士研究生在读

### 我的研究方向：
生命分析化学，单颗粒示踪技术，深度学习 in SPT

### 我正在做的事情：
- 利用深度学习和单颗粒示踪研究相分离体系
- 学习概率图模型的课程
- 学习李宏毅老师机器学习2021的课程

### 我将要做的事情：
在这个博客中我将更新一些我的笔记，以及一些我认为有趣的东西，希望能够和大家一起交流学习。  
目前更新计划有：  

- [ ] 《概率图模型》课程笔记



## 版权声明

博客文章是我原创文章，版权归我所有，转载请与我联系获得授权许可。my email is {{site.footer-links.email}}
