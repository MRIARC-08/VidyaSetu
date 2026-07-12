"""
Embedding provider protocol and implementations.

Providers are stateless wrappers around a loaded model.
Use EmbeddingProvider as the type hint everywhere so the
real provider can be swapped for FakeEmbeddingProvider in tests.
"""

from __future__ import annotations

from abc import ABC, abstractmethod

import numpy as np


class EmbeddingProvider(ABC):
    """Abstract base class for all embedding providers."""

    PASSAGE_PREFIX = "passage: "
    QUERY_PREFIX = "query: "

    @property
    @abstractmethod
    def model_name(self) -> str: ...

    @property
    @abstractmethod
    def dim(self) -> int: ...

    @abstractmethod
    def embed_passages(self, texts: list[str]) -> list[list[float]]:
        """Embed document passages with E5 passage prefix."""

    @abstractmethod
    def embed_query(self, text: str) -> list[float]:
        """Embed a single query with E5 query prefix."""

    def embed_passages_normalized(self, texts: list[str]) -> list[list[float]]:
        """Return L2-normalized passage embeddings."""
        return [_normalize(v) for v in self.embed_passages(texts)]

    def embed_query_normalized(self, text: str) -> list[float]:
        """Return L2-normalized query embedding."""
        return _normalize(self.embed_query(text))


def _normalize(vector: list[float]) -> list[float]:
    arr = np.array(vector, dtype=np.float32)
    norm = np.linalg.norm(arr)
    if norm == 0:
        return vector
    return (arr / norm).tolist()


class SentenceTransformersProvider(EmbeddingProvider):
    """
    Embedding provider backed by a SentenceTransformers model.
    Expects the model to already be loaded via ModelRegistry.
    """

    def __init__(self, model_entry) -> None:
        self._model_name = model_entry.model_name
        self._dim = model_entry.dim
        self._model = model_entry.model

    @property
    def model_name(self) -> str:
        return self._model_name

    @property
    def dim(self) -> int:
        return self._dim

    def _encode(self, texts: list[str]) -> list[list[float]]:
        vectors = self._model.encode(
            texts,
            batch_size=32,
            show_progress_bar=False,
            convert_to_numpy=True,
        )
        return vectors.tolist()

    def embed_passages(self, texts: list[str]) -> list[list[float]]:
        prefixed = [self.PASSAGE_PREFIX + t for t in texts]
        return self._encode(prefixed)

    def embed_query(self, text: str) -> list[float]:
        prefixed = self.QUERY_PREFIX + text
        return self._encode([prefixed])[0]


class FakeEmbeddingProvider(EmbeddingProvider):
    """
    Deterministic fake provider for unit tests.
    Returns vectors based on text hash — no model download needed.
    """

    def __init__(self, dim: int = 4) -> None:
        self._dim = dim

    @property
    def model_name(self) -> str:
        return "fake"

    @property
    def dim(self) -> int:
        return self._dim

    def _fake_vector(self, text: str) -> list[float]:
        seed = hash(text) % (2**31)
        rng = np.random.default_rng(seed)
        return rng.standard_normal(self._dim).tolist()

    def embed_passages(self, texts: list[str]) -> list[list[float]]:
        return [self._fake_vector(self.PASSAGE_PREFIX + t) for t in texts]

    def embed_query(self, text: str) -> list[float]:
        return self._fake_vector(self.QUERY_PREFIX + text)


def provider_from_registry(
    model_name: str | None = None,
) -> SentenceTransformersProvider:
    """Get a provider backed by the process-level ModelRegistry."""
    from vidyasetu_ai.core.model_registry import ModelRegistry

    entry = ModelRegistry.get().get_model(model_name)
    return SentenceTransformersProvider(entry)