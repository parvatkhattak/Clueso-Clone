# Clueso Clone - Setup Guide

This guide will help you set up and run the Clueso Clone project locally.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (v14 or higher)
- **Git**

## Project Structure

```
clueso-clone/
├── frontend/          # Next.js application
├── backend/           # Express API server
├── extension/         # Chrome extension (optional)
└── README.md
```

## Setup Instructions

### 1. Clone the Repository

```bash
cd "/home/parvat-khattak/Downloads/Clueso Clone"
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Database - Replace with your PostgreSQL credentials
DATABASE_URL=postgresql://username:password@localhost:5432/clueso_db

# JWT Secret - Change this to a random string
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Google Gemini AI (optional - get key from https://makersuite.google.com/app/apikey)
GEMINI_API_KEY=your-gemini-api-key-here
```

#### Setup Database

1. Create a PostgreSQL database:
```bash
# Using PostgreSQL command line
createdb clueso_db

# Or using psql
psql
CREATE DATABASE clueso_db;
\q
```

2. Generate Prisma client and push schema to database:
```bash
npx prisma generate
npx prisma db push
```

#### Start Backend Server
```bash
npm run dev
```

The backend server should now be running on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

#### Install Dependencies
```bash
cd frontend
npm install
```

#### Configure Environment Variables
The `.env.local` file has already been created with:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### Start Frontend Development Server
```bash
npm run dev
```

The frontend should now be running on `http://localhost:3000`

## Verification

### Test Backend
```bash
curl http://localhost:5000/health
```

You should see:
```json
{"status":"ok","timestamp":"..."}
```

### Test Frontend
1. Open your browser and navigate to `http://localhost:3000`
2. You should see the Clueso Clone landing page
3. Click "Start Free Trial" to test the signup flow

## Creating Your First Account

1. Navigate to `http://localhost:3000`
2. Click "Start Free Trial" or "Sign up"
3. Fill in your details:
   - Name: Your Name
   - Email: your.email@example.com
   - Password: (minimum 6 characters)
4. Click "Create Account"
5. You'll be redirected to the dashboard at `http://localhost:3000/dashboard`

## Development Workflow

### Backend Development

- **Watch Mode**: The backend runs with `tsx watch`, so changes are automatically reloaded
- **Database Changes**: After modifying `prisma/schema.prisma`, run:
  ```bash
  npx prisma generate
  npx prisma db push
  ```
- **View Database**: Use Prisma Studio to view/edit data:
  ```bash
  npx prisma studio
  ```

### Frontend Development

- **Hot Reload**: Next.js automatically reloads on file changes
- **Add Dependencies**:
  ```bash
  npm install package-name
  ```
- **Build for Production**:
  ```bash
  npm run build
  npm start
  ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires auth)
- `POST /api/auth/logout` - Logout user (requires auth)

### Projects
- `GET /api/projects` - List all user projects (requires auth)
- `POST /api/projects` - Create new project (requires auth)
- `GET /api/projects/:id` - Get project details (requires auth)
- `PUT /api/projects/:id` - Update project (requires auth)
- `DELETE /api/projects/:id` - Delete project (requires auth)

### Videos
- `GET /api/videos` - List videos (requires auth)
- `POST /api/videos/upload` - Upload video (requires auth)
- `GET /api/videos/:id` - Get video details (requires auth)

### Teams
- `GET /api/teams` - List teams (requires auth)
- `POST /api/teams` - Create team (requires auth)
- `POST /api/teams/:id/invite` - Invite user to team (requires auth)

### Templates
- `GET /api/templates` - List video templates (requires auth)

### Analytics
- `GET /api/analytics/dashboard` - Get dashboard stats (requires auth)

## Troubleshooting

### Backend Issues

**"Cannot connect to database"**
- Ensure PostgreSQL is running
- Check DATABASE_URL in .env file
- Verify database exists: `psql -l | grep clueso_db`

**"Port 5000 already in use"**
- Change PORT in .env file to another port (e.g., 5001)
- Update NEXT_PUBLIC_API_URL in frontend/.env.local accordingly

**"Prisma Client not generated"**
```bash
cd backend
npx prisma generate
```

### Frontend Issues

**"Failed to fetch"**
- Ensure backend is running on the correct port
- Check NEXT_PUBLIC_API_URL in `.env.local`
- Check browser console for CORS errors

**"Module not found"**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Database Issues

**Reset Database**
```bash
cd backend
npx prisma db push --force-reset
```

**View Database**
```bash
npx prisma studio
```

## Next Steps

Once your local environment is set up:

1. ✅ Create an account and log in
2. ✅ Explore the dashboard
3. 📝 Create your first project
4. 🎥 Upload a video (feature in progress)
5. 🤖 Try AI enhancements (feature in progress)
6. 👥 Invite team members (feature in progress)

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google Gemini API](https://ai.google.dev/docs)

## Support

For issues or questions:
1. Check this setup guide
2. Review the troubleshooting section
3. Check the main README.md
4. Review error messages in terminal/console

---

**Note**: This is a clone project built for educational purposes. Features are being actively developed.
