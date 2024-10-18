# ProdOps AI Application

This repository contains both the frontend and backend code for the **ProdOps AI** project.

- **Frontend**: A React application located in the `prodops-ai-frontend` folder.
- **Backend**: A Python Flask application located in the `prodops-ai-backend` folder.

## Table of Contents

- [Getting Started](#getting-started)
- [Frontend (React) Setup](#frontend-react-setup)
- [Backend (Flask) Setup](#backend-flask-setup)
- [Deployment Process](#deployment-process)
  - [Frontend Deployment](#frontend-deployment)
  - [Backend Deployment](#backend-deployment)
- [Contributing](#contributing)

---

## Getting Started

This section explains how to run the frontend and backend locally for development purposes.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14.x or higher) for running the frontend.
- **Python 3.x** (v3.8 or higher) for running the backend.
- **AWS CLI** (if you're working with deployments).
- **Git** for version control.

## Frontend (React) Setup

The frontend code is located in the `prodops-ai-frontend` folder. It is a React application.

### Steps to Run Locally

1. **Navigate to the frontend directory**:

   ```bash
   cd prodops-ai-frontend

2. **Install dependencies**:

   ```bash
   npm install

3. **Run the frontend app**:

   ```bash
   npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Backend (Flask) Setup

The backend code is located in the `prodops-ai-backend` folder. It is a Python Flask application.

### Steps to Run Locally

1. **Navigate to the backend directory**:

   ```bash
   cd prodops-ai-backend

2. **Create a virtual python environment**:

    ```bash
    python -m venv venv

    source venv/bin/activate # On Windows: venv\Scripts\activate

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt

4. **Run the Flask Backend**:

   ```bash
   flask run

Runs the backend app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in Postman.

## Deployment Process

The project is set up with automated deployment to AWS for both the frontend and backend, utilizing **AWS S3, CloudFront, Lambda**, and **API Gateway**. The process differs slightly for frontend and backend, but both environments (Dev and Prod) are handled separately.

### Frontend Deployment

The frontend is hosted in **AWS S3** with **CloudFront** as the CDN. Separate S3 buckets are used for the Dev and Prod environments.

- **Dev environment**: Deployed to `prodops-dev-frontend`.
- **Prod environment**: Deployed to `prodops-prod-frontend`.

- **Dev URL**: [[Development](https://d32ijj0l4lpp5z.cloudfront.net/)]
- **Prod URL**: [[Production](https://d2r79kmiu4ubqh.cloudfront.net)]

Deployment happens automatically when a pull request is merged into the relevant branch.

- **Merging into `dev` branch**: Deploys to the Dev environment.
- **Merging `dev` into `main`**: Deploys to the Prod environment.

#### Deployment Workflow:

1. **Push code to a feature branch** and open a pull request.
2. **Merge the pull request** into the `dev` branch.
3. The **GitHub Actions** workflow automatically deploys the updated code to the **Dev environment** S3 bucket.
4. After testing in the Dev environment, open a pull request to merge `dev` into `main`.
5. Merging into `main` triggers deployment to the **Prod environment** S3 bucket.

### Backend Deployment

The backend is hosted in **AWS Lambda**, with **API Gateway** exposing the Lambda functions as HTTP endpoints. Separate Lambda functions and API Gateways are used for the Dev and Prod environments.

- **Dev environment**: Deployed to `prodops-dev-backend`.
- **Prod environment**: Deployed to `prodops-prod-backend`.

#### Deployment Workflow:

1. **Push code to a feature branch** and open a pull request.
2. **Merge the pull request** into the `dev` branch.
3. The **GitHub Actions** workflow automatically deploys the updated backend code to the **Dev environment** Lambda function.
4. After testing in the Dev environment, open a pull request to merge `dev` into `main`.
5. Merging into `main` triggers deployment to the **Prod environment** Lambda function.

## Contributing

We welcome contributions to this project! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) file for detailed guidelines on how to contribute.
