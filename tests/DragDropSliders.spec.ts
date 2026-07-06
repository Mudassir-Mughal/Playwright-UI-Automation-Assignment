import { test } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { SliderActions } from '../pages/DragDropSliders/dragDropSliders.actions';

test.describe('Slider Tests', () => {

    test('Verify sliders can be moved', async ({ page }) => {

    const home = new HomePageActions(page);
    const slider = new SliderActions(page);

    await home.navigateToHomePage();
    await home.clickDragDropSlidesLink();

    await slider.moveSlider1(70);
    await slider.moveSlider5(40);
    await slider.moveSlider8(90);
});
});

//all passed but code impprovement required and assertion apply