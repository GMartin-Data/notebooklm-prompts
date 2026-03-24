---
name: "Cinematic — Thematic Focus"
id: CIN-THEME-FLOW
category: studio/video/cinematic
status: experimental
source: "Empirical reverse-engineering (16 tests, March 2026)"
created: 2026-03-24
last_validated: 2026-03-23
tested_on:
  - "mono-source x2 (C01 3:35, C01 bis 9:20)"
reproducibility: confirmed (vocabulary only)
notebooklm_features:
  - cinematic-video
  - steering-prompt
studio_compatible: true
studio_format: cinematic
---

# Thematic Focus

## Steering Prompt

```
Present the material as a journey through connected systems. Emphasize how data flows between components.
```

## When to Use

Steer the narrative vocabulary and framing toward a specific theme. Useful for technical subjects with interconnected components. The prompt above is one example — the pattern generalizes to other narrative themes ("a detective investigation", "building a house from foundation to roof").

## What It Controls

- Narrative vocabulary ("data flow", "interception modules", "routes it through", "merged stream")
- Metaphor framing (consistent across runs)

## What It Does NOT Control

- Duration (3:35 then 9:20 on two identical runs — x2.6 variance)
- Depth of coverage
- Structure

## Observed Results

| Test | Duration | Vocabulary Effect | Duration Control |
|------|----------|-------------------|------------------|
| C01 | 3:35 | Strong — flow/journey lexicon throughout | None |
| C01 bis | 9:20 | Strong — same vocabulary, different duration | None |

Both runs share identical thematic vocabulary despite a 2.6x duration difference. This confirms the steering controls *how the content is framed* but not *how much content is produced*.

## Generalizability

This prompt is an instance of thematic steering, not the only valid form. Other narrative themes would likely produce the same type of lexical effect. Untested examples: "a detective investigation into data quality failures", "building a house from foundation to roof." The mechanism is the same: inject a metaphorical frame that colors the entire narration.

## Critical Rule

**Use this prompt alone.** Do not combine with a duration constraint. See: [Mono-Lever Rule](#).
