# ⚡ Supabase + Vercel Deployment - Quick Start

## 🎯 30-Minute Setup

### Step 1: Create Supabase Project (5 min)
```bash
# 1. Go to: https://supabase.com/
# 2. Click "New Project"
# 3. Fill in project details:
#    - Name: brgy-emergency-response
#    - Password: (generate strong one)
#    - Region: closest to you
# 4. Wait 2-3 minutes for creation
```

### Step 2: Get Credentials
```
In Supabase > Settings > Database > Connection string (URI)
Copy: postgresql://...
```

### Step 3: Setup Local Environment
```bash
# Copy template
cp .env.local.example .env.local

# Edit .env.local and add:
# DATABASE_URL = postgresql://...
# VITE_SUPABASE_URL = https://xxxxx.supabase.co
# VITE_SUPABASE_ANON_KEY = eyJhbGc...
```

### Step 4: Migrate Database Schema
```bash
# From root directory
npm --prefix server install
npm --prefix server run prisma:migrate:dev -- --name init

# Verify it worked
npm --prefix server run prisma:studio
# Opens browser showing your database tables
```

### Step 5: Test Locally
```bash
# Terminal 1: Backend
cd server && npm run dev

# Terminal 2: Frontend
npm run dev

# Visit: http://localhost:5173
```

### Step 6: Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment with Supabase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/brgy-emergency.git
git push -u origin main
```

### Step 7: Deploy Frontend to Vercel
```
1. Go: https://vercel.com/new
2. Select your GitHub repo
3. Framework: "Vite" 
4. Environment Variables:
   VITE_SUPABASE_URL = https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGc...
   VITE_API_URL = http://localhost:4000 (or your backend URL)
5. Click "Deploy" ✅
```

### Step 8: Deploy Backend to Vercel (Optional)
```
1. Go: https://vercel.com/new
2. Same repo, set Root Directory: "server"
3. Build: npm run build
4. Output: dist
5. Environment Variables:
   DATABASE_URL = postgresql://...
   CORS_ORIGIN = https://YOUR_VERCEL_FRONTEND_URL
   NODE_ENV = production
6. Click "Deploy" ✅
```

### Step 9: Run Production Migrations
```bash
# After backend deploys
npm --prefix server run prisma:migrate
```

## 📋 Files Created

- ✅ `vercel.json` - Frontend config
- ✅ `server/vercel.json` - Backend config
- ✅ `.env.local.example` - Environment template
- ✅ `SUPABASE_SETUP.md` - Detailed guide
- ✅ `VERCEL_DEPLOYMENT_CHECKLIST.md` - Step-by-step checklist
- ✅ `.gitignore` - Security (keeps secrets local)

## 🔗 Useful URLs

- Supabase: https://supabase.com
- Vercel: https://vercel.com
- Your repo: (after GitHub setup)
- Your app: (after Vercel deploy)

## ⚠️ Important

**NEVER commit `.env.local`** - contains database passwords!
It's already in `.gitignore` ✅

Only add environment variables in:
- Supabase Project Settings
- Vercel Environment Settings

## Next Action

👉 **Start here:** Read [SUPABASE_SETUP.md](SUPABASE_SETUP.md)
