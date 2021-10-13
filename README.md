## Demo for All Things Open 2021

## Prerequisites

1. Install [minikube](https://minikube.sigs.k8s.io/docs/start/)
2. Install [skaffold](https://skaffold.dev/docs/install/)

## Start Kubernetes

```
minikube start
```

## Setup

```
eval $(minikube -p minikube docker-env)
npm run setup
```

## Livereload

```
npm run dev
```

## Debug

```
npm run debug
```

## Bonus: Livereload with Knative

- minikube start (if not already running)
- run in a new terminal `minikube tunnnel`
- run the install script `./knative/install.sh`

Setup
```
eval $(minikube -p minikube docker-env)
npm run setup
```

To develop
```
npm run dev-knative
```

To get url of knative service
```
npm run dev-kative-url
```

To debug
```
npm run dev-knative-debug
```

>Note: debug is not supported for knative with skaffold out of the box, we are implementing a workaround in this repo. For more info see issue https://github.com/GoogleContainerTools/skaffold/issues/4702

