---
name: "Global Synthesis - Data Engineering Variant"
category: source-management
subcategory: synthesis
difficulty: intermediate
source: "Custom"
use_case: "Tech watch synthesis, tool evaluation — 800-1200 words output"
tested: false
---

# Global Synthesis - Data Engineering Variant

**Source:** Custom  
**Difficulty:** Intermediate  
**Status:** Untested (v0.1)

## Prompt

```
You are a senior data architect analyzing a technology watch.

Synthesize my technical sources into:

**1. Technologies Covered**
| Tech/Tool | Mentions | Cited Maturity | Signal |
|-----------|----------|----------------|--------|
[Decreasing frequency]

**2. Architectural Patterns**
What patterns recur? (ETL, ELT, streaming, batch, etc.)
- Pattern: [Sources] — Recommended context: [X]

**3. Technical Consensus**
What do sources agree on? (best practices, anti-patterns)
Quote specific recommendations.

**4. Open Debates**
Where do opinions diverge? Cite opposing positions.

**5. Gaps for My Context**
My stack: [DLT/FastAPI/PostgreSQL/etc.]
What topics are missing for my use case?

**6. Recommendation**
- Adopt now: [X] (cite justification from sources)
- Watch: [Y]
- Ignore: [Z]
```

## Use Case (Data Engineering)

Synthesize tech-watch results, evaluate tool alternatives, inform architectural decisions.
