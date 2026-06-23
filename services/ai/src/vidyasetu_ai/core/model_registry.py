"""
Embedding model lifecycle, cache, and readiness management.

The registry is a process-level singleton. Models are loaded lazily
on first use and cached in memory. Call `preload()` at startup to
warm the cache before the first request.
"""

from __future__ import annotations

import logging
import threading
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from vidyasetu_ai.core.config import get_settings

logger = logging.getLogger(__name__)


@dataclass
class ModelEntry:
    model_name: str
    model: Any
    dim: int


class ModelRegistry:
    """Thread-safe singleton registry for embedding models."""

    _instance: ModelRegistry | None = None
    _lock: threading.Lock = threading.Lock()

    def __init__(self) -> None:
        self._models: dict[str, ModelEntry] = {}
        self._load_lock = threading.Lock()
        self._loaded = False
        self._load_error: str | None = None

    @classmethod
    def get(cls) -> ModelRegistry:
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = cls()
        return cls._instance

    @classmethod
    def reset(cls) -> None:
        """Reset singleton — for testing only."""
        with cls._lock:
            cls._instance = None

    def preload(self, model_name: str | None = None) -> None:
        """Load and cache the embedding model. Safe to call multiple times."""
        settings = get_settings()
        name = model_name or settings.embedding_model
        with self._load_lock:
            if name in self._models:
                return
            try:
                logger.info("Loading embedding model: %s", name)
                cache_dir = Path(settings.model_cache_dir)
                cache_dir.mkdir(parents=True, exist_ok=True)

                from sentence_transformers import SentenceTransformer

                model = SentenceTransformer(name, cache_folder=str(cache_dir))
                # Probe dimension with a single empty encode
                dim = model.get_sentence_embedding_dimension() or 768
                self._models[name] = ModelEntry(model_name=name, model=model, dim=dim)
                self._loaded = True
                self._load_error = None
                logger.info("Model %s loaded (dim=%d)", name, dim)
            except Exception as exc:
                self._load_error = str(exc)
                self._loaded = False
                logger.error("Failed to load model %s: %s", name, exc)
                raise

    def get_model(self, model_name: str | None = None) -> ModelEntry:
        settings = get_settings()
        name = model_name or settings.embedding_model
        if name not in self._models:
            self.preload(name)
        return self._models[name]

    @property
    def is_loaded(self) -> bool:
        return self._loaded

    @property
    def load_error(self) -> str | None:
        return self._load_error

    @property
    def loaded_models(self) -> list[str]:
        return list(self._models.keys())