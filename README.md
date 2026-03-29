````md
# QuickAI-Full-Stack

An AI platform for generating articles, images, and handling other creative tasks, with authentication via Clerk and data storage in Postgres (NeonDB).

## Features
- Article and blog post generation using the Gemini API
- Image generation and background removal
- Saving results to the database (Postgres)
- Authentication and user management through Clerk
- Modern UI built with React (Vite)
- Adapted for deployment on Render.com (frontend as a Static Site, backend as a Web Service)

## Technologies
- Frontend: React, Vite, Clerk, Cloudinary
- Backend: Node.js, Express 5, @clerk/express, NeonDB (Postgres), Gemini API
- Deployment: Render.com

## Quick Start

### 1. Clone the repository
```sh
git clone https://github.com/wordpress-developer01/Hotel.git
cd QuickAI-Full-Stack
````

### 2. Configure environment variables

#### Backend (`server/.env`):

```env
CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
DATABASE_URL=...
GEMINI_API_KEY=...
CLOUDINARY_URL=...
```

#### Frontend (`client/.env`):

```env
VITE_CLERK_PUBLISHABLE_KEY=...
VITE_API_URL=https://your-backend-url.onrender.com/
```

### 3. Install dependencies

#### Backend

```sh
cd server
npm install
```

#### Frontend

```sh
cd ../client
npm install
```

### 4. Run in development

#### Backend

```sh
npm run dev
```

#### Frontend

```sh
npm run dev
```

### 5. Deployment

* Backend: Render Web Service
* Frontend: Render Static Site

## Project Structure

```sh
client/      # Frontend (React, Vite)
server/      # Backend (Express, Clerk, NeonDB)
```

## Contact

* Author: wordpress-developer01

---

**The project is ready for production use.**

```
```
