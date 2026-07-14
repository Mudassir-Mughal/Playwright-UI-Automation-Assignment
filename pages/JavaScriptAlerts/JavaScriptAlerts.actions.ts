import { Page } from "@playwright/test";
import { JavaScriptAlertsLocators } from "./javaScriptAlerts.locators";

export class JavaScriptAlertsActions {
  private readonly page: Page;
  private readonly locators: JavaScriptAlertsLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new JavaScriptAlertsLocators(page);
  }

  async handleSimpleAlert() {
    await this.locators.jsAlertButton.waitFor();

    this.page.once("dialog", async dialog => {
      await dialog.accept();
    });

    await this.locators.jsAlertButton.click();
  }

  async handleConfirmOk() {
    await this.locators.jsConfirmButton.waitFor();

    this.page.once("dialog", async dialog => {
      await dialog.accept();
    });

    await this.locators.jsConfirmButton.click();
  }

  async handlePrompt(inputText: string) {
    await this.locators.jsPromptButton.waitFor();

    this.page.once("dialog", async dialog => {
      await dialog.accept(inputText);
    });

    await this.locators.jsPromptButton.click();
  }
}