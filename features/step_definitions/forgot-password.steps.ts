import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ForgotPasswordPage } from "../../tests/pages/media-expert/forgot-password-page";

Given("I navigate to the forgot password page", async function () {
  const forgotPasswordPage = new ForgotPasswordPage(this.page);
  await this.page.goto(forgotPasswordPage.url);
});

When("I fill email", async function () {
  const forgotPasswordPage = new ForgotPasswordPage(this.page);
  await forgotPasswordPage.email.pressSequentially(forgotPasswordPage.emailAddress.gmail);
});

When("I click the reset password link", async function () {
  const forgotPasswordPage = new ForgotPasswordPage(this.page);
  await forgotPasswordPage.resetPassword.click();
});

Then("I should see the message", async function () {
  const forgotPasswordPage = new ForgotPasswordPage(this.page);
  await expect(forgotPasswordPage.messageTitle).toHaveText(forgotPasswordPage.messageTitleText);
});
