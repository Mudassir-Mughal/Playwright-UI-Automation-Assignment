import { expect, Locator, Page } from '@playwright/test';
import { SliderLocators } from './DragDropSliders.locators';

export class SliderActions {

    readonly locator: SliderLocators;

    constructor(private page: Page) {
        this.locator = new SliderLocators(page);
    }

    private async moveSlider(
        slider: Locator,
        output: Locator,
        targetValue: number
    ): Promise<void> {

        await slider.scrollIntoViewIfNeeded();

        const box = await slider.boundingBox();

        if (!box) {
            throw new Error('Slider not found');
        }

        const percentage = (targetValue - 1) / 99;

        const startX = box.x + 2;
        let endX = box.x + (box.width * percentage);
        const y = box.y + box.height / 2;

        // Initial drag
        await this.page.mouse.move(startX, y);
        await this.page.mouse.down();
        await this.page.mouse.move(endX, y, { steps: 40 });
        await this.page.mouse.up();

        // Read actual value
        let actualValue = Number(await output.textContent());

        // Fine adjustment if off by 1
        while (actualValue !== targetValue) {

            if (actualValue < targetValue) {
                endX += 1;
            } else {
                endX -= 1;
            }

            await this.page.mouse.move(endX, y);
            await this.page.mouse.down();
            await this.page.mouse.move(endX, y, { steps: 2 });
            await this.page.mouse.up();

            actualValue = Number(await output.textContent());

            // Prevent infinite loop
            if (Math.abs(actualValue - targetValue) > 5) {
                break;
            }
        }

        expect(actualValue).toBe(targetValue);
    }

    async moveSlider1(value: number) {
        await this.moveSlider(
            this.locator.slider1,
            this.locator.output1,
            value
        );
    }

    async moveSlider5(value: number) {
        await this.moveSlider(
            this.locator.slider5,
            this.locator.output5,
            value
        );
    }

    async moveSlider8(value: number) {
        await this.moveSlider(
            this.locator.slider8,
            this.locator.output8,
            value
        );
    }
}