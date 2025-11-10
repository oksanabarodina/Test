# Test

A Cypress testing project with example tests.

## Setup

Install dependencies:
```bash
npm install
```

## Running Tests

Open Cypress Test Runner:
```bash
npm run cypress:open
```

Run tests in headless mode:
```bash
npm run cypress:run
```

Or simply:
```bash
npm test
```

## Test Structure

- `cypress/e2e/` - Test files
- `cypress/support/` - Support files and custom commands
- `cypress.config.js` - Cypress configuration

## Example Test

The project includes an example test that visits example.com and verifies the page content.