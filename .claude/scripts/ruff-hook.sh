#!/usr/bin/env bash
# Ruff hook for Claude Code PostToolUse
# Runs ruff check --fix and ruff format on Python files

set -euo pipefail

# Get file path from $CLAUDE_FILE_PATHS (newline-separated)
FILE_PATH="${CLAUDE_FILE_PATHS:-}"

# Exit silently if no file or not a Python file
[[ -z "$FILE_PATH" ]] && exit 0
[[ "$FILE_PATH" != *.py ]] && exit 0
[[ ! -f "$FILE_PATH" ]] && exit 0

# Check if ruff is available
if ! command -v ruff &>/dev/null; then
    echo "ruff not found in PATH" >&2
    exit 0
fi

OUTPUT=""
HAD_CHANGES=false

# Run ruff check --fix
CHECK_OUTPUT=$(ruff check --fix --diff "$FILE_PATH" 2>&1) || true
if [[ -n "$CHECK_OUTPUT" ]]; then
    HAD_CHANGES=true
    OUTPUT+="[ruff check --fix]"$'\n'"$CHECK_OUTPUT"$'\n'
fi

# Run ruff format
FORMAT_OUTPUT=$(ruff format --diff "$FILE_PATH" 2>&1) || true
if [[ -n "$FORMAT_OUTPUT" ]]; then
    HAD_CHANGES=true
    OUTPUT+="[ruff format]"$'\n'"$FORMAT_OUTPUT"$'\n'
fi

# Check for remaining unfixable errors
ERRORS=$(ruff check "$FILE_PATH" 2>&1) || true
if [[ -n "$ERRORS" ]]; then
    # Limit to 20 lines
    ERROR_LINES=$(echo "$ERRORS" | head -20)
    TOTAL_LINES=$(echo "$ERRORS" | wc -l)
    OUTPUT+="[unfixable errors]"$'\n'"$ERROR_LINES"
    if [[ "$TOTAL_LINES" -gt 20 ]]; then
        OUTPUT+=$'\n'"... ($((TOTAL_LINES - 20)) more lines)"
    fi
fi

# Output only if there's something to report
if [[ -n "$OUTPUT" ]]; then
    echo "$OUTPUT"
fi

exit 0
