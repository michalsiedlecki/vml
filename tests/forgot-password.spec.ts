import { expect, test } from "../src/fixtures/base-fixtures";
import { EmailRequests } from "../src/services/mail-slurp/mail-slurp-request";

test.describe("Forgot password", () => {
  test.beforeEach(async ({ pages, steps }) => {
    await steps.url.openSubPage(pages.forgotPassword.url);
    await steps.mouse.clickOnElement(pages.cookies.accept);
  });

  test("Gmail", async ({ pages, steps }) => {
    await steps.form.fillTextFieldWithText(pages.forgotPassword.email, pages.forgotPassword.emailAddress.gmail);
    await expect(async () => {
      await steps.mouse.clickOnElement(pages.forgotPassword.resetPassword);
      await steps.element.expectElementHasText(
        pages.forgotPassword.messageTitle,
        pages.forgotPassword.messageTitleText
      );
    }).toPass();
    await steps.url.openSubPage(pages.gmail.url);
    await steps.form.fillTextFieldWithText(pages.gmail.emailAddress, pages.forgotPassword.emailAddress.gmail);
    await steps.mouse.clickOnElement(pages.gmail.next);
    await steps.form.fillTextFieldWithText(pages.gmail.emailPassword, pages.gmail.password);
    await steps.mouse.clickOnElement(pages.gmail.next.last());
    await steps.mouse.clickOnElement(pages.gmail.resetPasswordMailTitle);
    await steps.mouse.clickOnElement(pages.gmail.resetPasswordLink, true);
    await steps.url.waitForNewTabUrl(
      "https://www.mediaexpert.pl/reset/QktW4MlkR-V2adQnZeugrHbgC7-EdsVh_gCsE2zrJo0?utm_source=Mail-potwierdzenie&utm_medium=e-mail"
    );
  });

  test("MailSlurp", async ({ pages, steps }) => {
    const emailRequests = new EmailRequests();
    await steps.form.fillTextFieldWithText(pages.forgotPassword.email, pages.forgotPassword.emailAddress.mailSlurp);
    await expect(async () => {
      await steps.mouse.clickOnElement(pages.forgotPassword.resetPassword);
      await steps.element.expectElementHasText(
        pages.forgotPassword.messageTitle,
        pages.forgotPassword.messageTitleText
      );
    }).toPass();
    const email = await emailRequests.getLatestEmail("54579627-3ea3-449a-874f-a55f62f9f8e5", false);
    expect(email.from).toBe("sklep@mediaexpert.pl");
    expect(email.subject).toBe("Przesyłamy link do zmiany hasła konta Klienta");
  });
});
