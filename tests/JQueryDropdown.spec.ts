import { test } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { JQueryDropdownActions } from '../pages/jQueryDropdown/jQueryDropdown.actions';

test.describe('JQuery Select Dropdown', () => {

    test('Verify JQuery Dropdown functionality', async ({ page }) => {

        const home = new HomePageActions(page);
        const dropdown = new JQueryDropdownActions(page);

        await home.navigateToHomePage();

        await home.clickJQueryDropdownLink();

        // Search Dropdown
        await dropdown.selectCountry('India');

        // Multi Select
        await dropdown.selectStates([
            'Texas',
            'Florida',
            'California'
        ]);

        // Disabled Values Dropdown
        await dropdown.selectEnabledCountry('Virgin Islands');

        // Category Dropdown
        await dropdown.selectCategory('Java');

    });

});

//all passed but code improvement required