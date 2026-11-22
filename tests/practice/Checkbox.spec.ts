import {test, expect} from '@playwright/test';  

test.describe('Checkbox Handling', () => {

    test('Checkbox Test', async ({ page }) => {
        await page.goto('https://roiciansautomationlab.netlify.app/');

        await page.getByRole('link', { name: 'Checkboxes' }).click();

        await expect(page.locator('#checkbox-2')).toBeChecked();

    })

    test('Checking another checkbox', async ({ page }) => {

        await page.goto('https://roiciansautomationlab.netlify.app/');
        await page.getByRole('link', { name: 'Checkboxes' }).click();

        await page.locator('#checkbox-1').check();

        await page.locator('#checkbox-2').uncheck();
        await expect(page.locator('#checkbox-1')).toBeChecked();    
    })

    test.afterAll(async ({ page }) => {
        await page.close();
    })




})


