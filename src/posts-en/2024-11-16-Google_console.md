---
layout: post
title: "How to Set Up Your Blog to Be Indexed by Google Search Engine"
date: 2024-11-16
tags: [others]
comments: true
author: junedrinleng
toc: true
post_id: 2024-11-16-Google_console
source_lang: zh
source_title: "如何设置博客被谷歌搜索引擎收录"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.155Z"
source_hash: fdc8d527ae17e4e70c56398526c58d3f6bda7d7b19f93df276015fb842f19bf1
---

This note mainly introduces how to set up a blog website that has been built to be indexed by Google Search Engine.
<!-- more -->

## 1. Check if Your Website Can Be Searched
Please enter the following in the Google search bar  
~~~
site:https://junedrinleng.github.io
~~~
  
If your website can be searched, it has already been indexed by Google Search Engine.
If the search results are as follows:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140630.png)  
It indicates that it is not indexed, and you need to proceed with the following steps  
## 2. Submitting Search Resources
Click [Google Search Console](https://search.google.com/search-console/welcome) to enter the search resource submission page  
The interface is shown in the following figure:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140829.png)  
Select the domain on the right and enter your own domain:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140928.png)  
After clicking Continue, a window will pop up:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141027.png)  
Download the HTML file, place it in your website's root directory, and then click Verify.  
If the verification is successful, a window will pop up:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141415.png)
## 3. Submitting the Sitemap
A Site Map is a file that specifies the structure of a website. We hope that search engine crawlers can understand our website structure to efficiently crawl content and quickly build indexes.  
Here, we use the XML-Sitemaps.com website. We can click [https://www.xml-sitemaps.com/](https://www.xml-sitemaps.com/) to enter this website.  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141706.png)  
Enter your own website domain in the above page and click Start.  
After the search is completed, the following page will be displayed:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141805.png)  
Click View Sitemap Details, then click Download Sitemap.  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141855.png)
Download the SITEMAP file sitemap.xml and upload it to the root directory of your website.
**Note: Make sure to upload it before submitting to Google, otherwise Google will not find the sitemap file and will report an error**  
Next, you can submit your sitemap.  
Return to the Google Search Console page from earlier, click Site Map, and then click Submit Site Map.  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116142115.png)  
After selecting the site map, fill in the map location:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116142204.png)  
Then click Submit
After submission, check the status of Google's crawling
Then click Request Indexing:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117205745.png)
After clicking Request Indexing, you will see that Google has indexed your website  

Then go to the Google search bar and search for your website to see if it can be found  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117205904.png)
