import { test, expect } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';
import { MainPage } from '../PO/MainPage';
import { Sidebar } from '../PO/Sidebar';

test.describe('Login with users', () => {
  let loginPage: LoginPage;
  let mainPage: MainPage;
  let sidebar: Sidebar;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    mainPage = new MainPage(page);
    await loginPage.goToHomePage();
  });

  test('Log in with standard user', async ({ page }) => {
    await loginPage.login('standardUser');
    await expect(mainPage.logo).toBeVisible();
  });
  test('Click on the sidebar button', async ({ page }) => {
    await sidebar.burgerMenu.click();
  });
  test('Logout with standard user', async ({ page }) => {});
});
