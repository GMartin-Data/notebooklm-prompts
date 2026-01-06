# Workflow de Synthèse Multi-Sources → Vidéo NotebookLM

**Objectif** : Transformer un ensemble de sources en une synthèse structurée, puis générer une vidéo overview cohérente et focalisée.

---

## Vue d'Ensemble

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   1. SOURCES    │ →  │   2. SYNTHÈSE   │ →  │   3. VIDÉO      │
│   (Upload)      │    │     (Chat)      │    │    (Studio)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## Étape 1 : Préparation des Sources

**Action** : Uploader les sources dans NotebookLM

**Bonnes pratiques** :
- 5-15 sources de qualité > 50 sources médiocres
- Diversifier les types (docs officiels, tutoriels, articles, code)
- Vérifier la couverture thématique avant synthèse

**Prompt optionnel** : `Source Relevance Ranker` pour évaluer et filtrer les sources si collection large.

---

## Étape 2 : Génération de la Synthèse (Chat)

**Action** : Exécuter un prompt de synthèse dans le chat NotebookLM

### Choix du Prompt

| Besoin | Prompt Recommandé |
|--------|-------------------|
| Synthèse complète structurée | `Global Synthesis` (version complète) |
| Vue rapide en 2 minutes | `Global Synthesis` (version compacte) |
| Focus veille technologique | `Global Synthesis` (variante Data Engineering) |
| Extraction thèmes uniquement | `Recurring Topics Extractor` |

### Structure de Sortie Attendue

Le prompt `Global Synthesis` produit :
1. **Overview** — Résumé 3-5 phrases
2. **Thèmes Majeurs** — Tableau avec status (CONSENSUS/DEBATED/ASSUMED)
3. **Consensus & Divergences** — Points d'accord et contradictions citées
4. **Gaps** — Sujets manquants ou sous-traités
5. **Synthèse Actionnable** — Conclusion grounded + recommandations

### Action Post-Génération

**Sauvegarder l'output comme Note** dans NotebookLM (icône "Save to Note" ou copier-coller).

→ Cette note devient la source unique pour la vidéo.

---

## Étape 3 : Génération de la Vidéo (Studio)

**Action** : Créer une Video Overview basée sur la note de synthèse

### 3.A — Sélection

| Paramètre | Choix |
|-----------|-------|
| **Source** | Sélectionner UNIQUEMENT la note de synthèse |
| **Format** | `Brief` (1-2 min) ou `Explainer` (6-10 min) |

### 3.B — Custom Instructions (Contenu/Focus)

Champ : *"Customize focus and format"*

**Template recommandé** :
```
Create a video overview based on this synthesis document.

Structure:
- Open with the Global Summary
- Present Major Themes by priority
- Highlight key Consensus points
- Address main Divergences briefly
- Close with Recommended Actions

Target audience: [spécifier]
Skip: [éléments à exclure]
```

### 3.C — Custom Visual Style (Graphique)

Champ : *"Describe a custom visual style"*

**Formule** : `Core Format + Style Reference + Visual Enhancements`

| Contexte | Exemple de Style |
|----------|------------------|
| Architecture technique | "Clean 3D isometric illustration, soft ambient lighting, data flow as glowing lines" |
| Vulgarisation | "Kurzgesagt-style, simplified illustrations, vibrant colors, clean transitions" |
| Corporate | "Minimalist corporate, navy/white/gold palette, clean sans-serif typography" |
| Onboarding | "Soft 3D pastel style, rounded shapes, friendly mascot characters" |

### Limitations Connues

| Élément | Contrôle | Workaround |
|---------|----------|------------|
| Couleurs précises (hex) | ⚠️ Aléatoire | Utiliser descriptions thématiques ("ocean blue" > "#0066CC") |
| Polices spécifiques | ❌ Non | Descriptions génériques ("clean sans-serif") |
| Ratio texte/visuels | ❌ Non | Format `Brief` = moins de texte |
| Titres de sections | ⚠️ Indirect | Structurer via Custom Instructions |
| Chevauchement texte/image | ❌ Non | Privilégier styles à fonds clairs (Whiteboard, Classic) |

---

## Étape 4 : Post-Production (Optionnel)

**Si** la vidéo générée nécessite des ajustements :

| Problème | Solution |
|----------|----------|
| Texte illisible sur fond | CapCut / DaVinci Resolve — ajuster contraste |
| Sections à réordonner | Couper/coller dans éditeur vidéo |
| Audio à remplacer | Extraire visuel, regénérer Audio Overview séparément |

---

## Checklist Rapide

```
☐ Sources uploadées et filtrées
☐ Prompt Global Synthesis exécuté
☐ Output sauvegardé comme Note
☐ Video Overview configurée :
    ☐ Source = Note de synthèse uniquement
    ☐ Format choisi (Brief/Explainer)
    ☐ Custom Instructions (contenu) renseignées
    ☐ Custom Visual Style (graphique) renseigné
☐ Vidéo générée et vérifiée
☐ Post-production si nécessaire
```

---

## Références

| Document | Contenu |
|----------|---------|
| `notebooklm-prompts-library-v2.json` | Prompts complets (Global Synthesis, Recurring Topics, etc.) |
| `notebooklm-video-overview-limitations-analysis.md` | Analyse détaillée des limitations Video Overview |
| `notebooklm-video-custom-styles-templates.md` | Templates de styles visuels testés |

---

## Changelog

| Version | Date | Modifications |
|---------|------|---------------|
| 1.0 | 2026-01-06 | Création initiale |
