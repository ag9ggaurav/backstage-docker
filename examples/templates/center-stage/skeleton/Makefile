APP_NAME ?= ${{ values.serviceName }}
ENV ?= ${{ values.environment }}
IMAGE_REPO ?= registry.hymdall.io/${{ values.repoName }}
GIT_SHA ?= $(shell git rev-parse --short HEAD 2>/dev/null || echo dev)
IMAGE ?= $(IMAGE_REPO):$(GIT_SHA)

.PHONY: build docker-build render deploy

build: docker-build deploy

docker-build:
	docker build -t $(IMAGE) .

render:
	kustomize build k8s | sed "s|__IMAGE__|$(IMAGE)|g"

deploy:
	$(MAKE) render | kubectl apply -f -
