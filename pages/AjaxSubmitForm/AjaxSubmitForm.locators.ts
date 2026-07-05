import {Page , Locator} from '@playwright/test';

export class AjaxSubmitFormLocators {
    readonly page: Page;

    readonly nameInput: Locator;
    readonly messageInput: Locator;
    readonly submitButton: Locator;
    readonly submitcontrol: Locator;


    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('#title');
        this.messageInput = page.locator('#description');
        this.submitButton = page.locator('#btn-submit');
        this.submitcontrol = page.locator('#submit-control');

    }
}