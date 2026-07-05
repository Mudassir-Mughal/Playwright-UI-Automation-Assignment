import { Page, Locator } from "@playwright/test";

export class BootstrapDualListDemoLocators {
  // LEFT SIDE LIST
  readonly leftPanel: Locator;
  readonly leftItems: Locator;
  readonly leftSearchBox: Locator;
  readonly moveRightBtn: Locator;

  // RIGHT SIDE LIST
  readonly rightPanel: Locator;
  readonly rightItems: Locator;
  readonly rightSearchBox: Locator;
  readonly moveLeftBtn: Locator;

  constructor(page: Page) {
    // LEFT container
    this.leftPanel = page.locator("div.dual-list.list-left");

    this.leftItems = page.locator(
      "div.dual-list.list-left ul.sp_list_group li.list-group-item"
    );

    this.leftSearchBox = page.locator(
      "div.dual-list.list-left input[name='SearchDualList']"
    );

    // RIGHT container
    this.rightPanel = page.locator("div.dual-list.list-right");

    this.rightItems = page.locator(
      "div.dual-list.list-right ul.sp_list_group li.list-group-item"
    );

    this.rightSearchBox = page.locator(
      "div.dual-list.list-right input[name='SearchDualList']"
    );

    // BUTTONS (IMPORTANT FIX based on YOUR HTML)
    this.moveRightBtn = page.locator("button.move-right");

    this.moveLeftBtn = page.locator("button.move-left");
  }
}