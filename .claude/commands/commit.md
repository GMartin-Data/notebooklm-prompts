---
description: Crée un commit avec message conventionnel
allowed-tools: Bash(git add:*), Bash(git diff:*), Bash(git commit:*), Bash(git status:*)
---

## Contexte

Status : !`git status --short`
Diff staged : !`git diff --cached --stat`
Diff unstaged : !`git diff --stat`

## Instructions

1. Analyse les changements (staged ou unstaged)
2. Si rien à committer : signale-le et stop
3. Propose un message de commit conventionnel :
   - Préfixe : feat | fix | docs | refactor | test | chore
   - Sujet : impératif, < 50 caractères, pas de point final
   - Corps (si nécessaire) : détails, motivation, breaking changes
4. Affiche le message proposé
5. Demande confirmation avant d'exécuter
6. Si confirmé :
   - `git add -A` (si fichiers unstaged)
   - `git commit -m "message"`

## Format du message

```
<type>(<scope optionnel>): <description>

<corps optionnel>
```

Exemple :
```
feat(auth): add refresh token rotation

Implement automatic token rotation on refresh.
Tokens are invalidated after single use.
```
