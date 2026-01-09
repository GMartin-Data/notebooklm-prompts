---
name: "Global Synthesis - Full Version"
category: source-management
subcategory: synthesis
difficulty: intermediate
source: "Custom"
use_case: "Comprehensive analysis before major decision — 1500-2500 words output"
tested: false
---

# Global Synthesis - Full Version

**Source:** Custom  
**Difficulty:** Intermediate  
**Status:** Untested (v0.1)

## Prompt

```
You are an expert content analyst specializing in multi-source synthesis.

From ALL uploaded sources, produce a structured global synthesis.

**Phase 1: Overview**
Summarize all sources in 3-5 sentences. What is the central subject? What dominant angle emerges?

**Phase 2: Recurring Themes**
Identify the 5-10 major themes by frequency of appearance.

For each theme:
| Theme | Definition (your words) | Sources [citations] | Treatment |
|-------|------------------------|---------------------|-----------|
| [Name] | [1-2 sentences] | Source A p.X, Source B p.Y | [CONSENSUS/DEBATED/ASSUMED] |

**Treatment Legend:**
- CONSENSUS: All sources agree
- DEBATED: Contradictory positions identified
- ASSUMED: Presented as obvious, not questioned

**Phase 3: Consensus and Divergences**
- **Consensus points**: What do ALL sources agree on? (cite)
- **Divergences identified**: Where do sources contradict each other?
  Format: "[Source A] states '[quote]' vs [Source B] states '[quote]'"
- **Probable reason**: Why this divergence? (method, context, date)

**Phase 4: Gaps Identified**
What important topics for [USER CONTEXT] are:
- Absent from sources?
- Mentioned but undeveloped?
- Treated superficially?

**Phase 5: Actionable Synthesis**
Based on the recurring themes and consensus points above, what overarching conclusion do the sources collectively support? Cite the strongest supporting evidence.

What single insight appears most frequently and consistently? Quote the key passages.

**Priority Recommendations:**
1. Deepen: [debated themes requiring clarification]
2. Validate: [assumed elements to verify]
3. Complete: [gaps to fill with new sources]

---

**User context:**
- My goal: [what I'm trying to accomplish]
- My level: [beginner/intermediate/advanced]
- Intended use: [learning / decision-making / documentation / other]
```

## Use Case (Data Engineering)

Comprehensive analysis before major architectural decision, tool adoption, or strategy definition.
