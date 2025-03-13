import { Page } from "@playwright/test";

export class CookiesPage {
  readonly accept = this.page.locator("#onetrust-accept-btn-handler");
  constructor(public readonly page: Page) {}
}
