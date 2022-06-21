import { Locator, Page } from '@playwright/test';
import testData from '../testData';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToHomePage() {
    this.page.goto(testData.homePageUrl);
  }
}
