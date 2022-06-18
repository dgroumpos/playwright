import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';
import { MainPage } from '../PO/MainPage';
import { Sidebar } from '../PO/Sidebar';

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

test('Login with user', async ({}, testInfo) => {
  await test.step('Log in with standard user', async () => {
    await loginPage.goToHomePage();
    await loginPage.login('standardUser');
    await expect.soft(mainPage.logo).toBeVisible();
    await loginPage.getScreenshot(page, testInfo, 'Log in with standard user');
  });
  await test.step('Click on the sidebar button', async () => {
    await sidebar.burgerMenu.click();
    await sidebar.getScreenshot(page, testInfo, 'Click on the sidebar button');
  });
  await test.step('Logout with standard user', async () => {
    await sidebar.logoutBtn.click();
    await expect(loginPage.loginLogo).toBeVisible();
    await sidebar.getScreenshot(page, testInfo, 'Logout with standard user');
  });
});
