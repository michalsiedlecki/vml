import { Page } from "@playwright/test";

export class ForgotPasswordPage {
  constructor(public readonly page: Page) {}

  readonly url = "https://www.mediaexpert.pl/forgot-password";
  readonly email = this.page.getByLabel("Wpisz adres e-mail");
  readonly resetPassword = this.page.locator('.email-container [href="/forgot-password"]');
  readonly messageTitle = this.page.locator(".title.is-medium");
  readonly messageTitleText = "Nie martw się, każdy czasem o czymś zapomina";
  readonly emailAddress = {
    gmail: "lostrowski705@gmail.com",
    mailSlurp: "54579627-3ea3-449a-874f-a55f62f9f8e5@mailslurp.biz",
  };
}
