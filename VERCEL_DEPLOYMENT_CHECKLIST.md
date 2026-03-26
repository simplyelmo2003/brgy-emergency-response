# Vercel Deployment Checklist

## Pre-Deployment ✅

- [ ] Supabase project created at supabase.com
- [ ] DATABASE_URL copied and saved securely
- [ ] `.env.local` created with Supabase credentials
- [ ] Local database migration tested (`npm run prisma:migrate`)
- [ ] All tests passing locally
- [ ] GitHub repository created and code pushed
- [ ] `.env.local` added to `.gitignore` (verify: `git status`)

## Vercel Setup ✅

### Frontend Deployment

- [ ] Go to vercel.com and sign in with GitHub
- [ ] Click "New Project"
- [ ] Import your repository
- [ ] Framework: Select "Vite"
- [ ] Root directory: leave as default `./`
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Add environment variable: `VITE_SUPABASE_URL`
- [ ] Add environment variable: `VITE_SUPABASE_ANON_KEY`
- [ ] Add environment variable: `VITE_API_URL`
- [ ] Click "Deploy" and wait for completion
- [ ] Test frontend URL works

### Backend Deployment (if separate)

- [ ] Create new Vercel project
- [ ] Import same repository
- [ ] Root directory: `server`
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Add environment variable: `DATABASE_URL`
- [ ] Add environment variable: `CORS_ORIGIN` (your frontend URL)
- [ ] Add environment variable: `NODE_ENV` = `production`
- [ ] Click "Deploy"
- [ ] Copy backend URL

### Run Migrations on Production

```bash
# After backend deploys successfully
npm --prefix server run prisma:migrate -- --name init
```

## Post-Deployment Testing ✅

- [ ] Frontend loads at vercel URL
- [ ] Pages render correctly
- [ ] API calls work (check browser console)
- [ ] Database operations work (create/read/update)
- [ ] Authentication works
- [ ] Geolocation works
- [ ] Map displays correctly
- [ ] No CORS errors

## Continuous Deployments ✅

Going forward:
- [ ] Push code to `main` branch
- [ ] Vercel auto-deploys on every push
- [ ] Monitor deployment in Vercel dashboard
- [ ] Check deployment logs if issues occur

## Emergency Rollback

If deployment breaks:
```bash
# Revert to previous commit
git revert HEAD
git push

# Or rollback in Vercel dashboard
# Vercel > Deployments > Select previous build > Redeploy
```

## Monitoring

- Check Vercel Dashboard for:
  - Build status
  - Deployment logs
  - Performance metrics
  - Error reporting

- Check Supabase Dashboard for:
  - Database connections
  - Query performance
  - API usage
  - Backups

## Useful Links

- Frontend Deployment: `https://your-app.vercel.app`
- Backend Deployment: `https://your-backend.vercel.app`
- Supabase Dashboard: `https://app.supabase.com`
- Vercel Dashboard: `https://vercel.com/dashboard`
