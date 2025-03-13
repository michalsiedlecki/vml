import { Page, test } from "@playwright/test";

export class UrlSteps {
  constructor(public readonly page: Page) {}

  async openSubPage(url: string): Promise<void> {
    await test.step(`Go to ${url} subpage`, async () => {
      await this.page.goto(url, { timeout: 15_000 });
    });
  }

  async waitForNewTabUrl(url: string) {
    await test.step(`Check if new tab has ${url} url`, async () => {
      const newTab = await this.page.waitForEvent("popup");
      await newTab.waitForURL(url);
    });
  }
}
