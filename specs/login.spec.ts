import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';
import { MainPage } from '../PO/MainPage';
import { Sidebar } from '../PO/Sidebar';

test.describe.serial('Login with users', () => {
  let page: Page;
  let loginPage: LoginPage;
  let mainPage: MainPage;
  let sidebar: Sidebar;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    mainPage = new MainPage(page);
    sidebar = new Sidebar(page);
  });

  test('Log in with standard user', async () => {
    await loginPage.goToHomePage();
    await loginPage.login('standardUser');
    await expect(mainPage.logo).toBeVisible();
  });
  test('Click on the sidebar button', async () => {
    await sidebar.burgerMenu.click();
  });
  test('Logout with standard user', async () => {
    await sidebar.logoutBtn.click();
    await expect(loginPage.loginLogo).toBeVisible();
  });
});
