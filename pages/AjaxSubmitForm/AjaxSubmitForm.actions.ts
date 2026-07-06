import { Page,expect } from '@playwright/test';
import { AjaxSubmitFormLocators } from './AjaxSubmitForm.locators';

export class AjaxSubmitFormActions {
  readonly page: Page;
  readonly locators: AjaxSubmitFormLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new AjaxSubmitFormLocators(page);
  }

  async enterName(name: string): Promise<void> {
    await this.locators.nameInput.fill(name);
  }

  async enterMessage(message: string): Promise<void> {
    await this.locators.messageInput.fill(message);
  }

  async clickSubmitButton(): Promise<void> {
    await this.locators.submitButton.click();
  }

  async submitAjaxForm(name: string, message: string): Promise<void> {
    await this.enterName(name);
    await this.enterMessage(message);
    await this.clickSubmitButton();
  }

  async getSubmitControlText(): Promise<string> {
    const text = await this.locators.submitcontrol.textContent();
    return (text ?? '').trim();
  }


async waitForSuccessMessage(): Promise<void> {
    await expect(this.locators.submitcontrol)
        .toContainText('submit');
}

}
