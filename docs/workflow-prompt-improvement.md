# Workflow d'Amélioration Continue - Prompts NotebookLM

## Vue d'ensemble

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CONCEPTION    │ →  │   VALIDATION    │ →  │   ARCHIVAGE     │
│   (Playground)  │    │  (NotebookLM)   │    │    (GitHub)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## Phase 1 : Conception (Playground)

**Outils** : Google AI Studio (recommandé) / Anthropic Console / OpenAI Playground

**Objectif** : Prototyper rapidement sans contraintes de quota NotebookLM

### Actions

1. **Prototyper structure prompt**
   - Tester role-playing instructions
   - Valider format output demandé
   - Itérer sur la clarté des instructions

2. **Tester avec document sample**
   - Uploader un extrait représentatif en contexte
   - Vérifier que les instructions produisent le comportement attendu

3. **Itérer rapidement**
   - Pas de limite quotidienne (vs NotebookLM)
   - A/B testing de variantes

### Critères de passage à Phase 2

- [ ] Structure prompt stabilisée
- [ ] Output format conforme aux attentes
- [ ] Instructions claires et non ambiguës

---

## Phase 2 : Validation (NotebookLM)

**Outil** : NotebookLM avec sources réelles

**Objectif** : Valider le prompt dans son environnement cible

### Actions

1. **Test avec vraies sources**
   - Uploader les documents réels du use case
   - Exécuter le prompt
   - Vérifier la qualité des citations

2. **Validation spécifique NotebookLM**
   - Citations correctement formatées ?
   - Sources correctement référencées ?
   - Pas d'hallucination hors sources ?

3. **Test formats Studio** (si applicable)
   - Audio Overview : tester avec custom instructions
   - Video Overview : vérifier durée et focus
   - Infographic : valider orientation et niveau détail
   - Slide Deck : vérifier structure et speaker notes

### Critères de passage à Phase 3

- [ ] 3+ tests réussis avec sources différentes
- [ ] Citations précises et vérifiables
- [ ] Output utilisable sans retouche majeure

---

## Phase 3 : Archivage (GitHub)

**Outil** : Repository GitHub privé

**Objectif** : Versionner et tracker l'efficacité

### Structure repository

```
notebooklm-prompts/
├── prompts/
│   ├── learning/
│   │   └── [prompt-name].md
│   ├── troubleshooting/
│   ├── productivity/
│   ├── critical_analysis/
│   └── studio/
│       ├── audio/
│       ├── video/
│       ├── infographic/
│       └── slide_deck/
├── experiments/           # Variantes en test
├── library.json           # Export complet
├── tracking.yaml          # Métriques usage
└── CHANGELOG.md
```

### Actions

1. **Commit prompt validé**
   - Fichier Markdown avec métadonnées frontmatter
   - Message commit descriptif

2. **Update tracking.yaml**
   ```yaml
   prompt-name:
     created: 2026-01-06
     last_used: 2026-01-06
     uses_count: 1
     success_rate: 1.0
     avg_quality: 4.5
     notes: "Premier test concluant"
   ```

3. **Update library.json** (si applicable)

---

## Cycle d'itération

### Fréquence

| Activité | Fréquence |
|----------|-----------|
| Utilisation + note rapide | Chaque usage |
| Update tracking.yaml | Hebdomadaire (5 min) |
| Analyse métriques | Mensuelle |
| Revue prompts sous-performants | Mensuelle |

### Critères d'alerte

| Métrique | Seuil d'action |
|----------|----------------|
| Success rate | < 70% → analyser et itérer |
| Avg quality | < 3.5/5 → réviser prompt |
| Uses count = 0 (3 mois) | → archiver ou supprimer |

### Process d'amélioration

```
1. Identifier prompt sous-performant (tracking.yaml)
        ↓
2. Analyser notes d'échec
        ↓
3. Créer variante dans experiments/
        ↓
4. Retour Phase 1 (Playground) pour prototypage
        ↓
5. Phase 2 (NotebookLM) : 3-5 tests minimum
        ↓
6. Si variante > original :
   - PR vers main
   - Archiver ancienne version (CHANGELOG)
   - Reset métriques tracking
```

---

## Templates

### Frontmatter prompt (Markdown)

```yaml
---
name: "Source-Grounded Project Designer"
category: learning
difficulty: intermediate
source: "Excellent AI Prompts"
created: 2026-01-06
last_validated: 2026-01-06
notebooklm_features:
  - citations
  - multi-source
studio_compatible: false
---
```

### Entrée tracking.yaml

```yaml
source-grounded-project-designer:
  created: 2026-01-06
  last_used: 2026-01-06
  uses_count: 0
  success_rate: null
  avg_quality: null
  notes: ""
  variants_tested: []
```

### Message commit

```
feat(learning): add source-grounded-project-designer

- Role: learning design expert
- Features: multi-source cross-reference, citations
- Validated: 3 tests with DLT/FastAPI/PostgreSQL docs
```

---

## Checklist nouveau prompt

- [ ] Phase 1 : Prototype testé en playground
- [ ] Phase 2 : 3+ validations NotebookLM avec vraies sources
- [ ] Phase 3 : Commit avec frontmatter complet
- [ ] Phase 3 : Entrée tracking.yaml créée
- [ ] Phase 3 : library.json mis à jour (si applicable)
