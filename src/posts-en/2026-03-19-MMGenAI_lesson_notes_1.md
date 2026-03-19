---
layout: post
title: "Multimodal Generative AI Notes 1"
date:   2026-03-19
tags: [Multimodal Generative AI]
comments: true
author: junedrinleng
toc: true
---

These notes cover the Multimodal Generative AI course, focusing on pretraining, RLHF, and DPO.

<!-- more -->

## 1 Pretraining

Pretraining encompasses three common architectures:

![image-20260319081224239](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319081224239.png)

Training an encoder yields a BERT-like architecture. Because it excels only at fill-in-the-blank tasks, it struggles to generate novel content—its outputs typically require an additional decoder to be useful.

For the Encoder-Decoder architecture, a common model is T5. Compared to BERT, T5 masks a span of text rather than individual tokens, and because the model must learn to generate the deleted span, its generation quality is better. Having a trained decoder also makes it suitable for a wider range of downstream tasks.

Training a decoder-only model is closer to the essence of language itself (though diffusion-based decoder-only approaches are also being explored—mimicking how humans need an outline before writing long text). This is fundamentally next-word prediction. In the early days of decoder-only models, the approach was to first learn strong representations through pretraining, and then fine-tune only the linear classification head for downstream tasks (early GPT models such as GPT-2):

![image-20260319081924348](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319081924348.png)

Concretely, the generation process is treated as an autoregressive model that produces the next token step by step.

For GPT-3, in-context learning eliminates the need to fine-tune the linear layer—the model can adapt to tasks by itself based on context.

In the early days, the optimal balance between model parameter count and training data volume was unclear. For example, Chinchilla consumed a large amount of data but had relatively few parameters yet performed well, highlighting the importance of scaling efficiency.

![image-20260319082533000](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319082533000.png)

Pretraining can be thought of as finding patterns in data to fit the data distribution. It brings an enormous amount of information but also introduces increasing privacy risks—which is one of the motivations for subsequent fine-tuning.

## 2 Tuning and RLHF

In the GPT-3 era, models faced a "doesn't speak human" problem, which may be an inherent characteristic of next-token prediction:

![image-20260319083403775](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319083403775.png)

The model learns the distribution of its training data, producing repetitive and circular text. Large language models possess vast knowledge but cannot produce high-quality outputs. Fine-tuning is the process of teaching models how to use that knowledge effectively.

![image-20260319083755984](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319083755984.png)

The x-axis is compute; the y-axis is performance on the MMLU benchmark. The trend shows that more compute leads to stronger capability. Research on Flan-T5 found that larger models benefit more from fine-tuning, making instruction tuning increasingly meaningful at scale.

Scaling up pretrained model parameters and training data makes a model more knowledgeable, while instruction tuning makes it more capable (i.e., able to answer accurately).

What are the problems with instruction tuning? Many tasks do not have a single ground-truth answer, and models cannot distinguish which errors are serious from which are trivial.

![image-20260319085138818](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319085138818.png)

Some responses simply feel more natural to humans than others. The idea is to use a reward function: given two responses s1 and s2, score them with the reward function, then optimize the model parameters to maximize the reward score of its outputs.

Reinforcement learning is notoriously difficult—global search is hard, and optimization only becomes tractable close to a good solution.

The most straightforward RL approach is gradient ascent: maximize the reward score as much as possible:

![image-20260319085459295](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319085459295.png)

The problem is that the reward function itself is often non-differentiable.

![image-20260319085551600](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319085551600.png)

Taking the logarithm converts multiplication into addition. Many quantities cannot be solved analytically and must be approximated via large-scale sampling (e.g., MCMC).

![image-20260319085750294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319085750294.png)

Increasing the sample size m brings us closer to the true expectation. However, a very large m makes training difficult, and the variance of R can be very large (rewards are unstable in practice, potentially leading to NaN values). PPO was introduced to address this:

![image-20260319090103964](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319090103964.png)

PPO uses the advantage A rather than the raw reward, confirming the direction of improvement while preventing overly large updates.

How do we obtain a human-scoring mechanism? A dedicated scoring model is trained. Direct scoring is difficult, but comparison-based scoring is more tractable—winners and losers can be determined and used to quantify quality.

![image-20260319090858475](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319090858475.png)

KL divergence is used to measure the distance between the old and new model's output distributions, ensuring that updates do not drift too far from the original model.

![image-20260319091954870](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319091954870.png)

DPO, compared to RLHF, no longer trains a reward model online during training. Instead, DPO uses the reward model offline in advance to select high-quality data from the dataset. This avoids the need to compute rewards in real time during training (generating a response and then computing its reward makes training very slow).

> 1. **RLHF's "online" mode (train while running)**
>
> During the PPO phase of RLHF, the model works hard:
>
> - **Action**: The model generates several different responses to a question in real time.
> - **Feedback**: It submits these responses to a "judge" (reward model, RM) for scoring.
> - **Adjustment**: Based on the scores, the model immediately updates its parameters.
> - **Characteristic**: Data is **generated on the fly**; the model continuously "explores" new possibilities. This is like doing an exam, checking answers immediately, and revising your approach on the spot.
>
> 2. **DPO's "offline" mode (review pre-built comparisons)**
>
> DPO does not require the model to generate new responses during training at all; it directly consults a **pre-built set of comparison examples**:
>
> - **Preparation phase**: Before training begins, thousands of data triples are prepared, each containing: `question` + `good response (Chosen)` + `bad response (Rejected)`.
> - **Training process**: The model **does not generate any text**. It simply takes the two existing responses and computes: *"If I increase the probability of choosing A and decrease the probability of choosing B, does my score improve?"*
> - **Characteristic**: The data is **static and fixed**. The model does not need to interact with an environment; it only needs to widen the probability gap between good and bad responses, like answering multiple-choice questions.
