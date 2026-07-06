import { test } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { JQueryDropdownActions } from '../pages/JQueryDropdown/JQueryDropdown.actions';


    test('Verify JQuery Dropdown functionality', async ({ page }) => {

        const home = new HomePageActions(page);
        const dropdown = new JQueryDropdownActions(page);

        await home.navigateToHomePage();

        await home.clickJQueryDropdownLink();

       
        await dropdown.selectCountry('India');

        await dropdown.selectStates([
            'Texas',
            'Florida',
            'California'
        ]);

        await dropdown.selectEnabledCountry('Virgin Islands');

        await dropdown.selectCategory('Java');

    });

