
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#username');       
    this.passwordField = page.locator('#password');       
    this.submitButton = page.locator('#submit-login');    
  }

async goto() {
  // With baseURL set, relative paths work
  await this.page.goto('/login');
}



  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
    }

    async assertSecurePage() {
      await expect(this.page).toHaveURL('https://practice.expandtesting.com/secure');
    }
    
}
