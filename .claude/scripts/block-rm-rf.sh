#!/usr/bin/env bash
# Block rm -rf commands
# PreToolUse hook for Bash tool

set -euo pipefail

INPUT="${CLAUDE_TOOL_INPUT:-}"

# Check if command contains rm with -rf or -fr flags
if echo "$INPUT" | grep -qE '\brm\s+.*-(rf|fr)\b' || \
   echo "$INPUT" | grep -qE '\brm\s+-(rf|fr)\b'; then
    echo "BLOCKED: rm -rf is not allowed"
    echo "Use rm with explicit paths or ask user to run manually"
    exit 1
fi

exit 0
