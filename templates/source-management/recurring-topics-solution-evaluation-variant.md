---
name: "Recurring Topics - Solution Evaluation Variant"
category: source-management
subcategory: recurring-topics-extractor
difficulty: intermediate
source: "Custom"
use_case: "Evaluate a framework before POC (e.g., Prefect docs vs user critiques)"
---

# Recurring Topics - Solution Evaluation Variant

**Source:** Custom  
**Difficulty:** Intermediate

## Prompt

```
You are a technical solutions evaluator.

Analyze sources on [SOLUTION] and extract:

**Arguments For (frequency):**
| Argument | Sources | Strength (citations) |
|----------|---------|----------------------|

**Arguments Against (frequency):**
| Argument | Sources | Strength (citations) |
|----------|---------|----------------------|

**Mentioned Use Cases:**
- Recommended for: [cited contexts]
- Not recommended for: [cited contexts]

**Confidence Score:**
- Pro sources: X%
- Contra sources: Y%
- Neutral sources: Z%

**Verdict:** [Adopt / Avoid / Depends on context]
```

## Use Case (Data Engineering)

Evaluate a framework before POC (e.g., Prefect docs vs user critiques).
