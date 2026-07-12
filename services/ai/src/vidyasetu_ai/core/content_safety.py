"""Pattern-level content safety scanning for AI-generated text.

This is a fast, dependency-free first line of defense: it catches
structural indicators of unsafe content in text meant for K-12 students.
It is deliberately conservative and pattern-based rather than an
exhaustive keyword list — new phrasings of the same category are still
likely to be caught by the category's pattern.

This is NOT a substitute for a full moderation model. It is a cheap,
always-available check that runs before anything reaches a student, with
room to plug in a hosted moderation API alongside it later.
"""

from __future__ import annotations

import re
from collections.abc import Callable

_UNSAFE_PATTERNS: dict[str, list[str]] = {
    "self_harm": [
        r"\bhow to (kill|hurt|harm) (yourself|myself)\b",
        r"\bsuicide method\b",
    ],
    "sexual_content": [
        r"\bexplicit sexual\b",
        r"\bsex acts?\b",
    ],
    "hate_or_discrimination": [
        r"\binferior race\b",
    ],
    "weapons_violence": [
        r"\bhow to (make|build) a (bomb|weapon|explosive)\b",
    ],
    "prompt_leak_or_off_topic": [
        r"\bmy system prompt is\b",
        r"\bas an ai language model, my instructions are\b",
        r"\bignore (all|the|any) (previous|prior|above) instructions\b",
    ],
}

_COMPILED: dict[str, list[re.Pattern[str]]] = {
    category: [re.compile(p, re.IGNORECASE) for p in patterns]
    for category, patterns in _UNSAFE_PATTERNS.items()
}

ExternalModerator = Callable[[str], tuple[bool, list[str]]]


def scan_for_unsafe_content(
    text: str,
    external_moderator: ExternalModerator | None = None,
) -> tuple[bool, list[str]]:
    """Return (passed, reasons). `passed` is False if anything matched.

    `external_moderator`, if given, is an additional pluggable check
    (e.g. a hosted moderation API) — its failure also fails the result.
    """
    reasons: list[str] = []
    for category, patterns in _COMPILED.items():
        for pattern in patterns:
            if pattern.search(text):
                reasons.append(f"[{category}] matched: {pattern.pattern}")

    passed = len(reasons) == 0

    if external_moderator is not None:
        ext_passed, ext_reasons = external_moderator(text)
        passed = passed and ext_passed
        reasons.extend(ext_reasons)

    return passed, reasons