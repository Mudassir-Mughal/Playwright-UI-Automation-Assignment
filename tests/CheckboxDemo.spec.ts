import { test } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { CheckboxActions } from '../pages/CheckboxDemo/CheckboxDemo.actions';

test('should select multiple checkboxes successfully', async ({ page }) => {
  const home = new HomePageActions(page);
  const checkbox = new CheckboxActions(page);

  await home.navigateToHomePage();
  await home.clickCheckboxDemoLink();

  await checkbox.clickSingleCheckbox();
  await checkbox.verifySingleChecked();

  await checkbox.verifyDisabledCheckboxes();

await checkbox.selectMultiple();
await checkbox.verifyMultipleChecked();

await checkbox.clickCheckAll();
});//assertion apply already in actions file so no need to apply assertion in test file

 