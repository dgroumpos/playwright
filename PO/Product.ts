import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ProductPage extends BasePage {
  //Define locators
  readonly addToCartBtn: Locator;
  readonly removeCartBtn: Locator;

  //Create constructor and initialize locators
  constructor(page: Page) {
    super(page);
    this.addToCartBtn = page.locator('[id^="add-to-cart"]');
    this.removeCartBtn = page.locator('[id^="remove"]');
  }

  async isHeaderDisplayed(headerText: string) {
    return this.page.locator(
      `.inventory_details_name.large_size(${headerText})`
    ).isVisible;
  }
}
