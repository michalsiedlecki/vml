import { test as baseTest } from "@playwright/test";
import { ForgotPasswordPage } from "../../tests/pages/media-expert/forgot-password-page";
import { CookiesPage } from "../../tests/pages/media-expert/cookies-page";
import { GmailPage } from "../../tests/pages/gmail/gmail-page";

export const test = baseTest.extend<{
  pages: {
    cookies: CookiesPage;
    gmail: GmailPage;
    forgotPassword: ForgotPasswordPage;
  };
}>({
  pages: async ({ page }, use) => {
    const cookies = new CookiesPage(page);
    const gmail = new GmailPage(page);
    const forgotPassword = new ForgotPasswordPage(page);

    await Promise.all([
      use({
        cookies,
        gmail,
        forgotPassword: forgotPassword,
      }),
    ]);
  },
});

export { expect } from "@playwright/test";
