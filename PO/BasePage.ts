import { Locator, Page, TestInfo } from '@playwright/test';
import testData from '../testData';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToHomePage() {
    this.page.goto(testData.homePageUrl);
  }

  async getScreenshot(page: Page, testInfo: TestInfo, stepTitle: string) {
    let screenshot = await page.screenshot();
    await testInfo.attach(stepTitle, {
      contentType: 'image/png',
      body: screenshot,
    });
  }
}
