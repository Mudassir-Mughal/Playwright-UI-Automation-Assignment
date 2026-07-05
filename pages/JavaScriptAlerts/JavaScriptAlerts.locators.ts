import { Page, Locator } from "@playwright/test";

export class JavaScriptAlertsLocators {
  readonly page: Page;

  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;

  readonly confirmResult: Locator;
  readonly promptResult: Locator;

  constructor(page: Page) {
    this.page = page;

    this.jsAlertButton = page
      .locator("p")
      .filter({ hasText: "JavaScript Alerts" })
      .locator("button");

    this.jsConfirmButton = page
      .locator("p")
      .filter({ hasText: "Confirm box:" })
      .locator("button");

    this.jsPromptButton = page
      .locator("p")
      .filter({ hasText: "Prompt box:" })
      .locator("button");

    this.confirmResult = page.locator("#confirm-demo");
    this.promptResult = page.locator("#prompt-demo");
  }
}