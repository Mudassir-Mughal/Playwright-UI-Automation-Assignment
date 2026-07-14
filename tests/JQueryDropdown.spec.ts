import { test, expect } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { JQueryDropdownActions } from '../pages/JQueryDropdown/JQueryDropdown.actions';


test('should select values from the jQuery dropdown successfully', async ({ page }) => {


    const home = new HomePageActions(page);

    const dropdown = new JQueryDropdownActions(page);



    await home.navigateToHomePage();

    await home.clickJQueryDropdownLink();



    const country = await dropdown.selectCountry('India');

    expect(country).toContain('India');



    const states = await dropdown.selectStates([
        'Texas',
        'Florida',
        'California'
    ]);


    expect(states).toEqual(
    expect.arrayContaining([
        'Texas',
        'Florida',
        'California'
    ])
);


    const enabledCountry = await dropdown.selectEnabledCountry('Virgin Islands');

    expect(enabledCountry).toContain('Virgin Islands');



    const category = await dropdown.selectCategory('Java');

    expect(category).toBe('Java');

});