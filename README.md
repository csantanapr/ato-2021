## Demo for All Things Open 2021

## Prerequisites

1. Install minikube
2. Install skaffold

## Setup Kubernetes

```
minikube start
eval $(minikube -p minikube docker-env)
docker login
```

## Livereload

```
npm run dev
```

## Debug

```
npm run debug
```