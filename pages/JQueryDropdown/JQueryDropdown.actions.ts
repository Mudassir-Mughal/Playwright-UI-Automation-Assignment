import { Page } from '@playwright/test';
import { JQueryDropdownLocators } from './JQueryDropdown.locators';


export class JQueryDropdownActions {

    private readonly locators: JQueryDropdownLocators;


    constructor(private page: Page) {

        this.locators = new JQueryDropdownLocators(page);

    }


    async selectCountry(country: string): Promise<string> {

        await this.locators.countryDropdown.click();

        await this.locators.countrySearch.fill(country);

        await this.locators.countryOption(country).click();


        return await this.locators.countryDropdown.textContent() ?? "";

    }



    async selectStates(states: string[]): Promise<string[]> {


        await this.locators.stateDropdown.click();


        for (const state of states) {

            await this.locators.stateSearch.fill(state);

            await this.locators.stateOption(state).click();

        }


        const selectedStates = await this.page
            .locator('.select2-selection__choice')
            .allTextContents();


        return selectedStates.map(state => 
            state.replace('×', '').trim()
        );

    }



    async selectEnabledCountry(country: string): Promise<string> {


        await this.locators.disabledDropdown.click();

        await this.locators.countryOption(country).click();


        return await this.locators.disabledDropdown.textContent() ?? "";

    }



    async selectCategory(category: string): Promise<string> {


    await this.locators.categoryDropdown.selectOption({
        label: category
    });


    return await this.locators.categoryDropdown
        .locator('option:checked')
        .textContent() ?? "";

}

}