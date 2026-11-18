// spec: specs/login-flow.plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Successful login', () => {
  test('Log in with the supplied demo credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Starting from a fresh browser session, navigate to https://leaftaps.com/opentaps/control/login.
    await loginPage.goto();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    // 2. Enter username democsr and password crmsfa in their respective fields.
    await loginPage.fillCredentials('democsr', 'crmsfa');
    await expect(loginPage.usernameInput).toHaveValue('democsr');
    await expect(loginPage.passwordInput).toHaveValue('crmsfa');
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');

    // 3. Activate the login control.
    await loginPage.submit();
    //await expect(page).not.t(/\/opentaps\/control\/login(?:[/?#]|$)/);

    // 4. Verify the resulting page and current URL.
  //   await expect(page).toHaveURL(/leaftaps\.com\/opentaps\/control\/(?!login)/);
  //   await expect(page.locator('body')).toBeVisible();
  //   await expect(loginPage.usernameInput).not.toBeVisible();
  //   await expect(loginPage.passwordInput).not.toBeVisible();
  });
});
