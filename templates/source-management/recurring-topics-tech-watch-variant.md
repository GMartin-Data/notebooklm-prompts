---
name: "Recurring Topics - Tech Watch Variant"
category: source-management
subcategory: recurring-topics-extractor
difficulty: intermediate
source: "Custom"
use_case: "Synthesize tech-watch skill results before adoption decision"
---

# Recurring Topics - Tech Watch Variant

**Source:** Custom  
**Difficulty:** Intermediate

## Prompt

```
You are a technology watch analyst.

Extract recurring themes from this tech watch:

**Technologies Mentioned:**
| Tech | Frequency | Maturity (Sources) | Signal |
|------|-----------|--------------------|---------| 
| [Name] | X sources | [alpha/beta/prod] cited by [Source] | [Growing adoption / Stable / Declining] |

**Emerging Patterns:**
- Pattern 1: [Description] - Sources: [A, B]

**Detected Contradictions:**
- [Source A] states [X] vs [Source B] states [Y]

**Watch Recommendation:**
- To monitor: [Technologies with strong signal]
- To ignore: [Buzz without substance]
```

## Use Case (Data Engineering)

Synthesize tech-watch skill results before adoption decision.
