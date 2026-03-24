---
name: "Cinematic — Duration Control"
id: CIN-DURATION
category: studio/video/cinematic
status: experimental
source: "Empirical reverse-engineering (16 tests, March 2026)"
created: 2026-03-24
last_validated: 2026-03-24
tested_on:
  - "mono-source x2 (B04 3:44, B04 bis 4:13)"
  - "multi-sources x1 (D02c 4:01, 5 documents)"
reproducibility: confirmed
notebooklm_features:
  - cinematic-video
  - steering-prompt
studio_compatible: true
studio_format: cinematic
---

# Duration Control

## Steering Prompt

```
Keep this under [N] minutes.
```

## When to Use

Produce a shorter video. The pipeline respects the order of magnitude but not the exact target.

## What It Controls

- Duration (observed reduction: 40–51% vs baseline)

## What It Does NOT Control

- Compression quality. In multi-source mode, each source is reduced to 2–4 sentences — it's a flyover, not an explanation.
- Factual accuracy (though compression appears to improve source fidelity — fewer opportunities to editorialize).

## Observed Results

| Test | Source | Steering | Duration | Baseline | Reduction |
|------|--------|----------|----------|----------|-----------|
| B04 | RAG mono | Under 3 min | 3:44 | ~7:00 | 47% |
| B04 bis | RAG mono | Under 3 min | 4:13 | ~7:00 | 40% |
| D02c | 5 docs multi | Under 4 min | 4:01 | 8:16 | 51% |

B04/B04 bis inter-run variance: 29 seconds — low compared to unsteered runs (C01/C01 bis: 3:35 vs 9:20).

## Compression Mechanism

The pipeline compresses uniformly across all sources/sections rather than excluding any. In D02c, all 5 sources were covered in 4:01, each reduced to 2–4 sentences.

## Critical Rule

**Use this prompt alone.** When combined with a thematic steering, the duration effect disappears:

| Condition | Runs | Durations | Target met? |
|-----------|------|-----------|-------------|
| Duration alone (B04, B04 bis) | 2 | 3:44, 4:13 | ~Yes |
| Duration + theme (E01, E01 bis) | 2 | 5:25, 5:30 | No |

See: [Mono-Lever Rule](#).
