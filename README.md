# NotebookLM Prompts Library

**Version 2.2.0** | 49 prompts | 8 categories | Focus: Data Engineering

## Quick Start

```bash
git clone https://github.com/YOUR_USER/notebooklm-prompts.git
cd notebooklm-prompts
```

Browse prompts by category, copy the template from the code block, customize placeholders `[LIKE THIS]`, paste into NotebookLM.

## Prompt Index

| Prompt | Category | Difficulty | Description |
|--------|----------|------------|-------------|
| [Active Learning Session Planner](learning/active-learning-session-planner.md) | learning | beginner | Design focused learning sessions from uploaded materials |
| [Concept Connection Mapper](learning/concept-connection-mapper.md) | learning | intermediate | Map relationships between concepts across sources |
| [Essential Questions Generator](learning/essential-questions-generator.md) | learning | beginner | Extract core concepts via 5 essential questions |
| [Source-Grounded Project Designer](learning/source-grounded-project-designer.md) | learning | intermediate | Design projects with cross-referenced source citations |
| [Pipeline Debugger](troubleshooting/pipeline-debugger.md) | troubleshooting | intermediate | Systematic debugging with source-cited fixes |
| [Source-Based Gap Analysis Engine](troubleshooting/source-based-gap-analysis-engine.md) | troubleshooting | advanced | Compare your approach against source best practices |
| [Source-Comparison Implementation Guide](troubleshooting/source-comparison-implementation-guide.md) | troubleshooting | intermediate | Compare solutions across multiple sources |
| [Complete Study Guide Generator](productivity/complete-study-guide-generator.md) | productivity | intermediate | Generate study guide with flashcards and quizzes |
| [Content Strategy Analyzer](productivity/content-strategy-analyzer.md) | productivity | intermediate | Analyze content for repurposing and sharing |
| [Meeting Summary Generator](productivity/meeting-summary-generator.md) | productivity | beginner | Structured meeting summary with action items |
| [Custom Audio Overview with Debate](advanced-techniques/custom-audio-overview-with-debate.md) | advanced-techniques | advanced | Audio overview with hosts debating interpretations |
| [Interest-Driven Summarization](advanced-techniques/interest-driven-summarization.md) | advanced-techniques | beginner | Extract surprising/interesting findings from sources |
| [Multi-Pass Structured Iteration](advanced-techniques/multi-pass-structured-iteration.md) | advanced-techniques | advanced | 4-pass analysis: summarize, contradict, synthesize, plan |
| [Multi-Source Comparison Table](advanced-techniques/multi-source-comparison-table.md) | advanced-techniques | intermediate | Compare methodologies and tools across 20+ sources |
| [Podcast-Style Text Response](advanced-techniques/podcast-style-text-response.md) | advanced-techniques | advanced | Transform docs into engaging conversational format |
| [Architecture Decision Comparison](data-engineering-specific/architecture-decision-comparison.md) | data-engineering | advanced | Source-backed comparison table for architecture decisions |
| [Code Review with Best Practices](data-engineering-specific/code-review-with-best-practices.md) | data-engineering | intermediate | Review code against uploaded best practices docs |
| [Learning Path Designer](data-engineering-specific/learning-path-designer.md) | data-engineering | intermediate | Create structured learning roadmap from docs |
| [Tech Watch Synthesis](data-engineering-specific/tech-watch-synthesis.md) | data-engineering | intermediate | Synthesize tech watch into adoption recommendations |
| [Technical Documentation Generator](data-engineering-specific/technical-documentation-generator.md) | data-engineering | intermediate | Generate docs from code + reference materials |
| [The Anti-Thesis](critical-analysis/the-anti-thesis.md) | critical-analysis | advanced | Stress-test arguments by constructing opposing thesis |
| [The Devil's Advocate](critical-analysis/the-devils-advocate.md) | critical-analysis | advanced | Simulate skeptical interview to expose weaknesses |
| [The Dialectical Lens](critical-analysis/the-dialectical-lens.md) | critical-analysis | intermediate | Structured debate between two expert positions |
| [The Disillusionment Filter](critical-analysis/the-disillusionment-filter.md) | critical-analysis | advanced | Identify promises vs reality in "magic" tools |
| [Global Synthesis - Compact](source-management/global-synthesis-compact.md) | source-management | beginner | Quick multi-source synthesis (400-800 words) |
| [Global Synthesis - Data Engineering](source-management/global-synthesis-data-engineering.md) | source-management | intermediate | Tech-focused synthesis with adoption recommendations |
| [Global Synthesis - Full](source-management/global-synthesis-full.md) | source-management | intermediate | Comprehensive multi-source synthesis (1500-2500 words) |
| [Optimized Source Discovery](source-management/optimized-source-discovery.md) | source-management | beginner | Formulate effective source discovery queries |
| [Recurring Topics - Domain Learning](source-management/recurring-topics-domain-learning-variant.md) | source-management | beginner | Structure learning of a new domain from docs |
| [Recurring Topics Extractor v1](source-management/recurring-topics-extractor-v1-complete.md) | source-management | intermediate | Extract consensus and controversies from 10+ sources |
| [Recurring Topics Extractor v2](source-management/recurring-topics-extractor-v2-compact.md) | source-management | beginner | Quick scan for recurring themes |
| [Recurring Topics - Solution Evaluation](source-management/recurring-topics-solution-evaluation-variant.md) | source-management | intermediate | Evaluate framework pros/cons before POC |
| [Recurring Topics - Tech Watch](source-management/recurring-topics-tech-watch-variant.md) | source-management | intermediate | Analyze tech watch for adoption signals |
| [Source Conflict Detector](source-management/source-conflict-detector.md) | source-management | intermediate | Identify conflicts and gaps across sources |
| [Source Relevance Ranker](source-management/source-relevance-ranker.md) | source-management | beginner | Filter 20+ sources to most relevant 5-10 |
| [Brief - Executive Summary](studio/audio/brief-executive-summary.md) | studio/audio | — | 5-minute audio summary for management |
| [Critique - Solution Evaluation](studio/audio/critique-solution-evaluation.md) | studio/audio | — | Critical evaluation audio before adoption |
| [Debate - Opposing Views](studio/audio/debate-opposing-views.md) | studio/audio | — | Audio debate exploring trade-offs |
| [Deep Dive - Technical Focus](studio/audio/deep-dive-technical-focus.md) | studio/audio | — | Extended technical audio with source comparison |
| [Brief Video - Quick Explainer](studio/video/brief-video-quick-explainer.md) | studio/video | — | 1-2 minute video intro for onboarding |
| [Explainer Video - Comprehensive](studio/video/explainer-video-comprehensive.md) | studio/video | — | 6-10 minute technical explainer video |
| [Synthesis to Video Overview](studio/video/synthesis-to-video-overview.md) | studio/video | beginner | Generate video from synthesis note |
| [Architecture Overview](studio/infographic/architecture-overview.md) | studio/infographic | — | Technical architecture diagram |
| [Battle Card Comparison](studio/infographic/battle-card-comparison.md) | studio/infographic | — | Competitive comparison infographic |
| [Data Storytelling](studio/infographic/data-storytelling.md) | studio/infographic | — | Data-driven insight visualization |
| [Process Flow](studio/infographic/process-flow.md) | studio/infographic | — | Step-by-step workflow diagram |
| [Detailed Deck - Standalone](studio/slide-deck/detailed-deck-standalone-document.md) | studio/slide-deck | — | Full presentation for technical review |
| [Presenter Slides - Speaking Support](studio/slide-deck/presenter-slides-speaking-support.md) | studio/slide-deck | — | Minimal slides with speaker notes |
| [Technical RFC Deck](studio/slide-deck/technical-rfc-deck.md) | studio/slide-deck | — | RFC presentation for architecture proposals |

## Which Prompt for Which Use Case?

### Learning a New Topic
| Need | Recommended Prompt |
|------|-------------------|
| Quick start with a concept | [Essential Questions Generator](learning/essential-questions-generator.md) |
| Structured learning session | [Active Learning Session Planner](learning/active-learning-session-planner.md) |
| Understand concept relationships | [Concept Connection Mapper](learning/concept-connection-mapper.md) |
| Build a hands-on project | [Source-Grounded Project Designer](learning/source-grounded-project-designer.md) |
| Create a learning roadmap | [Learning Path Designer](data-engineering-specific/learning-path-designer.md) |
| Structure domain knowledge | [Recurring Topics - Domain Learning](source-management/recurring-topics-domain-learning-variant.md) |

### Debugging & Troubleshooting
| Need | Recommended Prompt |
|------|-------------------|
| Fix a broken pipeline | [Pipeline Debugger](troubleshooting/pipeline-debugger.md) |
| Understand why something failed | [Source-Based Gap Analysis Engine](troubleshooting/source-based-gap-analysis-engine.md) |
| Compare different solutions | [Source-Comparison Implementation Guide](troubleshooting/source-comparison-implementation-guide.md) |

### Synthesizing Multiple Sources
| Need | Recommended Prompt |
|------|-------------------|
| Quick overview (2 min read) | [Global Synthesis - Compact](source-management/global-synthesis-compact.md) |
| Comprehensive analysis | [Global Synthesis - Full](source-management/global-synthesis-full.md) |
| Tech-focused synthesis | [Global Synthesis - Data Engineering](source-management/global-synthesis-data-engineering.md) |
| Extract recurring themes | [Recurring Topics Extractor v1](source-management/recurring-topics-extractor-v1-complete.md) |
| Quick theme scan | [Recurring Topics Extractor v2](source-management/recurring-topics-extractor-v2-compact.md) |

### Evaluating Tools & Architectures
| Need | Recommended Prompt |
|------|-------------------|
| Compare two approaches | [Architecture Decision Comparison](data-engineering-specific/architecture-decision-comparison.md) |
| Evaluate before POC | [Recurring Topics - Solution Evaluation](source-management/recurring-topics-solution-evaluation-variant.md) |
| Stress-test vendor claims | [The Anti-Thesis](critical-analysis/the-anti-thesis.md) |
| Anticipate objections | [The Devil's Advocate](critical-analysis/the-devils-advocate.md) |
| Reality-check "magic" tools | [The Disillusionment Filter](critical-analysis/the-disillusionment-filter.md) |
| Structured debate on trade-offs | [The Dialectical Lens](critical-analysis/the-dialectical-lens.md) |

### Managing Sources
| Need | Recommended Prompt |
|------|-------------------|
| Find relevant sources | [Optimized Source Discovery](source-management/optimized-source-discovery.md) |
| Filter to best sources | [Source Relevance Ranker](source-management/source-relevance-ranker.md) |
| Detect conflicts/gaps | [Source Conflict Detector](source-management/source-conflict-detector.md) |
| Tech watch analysis | [Recurring Topics - Tech Watch](source-management/recurring-topics-tech-watch-variant.md) |

### Creating Studio Content
| Need | Recommended Prompt |
|------|-------------------|
| Quick audio for management | [Brief - Executive Summary](studio/audio/brief-executive-summary.md) |
| Critical evaluation audio | [Critique - Solution Evaluation](studio/audio/critique-solution-evaluation.md) |
| Debate audio on trade-offs | [Debate - Opposing Views](studio/audio/debate-opposing-views.md) |
| Deep technical audio | [Deep Dive - Technical Focus](studio/audio/deep-dive-technical-focus.md) |
| Short explainer video | [Brief Video - Quick Explainer](studio/video/brief-video-quick-explainer.md) |
| Full explainer video | [Explainer Video - Comprehensive](studio/video/explainer-video-comprehensive.md) |
| Video from synthesis | [Synthesis to Video Overview](studio/video/synthesis-to-video-overview.md) |
| Architecture diagram | [Architecture Overview](studio/infographic/architecture-overview.md) |
| Tool comparison card | [Battle Card Comparison](studio/infographic/battle-card-comparison.md) |
| Data insight visual | [Data Storytelling](studio/infographic/data-storytelling.md) |
| Process documentation | [Process Flow](studio/infographic/process-flow.md) |
| Technical presentation | [Detailed Deck - Standalone](studio/slide-deck/detailed-deck-standalone-document.md) |
| Speaking support slides | [Presenter Slides - Speaking Support](studio/slide-deck/presenter-slides-speaking-support.md) |
| RFC presentation | [Technical RFC Deck](studio/slide-deck/technical-rfc-deck.md) |

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

- **Before deep analysis**: Run [Source Relevance Ranker](source-management/source-relevance-ranker.md) to filter sources
- **For contradictory sources**: Run [Source Conflict Detector](source-management/source-conflict-detector.md) first
- **For Studio content**: Generate a synthesis note first, then use it as the sole source for video/audio

## Structure

```
├── learning/                 # 4 prompts — active learning, concept mapping
├── troubleshooting/          # 3 prompts — debugging, gap analysis
├── productivity/             # 3 prompts — study guides, meetings
├── advanced-techniques/      # 5 prompts — multi-pass, comparisons
├── data-engineering-specific/# 5 prompts — architecture, code review
├── critical-analysis/        # 4 prompts — devil's advocate, dialectics
├── source-management/        # 11 prompts — synthesis, topic extraction
├── studio/                   # 14 prompts
│   ├── audio/               # 4 — briefs, debates, deep dives
│   ├── video/               # 3 — explainers, synthesis
│   ├── infographic/         # 4 — architecture, battle cards
│   └── slide-deck/          # 3 — presentations, RFCs
├── docs/                     # Workflow documentation
├── tracking.yaml             # Usage metrics
└── CHANGELOG.md
```

## Workflows

Detailed processes for prompt development and multi-source synthesis:

- **[Prompt Improvement Cycle](docs/workflow-prompt-improvement.md)** — Design → Validate → Archive workflow with tracking thresholds
- **[Synthesis to Video](docs/workflow-synthesis-notebooklm.md)** — Multi-source synthesis → Video Overview pipeline

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