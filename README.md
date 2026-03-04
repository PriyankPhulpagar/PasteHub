# PasteHub

**PasteHub** is a full-stack web application that allows users to **create, edit, share, and manage text pastes** securely. The app uses **Google OAuth 2.0** for authentication and stores data in **MongoDB Atlas**. The frontend is built with **React.js** and deployed on **Vercel**, while the backend uses **Node.js + Express** and is deployed on **Render**.

---

## 🌟 Features

- **Google OAuth Login**: Secure login via Google account.
- **CRUD Operations**: Create, read, update, delete, copy, and share pastes.
- **Protected Routes**: Only authenticated users can access pastes.
- **Token-Based Authentication**: JWT tokens for secure sessions.
- **Cloud Deployment**: Frontend on Vercel, backend on Render.
- **Environment Variable Management**: Secure handling of secrets and API URLs.
- **Responsive UI**: Clean interface with Bootstrap/React styling.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router v6, Axios, Bootstrap, Vercel
- **Backend**: Node.js, Express.js, Passport.js, JWT, Render
- **Database**: MongoDB Atlas
- **Authentication**: Google OAuth 2.0
- **Other Tools**: Environment variables (`.env`), CORS setup, Protected Routes

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/PasteHub.git
cd PasteHub
