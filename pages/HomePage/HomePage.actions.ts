import { Page, expect } from '@playwright/test';
import { HomePageLocators } from './HomePage.locators';

export class HomePageActions {
    readonly page: Page;
    readonly locators: HomePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new HomePageLocators(page);
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.lambdatest.com/selenium-playground', {
            waitUntil: 'domcontentloaded',
        });

        await expect(this.page).toHaveURL(/selenium-playground/);
    }

    async clickAjaxSubmitFormLink() {
        await this.locators.ajaxSubmitFormLink.click();
        await expect(this.page).toHaveURL(/ajax-form-submit-demo/);
    }

    async clickBootstrapListBoxLink() {
        await this.locators.bootstraplistbox.click();
        await expect(this.page).toHaveURL(/bootstrap-dual-list-box-demo/);
    }

    async clickCheckboxDemoLink() {
        await this.locators.checkboxdemo.click();
        await expect(this.page).toHaveURL(/checkbox-demo/);
    }

    async clickDragDropSlidesLink() {
        await this.locators.dragdropslides.click();
        await expect(this.page).toHaveURL(/drag-drop-range-sliders-demo/);
    }

    async clickJavascriptAlertsLink() {
        await this.locators.javascriptalerts.click();
        await expect(this.page).toHaveURL(/javascript-alert-box-demo/);
    }

    async clickJQueryDropdownLink() {
        await this.locators.jquerydropdown.click();
        await expect(this.page).toHaveURL(/jquery-dropdown-search-demo/);
    }
}