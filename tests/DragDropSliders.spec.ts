import { test } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/HomePage.actions';
import { SliderActions } from '../pages/DragDropSliders/DragDropSliders.actions';

test.describe('Slider Tests', () => {

    test('Verify sliders can be moved', async ({ page }) => {

        const home = new HomePageActions(page);
        const slider = new SliderActions(page);

        await home.navigateToHomePage();

        await home.clickDragDropSlidesLink();

        await slider.moveSlider(1, 70);


    });

});


//all passed but code impprovement required and assertion apply