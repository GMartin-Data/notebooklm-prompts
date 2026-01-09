# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
