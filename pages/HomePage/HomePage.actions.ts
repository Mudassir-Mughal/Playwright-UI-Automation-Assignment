import { expect, Page } from '@playwright/test';
import { HomePageLocators } from './HomePage.locators';

export class HomePageActions {
    readonly page: Page;
    readonly locators: HomePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new HomePageLocators(page);
    }

    async navigateToHomePage() {
        // Go to the shared landing page first so every navigation starts from the same place.
        await this.page.goto('https://www.lambdatest.com/selenium-playground', {
            waitUntil: "domcontentloaded", // 10 seconds timeout
        });
    
    }

    async clickAjaxSubmitFormLink() {
        await this.locators.ajaxSubmitFormLink.click();
        await this.page.waitForURL(/ajax-form-submit-demo/);
        
    }

    async clickBootstrapListBoxLink() {
        await this.locators.bootstraplistbox.click();
    }

    async clickCheckboxDemoLink() {
    await this.locators.checkboxdemo.click();
    await this.page.waitForURL(/checkbox-demo/);
    await this.page.waitForLoadState('domcontentloaded');
}

   async clickDragDropSlidesLink() {
    await this.locators.dragdropslides.click();
    await this.page.waitForURL(/drag-drop-range-sliders-demo/);
}  

    async clickJavascriptAlertsLink() {
    await this.locators.javascriptalerts.waitFor({ state: 'visible' });

    await Promise.all([
        this.page.waitForLoadState('domcontentloaded'),
        this.locators.javascriptalerts.click()
    ]);

    await this.page.waitForTimeout(1000); // small stabilization buffer
}

    async clickJQueryDropdownLink() {
        await this.locators.jquerydropdown.click();
    }
}
