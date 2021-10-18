## Demo for All Things Open 2021

## Prerequisites

See [DEVOPS.md](.devops/DEVOPS.md)


## Knative

start app in cluster for dev and debug
```
npm run dev
```

Open knative service on the browser
```
open http://localhost:8080
```

## Deploy the App on IBM Code Engine
Follow the tutorial [Building your first container image from source code](https://cloud.ibm.com/docs/codeengine?topic=codeengine-getting-started#build-image-gs)
<img src=".devops/code-engine/ibm.jpg" width="400" />

## (Optional) Kubernetes

start app in cluster for dev
```
npm run dev-kube
```


start app in cluster for debugging
```
npm run dev-knative-debug
```


