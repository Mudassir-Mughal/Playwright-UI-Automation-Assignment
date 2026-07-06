import { test } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { CheckboxActions } from '../pages/CheckboxDemo/CheckboxDemo.actions';

test('Checkbox Demo', async ({ page }) => {
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
});

 