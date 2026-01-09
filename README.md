# NotebookLM Prompts Library

**Version 2.5.0** | 57 prompts | 8 categories | Focus: Data Engineering

## Quick Start

```bash
git clone https://github.com/YOUR_USER/notebooklm-prompts.git
cd notebooklm-prompts
```

Browse prompts by category, copy the template from the code block, customize placeholders `[LIKE THIS]`, paste into NotebookLM.

## Prompt Index

| Prompt | Category | Difficulty | Description |
|--------|----------|------------|-------------|
| [Active Learning Session Planner](templates/learning/active-learning-session-planner.md) | learning | beginner | Design focused learning sessions from uploaded materials |
| [Concept Connection Mapper](templates/learning/concept-connection-mapper.md) | learning | intermediate | Map relationships between concepts across sources |
| [Essential Questions Generator](templates/learning/essential-questions-generator.md) | learning | beginner | Extract core concepts via 5 essential questions |
| [Source-Grounded Project Designer](templates/learning/source-grounded-project-designer.md) | learning | intermediate | Design projects with cross-referenced source citations |
| [Pipeline Debugger](templates/troubleshooting/pipeline-debugger.md) | troubleshooting | intermediate | Systematic debugging with source-cited fixes |
| [Source-Based Gap Analysis Engine](templates/troubleshooting/source-based-gap-analysis-engine.md) | troubleshooting | advanced | Compare your approach against source best practices |
| [Source-Comparison Implementation Guide](templates/troubleshooting/source-comparison-implementation-guide.md) | troubleshooting | intermediate | Compare solutions across multiple sources |
| [Complete Study Guide Generator](templates/productivity/complete-study-guide-generator.md) | productivity | intermediate | Generate study guide with flashcards and quizzes |
| [Content Strategy Analyzer](templates/productivity/content-strategy-analyzer.md) | productivity | intermediate | Analyze content for repurposing and sharing |
| [Meeting Summary Generator](templates/productivity/meeting-summary-generator.md) | productivity | beginner | Structured meeting summary with action items |
| [Custom Audio Overview with Debate](templates/advanced-techniques/custom-audio-overview-with-debate.md) | advanced-techniques | advanced | Audio overview with hosts debating interpretations |
| [Interest-Driven Summarization](templates/advanced-techniques/interest-driven-summarization.md) | advanced-techniques | beginner | Extract surprising/interesting findings from sources |
| [Multi-Pass Structured Iteration](templates/advanced-techniques/multi-pass-structured-iteration.md) | advanced-techniques | advanced | 4-pass analysis: summarize, contradict, synthesize, plan |
| [Multi-Source Comparison Table](templates/advanced-techniques/multi-source-comparison-table.md) | advanced-techniques | intermediate | Compare methodologies and tools across 20+ sources |
| [Podcast-Style Text Response](templates/advanced-techniques/podcast-style-text-response.md) | advanced-techniques | advanced | Transform docs into engaging conversational format |
| [Architecture Decision Comparison](templates/data-engineering-specific/architecture-decision-comparison.md) | data-engineering | advanced | Source-backed comparison table for architecture decisions |
| [Code Review with Best Practices](templates/data-engineering-specific/code-review-with-best-practices.md) | data-engineering | intermediate | Review code against uploaded best practices docs |
| [Learning Path Designer](templates/data-engineering-specific/learning-path-designer.md) | data-engineering | intermediate | Create structured learning roadmap from docs |
| [Tech Watch Synthesis](templates/data-engineering-specific/tech-watch-synthesis.md) | data-engineering | intermediate | Synthesize tech watch into adoption recommendations |
| [Technical Documentation Generator](templates/data-engineering-specific/technical-documentation-generator.md) | data-engineering | intermediate | Generate docs from code + reference materials |
| [The Anti-Thesis](templates/critical-analysis/the-anti-thesis.md) | critical-analysis | advanced | Stress-test arguments by constructing opposing thesis |
| [The Devil's Advocate](templates/critical-analysis/the-devils-advocate.md) | critical-analysis | advanced | Simulate skeptical interview to expose weaknesses |
| [The Dialectical Lens](templates/critical-analysis/the-dialectical-lens.md) | critical-analysis | intermediate | Structured debate between two expert positions |
| [The Disillusionment Filter](templates/critical-analysis/the-disillusionment-filter.md) | critical-analysis | advanced | Identify promises vs reality in "magic" tools |
| [Global Synthesis - Compact](templates/source-management/global-synthesis-compact.md) | source-management | beginner | Quick multi-source synthesis (400-800 words) |
| [Global Synthesis - Data Engineering](templates/source-management/global-synthesis-data-engineering.md) | source-management | intermediate | Tech-focused synthesis with adoption recommendations |
| [Global Synthesis - Full](templates/source-management/global-synthesis-full.md) | source-management | intermediate | Comprehensive multi-source synthesis (1500-2500 words) |
| [Optimized Source Discovery](templates/source-management/optimized-source-discovery.md) | source-management | beginner | Formulate effective source discovery queries |
| [Recurring Topics - Domain Learning](templates/source-management/recurring-topics-domain-learning-variant.md) | source-management | beginner | Structure learning of a new domain from docs |
| [Recurring Topics Extractor v1](templates/source-management/recurring-topics-extractor-v1-complete.md) | source-management | intermediate | Extract consensus and controversies from 10+ sources |
| [Recurring Topics Extractor v2](templates/source-management/recurring-topics-extractor-v2-compact.md) | source-management | beginner | Quick scan for recurring themes |
| [Recurring Topics - Solution Evaluation](templates/source-management/recurring-topics-solution-evaluation-variant.md) | source-management | intermediate | Evaluate framework pros/cons before POC |
| [Recurring Topics - Tech Watch](templates/source-management/recurring-topics-tech-watch-variant.md) | source-management | intermediate | Analyze tech watch for adoption signals |
| [Source Conflict Detector](templates/source-management/source-conflict-detector.md) | source-management | intermediate | Identify conflicts and gaps across sources |
| [Source Relevance Ranker](templates/source-management/source-relevance-ranker.md) | source-management | beginner | Filter 20+ sources to most relevant 5-10 |
| [Brief - Executive Summary](templates/studio/audio/brief-executive-summary.md) | studio/audio | — | 5-minute audio summary for management |
| [Critique - Solution Evaluation](templates/studio/audio/critique-solution-evaluation.md) | studio/audio | — | Critical evaluation audio before adoption |
| [Debate - Opposing Views](templates/studio/audio/debate-opposing-views.md) | studio/audio | — | Audio debate exploring trade-offs |
| [Deep Dive - Technical Focus](templates/studio/audio/deep-dive-technical-focus.md) | studio/audio | — | Extended technical audio with source comparison |
| [Brief Video - Quick Explainer](templates/studio/video/brief-video-quick-explainer.md) | studio/video | — | 1-2 minute video intro for onboarding |
| [Explainer Video - Comprehensive](templates/studio/video/explainer-video-comprehensive.md) | studio/video | — | 6-10 minute technical explainer video |
| [Synthesis to Video Overview](templates/studio/video/synthesis-to-video-overview.md) | studio/video | beginner | Generate video from synthesis note |
| [Video — Architecture/Pipelines](templates/studio/video/video-architecture-pipeline.md) | studio/video | intermediate | Visualize data architectures and pipelines |
| [Video — Vulgarisation/Concepts](templates/studio/video/video-vulgarisation-concepts.md) | studio/video | beginner | Explain complex concepts simply |
| [Video — Stakeholders/Executive](templates/studio/video/video-stakeholders-executive.md) | studio/video | intermediate | Executive summaries and reporting |
| [Video — Onboarding technique](templates/studio/video/video-onboarding-technique.md) | studio/video | beginner | Training and tutorials |
| [Video — Documentation technique](templates/studio/video/video-documentation-technique.md) | studio/video | intermediate | API docs and technical specs |
| [Video — Innovation/Produit](templates/studio/video/video-innovation-produit.md) | studio/video | intermediate | Product pitches and demos |
| [Infographic — Architecture/Data](templates/studio/infographic/infographic-architecture-data.md) | studio/infographic | — | Isometric data platform diagrams |
| [Infographic — Vulgarisation](templates/studio/infographic/infographic-vulgarisation.md) | studio/infographic | — | Complex concepts for non-experts |
| [Infographic — Executive/KPIs](templates/studio/infographic/infographic-executive-kpis.md) | studio/infographic | — | KPIs and metrics, Swiss Minimalist |
| [Infographic — Comparaison](templates/studio/infographic/infographic-comparison.md) | studio/infographic | — | Split-screen duotone comparison |
| [Infographic — Process/Timeline](templates/studio/infographic/infographic-process-timeline.md) | studio/infographic | — | Journey metaphor workflow |
| [Infographic — Social Media](templates/studio/infographic/infographic-social-media.md) | studio/infographic | — | Viral content, Cyberpunk style |
| [Detailed Deck - Standalone](templates/studio/slide-deck/detailed-deck-standalone-document.md) | studio/slide-deck | — | Full presentation for technical review |
| [Presenter Slides - Speaking Support](templates/studio/slide-deck/presenter-slides-speaking-support.md) | studio/slide-deck | — | Minimal slides with speaker notes |
| [Technical RFC Deck](templates/studio/slide-deck/technical-rfc-deck.md) | studio/slide-deck | — | RFC presentation for architecture proposals |

## Which Prompt for Which Use Case?

### Learning a New Topic
| Need | Recommended Prompt |
|------|-------------------|
| Quick start with a concept | [Essential Questions Generator](templates/learning/essential-questions-generator.md) |
| Structured learning session | [Active Learning Session Planner](templates/learning/active-learning-session-planner.md) |
| Understand concept relationships | [Concept Connection Mapper](templates/learning/concept-connection-mapper.md) |
| Build a hands-on project | [Source-Grounded Project Designer](templates/learning/source-grounded-project-designer.md) |
| Create a learning roadmap | [Learning Path Designer](templates/data-engineering-specific/learning-path-designer.md) |
| Structure domain knowledge | [Recurring Topics - Domain Learning](templates/source-management/recurring-topics-domain-learning-variant.md) |

### Debugging & Troubleshooting
| Need | Recommended Prompt |
|------|-------------------|
| Fix a broken pipeline | [Pipeline Debugger](templates/troubleshooting/pipeline-debugger.md) |
| Understand why something failed | [Source-Based Gap Analysis Engine](templates/troubleshooting/source-based-gap-analysis-engine.md) |
| Compare different solutions | [Source-Comparison Implementation Guide](templates/troubleshooting/source-comparison-implementation-guide.md) |

### Synthesizing Multiple Sources
| Need | Recommended Prompt |
|------|-------------------|
| Quick overview (2 min read) | [Global Synthesis - Compact](templates/source-management/global-synthesis-compact.md) |
| Comprehensive analysis | [Global Synthesis - Full](templates/source-management/global-synthesis-full.md) |
| Tech-focused synthesis | [Global Synthesis - Data Engineering](templates/source-management/global-synthesis-data-engineering.md) |
| Extract recurring themes | [Recurring Topics Extractor v1](templates/source-management/recurring-topics-extractor-v1-complete.md) |
| Quick theme scan | [Recurring Topics Extractor v2](templates/source-management/recurring-topics-extractor-v2-compact.md) |

### Evaluating Tools & Architectures
| Need | Recommended Prompt |
|------|-------------------|
| Compare two approaches | [Architecture Decision Comparison](templates/data-engineering-specific/architecture-decision-comparison.md) |
| Evaluate before POC | [Recurring Topics - Solution Evaluation](templates/source-management/recurring-topics-solution-evaluation-variant.md) |
| Stress-test vendor claims | [The Anti-Thesis](templates/critical-analysis/the-anti-thesis.md) |
| Anticipate objections | [The Devil's Advocate](templates/critical-analysis/the-devils-advocate.md) |
| Reality-check "magic" tools | [The Disillusionment Filter](templates/critical-analysis/the-disillusionment-filter.md) |
| Structured debate on trade-offs | [The Dialectical Lens](templates/critical-analysis/the-dialectical-lens.md) |

### Managing Sources
| Need | Recommended Prompt |
|------|-------------------|
| Find relevant sources | [Optimized Source Discovery](templates/source-management/optimized-source-discovery.md) |
| Filter to best sources | [Source Relevance Ranker](templates/source-management/source-relevance-ranker.md) |
| Detect conflicts/gaps | [Source Conflict Detector](templates/source-management/source-conflict-detector.md) |
| Tech watch analysis | [Recurring Topics - Tech Watch](templates/source-management/recurring-topics-tech-watch-variant.md) |

### Creating Studio Content
| Need | Recommended Prompt |
|------|-------------------|
| Quick audio for management | [Brief - Executive Summary](templates/studio/audio/brief-executive-summary.md) |
| Critical evaluation audio | [Critique - Solution Evaluation](templates/studio/audio/critique-solution-evaluation.md) |
| Debate audio on trade-offs | [Debate - Opposing Views](templates/studio/audio/debate-opposing-views.md) |
| Deep technical audio | [Deep Dive - Technical Focus](templates/studio/audio/deep-dive-technical-focus.md) |
| Short explainer video | [Brief Video - Quick Explainer](templates/studio/video/brief-video-quick-explainer.md) |
| Full explainer video | [Explainer Video - Comprehensive](templates/studio/video/explainer-video-comprehensive.md) |
| Video from synthesis | [Synthesis to Video Overview](templates/studio/video/synthesis-to-video-overview.md) |
| Video: architecture/pipelines | [Video — Architecture/Pipelines](templates/studio/video/video-architecture-pipeline.md) |
| Video: explain concepts simply | [Video — Vulgarisation/Concepts](templates/studio/video/video-vulgarisation-concepts.md) |
| Video: executive summary | [Video — Stakeholders/Executive](templates/studio/video/video-stakeholders-executive.md) |
| Video: training/tutorials | [Video — Onboarding technique](templates/studio/video/video-onboarding-technique.md) |
| Video: API/technical docs | [Video — Documentation technique](templates/studio/video/video-documentation-technique.md) |
| Video: product pitch/demo | [Video — Innovation/Produit](templates/studio/video/video-innovation-produit.md) |
| Architecture diagram | [Infographic — Architecture/Data](templates/studio/infographic/infographic-architecture-data.md) |
| Explain concepts simply | [Infographic — Vulgarisation](templates/studio/infographic/infographic-vulgarisation.md) |
| KPIs and metrics | [Infographic — Executive/KPIs](templates/studio/infographic/infographic-executive-kpis.md) |
| Tool comparison | [Infographic — Comparaison](templates/studio/infographic/infographic-comparison.md) |
| Process documentation | [Infographic — Process/Timeline](templates/studio/infographic/infographic-process-timeline.md) |
| Social media content | [Infographic — Social Media](templates/studio/infographic/infographic-social-media.md) |
| Technical presentation | [Detailed Deck - Standalone](templates/studio/slide-deck/detailed-deck-standalone-document.md) |
| Speaking support slides | [Presenter Slides - Speaking Support](templates/studio/slide-deck/presenter-slides-speaking-support.md) |
| RFC presentation | [Technical RFC Deck](templates/studio/slide-deck/technical-rfc-deck.md) |

## Best Practices

### 7 Golden Rules for NotebookLM Prompts

1. **Quality over quantity** — 5-15 high-quality sources beat 50 mediocre ones
2. **Always cite sources** — Use format `[Source, Page X]: "[quote]"` for verifiable outputs
3. **Customize placeholders** — Replace all `[LIKE THIS]` with your specific context
4. **Start with synthesis** — Run a Global Synthesis first to understand your source landscape
5. **Iterate with variants** — Test in `experiments/` before promoting to main categories
6. **Track usage** — Update `tracking.yaml` to identify underperforming prompts
7. **Match depth to need** — Use Compact for quick scans, Full for major decisions

### Prompt Hygiene

- **Before deep analysis**: Run [Source Relevance Ranker](templates/source-management/source-relevance-ranker.md) to filter sources
- **For contradictory sources**: Run [Source Conflict Detector](templates/source-management/source-conflict-detector.md) first
- **For Studio content**: Generate a synthesis note first, then use it as the sole source for video/audio

## Structure

```
├── templates/                    # 57 prompts
│   ├── learning/                 # 4 — active learning, concept mapping
│   ├── troubleshooting/          # 3 — debugging, gap analysis
│   ├── productivity/             # 3 — study guides, meetings
│   ├── advanced-techniques/      # 5 — multi-pass, comparisons
│   ├── data-engineering-specific/# 5 — architecture, code review
│   ├── critical-analysis/        # 4 — devil's advocate, dialectics
│   ├── source-management/        # 11 — synthesis, topic extraction
│   └── studio/                   # 22 prompts
│       ├── audio/                # 4 — briefs, debates, deep dives
│       ├── video/                # 9 — explainers, templates
│       ├── infographic/          # 6 — architecture, KPIs, comparison
│       └── slide-deck/           # 3 — presentations, RFCs
├── docs/                         # Workflow documentation
├── tracking.yaml                 # Usage metrics
└── CHANGELOG.md
```

## Workflows

Detailed processes for prompt development and multi-source synthesis:

- **[Prompt Improvement Cycle](docs/workflow-prompt-improvement.md)** — Design → Validate → Archive workflow with tracking thresholds
- **[Synthesis to Video](docs/workflow-synthesis-notebooklm.md)** — Multi-source synthesis → Video Overview pipeline
- **[Video Templates Guide](docs/notebooklm-video-templates-guide.md)** — 6 ready-to-use Style + Focus templates for Video Overview
- **[Infographic Guide](docs/notebooklm-infographic-guide.md)** — 6 tested templates with styling techniques and limitations

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