import type { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="USERNAME"]');
    this.passwordInput = page.locator('input[name="PASSWORD"]');
    this.loginButton = page.locator('input[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://leaftaps.com/opentaps/control/login');
  }

  async fillCredentials(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.loginButton.click();
  }
}
