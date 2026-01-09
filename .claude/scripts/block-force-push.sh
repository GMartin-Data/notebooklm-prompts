#!/usr/bin/env bash
# Block git push --force commands
# PreToolUse hook for Bash tool

set -euo pipefail

INPUT="${CLAUDE_TOOL_INPUT:-}"

# Check if command contains push with force flag
if echo "$INPUT" | grep -qE 'push\s+.*(-f|--force)' || \
   echo "$INPUT" | grep -qE 'push\s+(-f|--force)'; then
    echo "BLOCKED: git push --force is not allowed"
    echo "Use regular push or ask user to run manually if force is required"
    exit 1
fi

exit 0
