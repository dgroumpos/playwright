import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  //Define locators
  readonly cartHeader: Locator;

  //Create constructor and initialize locators
  constructor(page: Page) {
    super(page);
    this.cartHeader = page.locator('span:has-text("YOUR CART")');
  }
}
