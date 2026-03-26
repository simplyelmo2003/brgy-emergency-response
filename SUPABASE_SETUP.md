# Supabase + Vercel Deployment Guide

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Fill in:
   - **Project Name**: `brgy-emergency-response`
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users (e.g., us-east-1)
4. Click **"Create New Project"** and wait 2-3 minutes
5. Once ready, go to **Settings > Database**

## Step 2: Get Connection String

1. In Supabase dashboard, go to **Settings > Database**
2. Copy the **Connection String** (URI format)
3. Should look like: `postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres`
4. Save it securely - you'll need it for environment variables

## Step 3: Setup Local Development

### Copy Environment Template
```bash
cp .env.local.example .env.local
```

### Update .env.local
```
# Get these from Supabase Settings > API
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...

# Backend
DATABASE_URL=postgresql://postgres:your_password@host:5432/postgres
VITE_API_URL=http://localhost:4000
```

### Run Database Migration Locally
```bash
cd server

# Install Prisma CLI
npm install

# Migrate database (this creates tables)
npm run prisma:migrate -- --name init

# Optional: Seed test data
npm run seed

# Check database
npm run prisma:studio  # Opens visual DB editor
```

## Step 4: Deploy to Vercel

### 4a. Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit with Vercel and Supabase setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/brgy-emergency.git
git push -u origin main
```

### 4b. Deploy Frontend
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select your GitHub repository
4. **Framework**: Vite
5. **Root Directory**: `./` (default)
6. **Environment Variables**: Add these
   ```
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGc...
   VITE_API_URL=https://your-backend-domain.vercel.app
   ```
7. Click **"Deploy"**

### 4c. Deploy Backend (Optional - if not bundling with frontend)
1. Create new Vercel project for `server/` folder
2. **Root Directory**: `server`
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Environment Variables**:
   ```
   DATABASE_URL=postgresql://postgres:...@host:5432/postgres
   CORS_ORIGIN=https://your-frontend-domain.vercel.app
   NODE_ENV=production
   ```
6. Click **"Deploy"**

### 4d. Run Database Migration on Production
After backend deploys to production:

```bash
# Migrate production database
npm --prefix server run prisma:migrate -- --name init
```

## Step 5: Test Deployment

After both are deployed:

1. Visit your frontend: `https://your-app.vercel.app`
2. Test API calls:
   ```bash
   curl https://your-backend.vercel.app/api/health
   ```
3. Check backend logs: Vercel Dashboard > Deployments > Logs

## Troubleshooting

### ❌ "Cannot connect to database"
- Verify `DATABASE_URL` is correct
- Check Supabase connection settings
- Ensure IP whitelist includes Vercel IPs (usually automatic)

### ❌ "CORS errors when calling API"
- Update `CORS_ORIGIN` to your frontend URL
- Restart backend deployment

### ❌ "Build fails on Vercel"
- Check build logs: Vercel Dashboard > Deployments > Build Logs
- Ensure `VITE_SUPABASE_URL` is set as environment variable

## Security Notes

⚠️ **NEVER commit `.env.local`** - it contains secrets!
- Already in `.gitignore`
- Add environment variables only in Vercel dashboard

✅ **Use Supabase service role key** for backend operations (in `server/` if needed)

## Next Steps

- [ ] Create Supabase project
- [ ] Set up local development
- [ ] Run database migrations locally
- [ ] Push to GitHub
- [ ] Deploy to Vercel (frontend)
- [ ] Deploy to Vercel (backend)
- [ ] Test all API endpoints
- [ ] Monitor in Vercel/Supabase dashboards
