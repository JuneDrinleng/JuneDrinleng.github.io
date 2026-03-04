---
layout: post
title: "Setting up a Minecraft server on Alibaba Cloud server"
date:   2025-02-18
tags: [others]
comments: true
author: junedrinleng
toc: true
---
This note mainly introduces how to set up a Minecraft server on an Alibaba Cloud server
<!-- more -->

**## mc server configuration**

### step 1

Download the appropriate version from the official website, then extract it

```
unzip bedrock-server-linux.zip
``

Configure the `server.properties` file, and add the port (generally 19132 for Minecraft) to the cloud server provider's port rules. **Note that it may take some time for the cloud service provider to open the port to actual accessibility**

### step 2

Check if the Ubuntu system's firewall has opened this port; if not, it needs to be opened

```
sudo ufw status
``

Also add port rules in the Ubuntu server (I spent half a day configuring Ubuntu's port security rules and eventually solved the issue by disabling the Ubuntu firewall):

```
sudo ufw allow 19132/tcp

sudo ufw allow 19132/udp

sudo ufw reload
``

### step 3

Then start the mc server: (using pm2)

```
LD_LIBRARY_PATH=. ./bedrock_server

pm2 start bedrock_server --name "minecraft-server"

pm2 save
``

### others

To interact with programs managed by pm2 via command line:

```
pm2 list

pm2 attach process ID
``

For example: `pm2 attach 7`

Then you can interact via command line (e.g., adding an administrator)