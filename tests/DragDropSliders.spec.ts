import { test, expect } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { SliderActions } from '../pages/DragDropSliders/dragDropSliders.actions';


test('should move the slider and verify its value updates', async ({ page }) => {

    const home = new HomePageActions(page);
    const slider = new SliderActions(page);


    await home.navigateToHomePage();

    await home.clickDragDropSlidesLink();


    const slider1Value = await slider.moveSlider1(70);
    expect(slider1Value).toBe(70);


    const slider5Value = await slider.moveSlider5(40);
    expect(slider5Value).toBe(40);


    const slider8Value = await slider.moveSlider8(90);
    expect(slider8Value).toBe(90);

});//assertion apply already in actions file so no need to apply assertion in test file