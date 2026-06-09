# Testing

VidyaSetu uses Vitest for automated testing.

## Running Tests

Run all tests:

```bash
pnpm test
```

Watch mode:

```bash
pnpm test:watch
```

## Testing Goals

* Validate business logic
* Verify authentication flows
* Verify analytics calculations
* Verify API route behavior
* Prevent regressions

## Types of Tests

### Unit Tests

Validate:

* Services
* Validators
* Utility functions

### Integration Tests

Validate:

* Module interactions
* Database workflows
* Authentication workflows

### API Testing

Validate:

* Request validation
* Response formatting
* Error handling

## Build Verification

Before opening a PR:

```bash
pnpm build
```

Expected result:

```txt
Build completed successfully
```

## Recommended Workflow

```txt
Write Code
    ↓
Run Tests
    ↓
Run Lint
    ↓
Run Build
    ↓
Create Pull Request
```
