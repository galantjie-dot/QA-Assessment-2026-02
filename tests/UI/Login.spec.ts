import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config();

test('User can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(
 process.env.APP_USERNAME as string,
 process.env.APP_PASSWORD as string
);

 await loginPage.assertSecurePage();

});
