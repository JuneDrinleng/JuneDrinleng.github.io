---
layout: post
title: "How to set up your blog to be indexed by Google search engine"
date: 2024-11-16
tags: [others]
comments: true
author:junedrinleng
toc: true
---


This note mainly introduces how to build a blog website to be indexed by Google search engine.
<!-- more -->

## 1. Check if your website can be found
Please enter the following content in the search box of Google Search
~~~
site:https://junedrinleng.github.io
~~~
  
If your website can be searched, then your website has been included by Google search engine.
If the search results are as follows:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140630.png)
The description is not included, then you need to perform subsequent operations.
## 2. Submission of search resources
Click [Google Search Console](https://search.google.com/search-console/welcome) to enter the search resource submission page
The interface is as shown below:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140829.png)
Select the one on the right to fill in your domain name:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140928.png)
After clicking Continue, the following window will pop up:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141027.png)
Download the html file, place it in the root directory of your website, and click Verify.  
If the verification is successful, the following window will pop up:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141415.png)
## 3. Submit sitemap
Site Map is a file used to indicate the structure of a website. We hope that search engine crawlers understand the structure of our website so that they can efficiently crawl content and quickly build indexes.  
The XML-Sitemaps.com website is used here. We can click [https://www.xml-sitemaps.com/](https://www.xml-sitemaps.com/) to enter the website.  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141706.png)
Enter your website domain name on the above page and click start.  
After the search is completed, the following page is displayed:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141805.png)
Click view sitemap details, then click Download sitemap.  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141855.png)
Download the SITEMAP file sitemap.xml and upload it to the root directory of your website.
**Note that you must remember to upload it before submitting it to Google, otherwise Google will report an error if it cannot find the sitemap file**
Next, you can submit your sitemap.  
Go back to the Google Search Console, click Sitemaps, and then click Submit Sitemap.  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116142115.png)
After selecting the site map, fill in the map location:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116142204.png)
Then click submit
After submission, see the status of Google crawling below
Then click Request Indexing:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117205745.png)
After clicking Request Indexing, you will see that Google has included it.

Then go to the Google search box and search for your website to see if your website can be found.
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117205904.png)