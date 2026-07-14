import { Page, expect } from '@playwright/test';
import { CheckboxDemoLocators } from './CheckboxDemo.locators';

export class CheckboxActions {
  private readonly page: Page;
  private readonly locators: CheckboxDemoLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new CheckboxDemoLocators(page);
  }

  // Single checkbox
  async clickSingleCheckbox() {
    await this.locators.singleCheckbox.check();
  }

  async verifySingleChecked() {
    await expect(this.locators.singleCheckbox).toBeChecked();
  }

  async verifyDisabledCheckboxes() {
  await expect(this.locators.option3Checkbox).toBeDisabled();
  await expect(this.locators.option4Checkbox).toBeDisabled();
}


  // Multiple checkboxes
  async selectMultiple() {
    await this.locators.multioption1.check();
    await this.locators.multioption2.check();
    await this.locators.multioption3.check();
    await this.locators.multioption4.check();
  }

  async verifyMultipleChecked() {
    await expect(this.locators.multioption1).toBeChecked();
    await expect(this.locators.multioption2).toBeChecked();
    await expect(this.locators.multioption3).toBeChecked();
    await expect(this.locators.multioption4).toBeChecked();
  }

  // Check All button
  async clickCheckAll() {
    await this.locators.checkAllButton.click();
  }

}