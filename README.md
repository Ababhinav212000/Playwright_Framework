# Playwright Framework

A learning project with UI and API test automation using Playwright Test. The API example targets the Automation Exercise demo application; the UI example targets the Playwright documentation site.

## Prerequisites

- Node.js (LTS)
- npm

## Setup

```bash
npm install
npx playwright install
```

## Run tests

Run all API and UI tests:

```bash
npm test
```

Run only UI or API tests:

```bash
npm run test:ui
npm run test:api
```

Run one specific API spec file:

```bash
npx playwright test tests/api/products.spec.js
npx playwright test tests/api/brands.spec.js
```

Run one test by its title, optionally scoped to a spec file:

```bash
npx playwright test tests/api/products.spec.js --grep "returns a non-empty product list"
```

Run UI tests on Chromium only:

```bash
npx playwright test --project=chromium
# Equivalent npm script:
npm run test:chromium
```

## Test organization

- `tests/ui/` contains browser-based scenarios and runs against the configured browser projects.
- `tests/api/` contains HTTP scenarios and runs once in the dedicated `api` project, rather than once per browser.

The API base URL defaults to `https://automationexercise.com` and can be overridden with the `API_BASE_URL` environment variable. API specs keep endpoint paths separate and use Playwright's `request` fixture.
