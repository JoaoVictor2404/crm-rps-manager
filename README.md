# CRM & RPS Management System

A comprehensive, secure, and scalable Node.js (TypeScript) backend for managing customer relationships (CRM) and issuing Provisional Service Receipts (RPS) — ideal for technology companies, hospitals, and service providers operating in Brazil.

---

## 🚀 Features

* 🔐 **JWT Authentication** & role-based access (Admin / Sales / Finance)
* 🗂️ **CRM module**: contacts, accounts, leads, opportunities, sales pipeline
* 📄 **RPS module**: generate, batch-issue, and track Provisional Service Receipts (RPS) with PDF export
* 🔄 **Integration** with municipal tax APIs for automatic RPS submission
* ⚙️ **Background jobs** (Bull + Redis) for scheduled RPS issuance and email notifications
* 📧 **Email & SMS** reminders for due invoices and follow‑up tasks
* 📊 **Reporting**: dashboards for sales performance, RPS issuance, revenue
* 🛡️ **Security**: rate limiting, input validation, helmet, CORS hardening
* 🐳 **Docker & Docker Compose** for local development and production
* ✅ **Unit & integration tests** with Jest & Supertest
* 🔄 **CI/CD** with GitHub Actions: lint, build, test, deploy

---

## 📂 Project Structure

```
crm-rps-manager/
├── README.md
├── package.json
├── tsconfig.json
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── src/
│   ├── config/
│   │   └── default.ts          # Environment & application config
│   ├── entities/               # TypeORM entities
│   │   ├── User.ts
│   │   ├── Contact.ts
│   │   ├── Lead.ts
│   │   ├── Opportunity.ts
│   │   ├── RPS.ts              # Provisional Service Receipt
│   │   └── Invoice.ts
│   ├── controllers/            # Request handlers
│   │   ├── auth.controller.ts
│   │   ├── crm.controller.ts
│   │   └── rps.controller.ts
│   ├── routes/                 # Express/Koa routes
│   │   ├── auth.routes.ts
│   │   ├── crm.routes.ts
│   │   └── rps.routes.ts
│   ├── middlewares/            # Auth, error handling, rate-limit
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── rateLimit.middleware.ts
│   ├── services/               # Business logic & integrations
│   │   ├── crm.service.ts
│   │   ├── rps.service.ts
│   │   ├── taxApi.service.ts   # Municipal API integration
│   │   └── notification.service.ts
│   ├── jobs/                   # Background tasks (Bull)
│   │   └── rpsIssuance.job.ts
│   ├── utils/                  # Helpers (PDF generator, email templates)
│   │   └── pdf.generator.ts
│   └── index.ts                # App entrypoint
└── tests/
    ├── auth.test.ts
    ├── crm.test.ts
    ├── rps.test.ts
    └── integration.test.ts
```

---

## 🛠️ Technology Stack

* **Node.js** & **TypeScript**
* **Express** (or NestJS) as web framework
* **TypeORM** + **PostgreSQL**
* **Bull** + **Redis** for background jobs
* **jsonwebtoken** + **bcrypt** for auth
* **Nodemailer** & **Twilio** for email/SMS
* **PDFKit** or **Puppeteer** for PDF generation
* **Swagger** (OpenAPI) for API docs
* **Jest** & **Supertest** for testing
* **Docker** & **Docker Compose**
* **GitHub Actions** for CI/CD

---

## 🔧 Quick Start (Local)

1. **Clone the repo**

   ```bash
   git clone https://github.com/JoaoVictor2404/crm-rps-manager.git
   cd crm-rps-manager
   ```
2. **Copy environment variables**

   ```bash
   cp .env.example .env  # fill with your values
   ```
3. **Install dependencies**

   ```bash
   npm install
   ```
4. **Run migrations & start in dev mode**

   ```bash
   npm run build
   npm run migrate:run
   npm run dev
   ```
5. **API available at** `http://localhost:4000`

   * **Docs**: `http://localhost:4000/api-docs`

---

## 🐳 Docker & Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '4000:4000'
    env_file: .env
    depends_on: [db, redis]
  db:
    image: postgres:15
    env_file: .env
    volumes:
      - pgdata:/var/lib/postgresql/data
  redis:
    image: redis:7
volumes:
  pgdata:
```

```bash
docker-compose up --build
```

---

## 🧪 Testing & CI

* **Local tests**: `npm test`
* **GitHub Actions** (`.github/workflows/ci.yml`): checks out code, installs, builds, tests

---

## 📄 License

Released under the **MIT License** — feel free to use, adapt, and extend this project.
