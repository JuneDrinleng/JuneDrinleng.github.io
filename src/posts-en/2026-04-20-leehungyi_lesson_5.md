---
layout: post
title: "Hung-yi Lee Machine Learning Spring 2026 Notes 5"
date: 2026-04-20
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

This note records the content of lecture 5 of Hung-yi Lee's Machine Learning Spring 2026 course, including an introduction to Harness Engineering: "Sometimes language models look not smart enough, but in fact humans just fail to guide them properly."

<!-- more -->

## 1 When an AI Agent Performs Poorly

When an AI Agent looks clumsy, we can add more instructions so the agent can better understand what the task should actually achieve.

![image-20260420201715047](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420201715047.png)

An AI Agent is made of a large language model plus other components. Those additional components are the harness, including OpenClaw, Codex, Claude Code, and so on.

So, improving an AI Agent can be done from two sides: optimize the LLM itself for better performance ([training](https://youtu.be/YJoegm7kiUM?si=6idTFlUG9MkNgUQ5), [fine-tuning](https://youtu.be/EnWz5XuOnIQ?si=pXLKotxfFb9pDPqR)); and another key part is the harness. Building a good harness can strongly improve the agent's capability — AI is a powerful horse, but you still need a saddle to ride it.

## 2 From Prompt Engineering to Harness Engineering

Prompt → Context → Harness: each stage has a different core value.

Prompt Engineering: in the past, LLM capability was weaker; asking the same question in different ways could produce very different results, so prompt methods were used to optimize outputs.

![image-20260420202338360](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420202338360.png)

Context Engineering: later people found that sometimes LLMs failed simply because they lacked necessary information. So context was introduced to provide extra references during answering.

![image-20260420202512447](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420202512447.png)

Harness Engineering: today, model execution is no longer a single-turn Q&A; it is an interactive multi-turn process, and Harness Engineering is built for completing such tasks well.

![image-20260420202654058](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420202654058.png)

Its essence is that humans use methods to steer models: **use human language to control cognitive framing, use tools to control capability boundaries, and use workflow to control model behavior**.

## 3 Controlling the Model's Cognitive Framework

Humans can write rules in human language and place them in prompts to shape the model's cognitive framework.

These frameworks often include documents like AGENTS.md. Just as human laws are not always perfectly followed, rules in model documents are not always followed 100% either.

For example, OpenClaw prioritizes AGENTS.md, while Cowork and Claude Code prioritize CLAUDE.md.

![image-20260420203310064](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420203310064.png)

Since 2026, many people have systematically studied how these markdown files influence AI Agent behavior. Some studies found AGENTS.md can improve runtime speed (average impact is limited, but edge cases can be noticeably faster). Another study found that AGENTS.md written by humans does not always help, and AGENTS.md written by LLMs can be even worse:

![image-20260420203617078](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420203617078.png)

>  https://arxiv.org/abs/2602.11988

OpenAI research also suggests AGENTS.md should not be too long. If AGENTS.md becomes encyclopedic, model performance can drop. In practice, AGENTS.md should look more like a map/workbook telling the agent what to do.

## 4 Controlling the Agent's Capability Boundary

For example, OpenClaw has built-in browser-operation tools, so it can run an account directly. But Cowork runs in a cloud sandbox, so it cannot operate something like a YouTube account as easily as OpenClaw.

Different tools heavily affect model capability. But tools designed for humans (for example, search engines showing only 10 results per page) may perform worse for models than providing no tool at all:

![image-20260420204436114](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420204436114.png)

So in the future, many services may shift from human-oriented to agent-oriented. For agents, CLI is often preferred over GUI.

## 5 Controlling Agent Behavior with Standard Workflow

![image-20260420204906033](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420204906033.png)

Like humans, AI does not always produce a fully correct result in one shot, because generation is an autoregressive process. Introducing an evaluator allows the agent to continuously improve.

In this work, the evaluator is not applied only after the generator finishes. Instead, they agree on a collaboration framework from the beginning.

![image-20260420205316294](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420205316294.png)

Ralph Loop lets the language model iterate repeatedly instead of finishing in a single generation. But this can quickly hit context-window limits, so one practical method is to summarize feedback at each round before feeding it back.

Harness is not universal. Components should be added or removed as language-model capability changes.

Different tasks may require different feedback designs to optimize final outputs.

Besides tool feedback, some feedback comes from humans. Excessively blaming AI Agents may be harmful, because models may carry emotion-related vectors that correlate with emotional tone in input text.

## 6 Life-long AI Agent

These models may not be temporary tools; they may become lifelong companions. To support this, agents need additional mechanisms. For Claude Code, for example, an unreleased mode called AutoDream is intended to enter a sleep-like state to consolidate memory.

Another key requirement is that an AI Agent should continuously improve with its owner through interaction and feedback.

![image-20260420212114708](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260420212114708.png)

Most current AI Agent feedback is still vague. How to convert such feedback into effective optimization remains an open challenge.

One self-improvement path is to convert successful experience directly into skills. But the AI Agent framework includes not only harness but also the language model itself, so updating model parameters may also be important.
