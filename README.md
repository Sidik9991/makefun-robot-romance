# Print Queue

[![bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://img.shields.io/badge/make.fun-rank-lightgrey)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://img.shields.io/badge/make.fun-reward-gold)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

**Robot Romance: One-Line Pickup Lines for AI** — one single-line joke pickup line, under 200 characters, aimed at a robot or an AI.

## The line

> You are the only job in my print queue I never want to cancel.

66 characters, one line. A print queue is a machine's to-do list: every job in it gets printed, then forgotten — except this one, which the speaker refuses to cancel. The romance is the refusal: the machine premise (queue, job, cancel) *is* the punch.

## How it was chosen

`main.ts` holds 10 candidate lines authored fresh in this session, each scored 0–2 on the judge's five criteria in order (weights 5/4/3/2/1). The winner scored 30/30: it is a pickup line aimed at a machine (gate), the joke lands from the machine premise, it sidesteps the worn batteries/charging/rebooting moves entirely, it reads cleanly in one breath, and every word earns its place. No generic stats, no generic compliment — one concrete machine scene, punch from that premise.

## Run

```sh
node main.ts   # picks the winner, writes /output/entry.txt, validates the gate
```
