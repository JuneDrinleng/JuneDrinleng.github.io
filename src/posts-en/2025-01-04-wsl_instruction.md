---
layout: post
title: "WSL User Guide"
date:   2025-01-04
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

This note mainly records the issues encountered and their solutions during my use of WSL, as well as some commonly used commands.
<!-- more -->


## 0 Introduction

Recently, while testing project environments, I encountered path-related issues. Development environments are typically based on Linux, so paths under Windows would present some problems. Since I didn't want to use a server for debugging, I decided to explore WSL.

## 1 WSL Installation

In PowerShell, input the following command for WSL installation:

    wsl --install

To install a specific Linux distribution, you can achieve this via the Microsoft Store.

## 2 Git Configuration

First, confirm whether the Linux distribution you are using has Git installed:

    git --version

If Git is installed, you will see the version information. If not, you can install it using the following command (Ubuntu):

~~~
sudo apt update
sudo apt install git
~~~

Next, configure Git account in the command line:

~~~
# Configure username
git config --global user.name "Your Name"

# Configure email
git config --global user.email "your.email@example.com"
~~~

The `global` here indicates a global setting. If you don't want a global setting, you can omit it. The username and email configured here should ideally match your GitHub registered username and email for seamless GitHub integration.

(Option) GitHub SSH Configuration

Generate an SSH key:

~~~
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
~~~

The email here is your GitHub email.

Deploy the generated SSH private key to the .ssh folder: (I prefer manually moving it in VSCode's SSH settings)

~~~
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
~~~

Finally, copy the public key content and create a new SSH key in GitHub's settings --> SSH and GPG keys --> New SSH key, pasting the copied public key.

Test if the configuration is successful:

~~~
ssh -T git@github.com
~~~

After this, you can conveniently use SSH for Git operations to push or pull to GitHub.

## 3 Copilot Configuration

    When using Copilot, network issues often cause connection problems. Compared to troubleshooting WSL's network, it's more suitable to configure Copilot as UI mode directly in VSCode:

    1. Install the Copilot plugin in VSCode.
    2. In VSCode's settings, input `remote.extensionKind`, open the settings JSON file, and add the following content:
    ```json
    "remote.extensionKind": {
            "GitHub.copilot-chat": [
        "ui"
    ],
        "GitHub.copilot": [
            "ui"
        ],
    }
    ```
    Then restart VSCode in WSL.