import {test, expect} from '@playwright/test';



    test('Horizontal Scroll Test', async ({ page }) => {
        await page.goto('https://roiciansautomationlab.netlify.app/');
        await page.getByRole('link', { name: 'Horizontal Slider' }).click();


        await expect(page.locator('#slider')).toHaveValue('5');

        await page.locator('#slider').fill('8');

        await expect(page.locator('#slider')).toHaveValue('8');

    })