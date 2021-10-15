# operations

## Remote
To deploy to remote kubernetes get the `KUBECONFIG` to the kubernetes cluster and login to your container registry server using `docker login <server>`

## Local

### Install things
1. Install [minikube](https://minikube.sigs.k8s.io/docs/start/)
2. Install [skaffold](https://skaffold.dev/docs/install/)

### Start Kubernetes

```
minikube start
```

### (Optional) Knative
- run in a new terminal
```
minikube tunnnel
```
- run the install script
```
./knative/install.sh
```

### Setup

```
eval $(minikube -p minikube docker-env)
npm run setup
```
