# Task Management API

<p>
This is a RESTful API for a simple task management system built with Node.js, Express, and PostgreSQL, following Clean Architecture principles for scalability, maintainability, and separation of concerns.

The project demonstrates:

</p>

<li>
Robust CRUD API design
</li>
<li>
Clean architecture layering
</li>
<li>
Unit testing with Jest & Supertest
</li>
<li>
Environment-based configuration for dev & test
</li>

<br>

## Features

<ul>
<li><b>CRUD Operations</b>: Create, Read, Update, Delete tasks.</li>
<li><b>Database</b>: PostgreSQL for development; SQLite3 for testing.</li>
<li><b>ORM</b>: Sequelize for safe, clean DB interactions.</li>
<li><b>Clean Architecture</b>: Separation of Routes, Controllers, Services, Repositories.</li>
<li><b>Testing</b>: Jest + Supertest for API unit/integration tests.</li>
<li><b>Environment Config</b>: .env files for dev/test.</li>
</ul>

## Tech Stack

<li>Node.js (Backend runtime)</li>
<li>Express.js (Web framework)</li>
<li>PostgreSQL (Relational database for dev/prod)</li>
<li>SQLite3 (Lightweight DB for tests)</li>
<li>Sequelize (ORM)</li>
<li>Jest & Supertest (Testing)</li>

## Prerequisites

<li>Node.js v14+</li>
<li>npm or yarn</li>
<li>PostgreSQL installed & running</li>

## Clone the repository

```sh
git clone https://github.com/your-username/task-manager-api-pg.git
cd task-manager-api-pg
```

## Install dependencies

```sh
npm install
```

## Configure environment variables

```sh
cp .env.example .env
```

## Scripts

| Command       | Description                      |
| ------------- | -------------------------------- |
| `npm run dev` | Start server in development mode |
| `npm start`   | Start server in production mode  |
| `npm test`    | Run all tests                    |
