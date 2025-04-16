# SIT737 6.2C - Interacting with Kubernetes

## Overview

This repository contains the implementation for Task 6.2C of the SIT737/SIT323 Cloud Native Application Development unit. Building upon the previous task (6.1P), this project demonstrates advanced interaction with a Kubernetes cluster through various methods, including the Kubernetes dashboard and kubectl commands.

## Project Structure

```
sit737-2025-prac6c/
├── index.js                  # Main application file
├── package.json              # Node.js dependencies
├── Dockerfile                # Container definition
├── kubernetes/               # Kubernetes configuration directory
│   ├── deployment.yaml       # Deployment specification
│   └── service.yaml          # Service specification
└── README.md                 # Project documentation
```

## Application Description

The application continues to be a simple web server built with Express.js that:
- Displays a form requesting the user's name
- Processes form submissions
- Returns a personalized greeting

## Prerequisites

To run this project, you need:
- Git
- Node.js (v16 or later)
- Docker Desktop with Kubernetes enabled
- kubectl (Kubernetes command-line tool)
- Access to Kubernetes Dashboard (setup instructions included)

## Implementation Steps

### 1. Interacting with the Deployed Application

#### Verify the Deployment

Check that pods and services are running correctly:

```bash
# Check the status of running pods
kubectl get pods

# Check the status of services
kubectl get services
```

#### Port Forwarding

Forward traffic from a local port to the Kubernetes service:

```bash
# Forward local port 8080 to port 3000 of the service
kubectl port-forward service/nodejs-app 8080:3000
```

#### Accessing the Application

After setting up port forwarding, access the application by navigating to:
```
http://localhost:8080
```

### 2. Updating the Application

#### Modify Application Code

Make desired changes to the Node.js application code in `index.js`.

#### Build a New Docker Image

```bash
# Build with a new version tag
docker build -t krishbm/sit737-nodejs-app:v2 .

# Push the new image to Docker Hub
docker push krishbm/sit737-nodejs-app:v2
```

#### Update Kubernetes Deployment

```bash
# Update the deployment to use the new image
kubectl set image deployment/nodejs-app nodejs-app=krishbm/sit737-nodejs-app:v2

# Alternatively, update the deployment.yaml file and apply it
kubectl apply -f kubernetes/deployment.yaml
```

#### Verify the Update

```bash
# Check rollout status
kubectl rollout status deployment/nodejs-app

# Check that pods are running with the new image
kubectl get pods -o wide
```

## Working with Kubernetes Dashboard

### Installing the Dashboard

```bash
# Apply the dashboard manifest
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

# Create a service account and role binding for dashboard access
kubectl apply -f kubernetes/dashboard-adminuser.yaml
```

### Accessing the Dashboard

```bash
# Start the kubectl proxy
kubectl proxy

# Get the authentication token
kubectl -n kubernetes-dashboard create token admin-user
```

Navigate to:
```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

Use the token to log in to the dashboard.

### Dashboard Operations

Through the Kubernetes Dashboard, you can:
- Monitor deployments, pods, and services
- View pod logs
- Access shell within containers
- Scale deployments
- Edit resource configurations

## Key Features

- **Kubernetes Dashboard**: Access to visual management interface
- **Port Forwarding**: Direct access to services from local environment
- **Application Updates**: Process for updating containerized applications
- **Monitoring**: Real-time status of Kubernetes resources
- **Troubleshooting**: Access to logs and container shells

## Academic Learning Outcomes

This project demonstrates understanding of:
1. Advanced Kubernetes management techniques
2. Application lifecycle management in Kubernetes
3. Troubleshooting containerized applications
4. Kubernetes dashboard functionality
5. Port forwarding for accessing services
6. Rolling updates and deployment strategies

## References

- [Kubernetes Documentation](https://kubernetes.io/docs/home/)
- [Kubernetes Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)
- [kubectl Port Forward](https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/)
- [Updating Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment)
- [Docker Documentation](https://docs.docker.com/)

## Author

Author: Krish Moradiya (223880281)  
Unit: SIT737 - Cloud Native Application Development  
Trimester: T1 2025  
Deakin University
