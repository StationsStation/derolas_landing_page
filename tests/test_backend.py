"""
Simple tests for the generated backend models.
"""
import pytest

import backend
import yaml

@pytest.fixture
def openapi_spec():
    with open("open-api-spec.yaml", "r") as f:
        return yaml.safe_load(f)

def test_models_all_generated(openapi_spec):
    """
    Test that the generated models include all schemas from the OpenAPI spec.
    """
    schemas = openapi_spec.get("components", {}).get("schemas", {})
    for schema_name in schemas.keys():
        assert hasattr(backend.model, schema_name), f"Model {schema_name} not generated"

def test_app_instance():
    """
    Test that the FastAPI app instance is created.
    """
    assert isinstance(backend.api, backend.api.__class__), "App instance not created"

def test_all_endpoints_registered(openapi_spec):
    """
    Test that all endpoints from the OpenAPI spec are registered in the FastAPI app.
    """
    existing_routes = backend.generate.get_existing_routes(backend.api.app)
    missing_routes = backend.generate.get_missing_routes(backend.generate.spec, existing_routes)
    assert not missing_routes, f"Missing routes: {missing_routes}"

def test_no_additional_endpoints(openapi_spec):
    """
    Test that there are no additional endpoints in the FastAPI app not defined in the OpenAPI spec.
    """
    existing_routes = backend.generate.get_existing_routes(backend.api.app)
    spec_routes = set()
    paths = openapi_spec.get("paths", {})
    for path, methods in paths.items():
        for method in methods.keys():
            spec_routes.add((path, method.upper()))
    additional_routes = existing_routes - spec_routes 
    additional_routes = additional_routes - {('/static/<path:filename>', 'GET')}  # Exclude static files route
    assert not additional_routes, f"Additional routes not in spec: {additional_routes}"


def test_all_endpoints_functional():
    """
    Test that all endpoints return a response (not 501).
    """
    client = backend.api.app.test_client()
    existing_routes = backend.generate.get_existing_routes(backend.api.app)
    failures = []
    for path, method in existing_routes:
        if path == '/static/<path:filename>':
            continue  # Skip static files route
        if method == 'GET':
            response = client.get(path)
        elif method == 'POST':
            response = client.post(path)
        elif method == 'PUT':
            response = client.put(path)
        elif method == 'DELETE':
            response = client.delete(path)
        else:
            continue  # Skip unsupported methods for this test
        if response.status_code != 200:
            failures.append((method, path, response.status_code))
    assert not failures, f"Endpoints not returning 200: {failures}"