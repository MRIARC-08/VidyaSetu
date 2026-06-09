# Authentication

VidyaSetu uses JWT-based authentication together with refresh tokens and NextAuth integration.

## Authentication Methods

Supported methods:

* Email and Password
* Google OAuth
* JWT Access Tokens
* Refresh Tokens

## Authentication Flow

```txt
User Login
    ↓
Auth Controller
    ↓
Auth Service
    ↓
JWT Access Token
    ↓
Refresh Token
    ↓
HTTP Cookies
```

## Login Flow

1. User submits credentials.
2. Credentials are validated.
3. JWT access token is generated.
4. Refresh token is generated.
5. Tokens are stored in cookies.
6. User gains access to protected routes.

## Refresh Flow

```txt
Expired Access Token
        ↓
Refresh Endpoint
        ↓
Validate Refresh Token
        ↓
Generate New Access Token
        ↓
Update Cookies
```

## Google OAuth

Google authentication is handled through NextAuth.

Flow:

```txt
Google Login
      ↓
NextAuth
      ↓
Account Mapping
      ↓
JWT Session
```

## Authentication Files

```txt
src/lib/auth/cookies.ts
src/lib/auth/jwt.ts
src/lib/auth/password.ts
src/lib/auth/session.ts
src/modules/auth/
```

## Protected Routes

Protected resources use:

* Auth middleware
* JWT validation
* Cookie verification

## Security Practices

* Password hashing
* Refresh token rotation
* Cookie-based session storage
* JWT verification
* Role-based authorization

## User Roles

```txt
STUDENT
ADMIN
```
