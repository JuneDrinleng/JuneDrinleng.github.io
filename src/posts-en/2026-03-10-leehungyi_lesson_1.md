---
layout: post
title: "Hung-yi Lee Machine Learning Spring 2026 Notes 1"
date:   2026-02-10
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true
---

This note records the content of the first lecture of Hung-yi Lee's Machine Learning Spring 2026 course, focusing on the working principles of AI Agents (using OpenClaw as an example)

<!-- more -->

## 1 Introduction

Some assignments involve training models, while others do not. The anxious waiting and the confusion of tuning hyperparameters are themselves part of deep learning.

All assignments can be completed using the Colab platform. No one will think your work is inferior just because you are in a lab with limited resources — get used to the unfairness of society early on (there will always be someone with more resources than you).

The new course website with an AI teaching assistant is available [here](https://ml.ee.ntu.edu.tw/course/home)

## 2 Dissecting the Crayfish — Introducing How AI Agents Work Using OpenClaw as an Example

Today's class is about figuring out how the crayfish (OpenClaw) works.

What makes an AI agent like OpenClaw different from the commonly used chat-based AI interfaces?

In the past, AI could only talk but not act — it could only give you guidance and suggestions (like an advisor). OpenClaw, on the other hand, automatically performs the corresponding operations directly:

![image-20260310194136029](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310194136029.png)

### 2.1 AI Agents Are Not an Entirely New Concept

AI Agents are not an entirely new concept. As early as the end of 2022, there were already expectations for agents. Auto-GPT was launched as an agent in 2023, but at that time large language models were not yet mature enough, which caused the hype to fade.

By 2025, AI agents had already taken initial shape (Claude Code, Gemini CLI). In fact, Claude Code and OpenClaw are quite similar, except that OpenClaw can directly connect to social apps like WhatsApp.

### 2.2 AI Agents Are Not Language Models, Not Artificial Intelligence

![image-20260310194935086](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310194935086.png)

OpenClaw is actually the non-AI part of an AI Agent. The intelligence of the crayfish actually depends on the model behind it.

With highly autonomous AI Agents, new possibilities emerge — for example, AI lacks a physical body.

It should be noted that since OpenClaw is constantly changing, this lecture mainly focuses on concepts.

What language models actually do is text continuation. We call the output of this continuation a token, and the incomplete sentence has a technical term called prompt:

![image-20260310195900816](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310195900816.png)

These language models start the continuation once you input the prompt. After the continuation is complete, the output is appended to the prompt, and the continuation continues until it finishes:

![image-20260310200032717](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200032717.png)

Another important point is that the input + output of a language model has a length limit. This limit is called the context window, and different models have different context window limits:

![image-20260310200205330](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200205330.png)

With today's language models, the longer the input, the less accurately they can perform the continuation.

You can think of a large language model as being locked in an empty dark room. The only thing it can do is receive prompts from someone unknown and output tokens through continuation.

### 2.3 How Does an AI Agent Know Who It Is and Who Its Master Is

The underlying pattern works like this:

![image-20260310200513008](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200513008.png)

The agent adds a system prompt every time. The current crayfish contains a lot of related information:

![image-20260310200602159](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200602159.png)

These files are all human-readable. What it does is simply read the content of these files and paste them into the system prompt. This system prompt is very long — even with a simple question, it already consumes 4,000 tokens.

These are ordinary files that you can modify yourself. However, since there are many files and it is easy to miss something, it is better to leave the task to the agent.

This is just the first round of Q&A. In multi-turn conversations, all previous conversations are also appended:

![image-20260310200931391](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200931391.png)

### 2.4 How Does It Use the Computer

After inputting the prompt, the tokens generated are tool-use instructions. The manuals for these tools are all written in the system prompt:

![image-20260310201158364](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310201158364.png)

![image-20260310201331376](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310201331376.png)

The language model then outputs the relevant instructions, and subsequent processes continue based on this content (each round pastes all previous history into the large language model).

OpenClaw's most powerful tool is exec, which can execute any shell command (text command) through this tool. Since language models prefer text, they still prefer using text commands rather than relying on screen content.

Since it can execute any command through exec, and it may encounter specially injected instructions while reading web pages, this could cause the language model to do things it shouldn't.

So how do we defend against this?

![image-20260310202022472](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310202022472.png)

The problem with model-level defense is that the output of large language models is unpredictable, so it cannot be completely avoided. The crayfish-side defense, on the other hand, uses hardcoded rules, because the crayfish has no language ability or thinking ability — it only mechanically executes rules.

### 2.5 AI Agents Can Create Their Own Tools

![image-20260310202312050](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310202312050.png)

Among all tools, the most special one is the sub-agent (the more formal name is spawn):

![image-20260310202844301](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310202844301.png)

This is equivalent to a big crayfish spawning two small crayfish:

![image-20260310202924193](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310202924193.png)

The spawned small crayfish can save the big crayfish's context window. There is no need for very complex interaction — only summaries, like an advisor who only focuses on your group meeting slides rather than what you actually did. This set of techniques is called context engineering.

How to solve the problem of layer-upon-layer outsourcing with no one actually doing the work? The answer is to make the small crayfish unable to reproduce — OpenClaw directly prohibits spawned small crayfish from using the spawn tool.

### 2.6 Introduction to Skills

A Skill is not a piece of code but a workflow instruction manual for the crayfish — it is just a file.

The specific workflow is as follows: each time a prompt is received, it searches the folder for the specified Skill. If a corresponding Skill is found, the file content is added to the prompt:
![image-20260310203614108](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310203614108.png)

Currently, only the Skill paths are stored and loaded on demand to save token usage. Otherwise, adding all skills would cause problems by overflowing the context window.

Because Skills are simply files, you just need to place the Skill files in the designated folder. There is a website specifically for searching skills: ClawHub. Note that some skills may be malicious.

### 2.7 Context Window Runs Out During Long-Running Sessions

A characteristic of the crayfish is that long-running sessions will inevitably exceed the context window length. A simple solution is to start a new session.

The crayfish does not easily lose its memory, because it writes some content in a diary (memory/YYYY-MM-DD.md) and in long-term memory MEMORY.md.

The crayfish retrieves memories through RAG, performing RAG on the memory .md files:

![image-20260310204329997](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310204329997.png)

The specific RAG process works like this: all memory documents are split into several chunks, then keywords are matched with chunks through both literal matching and semantic matching, and the top-k most relevant chunks are input into the model as part of the prompt:

![image-20260310204601889](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310204601889.png)

It should be noted that some models are not smart enough and won't actually do it — they will only verbally agree. As long as the document hasn't been edited, it means nothing was actually remembered.

When the text that the crayfish needs to feed to the language model exceeds the language model's context window, the crayfish initiates context compression:

![image-20260310205546778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310205546778.png)

This compression can be recursively applied — it can generate summaries of summaries, summaries of summaries of summaries, to continuously ensure the content fits within the context window. It is important to note that the crayfish will not compress the content in memory.md, because the crayfish does not compress the system prompt, and once something is not written down, it is easily forgotten.

### 2.8 Heartbeat Mechanism and Cron Job System

At regular intervals, a fixed document is sent to the crayfish, prompting it to execute content at fixed intervals. This can help you perform periodic tasks, and the content can even be vague (e.g., "make progress toward the goal"):

![image-20260310204918913](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310204918913.png)

The cron job system is a scheduling tool that can arrange schedules. For example, at a certain time at noon, an additional heartbeat is triggered (not reading heartbeat.md but a pre-configured prompt).

The advantage of this scheduling system is that it allows artificial intelligence to learn to wait. However, even with a good model, it may not always use cron jobs. A better approach is to tell it in the memory file.
