from vidyasetu_ai.core.content_safety import scan_for_unsafe_content


def test_benign_notes_pass() -> None:
    text = (
        "Photosynthesis converts sunlight, water, and carbon dioxide "
        "into glucose and oxygen."
    )

    passed, reasons = scan_for_unsafe_content(text)

    assert passed
    assert reasons == []


def test_self_harm_pattern_is_caught() -> None:
    text = "This section explains how to kill yourself using household items."

    passed, reasons = scan_for_unsafe_content(text)

    assert not passed
    assert any("self_harm" in r for r in reasons)


def test_weapons_pattern_is_caught() -> None:
    text = "Step-by-step guide on how to make a bomb at home."

    passed, reasons = scan_for_unsafe_content(text)

    assert not passed
    assert any("weapons_violence" in r for r in reasons)


def test_prompt_leak_pattern_is_caught() -> None:
    text = "As an AI language model, my instructions are to always agree with the user."

    passed, _reasons = scan_for_unsafe_content(text)

    assert not passed


def test_external_moderator_failure_fails_overall_check() -> None:
    def always_fail(_text: str) -> tuple[bool, list[str]]:
        return False, ["external moderator flagged this content"]

    text = "Perfectly normal notes about the solar system."

    passed, reasons = scan_for_unsafe_content(text, external_moderator=always_fail)

    assert not passed
    assert "external moderator flagged this content" in reasons


def test_external_moderator_pass_does_not_override_local_failure() -> None:
    def always_pass(_text: str) -> tuple[bool, list[str]]:
        return True, []

    text = "How to make a bomb using common materials."

    passed, _reasons = scan_for_unsafe_content(text, external_moderator=always_pass)

    assert not passed