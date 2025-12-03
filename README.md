# The Private Note Vault 📝

A full-stack MERN application for securely storing and managing private notes. Users can sign up, log in, create, view, and delete their personal notes with a clean, intuitive interface.

![GitHub](https://img.shields.io/github/license/adil162006/The-Private-Note-Vault)
![Node.js](https://img.shields.io/badge/node.js-v18+-green)
![Next.js](https://img.shields.io/badge/Next.js-16.0.6-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Express](https://img.shields.io/badge/Express-5.2.1-yellow)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Frontend Architecture](#frontend-architecture)
- [Database Schema](#database-schema)
- [Authentication & Security](#authentication--security)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### User Management
- **Signup**: Create a new account with email and password
- **Login**: Authenticate with email and password credentials
- **Logout**: Securely log out and clear session tokens
- **Password Validation**: Minimum 6 characters required
- **Email Validation**: Standard email format validation

### Note Management
- **Create Notes**: Add new notes with content
- **View Notes**: Display all personal notes in a clean list format
- **Delete Notes**: Remove notes with authorization checks
- **User-Specific Notes**: Each user can only access their own notes
- **Timestamps**: Automatic creation and update timestamps for all notes

### Security Features
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Protected Routes**: Backend middleware to verify user authorization
- **CORS Support**: Cross-origin resource sharing for frontend-backend communication
- **Cookie-Based Sessions**: HTTP-only JWT cookies for security

### User Interface
- **Responsive Design**: Clean, modern UI with inline styles
- **Loading States**: User feedback during API calls
- **Error Handling**: User-friendly error messages
- **Form Validation**: Client-side validation for inputs
- **Navigation**: Easy navigation between login, signup, and vault pages

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Middleware**: 
  - CORS for cross-origin requests
  - Cookie-parser for HTTP cookie handling
  - Express JSON parser for request bodies

### Frontend
- **Framework**: Next.js 16.0.6 (with Turbopack)
- **UI Library**: React 19.2.0
- **HTTP Client**: Axios 1.13.2
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Type System**: TypeScript 5
- **Linting**: ESLint 9

### Database
- **Provider**: MongoDB Atlas (Cloud)
- **Connection**: Mongoose ODM for schema validation

## 📁 Project Structure

```
Dual server/
├── backend/
│   ├── src/
│   │   ├── server.js                 # Express app initialization
│   │   ├── controllers/
│   │   │   ├── auth.controller.js    # Signup, login, logout logic
│   │   │   └── note.controller.js    # CRUD operations for notes
│   │   ├── routes/
│   │   │   ├── auth.route.js         # /api/auth endpoints
│   │   │   └── note.route.js         # /api/notes endpoints
│   │   ├── models/
│   │   │   ├── User.js               # User schema (email, fullName, password)
│   │   │   └── Note.js               # Note schema (user, content, timestamps)
│   │   ├── middleware/
│   │   │   └── auth.middleware.js    # JWT verification middleware
│   │   └── lib/
│   │       ├── db.js                 # MongoDB connection
│   │       └── utils.js              # Token generation utility
│   ├── package.json
│   ├── .env                          # Environment variables
│   └── .gitignore
│
└── frontend/
    ├── app/
    │   ├── layout.tsx                # Root layout with global CSS
    │   ├── page.tsx                  # Home page (redirects to login)
    │   ├── globals.css               # Global styles + Tailwind imports
    │   ├── components/
    │   │   ├── Navbar.tsx            # Navigation bar with logout
    │   │   ├── NoteCard.tsx          # Individual note display
    │   │   └── CreateNoteForm.tsx    # Note creation form
    │   ├── login/
    │   │   └── page.tsx              # Login page
    │   ├── signup/
    │   │   └── page.tsx              # Signup page
    │   └── vault/
    │       └── page.tsx              # Main notes dashboard
    ├── public/                        # Static assets
    ├── package.json
    ├── postcss.config.mjs            # PostCSS config for Tailwind
    ├── next.config.ts                # Next.js configuration
    ├── tsconfig.json                 # TypeScript configuration
    ├── styles.d.ts                   # CSS module declarations
    └── .gitignore
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0 or higher
- **npm** or **yarn**: Package manager
- **MongoDB Atlas Account**: Free tier available at [mongodb.com/cloud](https://www.mongodb.com/cloud)
- **Git**: For version control

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/adil162006/The-Private-Note-Vault.git
cd "Dual server"
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### Backend Environment Setup

Create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB Connection String
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=note-vault

# Server Port
PORT=4000

# JWT Secret Key (use a strong random string)
JWT_SECRET=your_jwt_secret_key_here
```

**Example:**
```env
MONGO_URI=mongodb+srv://user:password@note-vault.2saoza6.mongodb.net/?appName=note-vault
PORT=4000
JWT_SECRET=your_key
```

### Frontend Environment Setup

No `.env` file is required for the frontend. The API endpoints are hardcoded to `http://localhost:4000` for development.

**Note**: For production, consider adding a `NEXT_PUBLIC_API_URL` environment variable:

```env
# .env.local (frontend)
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

Then update API calls:
```tsx
const API_URL =  "http://localhost:4000";
```

## ▶️ Running the Application

### Start Backend Server

```bash
cd backend
npm run dev
```

**Expected Output:**
```
Server running on port: 4000
```

### Start Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

**Expected Output:**
```
▲ Next.js 16.0.6
- Local: http://localhost:3000
```

### Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

The application will redirect you to the login page.

## 📚 API Documentation

### Base URL
```
http://localhost:4000/api
```

### Authentication Endpoints

#### 1. **Signup**
Create a new user account.

```http
POST /auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "fullName": "John Doe",
  "password": "securePassword123"
}
```

**Response (201 Created):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "user@example.com",
  "fullName": "John Doe"
}
```

**Errors:**
- `400`: Missing fields, invalid email, duplicate email, or password < 6 characters
- `500`: Server error

---

#### 2. **Login**
Authenticate an existing user.

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response (200 OK):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "user@example.com",
  "fullName": "John Doe"
}
```

**Headers:** Sets `jwt` cookie with authentication token

**Errors:**
- `400`: Missing credentials or invalid credentials
- `500`: Server error

---

#### 3. **Logout**
Terminate the user session.

```http
POST /auth/logout
```

**Response (200 OK):**
```json
{
  "message": "Logged out successfully"
}
```

---

#### 4. **Check Current User** (Protected)
Verify the current authenticated user.

```http
GET /auth/check
Cookie: jwt=<token>
```

**Response (200 OK):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "user@example.com",
  "fullName": "John Doe"
}
```

**Errors:**
- `401`: No token or invalid token
- `404`: User not found
- `500`: Server error

---

### Notes Endpoints

#### 1. **Get All Notes** (Protected)
Retrieve all notes for the authenticated user.

```http
GET /notes
Cookie: jwt=<token>
```

**Response (200 OK):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "user": "507f1f77bcf86cd799439011",
    "content": "My important note",
    "createdAt": "2024-12-01T10:30:00.000Z",
    "updatedAt": "2024-12-01T10:30:00.000Z"
  }
]
```

**Errors:**
- `401`: Unauthorized (no token)
- `500`: Server error

---

#### 2. **Create Note** (Protected)
Create a new note.

```http
POST /notes
Content-Type: application/json
Cookie: jwt=<token>

{
  "content": "This is my note content"
}
```

**Response (201 Created):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "user": "507f1f77bcf86cd799439011",
  "content": "This is my note content",
  "createdAt": "2024-12-01T10:30:00.000Z",
  "updatedAt": "2024-12-01T10:30:00.000Z"
}
```

**Errors:**
- `400`: Missing note content
- `401`: Unauthorized
- `500`: Server error

---

#### 3. **Delete Note** (Protected)
Remove a note by ID.

```http
DELETE /notes/:id
Cookie: jwt=<token>
```

**Response (200 OK):**
```json
{
  "message": "Note removed successfully"
}
```

**Errors:**
- `401`: Unauthorized or not the note owner
- `404`: Note not found
- `500`: Server error

---

## 🏗️ Frontend Architecture

### Page Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `page.tsx` | Home (redirects to `/login`) |
| `/login` | `login/page.tsx` | User login form |
| `/signup` | `signup/page.tsx` | User registration form |
| `/vault` | `vault/page.tsx` | Main dashboard with notes |

### Key Components

#### **Navbar Component** (`components/Navbar.tsx`)
- Displays application title
- Logout button
- Called in vault page

#### **NoteCard Component** (`components/NoteCard.tsx`)
- Displays individual note content
- Delete button with authorization
- Props: `id`, `content`, `onDelete`

#### **CreateNoteForm Component** (`components/CreateNoteForm.tsx`)
- Form to create new notes
- Text input for note content
- Submit button
- Props: `onNoteCreated` callback

### State Management

The application uses React hooks for state management:
- `useState`: For form inputs and data lists
- `useRouter`: For navigation between pages
- `useEffect`: For API calls on component mount

### Error Handling

- **Try-Catch Blocks**: Wrap all API calls
- **Axios Error Guard**: Check `axios.isAxiosError()` for type-safe error handling
- **User Alerts**: Display error messages to users
- **Console Logging**: Log errors for debugging

## 🗄️ Database Schema

### User Collection

```javascript
{
  _id: ObjectId,
  email: String (unique, required),
  fullName: String (required),
  password: String (hashed, required, min: 6),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Indexes:**
- `email`: Unique index for fast lookups

---

### Note Collection

```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User, required),
  content: String (required),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Indexes:**
- `user`: Index for querying user's notes

---

## 🔐 Authentication & Security

### JWT Token Flow

1. **User Signup/Login**: Server generates JWT token
2. **Token Storage**: Token stored in HTTP-only cookie
3. **Protected Routes**: Middleware verifies JWT on each request
4. **Token Extraction**: Decoded from cookies to get user ID
5. **User Fetching**: User data retrieved from database

### Password Security

- **Hashing**: bcryptjs with salt rounds = 10
- **Minimum Length**: 6 characters
- **Never Returned**: Password excluded from API responses

### CORS Configuration

```javascript
cors({
  origin: true,           // Accept all origins
  credentials: true       // Allow cookies
})
```

### Protected Middleware

```javascript
export const protectRoute = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select("-password");
  
  req.user = user;
  next();
};
```

## 🐛 Troubleshooting

### Backend Won't Start

**Error**: `Cannot find module 'dotenv'`
- **Solution**: Run `npm install` in the backend directory

**Error**: `MongoDB connection failed`
- **Solution**: Check your `MONGO_URI` in `.env`
- Ensure MongoDB Atlas cluster is active
- Check network access list (allow 0.0.0.0/0 for development)

**Error**: `Port 4000 already in use`
- **Solution**: Kill the process or use a different port:
  ```bash
  # Find process using port 4000
  lsof -i :4000  # macOS/Linux
  netstat -ano | findstr :4000  # Windows
  
  # Kill process
  kill -9 <PID>  # macOS/Linux
  taskkill /PID <PID> /F  # Windows
  ```

### Frontend Won't Start

**Error**: `ENOENT: no such file or directory, open 'styles.d.ts'`
- **Solution**: Create the file:
  ```bash
  touch styles.d.ts
  ```

**Error**: `Cannot find module 'next'`
- **Solution**: Run `npm install` in the frontend directory

**Error**: API calls return `localhost:5000` (old port)
- **Solution**: Ensure all API URLs point to `http://localhost:4000`

### Login/Signup Fails

**Error**: `401 Unauthorized`
- **Solution**: 
  - Backend must be running on port 4000
  - Check `.env` file in backend
  - Verify MongoDB connection

**Error**: `Email already exists` (on signup)
- **Solution**: Use a different email or delete user from MongoDB

### Notes Not Loading

**Error**: Empty vault with no error message
- **Solution**:
  - Check browser console for errors
  - Verify JWT token in cookies (DevTools → Application → Cookies)
  - Ensure user is logged in
  - Check backend logs for errors

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/The-Private-Note-Vault.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clear, descriptive commit messages
   - Follow existing code style
   - Add comments for complex logic

4. **Test Your Changes**
   - Run the backend: `npm run dev` (backend)
   - Run the frontend: `npm run dev` (frontend)
   - Test all features manually

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description
   - Reference any related issues
   - Wait for review

## 📝 License

This project is licensed under the ISC License. See the LICENSE file for details.

---

## 📞 Support

For issues, questions, or suggestions:
- **GitHub Issues**: [Create an issue](https://github.com/adil162006/The-Private-Note-Vault/issues)
- **GitHub Discussions**: [Start a discussion](https://github.com/adil162006/The-Private-Note-Vault/discussions)

## 🎯 Future Enhancements

- [ ] Note categories/tags
- [ ] Note search functionality
- [ ] Rich text editor
- [ ] Dark mode
- [ ] Note sharing with other users
- [ ] Two-factor authentication (2FA)
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Note export (PDF, TXT)
- [ ] Collaborative editing
- [ ] Mobile app (React Native)

---

**Built with ❤️ by [Adil](https://github.com/adil162006)**

**Last Updated**: December 2024
