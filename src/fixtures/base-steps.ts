import { test as baseTest } from "@playwright/test";
import { UrlSteps } from "../../tests/steps/url-steps";
import { MouseSteps } from "../../tests/steps/mouse-steps";
import { FormSteps } from "../../tests/steps/form-steps";
import { ElementSteps } from "../../tests/steps/element-steps";

export const test = baseTest.extend<{
  steps: {
    element: ElementSteps;
    form: FormSteps;
    mouse: MouseSteps;
    url: UrlSteps;
  };
}>({
  steps: async ({ page }, use) => {
    const element = new ElementSteps();
    const form = new FormSteps();
    const mouse = new MouseSteps();
    const url = new UrlSteps(page);

    await Promise.all([
      use({
        element,
        form,
        mouse,
        url,
      }),
    ]);
  },
});

export { expect } from "@playwright/test";
