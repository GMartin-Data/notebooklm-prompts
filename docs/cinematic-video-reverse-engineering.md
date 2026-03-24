# Reverse-Engineering NotebookLM Cinematic Video Overviews

## A Systematic Study of Steering Prompt Effectiveness on Google AI Pro Tier

**Version**: 6.0
**Date**: 2026-03-24
**Author**: Greg Martin
**Repo**: `GMartin-Data/notebooklm-prompts`

---

## Executive Summary

This document presents the results of the first systematic reverse-engineering of NotebookLM's Cinematic Video Overviews feature, launched March 4, 2026. Over 16 tests conducted between March 16 and 24, we identified which steering prompt levers actually work, which fail, and why. Three major conclusions:

1. **Steering controls register and vocabulary, not duration or depth.** Only an explicit duration instruction ("Keep this under N minutes") reliably reduces video length.
2. **The pipeline is an editorialist, not a transcriber.** It amplifies stakes, invents figures, adds technical concepts absent from sources, and in multi-source mode, fabricates causal links between documents.
3. **Non-determinism is severe.** Two identical generations can vary up to 2.6x in duration. Only tone and vocabulary effects are reproducible.

---

## Table of Contents

1. [Context and Objectives](#1-context-and-objectives)
2. [Methodology](#2-methodology)
3. [Results Matrix](#3-results-matrix)
4. [Steering Lever Hierarchy](#4-steering-lever-hierarchy)
5. [Pipeline Behavior](#5-pipeline-behavior)
6. [Pro Tier Limitations](#6-pro-tier-limitations)
7. [Validated Steering Prompts](#7-validated-steering-prompts)
8. [Workflow Recommendation](#8-workflow-recommendation)
9. [Study Limitations](#9-study-limitations)
10. [Changelog](#10-changelog)

---

## 1. Context and Objectives

### 1.1 The Feature

NotebookLM Cinematic Video Overviews uses a tri-model pipeline: Gemini 3 (narrative script) → Nano Banana Pro (staging) → Veo 3 (video generation). The Visual Style selector, available for other Studio formats, is disabled in Cinematic. The steering prompt is therefore the only user lever.

### 1.2 The Documentation Gap

At the time of this study (March 2026), no systematic steering prompt guide for Cinematic exists. Tech watch conducted on March 15 (17 sources) and March 23 (16 sources) identified zero methodologies. The only indications come from anecdotal reports and one open-source clone attempt (LLM + TTS + Manim stack, no stars, since removed).

### 1.3 Architecture Clarification

Some sources (MindStudio) describe the pipeline as Gemini + Imagen + Veo, suggesting a four-model architecture. This is incorrect. The official Google blog post (March 4, 2026) explicitly names Gemini 3, Nano Banana Pro, and Veo 3. MindStudio confused Imagen with Nano Banana Pro — these are distinct models with different roles. The pipeline remains tri-model.

### 1.4 The Objective

Produce empirically validated steering prompts for the `GMartin-Data/notebooklm-prompts` library, identifying precisely what is controllable and what is not.

---

## 2. Methodology

### 2.1 Test Sources

**Mono-source (12 tests)**: "Naive RAG vs Advanced RAG: Why Basic Retrieval Breaks Down" — ~600-word document covering 3 naive RAG failure modes, 4 Advanced RAG techniques, and trade-offs. Chosen for traceable markers: precise figures ("256 to 1024 tokens", "100 to 300 milliseconds"), specific technical terms (BM25, cross-encoder), and comparative structure.

**Multi-source (3 tests)**: 5 documents (~300–600 words each) on distinct subjects — RAG, BCBS 239, uv (Python manager), ETL vs ELT, System Prompts vs Few-Shot. Chosen to test narrative fusion and source prioritization.

**Alternative source (2 tests)**: ETL vs ELT document alone (~400 words), to verify pattern generalization beyond RAG.

### 2.2 Protocol

Each test follows: define steering → generate → extract transcript (YouTube subtitles or Whisper) → analyze delta vs baseline. Results are evaluated on 5 axes: duration, source content coverage, factual fidelity, narrative register, and visual style.

Reproducibility tests (identical re-runs) distinguish steering effects from natural noise.

### 2.3 Operational Constraint

Pro tier quota is 2 Cinematic generations per day, confirmed empirically. The protocol therefore spans multiple days with iterative analysis between sessions.

---

## 3. Results Matrix

### 3.1 Mono-source Tests (RAG)

| Test | Steering | Duration | Key Observation |
|------|----------|----------|-----------------|
| A01 | None | 6:44 | Baseline — 3D cinematic style |
| A02 | None | ~7:00 | Baseline — more pedagogical, 3D variant |
| B01 | Expert audience, concise, trade-offs | 5:27 | Colored animated drawings — intro compressed, definitions kept |
| B02 | Imposed 4-point structure | 5:43 | Sketchnote — structure influenced but not dictated |
| B04 | Under 3 min + scope failure modes | 3:44 | B&W whiteboard — duration controlled, scope partially respected |
| **B04 bis** | **Under 3 min (identical rerun)** | **4:13** | **Duration confirmed reproducible (29s variance)** |
| C01 | Flow/journey theme | 3:35 | Flow diagrams — strong narrative + visual impact |
| C01 bis | Flow/journey theme (rerun) | 9:20 | Same thematic vocabulary, duration x2.6 |
| C03 | Accessible + analogies | 4:44 | Massive analogies (open-book test, super librarian) |
| C03 bis | Accessible + analogies (rerun) | 5:25 | Different analogies (executive/intern), same mechanism |
| E01 | Flow theme + duration combined | 5:25 | Weak composability — neither lever well-respected |
| **E01 bis** | **Flow theme + duration (identical rerun)** | **5:30** | **Mono-lever rule confirmed (5s variance, both fail target)** |

### 3.2 Multi-source Tests (5 documents)

| Test | Steering | Duration | Key Observation |
|------|----------|----------|-----------------|
| D02a | None | 8:16 | Coherent vertical stack fusion, 5/5 sources covered |
| D02b | Accessible + analogies | 7:54 | Unified 1940s metaphor, uv excluded (4/5 sources) |
| D02c | Under 4 min | 4:01 | Duration controlled, 5/5 sources covered, uniform compression |

### 3.3 Alternative Source Tests (ETL vs ELT)

| Test | Steering | Duration | Key Observation |
|------|----------|----------|-----------------|
| F01 | None | 5:59 | Same patterns as RAG baseline — editorialization, invented arc |
| F02 | Accessible + analogies | 4:40 | Sustained moving-house analogy, GDPR named, C03 patterns confirmed |

---

## 4. Steering Lever Hierarchy

Levers ranked by decreasing reliability, based on observed reproducibility.

### 4.1 ✅ Accessible Tone and Register — RELIABLE

**Prompt**: `Make this accessible and engaging for a non-technical audience. Use analogies.`

**Observed effect**: Massive, reproducible transformation of narrative register. The pipeline builds a single sustained metaphor (not one analogy per concept) and uses it as the narrative frame throughout. Technical jargon is either translated or immediately explained. Technical depth is reduced.

**Evidence**: 4 tests across 3 source configurations (mono x2, multi x1, alternative x1) — all show the same mechanism with different analogies.

**Limits**: Specific analogies are uncontrollable (non-deterministic). In multi-source, tone steering can cause exclusion of sources deemed incompatible with the narrative register (uv excluded from D02b).

### 4.2 ✅ Explicit Duration — RELIABLE (when isolated)

**Prompt**: `Keep this under [N] minutes.`

**Observed effect**: Significant, reliable duration reduction.

**Evidence**:
- Mono-source: B04 (3:44) + B04 bis (4:13) — 40–47% reduction vs ~7:00 baseline, 29s inter-run variance
- Multi-source: D02c (4:01) — 51% reduction vs 8:16 baseline

**Limits**: Exact target not guaranteed (3:44 and 4:13 for "under 3 minutes"). Effect disappears when combined with another lever (E01: 5:25, E01 bis: 5:30 for "under 4 minutes" + theme).

**Compression mechanism**: The pipeline compresses uniformly rather than excluding. In D02c, all 5 sources covered in 4:01, each reduced to 2–4 sentences.

**Bonus observation**: Duration-compressed runs appear more factually faithful — B04 bis correctly reproduces "256 and 1,024 tokens" and "100 to 300 milliseconds" with no invented concepts. Less room to editorialize when forced to compress.

### 4.3 ✅ Narrative Theme — PARTIALLY RELIABLE

**Prompt**: `Present the material as a journey through connected systems. Emphasize how data flows between components.`

**Observed effect**: Consistent lexical field injection ("data flow", "interception modules", "routes it through", "merged stream"). Thematic framing is constant across generations.

**Evidence**: C01 and C01 bis use identical thematic vocabulary despite radically different durations (3:35 vs 9:20).

**Limits**: No reliable effect on duration, depth, or structure. Theme colors vocabulary but does not control format.

### 4.4 ⚠️ Imposed Structure — WEAK EFFECT

The pipeline reorganizes content based on structural steering but refuses to follow a rigid plan literally. It merges, reorders, interprets. Structural steering works as orientation, not constraint.

### 4.5 ⚠️ Expert Audience — WEAK EFFECT

Slight intro compression (~30s). But intermediate definitions are preserved. The pipeline protects the intelligibility of the final product.

**Fundamental asymmetry**: The pipeline simplifies easily but refuses to add complexity. It is designed to produce accessible content, not expert content.

### 4.6 ❌ Lever Combination — DEGRADES EFFECTS

**Evidence** (confirmed, 2 runs):

| Condition | Runs | Durations | Target met? |
|-----------|------|-----------|-------------|
| Duration alone (B04, B04 bis) | 2 | 3:44, 4:13 | ~Yes |
| Duration + theme (E01, E01 bis) | 2 | 5:25, 5:30 | No |

The combined condition converges reliably (5s inter-run variance) toward a mediocre compromise. Irony: the combination produces the most *deterministic* results in the protocol — but in the wrong direction.

**Rule: one objective per prompt.**

---

## 5. Pipeline Behavior

### 5.1 Source Fidelity

The pipeline is faithful to global structure and technical jargon. But it systematically editorializes in four ways:

**Stakes amplification.** Source says "regulatory compliance system in banking." Pipeline produces "massive financial penalty", "critical business failure", "catastrophic results."

**Figure invention.** Source says "256 to 1024 tokens." Pipeline alternately produces "500 tokens" (B01, E01), "512 tokens" (B04), or faithfully "256 to 1024 tokens" (C01 bis, C03, B04 bis). Duration-compressed runs show better fidelity.

**Technical concept addition.** Pipeline adds "sentence window retrieval", "hierarchical chunking", "time to first token" — all absent from source. It draws from pre-trained knowledge.

**Pedagogical framework fabrication.** Pipeline systematically creates usage dichotomies ("FAQ bot vs compliance system") only sketched in source.

### 5.2 Multi-Source Behavior

The pipeline does not juxtapose — it fuses. Four specific behaviors:

**Narrative fusion.** Sources integrated into an original narrative with invented causal links.

**Hierarchization.** One source chosen as thread (RAG in all 3 D02 tests), others organized around it.

**Scenario fabrication.** Pipeline invents concrete scenarios combining multiple sources.

**Selective exclusion.** Tone steering can eliminate sources incompatible with narrative register (uv excluded from D02b analogies run, included in D02a baseline and D02c duration run).

### 5.3 Non-Determinism

Three levels:

**Cosmetic (low impact).** Section order, transitions, emotional register vary. Limited practical impact.

**Structural (moderate impact).** Visual style changes per generation — 5 different styles observed across tests. No confirmed correlation with steering.

**Quantitative (severe impact).** Duration and depth vary massively between identical runs. C01 (3:35) vs C01 bis (9:20) — same source, same steering, 2.6x duration.

**What IS deterministic**: thematic vocabulary and analogy mechanism are constant. Steering controls "how to say" reliably, not "how much to say."

### 5.4 Control Asymmetry

| Direction | Effect | Evidence |
|-----------|--------|----------|
| Simplify | ✅ Strong | C03, C03 bis, D02b, F02 |
| Complexify | ⚠️ Weak | B01 — slight compression, definitions kept |
| Shorten (explicit) | ✅ Reliable | B04, B04 bis, D02c |
| Shorten (implicit) | ❌ Unreliable | C01 (3:35) vs C01 bis (9:20) |
| Restructure | ⚠️ Weak | B02 — interpreted, not followed |
| Exclude content | ❌ Intentionally impossible | B04 — compresses, doesn't exclude |
| Exclude content | ⚠️ Unintentional | D02b — tone excludes uv |

### 5.5 Visual Style

Five different visual styles observed across 16 tests (3D cinematic isometric, colored animated drawings, sketchnote, B&W whiteboard, flow diagrams). Visual style is decided by Gemini (theoretically reachable by steering), but severe non-determinism makes any effect indistinguishable from noise. A test protocol would require ≥5 runs per condition — impractical at 2/day Pro quota. Axis closed without positive or negative conclusion.

---

## 6. Pro Tier Limitations

| Constraint | Value | Confirmation |
|------------|-------|-------------|
| Daily quota | 2 Cinematic generations / day | Empirical — 3rd blocked |
| Mono-source baseline duration | 6:30–7:00 (~600-word source) | A01 + A02 |
| Multi-source baseline duration | ~8:16 (~2400 words, 5 sources) | D02a |
| Observed duration range | 3:35 – 9:20 (same mono-source) | Full protocol |
| View custom prompt | Unavailable for Cinematic | Verified — exists for Audio Overview |
| Auto-subtitles | Inconsistent | B04 (empty file), D02a (requires wait) |
| Language | English only | Watch + empirical |

---

## 7. Validated Steering Prompts

Three prompts validated for inclusion in the library with `status: experimental`.

### 7.1 Accessible Tone with Analogies ★

```
Make this accessible and engaging for a non-technical audience. Use analogies.
```

Best overall result. Tested: mono-source (x2), multi-source (x1), alternative source (x1). Reproducibility: **confirmed**.

### 7.2 Duration Control

```
Keep this under [N] minutes.
```

Tested: mono-source (x2, B04 + B04 bis), multi-source (x1). Reproducibility: **confirmed**.

### 7.3 Thematic Focus

```
Present the material as a journey through connected systems. Emphasize how data flows between components.
```

Tested: mono-source (x2). Reproducibility: **confirmed** (vocabulary only — duration unaffected).

### Critical Rule: Mono-Lever

**Never combine multiple instructions in a single steering prompt.** Tested: 2 identical runs of duration + theme combination (E01, E01 bis) — both degrade the duration effect by ~25 percentage points vs duration alone, with high inter-run consistency (5s variance). The pipeline arbitrates between competing instructions rather than combining them.

---

## 8. Workflow Recommendation

### 8.1 Positioning

**Cinematic is a communication tool, not a learning tool.**

Four factors disqualify it for intellectual appropriation: systematic stakes dramatization, unsourced content additions, fabricated causal links in multi-source, and severe duration/depth non-determinism.

Audio Overview remains superior for concept appropriation in a structured learning workflow.

**Optimal use case**: Produce a short technical awareness video for non-specialists — presenting to decision-makers, introducing a concept in meetings, internal communication support.

### 8.2 Production Workflow

**Before generation:**
- Invest in source quality. A well-structured document with clear sections, prose (not bullet points), and factual markers produces a better video than a mediocre document with brilliant steering.
- Choose a single steering objective.

**Steering selection:**

| Objective | Prompt |
|-----------|--------|
| Popularize for non-specialists | `Make this accessible and engaging for a non-technical audience. Use analogies.` |
| Shorten the video | `Keep this under [N] minutes.` |
| Orient narrative vocabulary | A theme in one sentence (e.g., "Present this as a journey through...") |
| No specific objective | Leave empty — baseline quality is already good |

**After generation:**
- Watch the full video. If unsatisfied, regenerate (max 2/day).
- **Always verify technical facts against sources.** The pipeline invents figures, adds concepts, and fabricates connections.
- Extract transcript (YouTube subtitles or Whisper) for systematic verification.

### 8.3 What NOT to Do

- Do not combine multiple instructions in a single prompt.
- Do not expect the pipeline to follow a rigid structural plan.
- Do not rely on predictable duration without explicit duration instruction.
- Do not assume "skip basic definitions" will produce expert content.
- Do not use Cinematic as a factual source of truth.

---

## 9. Study Limitations

### 9.1 Source Bias

12 of 16 tests used the same RAG document. Alternative source tests (2) and multi-source tests (3) broaden coverage, but generalization to very different subjects (non-technical, literary, historical) is unverified.

### 9.2 Sample Size

With 2 generations/day over ~9 days, we have 16 tests. Reproducibility tests (3 pairs: B04/B04 bis, C01/C01 bis, C03/C03 bis, plus E01/E01 bis) are the minimum to distinguish signal from noise.

### 9.3 Untested Areas

- **Long source (50+ pages)**: Dense document behavior unknown.
- **Other narrative themes**: Only "journey through connected systems" tested.
- **Source count interaction**: Steering tested on 1, 5, and alternative sources. Behavior on 2–3 sources unknown.
- **Duration on alternative source**: CIN-DURATION tested only on RAG mono and multi-source, not on ETL vs ELT.

### 9.4 Absence of "View Custom Prompt"

Unlike other NotebookLM Studio formats, Cinematic does not offer "View custom prompt." Analysis relies entirely on final product observation (video + transcript), without access to the intermediate pipeline.

---

## 10. Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-20 | Interim report — 6 tests (A01, A02, B01, B02, B04, C01) |
| 2.0 | 2026-03-21 | Added C01 bis + C03 — non-determinism and duration correction |
| 3.0 | 2026-03-21 | Added C03 bis + E01 — tone/analogies confirmed reproducible, weak composability |
| 4.0 | 2026-03-22 | Added D02a + D02b — multi-source findings, unintentional exclusion |
| 5.0 | 2026-03-23 | Final synthesis — added D02c, F01, F02, complete restructuring |
| **6.0** | **2026-03-24** | **Added B04 bis + E01 bis. CIN-DURATION upgraded to "confirmed." Mono-lever rule upgraded to "confirmed." Architecture clarification (Imagen confusion debunked). Visual style axis closed. English rewrite for publication.** |
