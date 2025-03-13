import { Before, After } from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "playwright";

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
});

After(async function () {
  await browser.close();
});
