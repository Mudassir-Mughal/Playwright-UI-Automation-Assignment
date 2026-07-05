import { Page, expect } from "@playwright/test";
import { BootstrapDualListDemoLocators } from "./bootstrapListBox.locators";

export class bootstrapDualListDemoActions {
  readonly page: Page;
  readonly locators: BootstrapDualListDemoLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new BootstrapDualListDemoLocators(page);
  }

  // 🟢 Move one item from LEFT → RIGHT
  async moveOneItemRight() {
    await this.locators.leftItems.first().waitFor({ state: "visible" });

    await this.locators.leftItems.first().click();
    await this.locators.moveRightBtn.click();
  }

  // 🔵 Move one item from RIGHT → LEFT
  async moveOneItemLeft() {
    await this.locators.rightItems.first().waitFor({ state: "visible" });

    await this.locators.rightItems.first().click();
    await this.locators.moveLeftBtn.click();
  }

  // 🟢 Move all items LEFT → RIGHT
  async moveAllItemsRight() {
    await this.locators.moveRightBtn.waitFor({ state: "visible" });
    await this.locators.moveRightBtn.click();
  }

  // 🔵 Move all items RIGHT → LEFT
  async moveAllItemsLeft() {
    await this.locators.moveLeftBtn.waitFor({ state: "visible" });
    await this.locators.moveLeftBtn.click();
  }

  // 🔎 Search LEFT list
  async searchBoxFirst(value: string) {
    await this.locators.leftSearchBox.fill(value);
  }

  // 🔎 Search RIGHT list
  async searchBoxSecond(value: string) {
    await this.locators.rightSearchBox.fill(value);
  }

  // ✅ Verify item in RIGHT list
  async verifyItemInSecondList(text: string) {
    await expect(this.locators.rightItems).toContainText(text);
  }

  // ✅ Verify item in LEFT list
  async verifyItemInFirstList(text: string) {
    await expect(this.locators.leftItems).toContainText(text);
  }
}