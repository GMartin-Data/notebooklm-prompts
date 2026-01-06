# NotebookLM Prompts Library

**Version 2.2.0** | 49 prompts | 8 categories | Focus: Data Engineering

## Quick Start

```bash
git clone https://github.com/YOUR_USER/notebooklm-prompts.git
cd notebooklm-prompts
```

Browse prompts by category, copy the template from the code block, customize placeholders `[LIKE THIS]`, paste into NotebookLM.

## Structure

```
prompts/
├── learning/                              # 4 prompts
│   ├── active-learning-session-planner.md
│   ├── concept-connection-mapper.md
│   ├── essential-questions-generator.md
│   └── source-grounded-project-designer.md
├── troubleshooting/                       # 3 prompts
│   ├── pipeline-debugger.md
│   ├── source-based-gap-analysis-engine.md
│   └── source-comparison-implementation-guide.md
├── productivity/                          # 3 prompts
│   ├── complete-study-guide-generator.md
│   ├── content-strategy-analyzer.md
│   └── meeting-summary-generator.md
├── advanced-techniques/                   # 5 prompts
│   ├── custom-audio-overview-with-debate.md
│   ├── interest-driven-summarization.md
│   ├── multi-pass-structured-iteration.md
│   ├── multi-source-comparison-table.md
│   └── podcast-style-text-response.md
├── data-engineering-specific/             # 5 prompts
│   ├── architecture-decision-comparison.md
│   ├── code-review-with-best-practices.md
│   ├── learning-path-designer.md
│   ├── tech-watch-synthesis.md
│   └── technical-documentation-generator.md
├── critical-analysis/                     # 4 prompts
│   ├── the-anti-thesis.md
│   ├── the-devils-advocate.md
│   ├── the-dialectical-lens.md
│   └── the-disillusionment-filter.md
├── source-management/                     # 11 prompts
│   ├── global-synthesis-compact.md
│   ├── global-synthesis-data-engineering.md
│   ├── global-synthesis-full.md
│   ├── optimized-source-discovery.md
│   ├── recurring-topics-domain-learning-variant.md
│   ├── recurring-topics-extractor-v1-complete.md
│   ├── recurring-topics-extractor-v2-compact.md
│   ├── recurring-topics-solution-evaluation-variant.md
│   ├── recurring-topics-tech-watch-variant.md
│   ├── source-conflict-detector.md
│   └── source-relevance-ranker.md
├── studio/                                # 14 prompts
│   ├── audio/
│   │   ├── brief-executive-summary.md
│   │   ├── critique-solution-evaluation.md
│   │   ├── debate-opposing-views.md
│   │   └── deep-dive-technical-focus.md
│   ├── video/
│   │   ├── brief-video-quick-explainer.md
│   │   ├── explainer-video-comprehensive.md
│   │   └── synthesis-to-video-overview.md
│   ├── infographic/
│   │   ├── architecture-overview.md
│   │   ├── battle-card-comparison.md
│   │   ├── data-storytelling.md
│   │   └── process-flow.md
│   └── slide-deck/
│       ├── detailed-deck-standalone-document.md
│       ├── presenter-slides-speaking-support.md
│       └── technical-rfc-deck.md
├── tracking.yaml                          # Usage metrics
├── CHANGELOG.md
├── .gitignore
└── README.md
```

## File Format

Each prompt file contains:

```yaml
---
name: "Prompt Name"
category: category-name
difficulty: beginner|intermediate|advanced
source: "Original Source"
use_case: "Data Engineering use case"
---
```

Followed by the prompt template in a code block.

## Tracking Usage

Update `tracking.yaml` after using prompts:

```yaml
prompt-name:
  last_used: 2026-01-06
  uses_count: 1
  success_rate: 1.0
  avg_quality: 4.5
  notes: "Worked well for X"
```

**Thresholds:**
- `success_rate < 70%` → Revise prompt
- `avg_quality < 3.5` → Revise prompt
- `uses_count = 0` after 3 months → Archive

## Contributing

1. Create prompt in `experiments/` first
2. Test 3+ times in NotebookLM with real sources
3. Move to appropriate category
4. Add entry to `tracking.yaml`
5. Update `CHANGELOG.md`

## License

MIT