"""Sanitization for user/DB-controlled text before it is used in prompts.

Chapter titles and similar short fields are meant to be plain data, but if
they are interpolated directly into an LLM prompt, an attacker-controlled
title can attempt to override the model's instructions (prompt injection).
This module strips that class of content *before* it reaches any prompt,
rather than trying to filter the model's output after the fact.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field

_INJECTION_PATTERNS: list[str] = [
    r"ignore (all|the|any) (previous|prior|above) instructions",
    r"disregard (all|the|any) (previous|prior|above)",
    r"you are now",
    r"system\s*:",
    r"assistant\s*:",
    r"</?(system|user|assistant)>",
    r"```",
    r"forget (everything|all)",
    r"new instructions?:",
]

_COMPILED_PATTERNS = [re.compile(p, re.IGNORECASE) for p in _INJECTION_PATTERNS]

_MAX_TITLE_LENGTH = 120
_SUSPICIOUS_CHARS = re.compile(r"[{}<>\[\]|`]")


@dataclass
class SanitizedTitle:
    sanitized_text: str
    was_modified: bool
    flags: list[str] = field(default_factory=list)


def sanitize_source_title(raw_title: str) -> SanitizedTitle:
    """Clean a chapter/topic title before it is used in a prompt."""
    flags: list[str] = []
    text = raw_title.strip()

    if len(text) > _MAX_TITLE_LENGTH:
        flags.append(f"title exceeds {_MAX_TITLE_LENGTH} characters")
        text = text[:_MAX_TITLE_LENGTH]

    if _SUSPICIOUS_CHARS.search(text):
        flags.append("contains structural/delimiter characters")
        text = _SUSPICIOUS_CHARS.sub("", text)

    for pattern in _COMPILED_PATTERNS:
        if pattern.search(text):
            flags.append(f"matched injection pattern: {pattern.pattern}")
            text = pattern.sub("", text)

    text = re.sub(r"\s+", " ", text).strip()

    return SanitizedTitle(
        sanitized_text=text,
        was_modified=(text != raw_title.strip()),
        flags=flags,
    )
