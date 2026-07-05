import { Page, Locator } from '@playwright/test';

export class JQueryDropdownLocators {

    readonly page: Page;

    readonly countryDropdown: Locator;
    readonly countrySearch: Locator;

    readonly stateDropdown: Locator;
    readonly stateSearch: Locator;

    readonly disabledDropdown: Locator;

    readonly categoryDropdown: Locator;

    constructor(page: Page) {

        this.page = page;

        // Searchable Country Dropdown
        this.countryDropdown = page.locator('span[aria-labelledby="select2-country-container"]');
        this.countrySearch = page.locator('input.select2-search__field').last();

        // Multi Select Dropdown
        this.stateDropdown = page.locator('.select2-selection--multiple');
        this.stateSearch = page.locator('.select2-selection--multiple input.select2-search__field');

        // Disabled Values Dropdown
        this.disabledDropdown = page.locator('.js-example-disabled-results + span .select2-selection');

        // Category Dropdown (Normal HTML Select)
        this.categoryDropdown = page.locator('#files');

    }

    countryOption(country: string): Locator {
        return this.page.locator('.select2-results__option', {
            hasText: country
        });
    }

    stateOption(state: string): Locator {
        return this.page.locator('.select2-results__option', {
            hasText: state
        });
    }

}