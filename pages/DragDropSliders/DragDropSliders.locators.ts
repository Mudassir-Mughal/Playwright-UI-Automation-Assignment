import { Page, Locator } from '@playwright/test';

export class SliderLocators {
    readonly page: Page;

    readonly slider1: Locator;
    readonly slider5: Locator;
    readonly slider8: Locator;

    readonly output1: Locator;
    readonly output5: Locator;
    readonly output8: Locator;

    constructor(page: Page) {
        this.page = page;

        this.slider1 = page.locator('#slider1 input[type="range"]');
        this.slider5 = page.locator('#slider5 input[type="range"]');
        this.slider8 = page.locator('#slider8 input[type="range"]');

        this.output1 = page.locator('#slider1 output');
        this.output5 = page.locator('#slider5 output');
        this.output8 = page.locator('#slider8 output');
    }
}