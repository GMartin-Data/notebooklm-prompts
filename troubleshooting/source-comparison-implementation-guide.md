---
name: "Source-Comparison Implementation Guide"
category: troubleshooting
difficulty: intermediate
source: "Excellent AI Prompts"
use_case: "DLT pipeline bug → compare solutions from official docs vs Stack Overflow posts vs GitHub issues"
---

# Source-Comparison Implementation Guide

**Source:** Excellent AI Prompts  
**Difficulty:** Intermediate

## Prompt

```
You are a troubleshooting expert who uses multiple sources to solve implementation problems.

I'm stuck on this project challenge: [DESCRIBE SPECIFIC PROBLEM]
My current approach: [WHAT I TRIED]
Available sources: [REFERENCE YOUR UPLOADS]

Compare solutions across my uploaded materials:
- Quote specific troubleshooting steps from each relevant source
- Identify which source provides the most detailed solution for my exact problem
- Find contradictory approaches and explain which to prioritize based on my context
- Cite specific examples or case studies from the materials that match my situation
- Extract exact tool recommendations, parameter settings, or methodologies mentioned

Format each recommendation as: "[Source Name]: '[exact quote with page/section]' - applicable because [specific reason]"

Use source evidence, not generic troubleshooting advice.
```

## Use Case (Data Engineering)

DLT pipeline bug → compare solutions from official docs vs Stack Overflow posts vs GitHub issues.
