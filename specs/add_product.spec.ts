import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';
import { MainPage } from '../PO/MainPage';
import { ProductPage } from '../PO/Product';
import { Sidebar } from '../PO/Sidebar';

let page: Page;
let loginPage: LoginPage;
let mainPage: MainPage;
let sidebar: Sidebar;
let productPage: ProductPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  mainPage = new MainPage(page);
  sidebar = new Sidebar(page);
  productPage = new ProductPage(page);
});

test('Add a product', async ({}, testInfo) => {
  await test.step('Log in with standard user', async () => {
    await loginPage.goToHomePage();
    await loginPage.login('standardUser');
    await expect.soft(mainPage.logo).toBeVisible();
    const screenshot = await page.screenshot();
    await testInfo.attach('Add a product screenshot', {
      contentType: 'image/png',
      body: screenshot,
    });
  });
  await test.step('Open Sauce Labs Bike Light product', async () => {
    await mainPage.openProductByName('Sauce Labs Bike Light');
    await expect.soft(productPage.isHeaderDisplayed('Sauce Labs Bike Light'))
      .toBeTruthy;
    const screenshot = await page.screenshot();
    await testInfo.attach('Open Sauce Labs Bike Light product', {
      contentType: 'image/png',
      body: screenshot,
    });
  });
  await test.step('Add product to cart', async () => {
    await productPage.addToCartBtn.click();
    await expect.soft(productPage.removeCartBtn).toBeVisible();
    const screenshot = await page.screenshot();
    await testInfo.attach('Add product to cart screenshot', {
      contentType: 'image/png',
      body: screenshot,
    });
  });
  await test.step('Go to cart', async () => {
    await mainPage.cartIcon.click();
    await expect.soft(page.locator('span:has-text("YOUR CART")')).toBeVisible();
    const screenshot = await page.screenshot();
    await testInfo.attach('Go to cart screenshot', {
      contentType: 'image/png',
      body: screenshot,
    });
  });
});
