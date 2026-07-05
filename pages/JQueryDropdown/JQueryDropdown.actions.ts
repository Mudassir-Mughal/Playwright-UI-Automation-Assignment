import { expect, Page } from '@playwright/test';
import { JQueryDropdownLocators } from './jQueryDropdown.locators';

export class JQueryDropdownActions {

    readonly page: Page;
    readonly locators: JQueryDropdownLocators;

    constructor(page: Page) {

        this.page = page;
        this.locators = new JQueryDropdownLocators(page);

    }

    async selectCountry(country: string): Promise<void> {

        await this.locators.countryDropdown.click();

        await this.locators.countrySearch.fill(country);

        await this.locators.countryOption(country).click();

        await expect(this.locators.countryDropdown).toContainText(country);

    }

    async selectStates(states: string[]): Promise<void> {

        await this.locators.stateDropdown.click();

        for (const state of states) {

            await this.locators.stateSearch.fill(state);

            await this.locators.stateOption(state).click();

        }

    }

    async selectEnabledCountry(country: string): Promise<void> {

        await this.locators.disabledDropdown.click();

        await this.locators.countryOption(country).click();

        await expect(this.locators.disabledDropdown)
            .toContainText(country);

    }

    async selectCategory(category: string): Promise<void> {

        await this.locators.categoryDropdown.selectOption({
            label: category
        });

        await expect(this.locators.categoryDropdown)
            .toHaveValue(await this.locators.categoryDropdown.inputValue());

    }

}