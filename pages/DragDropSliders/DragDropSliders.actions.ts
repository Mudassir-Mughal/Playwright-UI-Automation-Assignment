import { expect, Page } from '@playwright/test';
import { SliderLocators } from './dragDropSliders.locators';

export class SliderActions {

    readonly locator: SliderLocators;

    constructor(private page: Page) {
        this.locator = new SliderLocators(page);
    }

    async moveSlider(index: number, targetValue: number): Promise<void> {

        const slider = this.locator.getSlider(index);

        await slider.scrollIntoViewIfNeeded();

        const box = await slider.boundingBox();

        if (!box) {
            throw new Error('Slider not found');
        }

        const y = box.y + box.height / 2;

        let current = Number(await this.locator.getOutput(index).textContent());

        let attempts = 0;

        while (current !== targetValue && attempts < 15) {

            const distance = targetValue - current;

            // Move approximately according to remaining distance
            const moveBy = distance * (box.width / 100);

            const thumbX =
                box.x + (current / 100) * box.width;

            await this.page.mouse.move(thumbX, y);
            await this.page.mouse.down();

            await this.page.mouse.move(
                thumbX + moveBy,
                y,
                { steps: 20 }
            );

            await this.page.mouse.up();

            await this.page.waitForTimeout(200);

            current = Number(await this.locator.getOutput(index).textContent());

            attempts++;
        }

        expect(Math.abs(current - targetValue)).toBeLessThanOrEqual(1);
    }


}