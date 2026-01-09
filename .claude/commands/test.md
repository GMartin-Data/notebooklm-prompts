---
description: Lance les tests pytest et analyse les échecs
allowed-tools: Bash(uv run pytest:*), Read
---

## Instructions

1. Lance `uv run pytest -v --tb=short $ARGUMENTS`
2. Si tous les tests passent : confirme succès, nombre de tests
3. Si échecs :
   - Liste les tests échoués
   - Pour chaque échec : identifie la cause probable
   - Propose une correction
   - Demande confirmation avant de modifier

## Options

Si un argument est fourni ($ARGUMENTS), l'utiliser comme filtre.

Exemples d'usage :
- /test → tous les tests
- /test test_auth.py → fichier spécifique
- /test -k "login" → tests matchant "login"
