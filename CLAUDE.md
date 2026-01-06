# CLAUDE.md — NotebookLM Prompts Library

This repository contains 49 prompts for NotebookLM, focused on Data Engineering workflows.

## Repository Structure

```
├── learning/                    # 4 prompts — active learning, concept mapping
├── troubleshooting/             # 3 prompts — debugging, gap analysis
├── productivity/                # 3 prompts — study guides, meeting summaries
├── advanced-techniques/         # 5 prompts — multi-pass, comparison tables
├── data-engineering-specific/   # 5 prompts — architecture decisions, code review
├── critical-analysis/           # 4 prompts — devil's advocate, dialectical lens
├── source-management/           # 11 prompts — synthesis, topic extraction, ranking
├── studio/                      # 14 prompts — audio, video, infographic, slide-deck
│   ├── audio/
│   ├── video/
│   ├── infographic/
│   └── slide-deck/
├── docs/                        # Workflow documentation
├── tracking.yaml                # Usage metrics
└── CHANGELOG.md
```

## Prompt File Format

Each prompt is a Markdown file with YAML frontmatter:

```yaml
---
name: "Prompt Name"
category: category-name
difficulty: beginner|intermediate|advanced
source: "Original Source"
use_case: "Short description of the use case"
---
```

The prompt template follows in a code block with placeholders formatted as `[LIKE THIS]`.

## Conventions

- **Prompts**: Written in English (NotebookLM compatibility)
- **README & docs**: Written in English (consistency)
- **Difficulty levels**: `beginner`, `intermediate`, `advanced`
- **Categories**: Match folder names exactly

## Files to Maintain

- `tracking.yaml` — Update after using prompts (see thresholds below)
- `CHANGELOG.md` — Document additions/changes per [Keep a Changelog](https://keepachangelog.com/)

### Tracking Thresholds

| Metric | Threshold | Action |
|--------|-----------|--------|
| `success_rate` | < 70% | Analyze and iterate |
| `avg_quality` | < 3.5/5 | Revise prompt |
| `uses_count = 0` | 3 months | Archive or delete |

## Workflows

For detailed processes, see:

- @docs/workflow-prompt-improvement.md — Prompt improvement cycle (design → validate → archive)
- @docs/workflow-synthesis-notebooklm.md — Multi-source synthesis to video workflow

## AI Workflow Guidelines

1. **Propose before modifying** — Show changes before applying them
2. **Preserve frontmatter** — Always include complete YAML frontmatter when editing prompts
3. **Update tracking** — When adding prompts, add corresponding entry in `tracking.yaml`
4. **Conventional commits** — Use format like `docs(readme): description` or `feat(learning): add new-prompt`
