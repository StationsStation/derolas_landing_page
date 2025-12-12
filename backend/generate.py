"""
Simple script to generate backend models from OpenAPI spec.
"""
import ast
from pathlib import Path

import yaml

from .api import app

TEMPLATE_STUB = """
@app.{method_lower}("{path}")
def stub_{method_lower}_{path_cleaned}():
    \"\"\"
    Stub function for {method} {path}
    \"\"\"
    return {{"message": "This is a stub for {method} {path}"}}, 501
"""

APP_PATH = "backend/api.py"

# Load OpenAPI spec and generate models
with open("open-api-spec.yaml", "r") as f:
    spec = yaml.safe_load(f)

def get_existing_routes(app):
    existing_routes = set()
    for rule in app.url_map.iter_rules():
        if rule.endpoint == 'static':
            continue  # Skip static files route
        methods = rule.methods - {"HEAD", "OPTIONS"}
        for method in methods:
            existing_routes.add((rule.rule.replace("<", "{").replace(">", "}"), method))
    return existing_routes


def get_missing_routes(spec, existing_routes):
    missing_routes = []
    paths = spec.get("paths", {})
    for path, methods in paths.items():
        for method in methods.keys():
            if (path, method.upper()) not in existing_routes:
                missing_routes.append((path, method.upper()))
    return missing_routes


def generate_stub_function(path, method):
    method_lower = method.lower()
    path_cleaned = path.strip("/").replace("/", "_").replace("{", "").replace("}", "")
    stub_code = TEMPLATE_STUB.format(
        method=method,
        method_lower=method_lower,
        path=path,
        path_cleaned=path_cleaned or "root",
    )
    return ast.parse(stub_code).body[0]


def update_app_with_new_stub(app, stub_function):
    existing_ast = open(APP_PATH, "r").read()
    existing_module = ast.parse(existing_ast)
    existing_module.body.append(stub_function)
    updated_code = ast.unparse(existing_module)
    Path(APP_PATH).write_text(updated_code)

def main():
    existing_routes = get_existing_routes(app)
    missing_routes = get_missing_routes(spec, existing_routes)
    print("Missing routes:" if missing_routes else "No missing routes found.")
    for path, method in missing_routes:
        print(f"- {method} {path}")
        stub_function = generate_stub_function(path, method)
        update_app_with_new_stub(app, stub_function)
    print(f"Added {len(missing_routes)} stub functions to {APP_PATH}")
if __name__ == "__main__":
    main()

