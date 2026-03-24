# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.6.0] - 2026-03-24

### Added
- **`templates/studio/video/cinematic/` subcategory** — 3 empirically validated steering prompts for Cinematic Video Overviews:
  - `cinematic-accessible-tone.md` — Popularize content with sustained metaphor (confirmed, 4 tests across 3 source configs)
  - `cinematic-duration-control.md` — Shorten video by 40–51% (confirmed, 3 tests mono + multi)
  - `cinematic-thematic-focus.md` — Steer narrative vocabulary and framing (confirmed vocabulary effect, 2 tests)
- **`docs/cinematic-video-reverse-engineering.md`** — Full reverse-engineering study: 16 tests over 9 days (March 2026). First systematic analysis of Cinematic steering prompt effectiveness.
  Covers: lever hierarchy, pipeline editorialization behavior, non-determinism quantification, mono-lever rule, multi-source fusion mechanics, control asymmetry, Pro tier limitations.

### Key Findings
- Tone/register steering is the most reliable lever (reproduced across 3 source configurations)
- Duration control works when isolated (40–51% reduction) but degrades when combined with other levers
- The pipeline invents figures, adds concepts, and fabricates causal links — output must always be verified against sources
- Visual style is decided by Gemini but practically uncontrollable due to severe non-determinism (axis closed)
- **Mono-lever rule**: never combine multiple steering instructions in a single prompt

## [2.5.2] - 2026-02-10

### Added
- `scripts/validate_prompts.py` validation tool:
  - Checks YAML frontmatter (required fields, difficulty values)
  - Verifies alignment between `templates/` prompt files and `tracking.yaml` entries

### Changed
- Completed frontmatter for Studio prompts by adding `difficulty: intermediate`:
  - `templates/studio/audio/*.md`
  - `templates/studio/video/*.md`
  - `templates/studio/infographic/*.md`
  - `templates/studio/slide-deck/*.md`

## [2.5.1] - 2026-02-10

### Changed
- Improved robustness of `templates/data-engineering-specific/code-review-with-best-practices.md`:
  - Removed nested code fences inside the prompt body
  - Clarified language and code placeholders for NotebookLM usage

## [2.5.0] - 2026-01-09

### Added
- 6 Infographic templates in `templates/studio/infographic/`:
  - `infographic-architecture-data.md` — Isometric data platform diagrams
  - `infographic-vulgarisation.md` — Complex concepts for non-experts (Kurzgesagt-style)
  - `infographic-executive-kpis.md` — KPIs and metrics (Swiss Minimalist)
  - `infographic-comparison.md` — Split-screen duotone comparison
  - `infographic-process-timeline.md` — Journey metaphor workflow
  - `infographic-social-media.md` — Viral content (Cyberpunk/Gradient)
- Reference guide `docs/notebooklm-infographic-guide.md` with:
  - Nano Banana Pro architecture documentation
  - Styling techniques and color management
  - Limitations and workarounds
  - Test sources per category

### Removed
- 4 untested infographic templates replaced by validated versions:
  - `architecture-overview.md`
  - `battle-card-comparison.md`
  - `data-storytelling.md`
  - `process-flow.md`

### Note
- All 6 new templates are tested and validated
- Top performers: Executive/KPIs, Comparaison, Process/Timeline

## [2.4.0] - 2026-01-09

### Changed
- Reorganized repository structure: all prompt templates now live under `templates/`
  - Moved 8 category folders: `learning/`, `troubleshooting/`, `productivity/`, `advanced-techniques/`, `data-engineering-specific/`, `critical-analysis/`, `source-management/`, `studio/`
  - `docs/` remains at root level for workflow documentation
- Updated all internal links in README.md and documentation files

### Note
- This is a structural change only; no prompts were added, removed, or modified

## [2.3.0] - 2026-01-08

### Added
- 6 Video Overview templates in `templates/studio/video/`:
  - `video-architecture-pipeline.md` — Visualize data architectures and pipelines
  - `video-vulgarisation-concepts.md` — Explain complex concepts simply
  - `video-stakeholders-executive.md` — Executive summaries and reporting
  - `video-onboarding-technique.md` — Training and tutorials
  - `video-documentation-technique.md` — API docs and technical specs
  - `video-innovation-produit.md` — Product pitches and demos
- Reference guide `docs/notebooklm-video-templates-guide.md`

### Note
- All 6 templates are tested and validated

## [2.2.0] - 2026-01-06

### Added
- `source-management/global-synthesis-full.md` — Comprehensive multi-source synthesis
- `source-management/global-synthesis-compact.md` — Quick synthesis variant
- `source-management/global-synthesis-data-engineering.md` — Tech watch synthesis
- `studio/video/synthesis-to-video-overview.md` — Video generation from synthesis note

### Note
- All 4 prompts are untested (v0.1) — marked with `tested: false` in frontmatter

## [2.1.0] - 2026-01-06

### Changed
- Translated all prompts to English for consistency and international reach
- Renamed critical-analysis prompts:
  - `la-lentille-dialectique.md` → `the-dialectical-lens.md`
  - `le-filtre-de-desillusion.md` → `the-disillusionment-filter.md`
  - `l-anti-these.md` → `the-anti-thesis.md`
  - `l-avocat-du-diable.md` → `the-devils-advocate.md`
- Renamed source-management prompt:
  - `recurring-topics-veille-techno-variant.md` → `recurring-topics-tech-watch-variant.md`
- Translated French prompt content to English in source-management category

### Added
- `tracking.yaml` for usage metrics
- `CHANGELOG.md`
- `.gitignore`

## [2.0.0] - 2026-01-06

### Added
- Initial library extraction from `notebooklm-prompts-library-v2.json`
- 45 prompts across 8 categories:
  - learning (4)
  - troubleshooting (3)
  - productivity (3)
  - advanced-techniques (5)
  - data-engineering-specific (5)
  - critical-analysis (4)
  - source-management (8)
  - studio (13: audio 4, video 2, infographic 4, slide-deck 3)
- YAML frontmatter for each prompt
- README.md with structure overview
