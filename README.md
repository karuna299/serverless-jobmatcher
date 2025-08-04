# HireFlow

**HireFlow** is a serverless job-matching platform that enables recruiters to post job listings and job seekers to browse them in real-time. The application is built entirely using AWS services and follows modern DevOps and observability practices.

---

## 🧩 Features

- 🎯 Recruiters can post job listings via a form
- 🔍 Job seekers can view all active job posts
- 📈 CloudWatch Dashboard with custom metrics and logs
- ⚙️ Fully automated CI/CD using GitHub Actions
- 🌐 Serverless architecture using AWS Lambda, S3, and API Gateway

---

## 🔧 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- GitHub Actions → S3 Deployment

### Backend
- Python 3.12 (AWS Lambda)
- Amazon S3 (stores job data)
- Amazon API Gateway (routes for posting and listing jobs)

### Monitoring & Alerts
- Amazon CloudWatch Dashboard (`HireFlow-Monitoring`)
- Custom Metrics: `JobsPosted`
- Alarms for:
  - Lambda invocation errors
  - No traffic to `/list-jobs` for 1 hour

---

## 🚀 API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/post-job`      | Submit a new job listing |
| GET    | `/list-jobs`     | Fetch all job listings   |

---

## 📉 Observability

- CloudWatch Dashboard displays:
  - Jobs posted (custom metric)
  - Lambda logs from PostJobFunction
- CloudWatch Alarms:
  - Triggers on PostJobFunction errors
  - Alerts if ListJobsFunction is idle for 1 hour

---

## 🙌 About

**HireFlow** was created as a DevOps capstone project, showcasing best practices in serverless architecture, infrastructure as code (AWS SAM), CI/CD, and monitoring.

---

