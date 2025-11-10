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

The project includes an example test that visits GitHub and logs in with provided credentials.

## GitHub Actions

This project includes a GitHub Actions workflow that can be run manually.

### Setting up GitHub Secrets

To run the tests in GitHub Actions, you need to set up the following secret in your repository:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secret:
   - `USER_PASSWORD`: Your GitHub password or Personal Access Token

**Note:** The email is hardcoded in the test file and doesn't need to be set as a secret.

### Running the Workflow Manually

1. Go to the **Actions** tab in your GitHub repository
2. Select **Cypress Tests** workflow from the left sidebar
3. Click **Run workflow** button
4. Select the branch (usually `main`)
5. Click **Run workflow** to start the tests

The workflow will:
- Install dependencies
- Run Cypress tests
- Upload screenshots (on failure) and videos (always) as artifacts