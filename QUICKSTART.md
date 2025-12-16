# Quick Start Guide

## Prerequisites
- Node.js 18+ and npm
- PostgreSQL 14+

## Setup (5 minutes)

### 1. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Setup environment
DATABASE_URL=postgresql://user:pass@localhost:5432/clueso_db
JWT_SECRET=your-secret-key-here
PORT=5000
FRONTEND_URL=http://localhost:3000

# Save to .env file, then:
npx prisma generate
npx prisma db push

# Start server
npm run dev
```

Backend runs on: http://localhost:5000

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies  
npm install

# Start dev server
npm run dev
```

Frontend runs on: http://localhost:3000

## Test the Application

1. Open http://localhost:3000
2. Click "Start Free Trial"
3. Create account:
   - Name: Test User
   - Email: test@example.com
   - Password: test123
4. You'll be redirected to the dashboard!

## What's Working

✅ Landing page with premium design
✅ User signup and login
✅ JWT authentication
✅ Dashboard with sidebar navigation
✅ Project management (backend ready)
✅ User profile and logout
✅ Protected routes
✅ PostgreSQL database with Prisma

## Project Structure

```
clueso-clone/
├── frontend/          # Next.js app
├── backend/           # Express API
├── README.md          # Main docs
├── SETUP.md           # Detailed setup
└── DEVELOPMENT.md     # Dev guide
```

## Need Help?

- See SETUP.md for detailed instructions
- See DEVELOPMENT.md for architecture info
- Check troubleshooting in SETUP.md

---

**Built with**: Next.js 14, Express, TypeScript, PostgreSQL, Prisma, Tailwind CSS
