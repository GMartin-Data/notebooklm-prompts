# NotebookLM Infographic — Guide Technique

**Date :** 9 janvier 2026
**Statut :** 6 templates testés et validés

---

## Vue d'ensemble

NotebookLM Infographic utilise **Nano Banana Pro** (même moteur que Video Overview) pour le rendu visuel. Les guardrails et vocabulaire safe identifiés pour Video Overview s'appliquent donc aux infographies.

| Aspect | Niveau de contrôle | Notes |
|--------|-------------------|-------|
| Style graphique | Bon | Via steering prompt descriptif |
| Couleurs | Partiel | Noms évocateurs > codes hex |
| Structure spatiale | Bon | Métaphores (journey, split-screen) |
| Texte | Partiel | Niveau Concise + sources simples = bon résultat |
| Polices | Aucun | Pas de contrôle typographique |

---

## Architecture Technique

```
Sources uploadées
       ↓
┌──────────────────────────────────────┐
│         TRAITEMENT NOTEBOOKLM        │
│  ┌─────────────────┐                 │
│  │   Gemini 3      │ ← 1M tokens     │
│  │  (Compréhension)│   contexte      │
│  └────────┬────────┘                 │
│           ↓                          │
│  ┌─────────────────┐                 │
│  │ Nano Banana Pro │ ← Même moteur   │
│  │ (Rendu visuel)  │   que Video     │
│  └────────┬────────┘                 │
│           ↓                          │
│       RAG (ancrage sources)          │
└──────────────────────────────────────┘
       ↓
   PNG (non éditable)
```

**Implication clé** : Le prompt guide la FORME, pas le FOND. Nano Banana reste contraint aux données sources (pas d'invention).

---

## Paramètres Natifs

### Orientation

| Format | Ratio | Use case optimal |
|--------|-------|------------------|
| **Landscape** | 16:9 | Chronologies, comparaisons, dashboards |
| **Portrait** | 9:16 | Listes, processus étape par étape, fiches mémo |
| **Square** | 1:1 | Réseaux sociaux, message central unique |

### Niveau de Détail

| Niveau | Comportement | Recommandation |
|--------|--------------|----------------|
| **Concise** | Moins de texte, polices grandes, espace blanc | Minimise erreurs |
| **Standard** | Équilibre par défaut | Usage général |
| **Detailed (Beta)** | Plus dense, risque gibberish élevé | Expert uniquement |

**Règle** : `Concise` + prompt "low text" = meilleure qualité textuelle.

---

## Styles Graphiques Documentés

### 1. Minimalisme Professionnel
```
Clean Swiss Minimalist, high-contrast monochrome, strict grid alignment,
sans-serif typography, slate grey palette
```
**Usage** : Rapports annuels, présentations exécutives

### 2. Esquisse/Organique
```
Sketchnote style, hand-written font, marker-style colors,
whiteboard aesthetic, doodles, rough edges
```
**Usage** : Éducation, brainstorming

### 3. Tech/Futuriste
```
Cyberpunk aesthetic, dark mode theme, neon accents,
glowing green/purple highlights, angular fonts, technical blueprint
```
**Usage** : Informatique, innovation, gaming

### 4. Isométrique/3D
```
Isometric perspective, 3D without vanishing points,
architectural feel, flat design with hard shadows
```
**Usage** : Processus complexes, infrastructures, parcours utilisateur

### 5. Ludique/Illustratif
```
Children's storybook illustration, soft pastel colors,
rounded shapes, playful icons
```
**Usage** : Pédagogie jeunes, lifestyle

---

## Techniques de Structuration Spatiale

### Journey Metaphor
```
The central organizing principle is a winding, isometric road that starts
at the top left and zigzags down to the bottom right. This creates a clear,
sequential 'Z' flow for the viewer's eye to follow.
```
Force une structure narrative spatiale vs colonnes/grilles standard.

### Split-Screen Comparison
```
Create a split-screen comparison infographic. Left side represents
Solution A in blue; Right side represents Solution B in red.
Use a central axis to list the comparison criteria.
```
Produit des tableaux comparatifs visuels, diagrammes de Venn.

---

## Gestion des Couleurs

| Technique | Exemple | Raison |
|-----------|---------|--------|
| Noms évocateurs > hex | "Burnt Orange", "Navy Blue", "Teal" | Codes hex mal interprétés |
| Restriction palette | "strict duotone: deep red + warm grey" | Évite chaos arc-en-ciel |
| Thématique | "ocean depths" pour bleu | Plus fiable que directive directe |

---

## Limitations Critiques

| Limitation | Symptôme | Workaround |
|------------|----------|------------|
| **Rendu textuel** | Typos, gibberish, confusion langues | `"Use minimal text, rely on icons"` |
| **Densité ↔ erreurs** | Mode Detailed = plus d'artefacts | Utiliser Concise + ajouter texte manuellement |
| **Image aplatie (PNG)** | Non éditable, régénération = résultat différent | Hybridation : NotebookLM → Canva pour corrections |
| **PDF images ignorées** | Schémas sans texte explicatif perdus | Ajouter descriptions textuelles des visuels |

**Talon d'Achille** : Le rendu textuel. Plus l'infographie est complexe, plus le risque d'erreur est élevé.

---

## Vocabulaire Safe (Hérité de Video Overview)

Les guardrails Nano Banana peuvent bloquer certains termes courants.

| Terme à éviter | Substitution design |
|----------------|---------------------|
| black | dark, ink, charcoal, deep tone |
| white | light, bright, clean, pale, neutral |
| black and white | monochrome, high contrast, grayscale |
| black lines | ink linework, dark strokes |
| white background | light background, clean background |

---

## Structure de Prompt Recommandée

```
[Style Tags] + [Color Constraint] + [Structure Directive] + [Text Density]
```

**Exemple composé** :
```
Clean Swiss Minimalist, strict grid alignment, sans-serif typography.
Duotone palette: navy blue primary, warm grey secondary, off-white background.
Use a split-screen comparison layout with central axis.
Use minimal text, rely on icons and visual hierarchy.
```

---

## Les 6 Templates

| # | Template | Format | Style | Top performer |
|---|----------|--------|-------|---------------|
| 1 | Architecture/Data | Landscape | Isometric blueprint | |
| 2 | Vulgarisation | Portrait | Kurzgesagt pastel | |
| 3 | Executive/KPIs | Square | Swiss Minimalist | ★ |
| 4 | Comparaison | Landscape | Split-screen duotone | ★ |
| 5 | Process/Timeline | Portrait | Journey metaphor | ★ |
| 6 | Social Media | Square | Cyberpunk/Gradient | |

**Top performers** (#3, #4, #5) : rendus les plus fidèles aux prompts.

---

## Sources de Test par Catégorie

### Architecture/Data
| Source | URL |
|--------|-----|
| Microsoft Learn - Azure Databricks Architecture | https://learn.microsoft.com/en-us/azure/architecture/solution-ideas/articles/azure-databricks-modern-analytics-architecture |
| Instaclustr - Data Architecture Diagrams | https://www.instaclustr.com/education/data-architecture-diagrams-practical-2024-guide-with-examples/ |
| Estuary - Data Lake Architecture | https://estuary.dev/blog/data-lake-architecture/ |

### Vulgarisation/Concepts
| Source | URL |
|--------|-----|
| Ntiva - Machine Learning Beginner's Guide | https://www.ntiva.com/blog/what-is-machine-learning |
| Akkio - Complete Beginner's Guide to ML | https://www.akkio.com/beginners-guide-to-machine-learning |

### Executive/KPIs
| Source | URL |
|--------|-----|
| Meta Q4 2024 Earnings Presentation (PDF) | https://s21.q4cdn.com/399680738/files/doc_financials/2024/q4/Earnings-Presentation-Q4-2024.pdf |
| Goldman Sachs Q4 2024 Earnings (PDF) | https://www.goldmansachs.com/pressroom/press-releases/current/pdfs/2024-q4-earnings-results-presentation.pdf |

### Comparaison
| Source | URL |
|--------|-----|
| AWS - ETL vs ELT | https://aws.amazon.com/compare/the-difference-between-etl-and-elt/ |
| IBM - ELT vs ETL | https://www.ibm.com/think/topics/elt-vs-etl |
| Databricks - ETL vs ELT Deep Dive | https://www.databricks.com/discover/etl/vs-elt |

### Process/Timeline
| Source | URL |
|--------|-----|
| Tutorial Works - 7 Essential CI/CD Pipeline Stages | https://www.tutorialworks.com/cicd-pipeline-stages/ |
| Codefresh - CI/CD Process Flow | https://codefresh.io/learn/ci-cd-pipelines/ci-cd-process-flow-stages-and-critical-best-practices/ |

### Social Media
| Source | URL |
|--------|-----|
| Our World in Data - AI | https://ourworldindata.org/artificial-intelligence |
| Stanford HAI - AI Index 2024 | https://aiindex.stanford.edu/report/ |
| GitHub State of the Octoverse 2024 | https://github.blog/news-insights/octoverse/octoverse-2024/ |

---

## Différences vs Video Overview

| Aspect | Video Overview | Infographic |
|--------|----------------|-------------|
| Styles prédéfinis | Oui (Kawaii, Anime, Whiteboard) | Non (prompt libre uniquement) |
| Champs customization | 2 (Visual Style + Focus) | 1 (Steering Prompt unique) |
| Output | Séquentiel (vidéo) | Statique (PNG unique) |
| Éditabilité | Script éditable | Aucune |

**Point crucial** : Les prompts vidéo (ex: "Kawaii") fonctionnent souvent sur infographics (même moteur sous-jacent).

---

## Changelog

| Version | Date | Modifications |
|---------|------|---------------|
| 1.0 | 2026-01-09 | Création — 6 templates testés et validés |
