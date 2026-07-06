import { test, expect } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { AjaxSubmitFormActions } from '../pages/AjaxSubmitForm/ajaxSubmitForm.actions';

  test('Verify Ajax Form Submission', async ({ page }) => {
    const home = new HomePageActions(page);
    const ajax = new AjaxSubmitFormActions(page);

    await home.navigateToHomePage();
    await home.clickAjaxSubmitFormLink();

    await ajax.submitAjaxForm('Mudassir', 'Hello how are you doing?');


  await ajax.waitForSuccessMessage();
  

    
  });

