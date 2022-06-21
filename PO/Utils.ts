import { Locator, Page, TestInfo } from '@playwright/test';
import { BasePage } from './basePage';

export class Utils extends BasePage {
  //Define locators

  //Create constructor and initialize locators
  constructor(page: Page) {
    super(page);
  }

  async getScreenshot(page: Page, testInfo: TestInfo, stepTitle: string) {
    let screenshot = await page.screenshot();
    await testInfo.attach(stepTitle, {
      contentType: 'image/png',
      body: screenshot,
    });
  }
}
