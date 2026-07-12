"""Unit tests for embedding providers — no model downloads needed."""

from __future__ import annotations

import math
from unittest.mock import MagicMock

from vidyasetu_ai.core.embedding_provider import (
    FakeEmbeddingProvider,
    SentenceTransformersProvider,
    _normalize,
)

# ── _normalize ────────────────────────────────────────────────────────────────

def test_normalize_unit_vector():
    v = [1.0, 0.0, 0.0]
    result = _normalize(v)
    assert abs(result[0] - 1.0) < 1e-6
    assert abs(result[1]) < 1e-6


def test_normalize_produces_unit_length():
    v = [3.0, 4.0]
    result = _normalize(v)
    length = math.sqrt(sum(x**2 for x in result))
    assert abs(length - 1.0) < 1e-5


def test_normalize_zero_vector_returns_unchanged():
    v = [0.0, 0.0, 0.0]
    assert _normalize(v) == v


# ── FakeEmbeddingProvider ─────────────────────────────────────────────────────

def test_fake_provider_model_name():
    p = FakeEmbeddingProvider(dim=4)
    assert p.model_name == "fake"


def test_fake_provider_dim():
    p = FakeEmbeddingProvider(dim=8)
    assert p.dim == 8


def test_fake_provider_embed_passages_returns_correct_shape():
    p = FakeEmbeddingProvider(dim=4)
    result = p.embed_passages(["hello", "world"])
    assert len(result) == 2
    assert all(len(v) == 4 for v in result)


def test_fake_provider_embed_query_returns_correct_shape():
    p = FakeEmbeddingProvider(dim=4)
    result = p.embed_query("what is photosynthesis")
    assert len(result) == 4


def test_fake_provider_is_deterministic():
    p = FakeEmbeddingProvider(dim=4)
    v1 = p.embed_query("same text")
    v2 = p.embed_query("same text")
    assert v1 == v2


def test_fake_provider_passage_query_differ():
    p = FakeEmbeddingProvider(dim=4)
    passage = p.embed_passages(["photosynthesis"])[0]
    query = p.embed_query("photosynthesis")
    assert passage != query


def test_fake_provider_normalized_is_unit_length():
    p = FakeEmbeddingProvider(dim=8)
    result = p.embed_query_normalized("test")
    length = math.sqrt(sum(x**2 for x in result))
    assert abs(length - 1.0) < 1e-5


def test_fake_provider_passages_normalized():
    p = FakeEmbeddingProvider(dim=8)
    results = p.embed_passages_normalized(["a", "b"])
    for v in results:
        length = math.sqrt(sum(x**2 for x in v))
        assert abs(length - 1.0) < 1e-5


# ── SentenceTransformersProvider ──────────────────────────────────────────────

def make_mock_entry(dim=768):
    import numpy as np
    mock_model = MagicMock()
    mock_model.encode.return_value = np.random.rand(1, dim).astype("float32")
    entry = MagicMock()
    entry.model_name = "test-model"
    entry.dim = dim
    entry.model = mock_model
    return entry


def test_st_provider_model_name():
    p = SentenceTransformersProvider(make_mock_entry())
    assert p.model_name == "test-model"


def test_st_provider_dim():
    p = SentenceTransformersProvider(make_mock_entry(dim=512))
    assert p.dim == 512


def test_st_provider_adds_passage_prefix():
    entry = make_mock_entry()
    import numpy as np
    entry.model.encode.return_value = np.random.rand(2, 768).astype("float32")
    p = SentenceTransformersProvider(entry)
    p.embed_passages(["hello", "world"])
    call_args = entry.model.encode.call_args[0][0]
    assert all(t.startswith("passage: ") for t in call_args)


def test_st_provider_adds_query_prefix():
    entry = make_mock_entry()
    import numpy as np
    entry.model.encode.return_value = np.random.rand(1, 768).astype("float32")
    p = SentenceTransformersProvider(entry)
    p.embed_query("what is osmosis")
    call_args = entry.model.encode.call_args[0][0]
    assert call_args[0].startswith("query: ")