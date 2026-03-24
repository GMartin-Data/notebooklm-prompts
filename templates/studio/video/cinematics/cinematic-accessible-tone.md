---
name: "Cinematic — Accessible Tone with Analogies"
id: CIN-TONE-ACCESSIBLE
category: studio/video/cinematic
status: experimental
source: "Empirical reverse-engineering (16 tests, March 2026)"
created: 2026-03-24
last_validated: 2026-03-23
tested_on:
  - "mono-source x2 (C03, C03 bis)"
  - "multi-sources x1 (D02b, 5 documents)"
  - "alternative source x1 (F02, ETL vs ELT)"
reproducibility: confirmed
notebooklm_features:
  - cinematic-video
  - steering-prompt
studio_compatible: true
studio_format: cinematic
---

# Accessible Tone with Analogies ★

## Steering Prompt

```
Make this accessible and engaging for a non-technical audience. Use analogies.
```

## When to Use

Produce a cinematic video aimed at non-specialists: briefing decision-makers, introducing a concept in a meeting, internal communication support. The pipeline builds a single sustained metaphor (not one analogy per concept) and uses it as the narrative frame throughout the video.

## What It Controls

- Narrative register (transforms technical jargon into plain language)
- Level of abstraction (reduced technical depth)
- Presence of analogies (sustained metaphor, not isolated comparisons)

## What It Does NOT Control

- Duration (subject to severe non-determinism, up to x2.6 between identical runs)
- Visual style (decided autonomously by Gemini)
- Specific analogies chosen (different each generation: "open-book test", "1940s detective precinct", "moving houses")

## Observed Results

| Test | Source | Duration | Key Analogy |
|------|--------|----------|-------------|
| C03 | RAG mono | 4:44 | "open-book test", "digital super librarian" |
| C03 bis | RAG mono | 5:25 | "executive in a concrete room", "intern attending graduate school" |
| D02b | 5 docs multi | 7:54 | Unified 1940s detective precinct metaphor |
| F02 | ETL vs ELT | 4:40 | Moving houses analogy |

## Known Side Effects

In multi-source contexts, the tone steering can cause exclusion of sources deemed incompatible with the narrative register. In D02b, the `uv` source (Python CLI tool) was excluded — the only purely technical CLI topic, difficult to integrate into a detective metaphor. D02a (no steering) and D02c (duration only) included all 5 sources.

## Critical Rule

**Use this prompt alone.** Combining it with another steering instruction (e.g., duration) degrades both effects. See: [Mono-Lever Rule](#).
