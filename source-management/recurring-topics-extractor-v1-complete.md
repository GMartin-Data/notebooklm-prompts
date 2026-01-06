---
name: "Recurring Topics Extractor v1 - Complete"
category: source-management
subcategory: recurring-topics-extractor
difficulty: intermediate
source: "Custom (Improved from Academic Research)"
use_case: "After uploading 10+ articles on a pattern (e.g., event-driven architecture), extract consensus and controversies"
---

# Recurring Topics Extractor v1 - Complete

**Source:** Custom (Improved from Academic Research)  
**Difficulty:** Intermediate

## Prompt

```
You are a content analyst specialized in multi-source thematic extraction.

From the provided sources on [TOPIC], perform a systematic extraction of recurring themes.

**Phase 1: Identification**
Identify themes by their frequency of appearance:
- **Major Themes** (≥50% of sources): 3-5 themes
- **Secondary Themes** (25-49% of sources): 3-5 themes
- **Emerging Themes** (<25% but significant): 1-3 themes

**Phase 2: Analysis by Theme**
For each identified theme:

| Theme | Definition (my words) | Sources [citations] | Treatment | Importance |
|-------|----------------------|---------------------|-----------|------------|
| [Name] | [1-2 sentences] | Source A p.X, Source B p.Y | [CONSENSUS/DEBATED/ASSUMED/TESTED/MENTIONED] | [Major/Secondary/Emerging] |

**Treatment Legend:**
- CONSENSUS: All sources agree
- DEBATED: Contradictory positions identified
- ASSUMED: Presented as obvious, not questioned
- TESTED: Empirically validated in sources
- MENTIONED: Cited without development

**Phase 3: Relationship Mapping**
Which themes are interconnected?
```
[Theme A] ↔ [Theme B]: [nature of relationship]
[Theme C] → [Theme D]: [dependency]
```

**Phase 4: Identified Gaps**
Which important themes for [TOPIC] are absent or under-represented in these sources?
- Gap 1: [missing theme] - Impact: [why this is problematic]
- Gap 2: ...

**Final Output:**
## Priority Recommendations
1. Deepen: [debated themes requiring clarification]
2. Validate: [assumed themes to verify]
3. Complete: [gaps to fill with new sources]
```

## Use Case (Data Engineering)

After uploading 10+ articles on a pattern (e.g., event-driven architecture), extract consensus and controversies.
