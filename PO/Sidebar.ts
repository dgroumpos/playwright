import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class Sidebar extends BasePage {
  //Define locators
  readonly burgerMenu: Locator;
  readonly logoutBtn: Locator;

  //Create constructor and initialize locators
  constructor(page: Page) {
    super(page);
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutBtn = page.locator('#logout_sidebar_link');
  }
}
