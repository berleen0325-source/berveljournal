# TradingJourney Pro

A full-stack trading companion app scaffold for Web + PWA with a universal broker connection architecture, trade journaling, analytics, news, economic calendar, and secure authentication.

## Project Structure

- `frontend/` — React + Vite + Tailwind + PWA frontend
- `backend/` — Node.js + Express + TypeScript + Prisma backend
- `mt5-bridge/` — Python FastAPI bridge for MT4/MT5 local integration
- `nginx/` — Reverse proxy configuration
- `docker-compose.yml` — Local development environment with Postgres, Redis, backend, frontend
- `.env.example` — Environment variable reference

## Getting Started

1. Clone or create the repository.
2. Copy `.env.example` to `.env` and fill in your values.
3. Start infrastructure:

   ```powershell
   docker-compose up -d
   ```

4. Install backend dependencies:

   ```powershell
   cd backend
   npm install
   npx prisma migrate dev --name init
   ```

5. Install frontend dependencies:

   ```powershell
   cd ../frontend
   npm install
   npm run dev
   ```

## Notes

This scaffold includes the TradingJourney Pro architecture, database schema, security design, and feature-level structure described in the master prompt.
