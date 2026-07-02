# AWS DevOps Assignment

## Project Overview

This project demonstrates the deployment of a production-like Node.js web application on AWS Free Tier using DevOps best practices.

The application is hosted on an Amazon EC2 Ubuntu instance, served through Nginx, managed using PM2, monitored with Amazon CloudWatch, and automatically deployed using GitHub Actions.

---

## Objective

The objective of this assignment is to design, deploy, secure, monitor, and document a production-like application while implementing CI/CD, monitoring, security, and performance testing.

---

# Tech Stack

- AWS EC2 (Ubuntu 24.04 LTS)
- Amazon S3
- AWS IAM
- AWS Security Groups
- Amazon CloudWatch
- Node.js
- Express.js
- Nginx
- PM2
- GitHub Actions
- k6 (Load Testing)
- Git & GitHub

---

# Project Structure


```
aws-devops-assignment/
│
├── .github/
├── architecture/
├── docs/
├── screenshots/
├── README.md
├── server.js
├── package.json
├── package-lock.json
---

# AWS Services Used

- Amazon EC2
- Amazon S3
- AWS IAM
- AWS Security Groups
- Amazon CloudWatch

---

# Application Deployment

The application is deployed on an Ubuntu EC2 instance.

Deployment Steps:

1. Launch Ubuntu EC2 Instance
2. Configure Security Groups
3. Install Node.js, Git, Nginx and PM2
4. Clone the GitHub Repository
5. Install Dependencies
6. Start Application using PM2
7. Configure Nginx Reverse Proxy
8. Verify Application Access

---

# CI/CD Pipeline

GitHub Actions is configured for automatic deployment.

Pipeline Workflow:

- Push code to GitHub
- GitHub Actions workflow starts
- Connects to EC2 using SSH
- Pulls latest code
- Installs dependencies
- Restarts PM2
- Application gets updated automatically

---

# Monitoring

Amazon CloudWatch Dashboard is configured to monitor:

- CPU Utilization
- Network In
- Network Out
- Status Checks

A High CPU Alarm is also configured.

---

# Logging

Application logs are monitored using:

- PM2 Logs
- Nginx Access Logs
- Nginx Error Logs

---

# Load Testing

Load testing was performed using **k6**.

### Results

| Metric | Result |
|----------|---------|
| Average Response Time | 26.09 ms |
| HTTP Requests | 1 |
| Error Rate | 0% |
| Application Status | Successful |

---

# Security

The following security measures were implemented:

- IAM Least Privilege
- Security Groups
- SSH Key Authentication
- GitHub Secrets
- CloudWatch Monitoring
- PM2 Process Management

---

# Architecture

The project architecture consists of:

User

↓

Internet

↓

Security Group

↓

Amazon EC2 (Ubuntu)

↓

Nginx Reverse Proxy

↓

Node.js Application

↓

PM2

↓

CloudWatch Monitoring

↓

Amazon S3

GitHub Actions automates deployments from the GitHub repository to the EC2 instance.

---

# Future Improvements

- Docker Containerization
- Terraform Infrastructure as Code
- HTTPS with Custom Domain
- AWS Application Load Balancer
- Auto Scaling
- AWS CodePipeline
- Amazon RDS Database

---

# Author

**Usha**

B.Tech Computer Science Engineering

AWS | DevOps | Cloud Computing | 
# Acknowledgement

This project was developed as part of a DevOps Engineer Technical Assignment to demonstrate practical knowledge of AWS Cloud, CI/CD, monitoring, security, and deployment using AWS Free Tier.
