---
layout: post
title: "Hung-yi Lee Machine Learning Spring 2026 Notes 7"
date: 2026-05-11
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

This note records lecture 7 of Hung-yi Lee's Machine Learning Spring 2026 course, mainly covering AI self-growth.

<!-- more -->

## 1 What Is AI Self-Growth

There is still no strict definition of AI self-growth. Many claims of AI self-growth still involve human intervention, just less than before.

The essence of machine learning is three steps: what function to find + what candidate functions are available → choose the best function.

In the past, the "I" in these three steps referred to humans. AI self-growth begins when this "I" shifts from humans to AI.

Traditional machine learning optimizes function parameters $\theta$ according to loss:

![image-20260511173957612](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511173957612.png)

Previously, we got gold labels via human annotation in supervised learning. Can AI do this by itself?

A paradox is: if an AI can already produce high-quality answers for another AI, then we effectively already have a stronger AI — so why not directly grow from that stronger AI?

One idea is: besides using the current training AI to produce $y$, also use it to refine $\hat y$. For example, self-correction from the previous lecture. But that previous self-correction process does not update parameters, so if the same input is fed again, the model still gives the old uncorrected output because parameters remain unchanged.

So maybe we can use self-corrected outputs to fine-tune the model, so future identical inputs can produce more accurate answers.

![image-20260511174529619](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511174529619.png)

## 2 From Supervised Learning to Reinforcement Learning

The discussion above is based on supervised learning. But many methods (such as RL) do not require humans to provide standard answers directly. That does not mean no human involvement — human intervention moves to the reward function.

![image-20260511174753610](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511174753610.png)

The problem of RL is reward sparsity, which makes learning difficult. To simplify training, reward shaping is needed: to guide AI toward final reward, we add intermediate prior rewards along the process.

![image-20260511174955930](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511174955930.png)

Currently humans can define the reward function, while AI can help define proxy reward functions used in reward shaping:

![image-20260511175113780](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511175113780.png)

The issue is that not everything in the world can be easily simplified into reward functions. Another idea is to let a new AI create rewards, but humans are still needed to judge whether those generated reward functions are good.

![image-20260511175914231](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511175914231.png)

This is the idea of RLHF. Of course, RLAIF also aims to remove human evaluation.

![image-20260511180232026](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511180232026.png)

There are many RLAIF-related approaches, such as verbalize-based, ensemble-based, and certainty-based methods.

There are also approaches such as Test-Time Training that allow AI to define loss by itself. But this works mainly for small-range adjustment (small datasets); when scale grows, performance degrades:

![image-20260511181143303](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511181143303.png)

## 3 How to Minimize Entropy

![image-20260511181527179](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511181527179.png)

Traditional entropy computation needs to traverse all $y$, but LLM outputs are open-ended and effectively infinite, so traversal is intractable. A mainstream approach at that time was not to minimize sequence entropy directly, but to minimize entropy of each token-level output distribution:

![image-20260511181651269](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511181651269.png)

First minimize this distribution, then sample $y_1$, generate the next distribution, minimize again, then sample $y_2$.

But when we analyze this process, the historical gradient direction is not truly the direction that should be updated; see the following derivation:

![image-20260511182043355](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511182043355.png)

## 4 From Human-in-the-Loop to No Human

In the loop above, humans are still needed to search data and then enable subsequent self-learning without human participation. But in 2025, related research already explored full pipelines of proposing questions, solving them, and evaluating them:

![image-20260511182607214](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511182607214.png)

A key point is careful design of the relationship between $l$ and $l'$: if the proposer gives too-easy tasks, the model cannot improve; if tasks are too hard, nobody can solve them and training fails.

Like Test-Time Training, as training steps increase, the model eventually converges and stops improving.

Also, current proposer models often need extra information (including human input); with such extra information, they generally perform better than without it.

## 5 Self-Growth Is Hard, but Strong AI Training Weak AI Is Plausible

For example, some work used Opus 4.5 to train Gemma3-4B-Base.

Compared with direct human-led training, model-to-model training performs well on some tasks and only average on others, and models may also exploit shortcuts.

Note that even weaker models may still help stronger models improve.
