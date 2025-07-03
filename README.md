# E-Bus Project

A full-stack web application for bus management, built with **React (Vite)** for the frontend and **Node.js/Express + MongoDB** for the backend.  
Includes user authentication, role-based dashboards, and a modern, animated UI using **Material-UI (MUI)**.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT-based authentication)
- 👥 Role-based Dashboards: Admin, Driver, User
- 🚌 Bus Search *(placeholder)*
- 🎨 Modern UI: Material-UI, animated gradient background, responsive design
- 🔁 API Proxy: Seamless frontend-backend integration during development

---

## 📁 Folder Structure

```
/client       → Frontend (React, Vite, MUI)
/server       → Backend (Node.js, Express, MongoDB)
.env          → Environment variables
```

---

## ✅ Prerequisites

- **Node.js** (v16+ recommended)
- **npm** (comes with Node.js)
- **MongoDB** (local or Atlas cluster)

---

## ⚙️ 1. Backend Setup (`/server`)

### A. Install dependencies
```bash
cd server
npm install
```

### B. Configure environment variables

Create a `.env` file in the `server/` directory with the following:

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

### C. Start the backend server
```bash
npm start
```

By default, the server runs on:  
📍 `http://localhost:5000`

You should see:  
`Server running on port 5000`

---

## 🎨 2. Frontend Setup (`/client`)

### A. Install dependencies
```bash
cd client
npm install
```

### B. Start the frontend dev server
```bash
npm run dev
```

The app runs on:  
🌐 `http://localhost:5173`

### C. API Proxy
The frontend is configured to proxy `/api` requests to the backend (`http://localhost:5000`) via `vite.config.js`, so no CORS issues occur during development.

---

## 🧪 3. Usage

1. Open `http://localhost:5173` in your browser.
2. Register a new user.
3. Login and explore the dashboards.
4. Admin, Driver, and User dashboards are **placeholders** — implement your business logic here.

---

## 🛠️ 4. Scripts

### 📡 Backend (`/server`)
```bash
npm start       # Start Express server
```

### 🎨 Frontend (`/client`)
```bash
npm run dev     # Start Vite dev server with hot reload
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Lint code
```

---

## 🔐 5. Environment Variables

### Backend (`server/.env`)
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🧰 6. Tech Stack

- **Frontend**: React, Vite, Material-UI (MUI), React Router
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- **Dev Tools**: ESLint, dotenv, Vite proxy

---

## 🎨 7. Customization

- **UI**: Update MUI theme in `client/src/main.jsx` and styles in `client/src/index.css`
- **API**: Add new routes/controllers in `server/routes/` and `server/models/`
- **Dashboards**: Extend Admin, Driver, and User dashboards with actual features

---

## 🧩 8. Troubleshooting

| Problem | Solution |
|--------|----------|
| 404 on API calls | Ensure both frontend and backend are running. Check Vite proxy config. |
| 403/500 errors | Check backend logs and verify environment variables in `.env`. |
| MongoDB connection issues | Verify `MONGO_URI` and that MongoDB is running. |

---

## 🚀 9. Deployment

- Build frontend:  
```bash
cd client
npm run build
```

- Serve static files with backend or deploy separately:
  - Frontend: [Vercel](https://vercel.com), [Netlify](https://netlify.com)
  - Backend: [Heroku](https://heroku.com), [Render](https://render.com)

- Set environment variables securely in your hosting provider.

---
