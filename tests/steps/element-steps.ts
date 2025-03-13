import { expect, Locator, test } from '@playwright/test';

export class ElementSteps {
  async expectElementHasText(element: Locator, text: string | Array<string>, innerText = false, timeout = 10_000) {
    await test.step(`Check if ${element} has text ${text}`, async () => {
      await expect(element).toHaveText(text, { useInnerText: innerText, timeout: timeout });
    });
  }
}
