# FascinoLib - Unified Frontend Application

A unified frontend application that combines admin dashboard and public microsite functionality into a single React application.

## 📁 Project Structure

```
FascinoLib/
├── frontend/              # Unified frontend application
│   ├── src/
│   │   ├── admin/        # Admin dashboard (copied from admin-frontend)
│   │   ├── microsite/    # Public microsite (copied from public-frontend)
│   │   ├── auth/         # Authentication pages
│   │   │   └── Login.jsx
│   │   ├── AdminApp.jsx  # Admin app wrapper
│   │   ├── PublicApp.jsx # Public app wrapper
│   │   ├── App.jsx       # Main routing
│   │   └── main.jsx      # Entry point
│   └── package.json
├── backend/              # Express backend API
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── models/
├── admin-frontend/       # Original admin frontend (preserved)
└── public-frontend/      # Original public frontend (preserved)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

### Running the Application

1. **Start Frontend Dev Server:**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will be available at: **http://localhost:8080**

2. **Start Backend Server:**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will be available at: **http://localhost:3001**

## 🎯 User Flow

### 1. Login
- **URL:** `http://localhost:8080/login`
- User enters email and password
- Click "Login" → Redirects to `/dashboard`
- **Note:** Currently no real authentication - any credentials work

### 2. Admin Dashboard
- **URL:** `http://localhost:8080/dashboard`
- View statistics and metrics
- Navigate to different admin sections:
  - Brand Settings (`/dashboard/brand`)
  - Page Customization (`/dashboard/customize`)
  - Product Manager (`/dashboard/products`)
  - Highlights (`/dashboard/highlights`)
  - Social Links (`/dashboard/social`)
  - Theme & Colors (`/dashboard/theme`)
  - Analytics (`/dashboard/analytics`)

### 3. Preview Microsite
- Click "Preview Microsite" button on dashboard
- Opens public microsite in a modal dialog
- Shows exactly how visitors will see the site

### 4. Public Microsite
- **URL:** `http://localhost:8080/site/:id`
- Examples:
  - `http://localhost:8080/site/demo`
  - `http://localhost:8080/site/username`
  - `http://localhost:8080/site/john`
- Public-facing view of curated content
- Shows products, videos, photos, social links, etc.

## 🛣️ Routes

### Frontend Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Redirect | Redirects to `/login` |
| `/login` | Login | Login page |
| `/dashboard` | AdminApp | Admin dashboard (main) |
| `/dashboard/brand` | AdminApp | Brand settings |
| `/dashboard/customize` | AdminApp | Page customization |
| `/dashboard/products` | AdminApp | Product manager |
| `/dashboard/highlights` | AdminApp | Highlights management |
| `/dashboard/social` | AdminApp | Social links |
| `/dashboard/theme` | AdminApp | Theme & colors |
| `/dashboard/analytics` | AdminApp | Analytics dashboard |
| `/site/:id` | PublicApp | Public microsite view |

### Backend API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/login` | User login |
| GET | `/api/microsite/:id` | Get microsite data |
| PUT | `/api/microsite/:id` | Update microsite data |

## 🏗️ Architecture

### Frontend Structure

- **Main App (`App.jsx`):** Handles top-level routing
- **AdminApp (`AdminApp.jsx`):** Wrapper for admin dashboard
- **PublicApp (`PublicApp.jsx`):** Wrapper for public microsite
- **Admin Navigation Provider:** Handles navigation routing for admin section

### Key Features

1. **Unified Routing:** Single routing system for both admin and public apps
2. **Preserved Original Code:** Admin and microsite apps are copied exactly as-is
3. **Context-Aware Path Aliases:** `@/` imports resolve correctly for both apps
4. **Preview Functionality:** Preview public microsite directly from dashboard

## 📦 Data Storage

Currently using **localStorage** for temporary data storage:
- Key: `micrositeData`
- Format: JSON object with `brandTitle` and `brandStory`

Backend is ready for future integration with proper database.

## 🔧 Development

### Frontend Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

### Backend Commands

```bash
npm run dev      # Start with auto-reload
npm start        # Start production server
```

## 📝 Notes

- **No UI Modifications:** Original admin and microsite UI code remains unchanged
- **Wrapper Components:** Only wrapper components were added for routing integration
- **Path Aliases:** Custom Vite plugin handles `@/` imports for both apps
- **Navigation:** Admin navigation automatically prefixes routes with `/dashboard`

## 🚧 Future Enhancements

- [ ] Connect frontend to backend API
- [ ] Implement real authentication
- [ ] Add database integration
- [ ] User-specific microsite data
- [ ] Real-time preview updates

## 📄 License

Private project - All rights reserved

