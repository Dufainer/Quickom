# Quickom

WhatsApp ordering system with a web admin panel for restaurants.

## Stack

| Layer | Technology |
|---|---|
| REST API | Node.js + Express.js |
| WhatsApp bot | Baileys |
| Database | PostgreSQL |
| Cache / Sessions | Redis |
| Admin panel | React + Vite |
| Real-time | Socket.io |

## Quick start

### 1. Infrastructure

```bash
docker-compose up -d
```

### 2. Environment variables

```bash
cp .env.example .env
# fill in your values
```

### 3. Install dependencies

```bash
# Backend + bot
npm install

# Admin panel
npm install --prefix admin
```

### 4. Run services

```bash
# REST API (port 3000)
npm run dev

# WhatsApp bot (scan the QR code)
npm run bot

# Admin panel (port 5173)
npm run admin
```

## Project structure

```
quickom/
  bot/          # WhatsApp bot (Baileys)
  server/       # REST API (Express)
    db/         # PostgreSQL connection and migrations
    routes/     # Express routers
    controllers/
    models/
    middleware/
  admin/        # React + Vite admin panel
```

## API routes

| Method | Route | Description |
|---|---|---|
| GET | /api/orders | List orders |
| POST | /api/orders | Create order |
| PATCH | /api/orders/:id | Update order status |
| GET | /api/products | List products |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| GET | /api/tickets | List kitchen tickets |
| PATCH | /api/tickets/:id | Update ticket status |
| GET | /api/reports/summary | Business summary |
| GET | /api/reports/sales | Sales report |
| POST | /api/payments/webhook | MercadoPago webhook |
