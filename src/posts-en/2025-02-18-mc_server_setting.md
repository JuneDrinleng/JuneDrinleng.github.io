---
layout: post
title: "Building a minecraft server on Alibaba Cloud Server"
date: 2025-02-18
tags: [others]
comments: true
author:junedrinleng
toc: true
---
This note mainly introduces how to build a Minecraft server on Alibaba Cloud server
<!-- more -->

**## mc server configuration**

### step 1

Download the appropriate version from the official website and unzip it```
unzip bedrock-server-linux.zip
```Configure the `server.properties` file, and add the port in the cloud server manufacturer's port rules according to the port (for Minecraft, it is usually port 19132). **It should be noted that it takes a certain amount of time for the cloud service provider to open the port until it is actually accessible**

### step 2

Check whether the firewall of the Ubuntu system has opened this port. If not, you need to open it.```
sudo ufw status
```At the same time, add port rules to the Ubuntu server (I configured the Ubuntu port security rules for a long time and had problems, and finally solved it by turning off the Ubuntu firewall):```
sudo ufw allow 19132/tcp

sudo ufw allow 19132/udp

sudo ufw reload
```### step 3

Then start the mc server: (using pm2)```
LD_LIBRARY_PATH=. ./bedrock_server

pm2 start bedrock_server --name "minecraft-server"

pm2 save
```### others

Want to interact with the program managed by pm2 from the command line:```
pm2 list

pm2 attach 进程号
```For example: `pm2 attach 7`

Then you can interact with the command line (such as adding an administrator)