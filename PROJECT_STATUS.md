# 🚀 VidyaSetu Backend Project Status Log

**Last Updated:** March 2, 2026
**Architecture:** Modular Domain-Based (App Router + Prisma + Custom JWT Auth)
**Database:** PostgreSQL
**ORM:** Prisma
**Auth:** Hybrid (NextAuth for Google OAuth + Custom JWT + Refresh Token system)
**Runtime:** Next.js App Router

---

## 1️⃣ AUTHENTICATION SYSTEM (FULLY IMPLEMENTED)

### Credentials Authentication
- **Register Endpoint:** Fully functional, handling user creation.
- **Login Endpoint:** Fully functional, authenticating credentials.
- **Password Hashing:** Implemented using `bcrypt` (Salt rounds: 10).
- **Access Token:** Issue JWT-based access tokens with a **15 minutes expiry**.
- **Refresh Token:** Issue secure refresh tokens with a **7 days expiry**.
- **Storage:** Refresh tokens are securely stored in the DB and both tokens are transmitted via **HttpOnly secure cookies**.
- **Rotation Strategy:** Refresh token rotation is implemented to prevent replay attacks.

### Google OAuth
- Implemented using NextAuth (`[...nextauth]`).
- NextAuth is used **ONLY for the OAuth handshake**. 
- Custom internal JWT system takes over for session management post-handshake.
- Google account linkage is handled via the `Account` model.
- A custom refresh token and access token are issued after a successful OAuth handshake.

### Logout System
- Deletes the active refresh token from the database.
- Clears the `access_token` HttpOnly cookie.
- Clears the `refresh_token` HttpOnly cookie.

### Refresh Flow
- Dedicated `/api/auth/refresh` endpoint implemented.
- Refresh token from the cookie is validated against the database.
- Expiry is strictly checked server-side.
- **Rotation implemented:** The old refresh token is deleted, and a new one is issued upon successful refresh.

---

## 2️⃣ AUTH ARCHITECTURE LAYERING

The backend strictly follows a layered architectural pattern ensuring clean separation of business logic and transport layers.

### Routes (App Router Layer)
- `/api/auth/register`
- `/api/auth/login`
- `/api/auth/refresh`
- `/api/auth/logout`
- `/api/auth/[...nextauth]`

### Modules Layer (`src/modules/auth/`)
- `auth.controller.ts` → Handles the HTTP layer (request parsing, response formatting).
- `auth.service.ts` → Encapsulates core business logic and orchestration.
- `auth.repository.ts` → Manages all Prisma database access and queries.
- `auth.types.ts` → Contains TypeScript definitions for the auth domain.
- `auth.validator.ts` → Handles input validation schemes.

### Lib Layer (`src/lib/`)
- `lib/auth/jwt.ts` → Manages token signing and verification logic.
- `lib/auth/cookies.ts` → Common utility functions for setting/clearing HttpOnly cookies.

**Architecture Flow:** Controller → Service → Repository

---

## 3️⃣ TOKEN STRATEGY

### Access Token
- **Format:** JWT
- **Expiry:** 15 minutes
- **Storage:** HttpOnly cookie
- **Usage:** Used by middleware for secure route protection and API authorization.

### Refresh Token
- **Format:** Randomly generated 64-byte hex string
- **Expiry:** 7 days
- **Storage:** Database (for validation) and HttpOnly cookie (for client transport).
- **Rotation:** Rotated permanently upon use.
- **Sliding Expiration Strategy:** A new refresh token (with a renewed 7-day expiry) is issued every time a valid refresh token is used to generate a new access token, keeping active users logged in while expiring inactive sessions.

---

## 4️⃣ DATABASE STRUCTURE (AUTH-RELATED)

The authentication system utilizes the following Prisma models:
- **`User`**: Core identity model storing basic details (email, hashed password, role, etc.).
- **`Account`**: Handles external provider linkage (specifically Google OAuth logic) mapping to a user.
- **`RefreshToken`**: Stores actively valid refresh tokens, tracking expiry, and tying them securely to a `User`.

---

## 5️⃣ CURRENT FRONTEND INTEGRATION

- **Register Page:** Connected to API and fully functional.
- **Login Page:** Connected to API and fully functional.
- **Cookie Management:** Cookies are set automaticaw    lly by the backend via HTTP headers.
- **Redirection:** Successful authentication triggers automatic redirection to the `/dashboard`.
- **Middleware:** Next.js middleware enforces strict protection on private routes by validating the access token.

---

## 6️⃣ SECURITY DECISIONS

- **Password Hashing:** `bcrypt` with 10 salt rounds.
- **HttpOnly Cookies:** Prevents XSS attacks from accessing the tokens.
- **Refresh Token DB Storage:** Allows for immediate remote invalidation of sessions.
- **Token Rotation:** Ensures stolen refresh tokens cannot be continuously reused.
- **Access Token Short Expiry:** Limits the window of vulnerability (15 mins) if an access token is intercepted.
- **No Password Exposure:** API responses explicitly omit password hashes.
- **Separation of Concerns:** Clean boundary between business logic and the HTTP transport layer minimizes attack surfaces.

---

## 7️⃣ CURRENT STATUS SUMMARY

The Authentication system is **production-grade and fully functional**. 
Both OAuth and Credentials flows have been seamlessly unified under a single, robust custom JWT session model. A clean, modular, and layered architecture (App Router -> Controller -> Service -> Repository) is now firmly established.

---

## 8️⃣ NEXT PRIORITIES

Logical next steps for backend enhancement:
- [ ] **Global Error Handling:** Implement a unified error catching mechanism across all API routes.
- [ ] **Zod Validation Integration:** Enforce strong typing and validation at the controller boundary.
- [ ] **Role-Based Middleware:** Introduce access control layers for Admin/Student roles.
- [ ] **Rate Limiting:** Protect auth endpoints from brute forcing.
- [ ] **Session Monitoring:** Dashboard capabilities for users to view active sessions.
- [ ] **Device Tracking:** Bind refresh tokens to device/IP metadata.
- [ ] **Audit Logging:** Maintain logs for critical auth actions (login, logout, password resets).
