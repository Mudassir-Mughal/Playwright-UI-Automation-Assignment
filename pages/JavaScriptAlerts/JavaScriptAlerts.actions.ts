import { Page, expect } from "@playwright/test";
import { JavaScriptAlertsLocators } from "./javaScriptAlerts.locators";

export class JavaScriptAlertsActions {
  readonly page: Page;
  readonly locators: JavaScriptAlertsLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new JavaScriptAlertsLocators(page);
  }

  // ---------------- SIMPLE ALERT ----------------
  async handleSimpleAlert() {
    await this.locators.jsAlertButton.waitFor({ state: "visible" });

    const dialogHandler = (dialog: any) => dialog.accept();
    this.page.once("dialog", dialogHandler);

    await this.locators.jsAlertButton.click();
  }

  // ---------------- CONFIRM OK ----------------
  async handleConfirmOk() {
    await this.locators.jsConfirmButton.waitFor({ state: "visible" });

    this.page.once("dialog", dialog => dialog.accept());

    await this.locators.jsConfirmButton.click();

    await this.locators.confirmResult.waitFor({ state: "attached" });
  }

  // ---------------- CONFIRM CANCEL ----------------
  async handleConfirmCancel() {
    await this.locators.jsConfirmButton.waitFor({ state: "visible" });

    this.page.once("dialog", dialog => dialog.dismiss());

    await this.locators.jsConfirmButton.click();

    await this.locators.confirmResult.waitFor({ state: "attached" });
  }

  // ---------------- PROMPT ----------------
  async handlePrompt(inputText: string) {
    await this.locators.jsPromptButton.waitFor({ state: "visible" });

    this.page.once("dialog", dialog => dialog.accept(inputText));

    await this.locators.jsPromptButton.click();

    await this.locators.promptResult.waitFor({ state: "attached" });
  }

  // ---------------- VERIFY CONFIRM ----------------
  async verifyConfirmResult(expectedText: string) {
    await expect.poll(async () => {
      return await this.locators.confirmResult.textContent();
    }, {
      timeout: 10000
    }).toContain(expectedText);
  }

  // ---------------- VERIFY PROMPT ----------------
  async verifyPromptResult(expectedText: string) {
    await expect.poll(async () => {
      return await this.locators.promptResult.textContent();
    }, {
      timeout: 10000
    }).toContain(expectedText);
  }
}