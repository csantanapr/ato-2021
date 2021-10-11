## Demo for All Things Open 2021

## Prerequisites

1. Install [minikube](https://minikube.sigs.k8s.io/docs/start/)
2. Install [skaffold](https://skaffold.dev/docs/install/)

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