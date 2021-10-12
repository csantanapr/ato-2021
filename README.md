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

Install knative using this [tutorial](https://github.com/csantanapr/knative-minikube) from nightly to be able to use debug with knative
To make enable knative for debug bellow enable this two features:
- enable init containers https://knative.dev/development/admin/serving/feature-flags/#emptydir
- enable emptyDir https://knative.dev/development/admin/serving/feature-flags/#emptydir


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

>Note: debug is not supported for knative with skaffold out of the box, see issue https://github.com/GoogleContainerTools/skaffold/issues/4702

