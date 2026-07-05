import {Page, Locator} from '@playwright/test';

export class CheckboxDemoLocators {
    readonly page: Page;
    readonly singleCheckbox: Locator;

    readonly option1Checkbox: Locator;
    readonly option2Checkbox: Locator;
    readonly option3Checkbox: Locator;
    readonly option4Checkbox: Locator;

    readonly multioption1 :Locator;
    readonly multioption2 :Locator;
    readonly multioption3 :Locator;
    readonly multioption4 :Locator;

    readonly checkAllButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.singleCheckbox = page.locator('label:has-text("Click on check box") input');

        this.option1Checkbox = page.locator('text=Option 1 ').first();
        this.option2Checkbox = page.locator('text=Option 2 ').first();
        this.option3Checkbox = page.locator('//label[contains(.,"Option 3")]//input[@disabled]');
        this.option4Checkbox = page.locator('//label[contains(.,"Option 4")]//input[@disabled]');

        this.multioption1 = page.locator('input[name="option1"]');
        this.multioption2 = page.locator('input[name="option2"]');
        this.multioption3 = page.locator('input[name="option3"]');
        this.multioption4 = page.locator('input[name="option4"]');  

        this.checkAllButton = page.locator('button:has-text("Check All")');

    }}