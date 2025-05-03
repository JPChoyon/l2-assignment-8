# 🚲 Bike Servicing Management API

A backend API built with **Node.js**, **Express**, **TypeScript**, **Prisma**, and **PostgreSQL** that enables a bike servicing center to manage customers, bikes, and their service records.

---
## 🛠 Tech Stack

- **Backend**: Node.js, Express.js, TypeScript  
- **Database**: PostgreSQL  
- **ORM**: Prisma  
- **Dev Tools**: ts-node-dev, nodemon, dotenv  

---

## ⚙️ Setup Guide
if you want to run in this locally then please follow the procedure
## Step 1
First open terminal clone the link git repo.

https://github.com/JPChoyon/l2-assignment-8.git
## Step 2
Now open folder in vs code.

## Step 3
Now run this command in terminal.

yarn 
## Step 5
For run the server

yarn dev

# 📦 Key Features
## ✅ Customer Management
POST /api/customers – Create a customer

GET /api/customers – Fetch all customers

GET /api/customers/:id – Fetch a customer by ID

PUT /api/customers/:id – Update a customer

DELETE /api/customers/:id – Remove a customer

## ✅ Bike Management
POST /api/bikes – Add a new bike

GET /api/bikes – List all bikes

GET /api/bikes/:id – Get a specific bike

## ✅ Service Management
POST /api/services – Create a service record

GET /api/services – Fetch all services

GET /api/services/:id – Get a service by ID

PUT /api/services/:id/complete – Mark service as completed (custom or default time)

✅ Overdue Services
GET /api/services/status – Fetch services that are "pending" or "in-progress" and older than 7 days

