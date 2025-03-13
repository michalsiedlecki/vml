import { Page } from "@playwright/test";

export class GmailPage {
  readonly url = "https://www.gmail.com";
  readonly emailAddress = this.page.locator("#identifierId");
  readonly emailPassword = this.page.locator('[name="Passwd"]');
  readonly next = this.page.getByText("Next");
  readonly password = "TestVML22!";
  readonly resetPasswordMailTitle = this.page.getByText("Przesyłamy link do zmiany hasła konta Klienta").last();
  readonly resetPasswordLink = this.page.getByText("Kliknij aby zmienić hasło");

  constructor(public readonly page: Page) {}
}
