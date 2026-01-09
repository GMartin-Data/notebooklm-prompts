---
description: Charge le contexte des fichiers modifiés et résume l'état du travail
allowed-tools: Bash(git diff:*), Bash(git status:*), Bash(git branch:*), Read
---

## Contexte Git

Branche : !`git branch --show-current`
Status : !`git status --short`
Fichiers modifiés vs main : !`git diff --name-only main`

## Instructions

1. Lis les fichiers modifiés listés ci-dessus
2. Si docs/progress.md existe, lis-le aussi
3. Produis un résumé structuré :
   - Branche et état git
   - Ce qui a été modifié (par fichier, 1 ligne chacun)
   - État actuel du travail
   - Prochaine étape logique
