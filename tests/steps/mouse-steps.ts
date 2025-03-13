import { Locator, test } from "@playwright/test";

export class MouseSteps {
  async clickOnElement(element: Locator, force = false, timeout = 10_000) {
    await test.step(`Click 1 time on ${element} element`, async () => {
      await element.click({ force: force, noWaitAfter: force, timeout: timeout });
    });
  }
}
