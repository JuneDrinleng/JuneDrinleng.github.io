---
layout: post
title: "WSL Usage Guide"
date: 2025-01-04
tags: [cs_basic]
comments: true
author:junedrinleng
toc: true
---

This note mainly records the problems and solutions I encountered when using WSL, as well as some commonly used commands.
<!-- more -->


## 0 Preface

Recently, when I was testing the project environment, I encountered some problems with the paths. The paths of the development environment are all based on Linux, so there will be some problems with the paths under Windows. I don't plan to use the server when debugging, so I started wsl.

## 1 wsl installation

Enter the following command for WSL in powershell:

    wsl --install

Installing a specific Linux distribution can be done through the Microsoft Store

## 2 git configuration

First, you must confirm whether the Linux distribution you are using has git.

    git --version

If there is, then there will be git version information. If not, you can use the following command to install it: (Ubuntu)

~~~
sudo apt update
sudo apt install git
~~~

The next step is to configure the git account on the command line:

~~~
#Configure username
git config --global user.name "Your Name"

# Configure email
git config --global user.email "your.email@example.com"
~~~

The `global` here means setting the account globally. You can omit it if you do not want global settings. If the username and configured email here are to be used in GitHub, it is best to keep them consistent with GitHub’s registered username and email.

(option) GitHub ssh configuration

Generate an ssh key:

~~~
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
~~~

The email here is your GitHub email

Deploy the private key in the ssh public-private key pair generated above to the .ssh folder: (I personally prefer to move it manually directly in vscode's ssh)

~~~
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
~~~

Finally, copy the public key content and create a new public key in GitHub's settings-->SSH and GPG keys->New SSH key, and paste the copied public key into it.

Test whether the configuration is successful:

~~~
ssh -T git@github.com
~~~

After that, you can more conveniently use ssh to perform git operations and then push or pull to GitHub.

## 3 copilot configuration

    Because when using copilot, network problems often occur and the connection cannot be made. Rather than tossing the wsl network, it is more appropriate to directly configure copilot in ui mode in vscode:
    
    1. Install copilot plug-in in vscode
    2. Enter remote.extensionKind in vscode settings, open the settings json file, and add the following content:```json
    "remote.extensionKind": {
            "GitHub.copilot-chat": [
        "ui"
    ],
        "GitHub.copilot": [
            "ui"
        ],
    }
    ```Then restart vscode of wsl