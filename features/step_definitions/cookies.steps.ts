import { When } from "@cucumber/cucumber";
import { CookiesPage } from "../../tests/pages/media-expert/cookies-page";

When("I accept cookies", async function () {
  const cookiesPage = new CookiesPage(this.page);
  await cookiesPage.accept.click();
});
