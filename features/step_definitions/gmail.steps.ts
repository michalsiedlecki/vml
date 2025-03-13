import { Given, When, Then } from "@cucumber/cucumber";
import { GmailPage } from "../../tests/pages/gmail/gmail-page";
import { ForgotPasswordPage } from "../../tests/pages/media-expert/forgot-password-page";

Given("I navigate to gmail", async function () {
  const gmailPage = new GmailPage(this.page);
  await this.page.goto(gmailPage.url);
});

When("I enter my Gmail email", async function () {
  const forgotPasswordPage = new ForgotPasswordPage(this.page);
  const gmailPage = new GmailPage(this.page);
  await gmailPage.emailAddress.fill(forgotPasswordPage.emailAddress.gmail);
});

When("I click Next", async function () {
  const gmailPage = new GmailPage(this.page);
  await gmailPage.next.last().click();
});

When("I enter my Gmail password", async function () {
  const gmailPage = new GmailPage(this.page);
  await gmailPage.emailPassword.fill(gmailPage.password);
});

When("I open the email with subject change password", async function () {
  const gmailPage = new GmailPage(this.page);
  await gmailPage.resetPasswordMailTitle.last().click();
});

When("I click change password button in the email", async function () {
  const gmailPage = new GmailPage(this.page);
  await gmailPage.resetPasswordLink.last().click();
});

Then("I should be redirected to a URL containing {string}", async function (urlPart: string) {
  const newTab = await this.page.waitForEvent("popup");
  await newTab.waitForURL(urlPart);
});
