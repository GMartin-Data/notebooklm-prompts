---
name: "Synthesis to Video Overview"
category: studio
subcategory: video
difficulty: beginner
source: "Custom (extracted from workflow-synthesis-notebooklm.md)"
use_case: "Generate a video overview from a saved synthesis note"
tested: false
---

# Synthesis to Video Overview

**Source:** Custom  
**Difficulty:** Beginner  
**Status:** Untested (v0.1)

## Context

This prompt is used in the **Custom Instructions** field when generating a Video Overview. It assumes you have:
1. Run a `Global Synthesis` prompt on your sources
2. Saved the output as a Note in NotebookLM
3. Selected ONLY that note as the source for the video

## Prompt (Custom Instructions)

```
Create a video overview based on this synthesis document.

Structure:
- Open with the Global Summary
- Present Major Themes by priority
- Highlight key Consensus points
- Address main Divergences briefly
- Close with Recommended Actions

Target audience: [specify: e.g., data engineers, tech leads, beginners]
Skip: [elements to exclude: e.g., detailed citations, gaps analysis]
```

## Use Case (Data Engineering)

Transform a multi-source synthesis into a shareable video summary for team knowledge sharing or stakeholder updates.

## Related Prompts

- `global-synthesis-full.md` — Generate the synthesis to use as source
- `global-synthesis-compact.md` — Shorter alternative
- `global-synthesis-data-engineering.md` — Tech-focused variant
