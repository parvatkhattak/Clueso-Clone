# Clueso Clone

A comprehensive clone of Clueso.io - an AI-powered platform for creating professional product videos and documentation.

## 🎯 Project Overview

Clueso Clone replicates the core features of Clueso.io, enabling users to:
- 🎥 Record screen or upload videos/slide decks
- 🤖 AI-enhanced video editing (scripts, voiceovers, zoom effects)
- 📚 Automatic documentation generation
- 📁 Project and template management
- 👥 Team collaboration
- 📊 Analytics and insights

## 🏗️ Architecture

This project consists of three main components:

```
clueso-clone/
├── frontend/          # Next.js 14 application
├── backend/           # Node.js + Express API
└── extension/         # Chrome extension (optional)
```

### Technology Stack

#### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Forms**: React Hook Form  
- **HTTP Client**: Axios
- **UI Components**: Custom component library

#### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **AI Integration**: Google Gemini API

#### Browser Extension
- **Manifest**: V3
- **Storage**: Chrome Storage API
- **Communication**: WebSockets

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- Google Gemini API key (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd clueso-clone
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.example .env.local
   # Edit .env.local with your configuration
   npm run dev
   ```

3. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npx prisma generate
   npx prisma db push
   npm run dev
   ```

4. **Setup Database**
   ```bash
   # Make sure PostgreSQL is running
   cd backend
   npx prisma migrate dev
   ```

### Environment Variables

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/clueso
JWT_SECRET=your-secret-key
GEMINI_API_KEY=your-gemini-api-key
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## 📋 Features

### ✅ Implemented
- User authentication (signup/login)
- Dashboard with project overview
- Project management
- Team collaboration
- Basic analytics

### 🚧 In Progress
- Video upload and processing
- AI-powered enhancements
- Template system
- Auto-update agent

### 📝 Planned
- Screen recording
- Multi-language support
- Advanced analytics
- Browser extension

## 📖 API Documentation

### Authentication Endpoints
```
POST   /api/auth/signup      # Register new user
POST   /api/auth/login       # Login user
GET    /api/auth/me          # Get current user
POST   /api/auth/logout      # Logout user
```

### Project Endpoints
```
GET    /api/projects         # List all projects
POST   /api/projects         # Create new project
GET    /api/projects/:id     # Get project details
PUT    /api/projects/:id     # Update project
DELETE /api/projects/:id     # Delete project
```

### Video Endpoints
```
POST   /api/videos/upload    # Upload video
GET    /api/videos/:id       # Get video details
PUT    /api/videos/:id       # Update video
DELETE /api/videos/:id       # Delete video
```

## 🎨 Design System

The UI follows Clueso.io's design principles:
- **Color Palette**: Purple primary, clean whites, subtle grays
- **Typography**: Modern sans-serif with clear hierarchy
- **Components**: Card-based layouts with rounded corners
- **Animations**: Smooth transitions and micro-interactions

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test

# E2E tests
npm run test:e2e
```

## 📦 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel deploy
```

### Backend (Railway/Render)
```bash
cd backend
# Follow platform-specific deployment guide
```

## 🤝 Team Collaboration

The platform supports:
- Multi-user workspaces
- Role-based permissions (Admin, Member)
- User invitations
- Shared project access

## 📊 Analytics

Track key metrics:
- Video views and engagement
- Project creation trends
- Team activity
- User growth

## 🔒 Security

- Password hashing with bcrypt
- JWT-based authentication
- CORS protection
- Input validation and sanitization
- Rate limiting on API endpoints

## 📄 License

This project is created for educational purposes as part of a technical assignment.

## 🙏 Acknowledgments

- Clueso.io for the product inspiration
- Next.js and React teams
- Open source community

## 📧 Contact

For questions or feedback, please contact [your-email@example.com]

---

**Note**: This is a clone project built for educational/assessment purposes and is not affiliated with the official Clueso.io product.
