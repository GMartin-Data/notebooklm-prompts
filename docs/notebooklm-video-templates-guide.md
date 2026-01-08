# NotebookLM Video Overview — Templates Guide

**Version :** 1.0
**Date :** 8 janvier 2026
**Statut :** Testé et validé

---

## Quick Start

| # | Catégorie | Quand l'utiliser | Style visuel | Focus |
|---|-----------|------------------|--------------|-------|
| 1 | Architecture/Pipelines | Visualiser flux de données, composants système | 3D isometric, Material Design | Composants, flux, intégrations |
| 2 | Vulgarisation/Concepts | Expliquer un concept complexe simplement | Flat design, Kurzgesagt-style | Analogies, progression, clarté |
| 3 | Stakeholders/Executive | Présenter à des décideurs | Infographic, Swiss design | Bottom line, métriques, décisions |
| 4 | Onboarding technique | Former, tutoriels pas-à-pas | Sketch-style, whiteboard | Why before how, erreurs courantes |
| 5 | Documentation technique | Référence API, specs, guides | Technical diagram, Material Design | Structure, définitions, exemples |
| 6 | Innovation/Produit | Pitchs, démos, annonces produit | 3D isometric, corporate tech | Problème résolu, bénéfices, next steps |

---

## Mode d'emploi

NotebookLM Video Overview propose deux champs de personnalisation :

### Champ 1 : "Describe a custom visual style"

Contrôle l'apparence graphique (illustrations, couleurs, style).

**Format recommandé :**
```
[Tags visuels courts séparés par des virgules]
[Phrase décrivant la scène à représenter]
```

### Champ 2 : "What should the AI hosts focus on"

Contrôle le contenu narratif (quoi dire, quoi ignorer, ton).

**Format recommandé :**
```
Target audience: [qui]

Focus on:
- [priorité 1]
- [priorité 2]
- ...

Skip:
- [à éviter 1]
- [à éviter 2]
- ...

Tone: [adjectifs décrivant le ton]
```

### Workflow

1. Identifier la catégorie correspondant à ton objectif
2. Copier le template Style → coller dans "custom visual style"
3. Copier le template Focus → adapter les `[PLACEHOLDERS]` → coller dans "focus"
4. Choisir Brief ou Explainer selon la durée souhaitée
5. Générer

---

## Vocabulaire Safe

Les guardrails de Nano Banana peuvent bloquer silencieusement certains termes. Utiliser systématiquement les substitutions :

| Terme à éviter | Substitution |
|----------------|--------------|
| black | dark, ink, charcoal, deep tone |
| white | light, bright, clean, pale, neutral |
| black and white | monochrome, high contrast, grayscale |
| black lines | ink linework, dark strokes |
| white background | light background, clean background |

**Règle générale** : Privilégier le vocabulaire technique design (Pantone, illustration, typographie) plutôt que les couleurs brutes.

**Validation pré-génération** : Tester sur un notebook "brouillon" avec une source courte (1-2 pages) avant d'appliquer au notebook réel.

---

## Prompts associés

| Template | Fichier |
|----------|---------|
| Architecture/Pipelines | `studio/video/video-architecture-pipeline.md` |
| Vulgarisation/Concepts | `studio/video/video-vulgarisation-concepts.md` |
| Stakeholders/Executive | `studio/video/video-stakeholders-executive.md` |
| Onboarding technique | `studio/video/video-onboarding-technique.md` |
| Documentation technique | `studio/video/video-documentation-technique.md` |
| Innovation/Produit | `studio/video/video-innovation-produit.md` |

---

## Changelog

| Version | Date | Modifications |
|---------|------|---------------|
| 1.0 | 2026-01-08 | Création initiale — 6 templates Style + Focus validés |
