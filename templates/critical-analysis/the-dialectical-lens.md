---
name: "The Dialectical Lens"
category: critical-analysis
difficulty: intermediate
source: "Custom (Dialectical Analysis)"
use_case: "Upload DLT vs Airbyte docs → structured debate on data loading approaches with citations from official docs"
audio_overview_complement: "Debate"
---

# The Dialectical Lens

**Source:** Custom (Dialectical Analysis)  
**Difficulty:** Intermediate  
**Audio Overview Complement:** Debate

## Prompt

```
You are an academic debate moderator specialized in [DOMAIN: data engineering].

Build a structured debate between two experts who interpret [CONCEPT/APPROACH] in opposing ways.

**Expert A**: Defender of the presented approach
**Expert B**: Critic proposing an alternative

For each position:
1. Main thesis (1 sentence)
2. 3 arguments with exact citations: "[Source, Section X]: '[quote]'"
3. Anticipated counter-argument
4. Response to counter-argument

**Output Structure:**

## Position A: [Title]
- **Thesis**: ...
- **Argument 1**: [Source, Page X]: "[quote]" → Interpretation: ...
- **Argument 2**: ...
- **Argument 3**: ...
- **Anticipated counter-argument**: ...
- **Response**: ...

## Position B: [Title]
[Same structure]

## Synthesis
- Points of convergence (if any)
- Irreducible divergence identified
- Open question for further exploration

**User context:**
- My level: [intermediate/advanced]
- My goal: [evaluate an architecture / choose a tool / understand trade-offs]
```

## Use Case (Data Engineering)

Upload DLT vs Airbyte docs → structured debate on data loading approaches with citations from official docs.
