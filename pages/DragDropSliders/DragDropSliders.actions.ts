import { Locator, Page } from '@playwright/test';
import { SliderLocators } from './DragDropSliders.locators';

export class SliderActions {

    private readonly locator: SliderLocators;

    constructor(private page: Page) {
        this.locator = new SliderLocators(page);
    }


    private async moveSlider(
    slider: Locator,
    output: Locator,
    targetValue: number
): Promise<number> {

    await slider.scrollIntoViewIfNeeded();

    const box = await slider.boundingBox();

    if (!box) {
        throw new Error('Slider not found');
    }


    const y = box.y + box.height / 2;

    // Adjust for slider thumb size
    const sliderStart = box.x + 8;
    const sliderEnd = box.x + box.width - 8;

    const percentage = (targetValue - 1) / 99;

    let endX = sliderStart + ((sliderEnd - sliderStart) * percentage);


    await this.page.mouse.move(sliderStart, y);
    await this.page.mouse.down();

    await this.page.mouse.move(
        endX,
        y,
        { steps: 50 }
    );

    await this.page.mouse.up();


    await this.page.waitForTimeout(300);


    let actualValue = Number(await output.textContent());


    let attempts = 0;

    while (actualValue !== targetValue && attempts < 20) {

        if (actualValue < targetValue) {
    endX += 2;
} else {
    endX -= 2;
}


        await this.page.mouse.move(endX, y);
        await this.page.mouse.down();

        await this.page.mouse.move(
            endX,
            y,
            { steps: 2 }
        );

        await this.page.mouse.up();


        await this.page.waitForTimeout(200);

        actualValue = Number(await output.textContent());

        attempts++;
    }


    return actualValue;
}

    async moveSlider1(value: number): Promise<number> {
        return await this.moveSlider(
            this.locator.slider1,
            this.locator.output1,
            value
        );
    }


    async moveSlider5(value: number): Promise<number> {
        return await this.moveSlider(
            this.locator.slider5,
            this.locator.output5,
            value
        );
    }


    async moveSlider8(value: number): Promise<number> {
        return await this.moveSlider(
            this.locator.slider8,
            this.locator.output8,
            value
        );
    }

}