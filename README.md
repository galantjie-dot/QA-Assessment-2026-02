
# QA Assessment 2026 – Playwright Automation

## 📦 Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/galantjie-dot/QA-Assessment-2026-02.git
   cd QA-Assessment-2026-02

   //Install dependencies 
   npm install

   configure environment variables
   create a .env file

   //how to run locally
   npx playwright test

   //run UI test only
   npx playwright test tests/ui

    //run api test only
   npx playwright test tests/api


//Framework / Design Explanation
Playwright is used for both UI and API testing.

Test organization:

tests/ui/ //Functional tests

tests/api/ // API request tests 

Configuration:

Centralized in playwright.config.ts.

Uses .env for environment‑specific values (e.g., BASE_URL).


CI/CD:

GitHub Actions workflow runs tests on every push and pull_request.


//shift left observations:
API test run with dependencies and after every commit automated tests are run reducing issues


// test strategy

Functional test: validates expected behavior and Quality
Negative tests: ensures proper error handling with invalid credentials

non function tests: basically it checks the response time for any request

My framework demonstrates the shift left QA approach using playwright by running both ui and api tests
as it integrates into the ci/cd pipeliens and provide earlier feedback to developers and stakeholders
