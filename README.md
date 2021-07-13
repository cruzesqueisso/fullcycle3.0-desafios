# Full Cycle - Challenge 2

Run docker-compose on root directory from this project
```sh
docker-compose up
```

# Full Cycle - Challenge 3

Create a cluster with K3D (https://k3d.io/)
```sh
k3d cluster create --agents 3 --servers 3
```

Running Kubernetes objects with kubectl
- Backend
```sh
cd k8s
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl port-forward svc/backend-service 3000:3000
```
- Frontend
```sh
cd k8s
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl port-forward svc/frontend-service 3001:3001
```