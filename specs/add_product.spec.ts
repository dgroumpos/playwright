import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../PO/LoginPage';
import { MainPage } from '../PO/MainPage';
import { ProductPage } from '../PO/Product';
import { Sidebar } from '../PO/Sidebar';
import { CartPage } from '../PO/CartPage';

let page: Page;
let loginPage: LoginPage;
let mainPage: MainPage;
let productPage: ProductPage;
let cartPage: CartPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  mainPage = new MainPage(page);
  productPage = new ProductPage(page);
  cartPage = new CartPage(page);
});

test('Add a product', async ({}, testInfo) => {
  await test.step('Log in with standard user', async () => {
    await loginPage.goToHomePage();
    await loginPage.login('standardUser');
    await expect.soft(mainPage.logo).toBeVisible();
    await loginPage.getScreenshot(page, testInfo, 'Log in with standard user');
  });
  await test.step('Open Sauce Labs Bike Light product', async () => {
    await mainPage.openProductByName('Sauce Labs Bike Light');
    await expect.soft(productPage.isHeaderDisplayed('Sauce Labs Bike Light'))
      .toBeTruthy;
    await mainPage.getScreenshot(
      page,
      testInfo,
      'Open Sauce Labs Bike Light product'
    );
  });
  await test.step('Add product to cart', async () => {
    await productPage.addToCartBtn.click();
    await expect.soft(productPage.removeCartBtn).toBeVisible();
    await productPage.getScreenshot(page, testInfo, 'Add product to cart');
  });
  await test.step('Go to cart', async () => {
    await mainPage.cartIcon.click();
    await expect.soft(cartPage.cartHeader).toBeVisible();
    await mainPage.getScreenshot(page, testInfo, 'Go to cart');
  });
});
