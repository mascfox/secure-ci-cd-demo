## Secure CI/CD Demo Overview

This project is a simple Node.js Express API designed to demonstrate a complete CI/CD pipeline using GitHub Actions with a focus on security and automation.

The application itself is intentionally small so the focus is on the pipeline rather than application complexity.

### API Endpoints
- GET / → Returns "Hello World"
- GET /health → Returns server status

---

## CI/CD Pipeline

This repository uses GitHub Actions to automate the following stages:

### 1. Continuous Integration (CI)
- Installs dependencies
- Runs unit tests using Jest
- Ensures code correctness before deployment

### 2. Security Checks
- Runs npm audit to detect vulnerable dependencies
- Helps identify security risks in third-party packages

### 3. Continuous Deployment (CD)
- Builds a Docker image of the application
- Pushes the image to GitHub Container Registry (GHCR)

---

## Security Design Choices

This project includes basic but important security practices:

- Dependency scanning via npm audit
- Isolation of application using Docker containers
- Automated checks in CI to prevent vulnerable code from being deployed

### Future improvements could include:
- CodeQL static analysis
- Dependabot for automated dependency updates
- Secret scanning enforcement rules
- Container vulnerability scanning (e.g., Trivy)

---

## How to Run Locally

### 1. Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm (comes with Node.js)
- Git
- Docker (optional, for container run)

Check versions:

node -v
npm -v
git --version
docker --version

---

### 2. Clone the repository

git clone https://github.com/mascfox/secure-ci-cd-demo.git
cd secure-ci-cd-demo

---

### 3. Install dependencies

npm install

---

### 4. Run the application (development mode)

node server.js

Then open:
http://localhost:3000
http://localhost:3000/health

---

### 5. Run tests

npm test

---

## Run with Docker

### 1. Build Docker image

docker build -t secure-ci-cd-demo .

---

### 2. Run Docker container

docker run -p 3000:3000 secure-ci-cd-demo

Then open:
http://localhost:3000

---

## GitHub Actions Workflow

The pipeline runs automatically on:

- Push to main branch
- Pull requests

### Workflow stages:
1. Test job (CI)
2. Security scan job
3. Docker build and push (CD)

---

## Tech Stack

- Node.js
- Express
- Jest
- Docker
- GitHub Actions

---

## Author Notes

This project demonstrates CI/CD fundamentals including:

- Automation
- Security awareness
- Reproducible builds
- Simple deployment pipelines

---

## Status

CI pipeline working  
Security scanning included  
Docker deployment configured  
GitHub Actions automation enabled  
