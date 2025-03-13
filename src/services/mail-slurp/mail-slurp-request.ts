import MailSlurp from "mailslurp-client";
import { EmailClient } from "./mail-slurp-client";
import { test } from "@playwright/test";

export class EmailRequests {
  private emailClient: MailSlurp;

  constructor() {
    const clientDefinition = new EmailClient();
    this.emailClient = clientDefinition.getClient();
  }

  async getNewInbox() {
    return await this.emailClient.createInbox();
  }

  async deleteInbox(inboxId: string) {
    return await this.emailClient.deleteInbox(inboxId);
  }

  async verifyNumberOfEmails(inboxId: string, expectedNumberOfEmails: number) {
    const numberOfEmails = (await this.emailClient.getEmails(inboxId)).length;
    test
      .expect(numberOfEmails, `Expected number of emails is ${expectedNumberOfEmails}`)
      .toEqual(expectedNumberOfEmails);
  }

  async getLatestEmail(inboxId: string, isUnreadOnly = true) {
    return await this.emailClient.waitController.waitForLatestEmail({
      inboxId: inboxId,
      timeout: 60000,
      unreadOnly: isUnreadOnly,
    });
  }

  async getEmailQuery(inboxId: string, selector: string) {
    return await test.step("I get verification code from email", async () => {
      return (
        await this.emailClient.emailController.getEmailHTMLQuery({ emailId: inboxId, htmlSelector: selector })
      ).lines.join("");
    });
  }
}
