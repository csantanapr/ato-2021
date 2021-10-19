## Devops

1. Install [minikube](https://minikube.sigs.k8s.io/docs/start/)
2. Install [skaffold](https://skaffold.dev/docs/install/)

## Start Kubernetes

```
minikube start
```

setup docker build and registry
```
eval $(minikube -p minikube docker-env)
npm run setup
```

## Install Knative

run in a new terminal (before running `install.sh`)
```
minikube tunnel
```

run the install script
```
.devops/knative/install.sh
```
>Note: debug is not supported for knative with skaffold out of the box, we are implementing a workaround in this repo. For more info see issue https://github.com/GoogleContainerTools/skaffold/issues/4702

