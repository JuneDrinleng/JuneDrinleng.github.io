---
layout: post
title: "在阿里云服务器上搭建minecraft服务器"
date:   2025-02-18
tags: [others]
comments: true
author: junedrinleng
toc: true
---
该笔记主要介绍如何在阿里云服务器上搭建我的世界服务器
<!-- more -->

**## mc服务器配置**

### step 1

从官网下载合适的版本，然后解压

```
unzip bedrock-server-linux.zip
```

配置好`server.properties`文件,根据端口在云服务器厂商的端口规则里添加端口（对于我的世界一般是19132端口），**需要注意的是，云服务厂商打开端口到实际可以访问需要一定的时间**

### step 2

检查Ubuntu系统的防火墙是否打开了这个端口，如果没有打开则需要打开

```
sudo ufw status
```

同时在Ubuntu服务器里添加端口规则(本人配置了半天Ubuntu端口的安全规则都有问题，最后把把Ubuntu的防火墙关闭就解决了）：

```
sudo ufw allow 19132/tcp

sudo ufw allow 19132/udp

sudo ufw reload
```

### step 3

然后启动mc服务器：（利用pm2）

```
LD_LIBRARY_PATH=. ./bedrock_server

pm2 start bedrock_server --name "minecraft-server"

pm2 save
```

### others

想与pm2管理的程序进行命令行交互：

```
pm2 list

pm2 attach 进程号
```

例如：`pm2 attach 7`

然后就可以进行命令行的交互了（例如添加管理员）