import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import testData from '../testData';

export class LoginPage extends BasePage {
  //Define locators
  readonly header: Locator;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  //Create constructor and initialize locators
  constructor(page: Page) {
    super(page);
    this.header = page.locator('.login_logo');
    this.userName = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
  }

  /**
   * All users are included as properties inside testData.ts.
   * To log in with any user, use the corresponding property as a parameter (in string form)
   *
   * @param userDescription : String
   */
  async login(userDescription: PropertyKey) {
    let nameOfUser: string = testData.users[userDescription].name;
    let passwordOfUser: string = testData.users[userDescription].password;
    await this.userName.type(nameOfUser);
    await this.password.type(passwordOfUser);
    await this.loginBtn.click();
  }
}
