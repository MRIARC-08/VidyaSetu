# Deployment

VidyaSetu is designed for deployment using Next.js and PostgreSQL.

## Production Requirements

* Node.js
* PostgreSQL
* Environment Variables
* Prisma Client

## Environment Variables

Typical variables:

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Build Process

Install dependencies:

```bash
pnpm install
```

Generate Prisma client:

```bash
pnpm db:generate
```

Build application:

```bash
pnpm build
```

Start production server:

```bash
pnpm start
```

## Vercel Deployment

1. Connect repository.
2. Configure environment variables.
3. Configure database connection.
4. Deploy application.

## Database Deployment

Supported providers:

* PostgreSQL
* Neon
* Supabase
* Railway

## Migration Process

Run:

```bash
pnpm db:migrate
```

after schema updates.

## Production Checklist

* Environment variables configured
* Database connected
* Prisma client generated
* Build successful
* Authentication configured
* OAuth credentials configured
* Cloudinary configured
* Seed data loaded if required

## Monitoring

Recommended:

* Vercel Analytics
* Database monitoring
* Application logs
* Error tracking services
