import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class MainPage extends BasePage {
  //Define locators
  readonly logo: Locator;

  //Create constructor and initialize locators
  constructor(page: Page) {
    super(page);
    this.logo = page.locator('.app_logo');
  }
}
