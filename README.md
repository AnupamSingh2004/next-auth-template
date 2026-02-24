<br/>
<div align="center">
  <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" alt="Next.js Logo" width="80" />
  <h1 align="center">Next.js Authenticated Starter Template</h1>
  <p align="center">
    A premium, award-winning authentication boilerplate built for modern edge web applications.
  </p>
</div>

---

## 🚀 Overview

This repository is a fully functional, highly polished authentication template that you can clone and use for any Next.js 15+ App Router application.

The UI features a stunning, minimalist **split-screen auth layout**, a **monochrome zinc dark theme**, and a **fully responsive dashboard shell** powered by Shadcn UI. All authentication routes, including session checks and OAuth configurations, are pre-wired.

### 🛠 Tech Stack

*   **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
*   **Authentication**: [Auth.js (NextAuth v4)](https://next-auth.js.org/)
*   **Database ORM**: [Prisma v5](https://www.prisma.io/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Security**: `bcryptjs` for credential hashing

---

## ✨ Features

*   **Credentials Login**: Full email/variable sign-in and sign-up flows with error handling.
*   **Google OAuth**: Ready-to-use Google Provider integration.
*   **Premium Aesthetics**: Borderless input fields, zinc dark-mode, and a modern app-shell layout.
*   **Database Synced**: Fully typed Prisma Models for `User` and `Account`.
*   **Protected Routes**: Seamless layout wrappers that redirect unauthorized users out of the `/dashboard`.
*   **Type-Safe**: 100% strict TypeScript.

---

## 🚦 Getting Started

Follow these instructions to configure and run the template locally.

### 1. Database Setup

This template is configured to use **PostgreSQL**. You can use local Postgres, or spin up a free cloud instance on [Supabase](https://supabase.com), [Neon](https://neon.tech/), or [Vercel Postgres](https://vercel.com/storage/postgres).

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and replace `DATABASE_URL` with your actual Postgres connection string.

### 2. NextAuth Configuration

You'll need a secret string to encrypt the sessions, and OAuth keys if you plan to use Google login.

1. Generate a secure `NEXTAUTH_SECRET`:
   ```bash
   openssl rand -base64 32
   ```
2. Paste the generated string into your `.env` file for `NEXTAUTH_SECRET`.
3. *(Optional)* Provide your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from the [Google Cloud Console](https://console.cloud.google.com/) if you want social login to work.

### 3. Install & Migrate

Install the Npm dependencies and push the Prisma schema to your newly connected database.

```bash
# Install dependencies
npm install

# Generate the Prisma Client
npx prisma generate

# Push the schema changes to your database
npx prisma db push
```

### 4. Run the App

Start the Next.js development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000/login` to see the authentication portal!

---

## 📂 Project Structure

```text
auth/
├── app/
│   ├── (auth)/                 # Grouped Auth Pages
│   │   ├── login/page.tsx      # Split-screen Login UI
│   │   └── register/page.tsx   # Split-screen Register UI
│   ├── api/                    # Route Handlers
│   │   ├── auth/[...nextauth]/ # NextAuth integration
│   │   └── register/           # Custom credential creation API
│   ├── dashboard/              # Protected application route
│   │   └── page.tsx            # Beautiful App Shell layout
│   ├── globals.css             # Theme variables (Zinc dark mode)
│   └── layout.tsx              # Root layout with Session Provider
├── components/
│   ├── auth/                   # Ready-to-use forms (Login, Register, Social)
│   └── ui/                     # Shadcn UI primitives
├── lib/
│   ├── auth.ts                 # NextAuth Options configuration
│   ├── prisma.ts               # Global Prisma client singleton
│   └── session.ts              # Server session getter utility
└── prisma/
    └── schema.prisma           # Postgres Database Schema
```

---

## 🧩 Adding More Providers

To extend this template with GitHub, Discord, Twitter, etc:

1. Import the new provider in `lib/auth.ts` and add it to the `providers` array.
2. Add your new `CLIENT_ID` and `CLIENT_SECRET` to the `.env` file.
3. Add a new button in `components/auth/social-login.tsx` and call `signIn("your-provider")`.
