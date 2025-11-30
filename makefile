.PHONY: install
install:
	poetry install
	npm install

.PHONY: build
build:
	npm run build
dev:
	npm run dev
preview:
	npm run preview
lint:
	ruff check backend
	npm run lint
format:
	ruff check backend --fix --unsafe-fixes
	npm run format
check:
	npm run check
test:
	npm run test
	pytest tests

check-diff:
	git diff --exit-code

codegen:
	datamodel-codegen --input open-api-spec.yaml --output backend/model.py
	python -m backend.generate
	npx openapi-typescript-codegen --input open-api-spec.yaml --output src/lib/api --client axios

release:
	if [ -z "$GITHUB_TOKEN" ]; then \
		echo "GITHUB_TOKEN is not set. Aborting release."; \
		exit 1; \
	fi
	npm run release -- --ci

build-docker:
	@USER_NAME=$$(git config user.name | tr '[:upper:]' '[:lower:]' | tr ' ' '_'); \
	REPO_NAME=$$(basename $$(git rev-parse --show-toplevel)); \
	echo "Building $$USER_NAME/$$REPO_NAME:latest"; \
	docker build -t $$USER_NAME/$$REPO_NAME:latest .

backend-api:
	flask --app backend/app.py run --host=0.0.0.0

all: codegen test format lint check build