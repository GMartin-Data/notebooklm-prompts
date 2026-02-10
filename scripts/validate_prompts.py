from __future__ import annotations

"""
Validation script for NotebookLM prompt library.

Checks:
- Each Markdown prompt in templates/ has a valid YAML frontmatter
- Required frontmatter fields are present (name, category, difficulty, source, use_case)
- difficulty is one of: beginner, intermediate, advanced
- For non-studio prompts, frontmatter.category matches the top-level folder under templates/
- tracking.yaml contains an entry for each prompt (key == filename without .md)
- tracking.yaml has no orphan entries for non-existing prompt files (reported as warnings)

Usage (from repo root):

    uv run python scripts/validate_prompts.py

Requires:
- PyYAML installed (yaml package)
"""

import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import yaml


REPO_ROOT = Path(__file__).resolve().parents[1]
TEMPLATES_DIR = REPO_ROOT / "templates"
TRACKING_FILE = REPO_ROOT / "tracking.yaml"

ALLOWED_DIFFICULTIES = {"beginner", "intermediate", "advanced"}


@dataclass
class Frontmatter:
    name: str
    category: str
    difficulty: str
    source: str
    use_case: str


@dataclass
class PromptValidationIssue:
    level: str  # "ERROR" or "WARNING"
    message: str
    file: Optional[Path] = None


def load_tracking() -> Dict[str, dict]:
    if not TRACKING_FILE.exists():
        raise FileNotFoundError(f"tracking.yaml not found at {TRACKING_FILE}")

    raw_text = TRACKING_FILE.read_text(encoding="utf-8")
    data = yaml.safe_load(raw_text) or {}
    if not isinstance(data, dict):
        raise ValueError("tracking.yaml must contain a top-level mapping")
    return data


def extract_frontmatter(text: str) -> Tuple[Optional[str], Optional[str]]:
    """
    Return (frontmatter_text, body_text) if found, else (None, text).
    """
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return None, text

    end_index = None
    for idx in range(1, len(lines)):
        if lines[idx].strip() == "---":
            end_index = idx
            break

    if end_index is None:
        return None, text

    frontmatter_lines = lines[1:end_index]
    body_lines = lines[end_index + 1 :]
    return "\n".join(frontmatter_lines), "\n".join(body_lines)


def parse_frontmatter(frontmatter_text: str, file: Path) -> Tuple[Optional[Frontmatter], List[PromptValidationIssue]]:
    issues: List[PromptValidationIssue] = []
    try:
        data = yaml.safe_load(frontmatter_text) or {}
    except yaml.YAMLError as exc:
        issues.append(
            PromptValidationIssue(
                level="ERROR",
                message=f"Invalid YAML frontmatter: {exc}",
                file=file,
            )
        )
        return None, issues

    if not isinstance(data, dict):
        issues.append(
            PromptValidationIssue(
                level="ERROR",
                message="Frontmatter must be a mapping",
                file=file,
            )
        )
        return None, issues

    required_fields = ["name", "category", "difficulty", "source", "use_case"]
    missing = [field for field in required_fields if field not in data]
    if missing:
        issues.append(
            PromptValidationIssue(
                level="ERROR",
                message=f"Missing required frontmatter fields: {', '.join(missing)}",
                file=file,
            )
        )
        return None, issues

    difficulty = str(data["difficulty"]).strip()
    if difficulty not in ALLOWED_DIFFICULTIES:
        issues.append(
            PromptValidationIssue(
                level="ERROR",
                message=f"Invalid difficulty '{difficulty}', expected one of {sorted(ALLOWED_DIFFICULTIES)}",
                file=file,
            )
        )

    fm = Frontmatter(
        name=str(data["name"]).strip(),
        category=str(data["category"]).strip(),
        difficulty=difficulty,
        source=str(data["source"]).strip(),
        use_case=str(data["use_case"]).strip(),
    )
    return fm, issues


def validate_prompt_file(path: Path, tracking_keys: Dict[str, dict]) -> List[PromptValidationIssue]:
    issues: List[PromptValidationIssue] = []
    text = path.read_text(encoding="utf-8")
    fm_text, _ = extract_frontmatter(text)

    if fm_text is None:
        issues.append(
            PromptValidationIssue(
                level="ERROR",
                message="Missing YAML frontmatter delimited by '---' lines",
                file=path,
            )
        )
        return issues

    fm, fm_issues = parse_frontmatter(fm_text, path)
    issues.extend(fm_issues)
    if fm is None:
        return issues

    rel = path.relative_to(TEMPLATES_DIR)
    parts = rel.parts
    filename_stem = path.stem

    # For non-studio prompts, enforce category == top-level folder
    if parts and parts[0] != "studio":
        top_level = parts[0]
        if fm.category != top_level:
            issues.append(
                PromptValidationIssue(
                    level="ERROR",
                    message=f"category '{fm.category}' does not match top-level folder '{top_level}'",
                    file=path,
                )
            )

    # Check tracking entry exists
    if filename_stem not in tracking_keys:
        issues.append(
            PromptValidationIssue(
                level="ERROR",
                message=f"No tracking.yaml entry found for prompt id '{filename_stem}'",
                file=path,
            )
        )

    return issues


def validate_tracking_orphans(prompt_ids: List[str], tracking: Dict[str, dict]) -> List[PromptValidationIssue]:
    issues: List[PromptValidationIssue] = []

    # tracking is a flat mapping of id -> data
    for key in tracking.keys():
        if key not in prompt_ids:
            issues.append(
                PromptValidationIssue(
                    level="WARNING",
                    message=f"tracking.yaml has entry '{key}' but no corresponding prompt file in templates/",
                    file=TRACKING_FILE,
                )
            )
    return issues


def main() -> int:
    if not TEMPLATES_DIR.exists():
        print(f"ERROR: templates directory not found at {TEMPLATES_DIR}", file=sys.stderr)
        return 1

    try:
        tracking = load_tracking()
    except Exception as exc:  # pylint: disable=broad-except
        print(f"ERROR: Failed to load tracking.yaml: {exc}", file=sys.stderr)
        return 1

    prompt_files = sorted(TEMPLATES_DIR.glob("**/*.md"))
    tracking_keys = {key: value for key, value in tracking.items()}

    all_issues: List[PromptValidationIssue] = []
    prompt_ids: List[str] = []

    for path in prompt_files:
        prompt_ids.append(path.stem)
        all_issues.extend(validate_prompt_file(path, tracking_keys))

    all_issues.extend(validate_tracking_orphans(prompt_ids, tracking_keys))

    if not all_issues:
        print("All prompts and tracking.yaml entries look valid ✅")
        return 0

    error_count = 0
    warning_count = 0

    for issue in all_issues:
        location = f"{issue.file.relative_to(REPO_ROOT)}" if issue.file is not None else "(no file)"
        line = f"[{issue.level}] {location}: {issue.message}"
        print(line)
        if issue.level == "ERROR":
            error_count += 1
        elif issue.level == "WARNING":
            warning_count += 1

    print()
    print(f"Summary: {error_count} error(s), {warning_count} warning(s)")

    return 1 if error_count > 0 else 0


if __name__ == "__main__":
    raise SystemExit(main())

