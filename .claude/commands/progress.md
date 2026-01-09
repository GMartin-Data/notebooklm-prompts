---
description: Met à jour progress.md avec l'état actuel du travail
allowed-tools: Bash(git diff:*), Bash(git status:*), Read, Write
---

## Contexte

Branche : !`git branch --show-current`
Fichiers modifiés vs main : !`git diff --name-only main`

## Instructions

1. Lis docs/progress.md s'il existe
2. Analyse les fichiers modifiés pour comprendre le travail effectué
3. Mets à jour (ou crée) docs/progress.md avec :

```markdown
# Progress - [nom de la branche]

## Objectif
[Description courte de la feature/fix en cours]

## Fait
- [x] Item complété
- [x] Autre item complété

## En cours
- [ ] Item en cours

## À faire
- [ ] Item restant

## Notes
[Décisions prises, blocages, questions ouvertes]

## Dernière mise à jour
[Date et heure]
```

4. Confirme la mise à jour effectuée
