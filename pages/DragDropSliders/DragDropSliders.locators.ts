import { Page, Locator } from '@playwright/test';

export class SliderLocators {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getSlider(index: number): Locator {
        return this.page.locator(`#slider${index} input[type="range"]`);
    }

    getOutput(index: number): Locator {

        return this.page.locator(`#slider${index} output`);

    }

}