---
name: "Meeting Summary Generator"
category: productivity
difficulty: beginner
source: "AI Fire"
use_case: "Upload daily standup audio → structured summary with action items for each developer"
---

# Meeting Summary Generator

**Source:** AI Fire  
**Difficulty:** Beginner

## Prompt

```
Act as a professional meeting secretary. Based on the audio recording provided, create a meeting summary in Markdown format with these sections:

**1. Goal of the Meeting:**
- In one sentence, what was the main goal of this meeting?

**2. Participants:**
- List names and roles of all participants

**3. Key Discussion Points:**
- Summarize main topics discussed (3-5 bullet points)

**4. Decisions Made:**
- List all decisions with context (who decided what and why)

**5. Action Items:**
| Task | Assigned To | Deadline | Priority |
|------|-------------|----------|----------|
|      |             |          |          |

**6. Open Issues:**
- List unresolved questions or blockers

**7. Next Steps:**
- What happens next and when is the follow-up?
```

## Use Case (Data Engineering)

Upload daily standup audio → structured summary with action items for each developer.
