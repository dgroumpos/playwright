import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class MainPage extends BasePage {
  //Define locators
  readonly logo: Locator;
  readonly cartIcon: Locator;

  //Create constructor and initialize locators
  constructor(page: Page) {
    super(page);
    this.logo = page.locator('.app_logo');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async openProductByName(productName: String) {
    await this.page
      .locator(`div.inventory_item_name:has-text("${productName}")`)
      .click();
  }
}
