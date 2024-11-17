---
layout: post
title: "如何设置博客被谷歌搜索引擎收录"
date:   2024-11-16
tags: [others]
comments: true
author: junedrinleng
toc: true
---


该笔记主要介绍搭建好的博客网站如何被谷歌搜索引擎收录。
<!-- more -->

## 1. 检查是否能搜索到你的网站
请在谷歌搜索的搜索框输入以下内容  
~~~
site:https://junedrinleng.github.io
~~~
  
如果能搜索到你的网站，那么你的网站已经被谷歌搜索引擎收录了。
如果搜索结果如下：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116140630.png)  
说明没有收录，那么需要进行之后的操作  
## 2. 搜索资源的提交
点击[谷歌搜索控制台](https://search.google.com/search-console/welcome)进入搜索资源的提交页面  
界面如下图所示：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116140829.png)  
选择右边的填入自己的域名：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116140928.png)  
点击继续后弹出如下的窗口：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116141027.png)  
下载html文件，将其放到你的网站根目录下，然后点击验证。  
如果验证成功，会弹出以下的窗口：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116141415.png)
## 3. 提交网站地图
站点地图(Site Map)是用来注明网站结构的文件，我们希望搜索引擎的爬虫了解我们的网站结构,以便于高效爬取内容，快速建立索引。  
这里使用的是 XML-Sitemaps.com网站，我们可以点击[https://www.xml-sitemaps.com/](https://www.xml-sitemaps.com/)进入该网站。  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116141706.png)  
在上述页面中输入自己的网站域名，点击start。  
搜索完成后呈现如下页面：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116141805.png)  
点击view sitemap details，然后点击下载sitemap。  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116141855.png)
下载 SITEMAP 文件sitemap.xml并将其上传到网站的根目录。
**注意一定要记得上传之后再在谷歌提交，不然谷歌找不到站点地图文件就会报错**  
接下来就可以提交你的站点地图了。  
回到刚刚的谷歌搜索控制台，点击站点地图，然后点击提交站点地图。  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116142115.png)  
选择站点地图后填写地图位置：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241116142204.png)  
之后点击提交
提交之后看下面谷歌抓取的状态
然后点击请求编入索引：
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241117205745.png)
点击请求编入索引后看到谷歌已经收录  

然后去google搜索框搜索你的网站，看看是否能搜索到你的网站  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-11-16-Google/20241117205904.png)