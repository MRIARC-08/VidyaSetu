import pytest
from unittest.mock import MagicMock, patch
from vidyasetu_ai.core.model_registry import ModelRegistry, ModelEntry


@pytest.fixture(autouse=True)
def reset_registry():
    ModelRegistry.reset()
    yield
    ModelRegistry.reset()


def make_mock_st(dim=768):
    mock_model = MagicMock()
    mock_model.get_sentence_embedding_dimension.return_value = dim
    return mock_model


def test_registry_is_singleton():
    r1 = ModelRegistry.get()
    r2 = ModelRegistry.get()
    assert r1 is r2


def test_registry_starts_not_loaded():
    registry = ModelRegistry.get()
    assert registry.is_loaded is False
    assert registry.load_error is None
    assert registry.loaded_models == []


def test_preload_success():
    mock_st_instance = make_mock_st(768)
    mock_st_class = MagicMock(return_value=mock_st_instance)

    with patch.dict("sys.modules", {"sentence_transformers": MagicMock(SentenceTransformer=mock_st_class)}), \
         patch("vidyasetu_ai.core.model_registry.get_settings") as mock_settings, \
         patch("vidyasetu_ai.core.model_registry.Path.mkdir"):

        mock_settings.return_value.embedding_model = "test-model"
        mock_settings.return_value.model_cache_dir = ".cache/models"

        registry = ModelRegistry.get()
        registry.preload("test-model")

        assert registry.is_loaded is True
        assert registry.load_error is None
        assert "test-model" in registry.loaded_models


def test_preload_twice_does_not_reload():
    mock_st_instance = make_mock_st(768)
    mock_st_class = MagicMock(return_value=mock_st_instance)

    with patch.dict("sys.modules", {"sentence_transformers": MagicMock(SentenceTransformer=mock_st_class)}), \
         patch("vidyasetu_ai.core.model_registry.get_settings") as mock_settings, \
         patch("vidyasetu_ai.core.model_registry.Path.mkdir"):

        mock_settings.return_value.embedding_model = "test-model"
        mock_settings.return_value.model_cache_dir = ".cache/models"

        registry = ModelRegistry.get()
        registry.preload("test-model")
        registry.preload("test-model")

        assert mock_st_class.call_count == 1


def test_preload_failure_sets_error():
    mock_st_class = MagicMock(side_effect=RuntimeError("network error"))

    with patch.dict("sys.modules", {"sentence_transformers": MagicMock(SentenceTransformer=mock_st_class)}), \
         patch("vidyasetu_ai.core.model_registry.get_settings") as mock_settings, \
         patch("vidyasetu_ai.core.model_registry.Path.mkdir"):

        mock_settings.return_value.embedding_model = "bad-model"
        mock_settings.return_value.model_cache_dir = ".cache/models"

        registry = ModelRegistry.get()
        with pytest.raises(RuntimeError):
            registry.preload("bad-model")

        assert registry.is_loaded is False
        assert "network error" in registry.load_error


def test_get_model_triggers_preload():
    mock_st_instance = make_mock_st(512)
    mock_st_class = MagicMock(return_value=mock_st_instance)

    with patch.dict("sys.modules", {"sentence_transformers": MagicMock(SentenceTransformer=mock_st_class)}), \
         patch("vidyasetu_ai.core.model_registry.get_settings") as mock_settings, \
         patch("vidyasetu_ai.core.model_registry.Path.mkdir"):

        mock_settings.return_value.embedding_model = "test-model"
        mock_settings.return_value.model_cache_dir = ".cache/models"

        registry = ModelRegistry.get()
        entry = registry.get_model("test-model")

        assert isinstance(entry, ModelEntry)
        assert entry.dim == 512


def test_readiness_endpoint_degraded_when_model_not_loaded(client):
    response = client.get("/health/ready")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "degraded"
    assert data["checks"]["embedding_model_loaded"] is False


def test_readiness_endpoint_ready_when_model_loaded(client):
    mock_st_instance = make_mock_st(768)
    mock_st_class = MagicMock(return_value=mock_st_instance)

    with patch.dict("sys.modules", {"sentence_transformers": MagicMock(SentenceTransformer=mock_st_class)}), \
         patch("vidyasetu_ai.core.model_registry.get_settings") as mock_settings, \
         patch("vidyasetu_ai.core.model_registry.Path.mkdir"):

        mock_settings.return_value.embedding_model = "test-model"
        mock_settings.return_value.model_cache_dir = ".cache/models"
        ModelRegistry.get().preload("test-model")

    response = client.get("/health/ready")
    data = response.json()
    assert data["checks"]["embedding_model_loaded"] is True
    assert "test-model" in data["loaded_models"]