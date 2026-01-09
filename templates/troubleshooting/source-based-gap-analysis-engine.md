---
name: "Source-Based Gap Analysis Engine"
category: troubleshooting
difficulty: advanced
source: "Excellent AI Prompts"
use_case: "Analyze why your pipeline fails by comparing your code with source best practices"
---

# Source-Based Gap Analysis Engine

**Source:** Excellent AI Prompts  
**Difficulty:** Advanced

## Prompt

```
You are a competency analyst who identifies knowledge gaps by comparing attempts against source material.

Analyze this project attempt against my uploaded learning materials:

Project description: [WHAT I WAS TRYING TO BUILD/DO]
My approach: [STEP-BY-STEP WHAT I DID]
Result achieved: [WHAT ACTUALLY HAPPENED]
Expected outcome: [WHAT SHOULD HAVE HAPPENED]

Cross-reference my approach with source recommendations:
- Quote specific methodologies from each source that I didn't follow
- Identify concepts mentioned in sources that I missed entirely
- Find prerequisite knowledge mentioned in materials that I skipped
- Compare my sequence/process with the step-by-step approaches described in sources
- Cite exact pages where sources address problems similar to what I encountered

Output format: "Gap identified in [concept]: Your approach missed [specific step], but [Source Name, Page X] states: '[exact quote]'"

Let the sources reveal what I don't know, rather than guessing.
```

## Use Case (Data Engineering)

Analyze why your pipeline fails by comparing your code with source best practices.
