# RR_Integration
### Rails API with TypeScript Frontend

A fullstack application that fetches data from a Rails API and displays it on a React TypeScript frontend.

## Tech Stack

**Backend**
- Ruby on Rails (API only)
- PostgreSQL
- Minitest
- Rubocop
- Brakeman

**Frontend**
- React
- TypeScript
- Vite

**Infrastructure**
- Render (Backend deployment)
- Vercel (Frontend deployment)
- GitHub Actions (CI)

## Local Setup

### Backend
```bash
cd Backend
bundle install
rails db:create
rails db:migrate
rails s
```

### Frontend

Create `.env` in the Frontend folder:
```
VITE_API_URL=http://localhost:3000
```

Then:
```bash
cd Frontend
npm install
npm run dev
```

## Run Minitests
```bash
cd Backend
rails test
```
