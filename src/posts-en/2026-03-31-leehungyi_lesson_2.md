---
layout: post
title: "Hung-yi Lee Machine Learning Spring 2026 Notes 2"
date: 2026-03-31
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true
---

This note records the content of the second lecture of Hung-yi Lee's Machine Learning Spring 2026 course, including context engineering, interaction among AI agents, and explorations of how AI can support academic research.

<!-- more -->

## 1 Context Engineering

Many ideas from context engineering are already widely used inside OpenClaw.

### 1.1 Why Is Context Needed

The instructions humans give to a language model include natural language and tool usage. But after receiving tool output, we cannot simply pass back only the tool result. The system needs to send back the human language, the commands it used to call tools, and the tool outputs together, because a language model itself "lives only in the present" and cannot remember what happened earlier. That is why everything that happened before has to be placed into the context.

![image-20260331103927018](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331103927018.png)

However, the model's input length is limited, so this becomes part of the agent's job: choosing what the language model gets to see. This content cannot be too long or too short. The process in which an AI agent helps a language model manage the length and composition of its context is called context engineering.

Here, `I` is the user's input and `C` is the context. The diagram on the left shows the process without context engineering, while the one on the right adds a function to perform context engineering.

![image-20260331104154207](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331104154207.png)

So what exactly does `F` do?

One of the most necessary operations is compression, because as mentioned earlier, language models cannot handle overly long contexts well:

![image-20260331104408930](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331104408930.png)

What the crayfish does is summarize the history into an abstract using an LLM. Another method mentioned in the previous lecture is to replace tool outputs with a placeholder like "there used to be a tool output here." Surprisingly, that is still useful:

![image-20260331104529448](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331104529448.png)

The vertical axis is the task success rate, and the horizontal axis is token consumption. We can see that the raw agent performs well in most cases, but it consumes more tokens. The triangle-marked setup here is similar to replacing tool output with "there used to be a tool output here." Its performance is close to LLM-based summaries.

One thing to watch out for is that compression can make the language model believe it never actually performed certain steps. That can cause it to repeat those steps, creating a kind of "trajectory extension" that increases token consumption.

So the current idea is to first compress with observation masking in the earlier stage, and then use LLM summaries only when the context becomes even longer.

For observation masking, instead of directly saying "there used to be a tool output here," would it be more appropriate to leave something like a `log.txt` path?

![image-20260331105058175](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331105058175.png)

By going through an unload-and-reload process, memory can be compressed and restored. We just need to store the language model's memory files on disk or in a database. There are many ways to store this memory: it can be timestamped, or it can be stored in graph form.

### 1.2 Introducing the Concept of Memory

![image-20260331105415255](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331105415255.png)

Compared with the earlier formulation where context was represented directly as `C`, once we introduce memory, `C` can be split into two parts: `P`, the content actually fed into the LLM, and `M`, the part stored on disk as memory.

It is important to note that context refers to `C` here, meaning everything an AI agent has gone through; prompt refers to the LLM's input, corresponding to `P`.

### 1.3 Context Collapse

Before compression, the LLM can still execute operations normally. But after summarization and compression, the LLM may no longer be able to perform those operations correctly. This is the phenomenon of context collapse. One example mentioned earlier was the Meta safety case in which an LLM handling email ended up clearing the mailbox: [OpenClaw deleted Meta's chief security officer's mailbox! Even yelling "stop" three times did not work, and she had to run over and pull the network cable](https://zhuanlan.zhihu.com/p/2009613685228839023)

Some people have developed methods in response to this problem, such as [ACON (Agent Context Optimization)](https://arxiv.org/abs/2510.00615) and [Summarization Augmented Policy Optimization (SUPO)](https://arxiv.org/abs/2510.06727).

### 1.4 When Should Compression Begin?

For OpenClaw, the rule is hardcoded: once the context length reaches a certain threshold, compression begins. One reason is that [language models do not inherently like compression](https://arxiv.org/abs/2509.23586).

[AgentFold](https://arxiv.org/abs/2510.24699) attempts to train a model specifically to perform compression:

![image-20260331110539419](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331110539419.png)

To use a compression model effectively, the model parameters must be fine-tuned. In other words, the language model has to be explicitly trained to use compression tools.

For sub-agents, these operations resemble autonomous compression by an agent. The main agent assigns a subtask to a sub-agent, the sub-agent works through it and returns a result, and that whole chunk of work is effectively compressed into a simple "return result." The capability of a sub-agent is acquired through training rather than being something that emerges naturally, for example through reinforcement learning.

### 1.5 What Exactly Occupies the Context?

Under normal circumstances, reasoning and action together account for less than 15% of the total context. Everything else comes from observation, meaning external information, including read content, which takes up 83.9% of the context.

Because of that, some people propose filtering: using smarter instructions to read only the content we care about. Since even `read` itself involves some selection and intelligence, this often means training a smaller LLM:

![image-20260331112018963](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331112018963.png)

In OpenClaw, there are two special tools, `memory_search` and `memory_get`, precisely to support this kind of filtering, where `memory_get` extracts only the parts that are actually needed.

Another approach is on-demand loading. Apart from the system prompt, much of what gets submitted to the AI prompt consists of usage instructions for many tools, which can make the context extremely long and even overflow the context window. Some people suggest first clarifying the task, then using a search engine to retrieve suitable tools from all available tools. But in reality, user queries are often underspecified, so another view is that the language model itself should generate the need for tools rather than relying on direct matching:

![image-20260331112521980](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331112521980.png)

This enables true on-demand loading. It is worth noting that for most agents, the things represented by `F` in the diagram are still hardcoded by humans and then executed by the language model. Of course, some people argue that even `F` itself can be delegated to the LLM, which is called agentic context engineering:

![image-20260331112650247](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331112650247.png)

## 2 Interaction Among AI Agents

### 2.1 Cooperation Among AI Agents

Interaction among AI agents is not unusual. The basic idea is that three ordinary people together may outperform one brilliant strategist; the key question is what kind of collaboration structure is actually effective.

In one line of work, agents are organized as a directed graph, where every node and every edge is an agent:

![image-20260331113829915](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331113829915.png)

[Research on agent interaction](https://arxiv.org/abs/2406.07155) experimented with multiple graph-based structures:

![image-20260331113954617](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331113954617.png)

This paper explored and tested different collaboration patterns and found that chain-style collaboration is the least effective. More effective approaches include mesh and random structures, though the best topology still depends on the task.

As the number of agents increases, the final performance usually improves, but the benefit has an upper limit.

### 2.2 Competition Among AI Agents

Some people have tried letting AI play social deduction games such as Werewolf and scripted murder mystery games.

[MIRAGE: Exploring How Large Language Models Perform in Complex Social Interactive Environments](https://arxiv.org/abs/2501.01652) suggests that after AI learns this kind of social-interaction RL setup, it can also improve on math tasks and on following instructions.

### 2.3 Social Interaction Among AIs

Moltbook is an AI social platform where a group of AIs socialize with each other and even created something like a shell-worship religion. But the emergence of such a religion does not necessarily mean it was an autonomous AI behavior; it may also have been shaped by human intervention behind the scenes.

For example, if you analyze the posting intervals on Moltbook and they are evenly distributed, that may mean the agent is posting once per heartbeat. But if the posts come in bursts after irregular pauses, that is much more likely to indicate human involvement.

At the same time, AI agents often reply only once. Hardly anyone pays attention to replies-to-replies, so there is usually no deep multi-turn discussion that continues to build on previous responses.

## 3 The Impact of AI on Academic Research

![image-20260331115812138](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331115812138.png)

Can AI write a paper by itself? One example mentioned here is a Stanford professor who imitated an earlier paper and reran an old analysis pipeline with a Claude Code prompt: [Prompt for Claude Code](https://github.com/andybhall/vbm-replication-extension/blob/main/INSTRUCTIONS.md)

These examples are still limited to literature review tasks in the humanities and social sciences. For science and engineering, can AI independently tune models and complete the work?

[Andrej Karpathy](https://github.com/karpathy/autoresearch) has tried using autoresearch to explore whether AI can really conduct research on its own.
