import { Page, Locator } from '@playwright/test';

export class HomePageLocators {
  readonly page: Page;

  readonly ajaxSubmitFormLink: Locator;
  readonly bootstraplistbox: Locator;
  readonly checkboxdemo: Locator;
  readonly dragdropslides: Locator;
  readonly javascriptalerts: Locator;
  readonly jquerydropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    this.ajaxSubmitFormLink = page.locator("a:has-text('Ajax Form Submit')");
    this.bootstraplistbox = page.locator('a:has-text("Bootstrap List Box")');
    this.checkboxdemo = page.locator('a:has-text("Checkbox Demo")');
    this.dragdropslides = page.locator('a:has-text("Drag & Drop Sliders")');
    this.javascriptalerts = page.locator('a:has-text("Javascript Alerts")');
    this.jquerydropdown = page.locator('a:has-text("JQuery Select Dropdown")');
  }
}