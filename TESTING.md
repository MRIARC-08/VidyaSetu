\# Testing

This project uses Vitest for focused unit tests.

\## Run all tests

```bash

pnpm test

```

\## Run tests in watch mode

```bash

pnpm test:watch

```

\## Auth flow coverage

The auth service tests cover:

\- register success

\- duplicate register conflict

\- login success

\- invalid email login

\- invalid password login

\- login user without password

\- valid refresh-token rotation

\- missing refresh token

\- expired refresh token

\- refresh token with missing user

The tests use small mocks for the auth repository, JWT service, and bcrypt so they can run without a live database.
