#!/usr/bin/env python
"""Export the FastAPI OpenAPI schema to a JSON file.

Usage:
    python scripts/export-openapi.py [--output openapi.json]

Run from the services/ai/ directory. Sets AI_INTERNAL_API_KEY to a dummy
value because the app requires it at import time. No database, model
downloads, or Groq are needed for schema generation.
"""

import argparse
import json
import os

# Dummy key for schema generation — never used at runtime.
os.environ.setdefault("AI_INTERNAL_API_KEY", "openapi-export-dummy-key-xxxxxxxxxxxxxx")
os.environ.setdefault("AI_ENVIRONMENT", "test")

# Must come after env vars are set
from vidyasetu_ai.main import create_app  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser(description="Export FastAPI OpenAPI schema")
    parser.add_argument(
        "--output",
        default="openapi.json",
        help="Output path for the OpenAPI JSON file (default: openapi.json)",
    )
    args = parser.parse_args()

    app = create_app()
    schema = app.openapi()

    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(schema, f, indent=2, ensure_ascii=False)

    path_count = len(schema.get("paths", {}))
    print(f"OpenAPI schema written to {args.output}")
    print(f"  {path_count} path(s) exported")
    print(f"  title: {schema.get('info', {}).get('title', 'N/A')}")
    print(f"  version: {schema.get('info', {}).get('version', 'N/A')}")


if __name__ == "__main__":
    main()
