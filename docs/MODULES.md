# Modules

VidyaSetu organizes business logic into domain-specific modules under `src/modules`.

## Module Structure

Most modules follow:

```txt
module.controller.ts
module.service.ts
module.repository.ts
module.validator.ts
module.types.ts
index.ts
```

## Admin Module

Purpose:

* Question management
* NCERT seeding
* Administrative workflows

API Routes:

```txt
/api/admin/*
```

## AI Module

Purpose:

* Question generation
* Subjective answer evaluation

API Routes:

```txt
/api/ai/*
```

## Analytics Module

Purpose:

* Streak tracking
* Weak topic analysis
* Dashboard insights

API Routes:

```txt
/api/analytics/*
```

## Auth Module

Purpose:

* Registration
* Login
* OAuth
* Refresh tokens
* Session management

API Routes:

```txt
/api/auth/*
```

## NCERT Module

Purpose:

* Class browsing
* Subject retrieval
* Chapter management
* Topic management

API Routes:

```txt
/api/ncert/*
```

## Notes Module

Purpose:

* Notes upload
* Text extraction
* Note storage

API Routes:

```txt
/api/notes/*
```

## Quiz Module

Purpose:

* Quiz generation
* Quiz sessions
* Quiz submissions
* Quiz history

API Routes:

```txt
/api/quiz/*
```

## User Module

Purpose:

* User profile management
* User information retrieval

API Routes:

```txt
/api/user/*
```

## Adding New Modules

Recommended structure:

```txt
src/modules/example/
├── example.controller.ts
├── example.service.ts
├── example.repository.ts
├── example.validator.ts
├── example.types.ts
└── index.ts
```
