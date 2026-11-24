import {test, expect} from '@playwright/test';

test.describe('Drag and Drop Handling', () => {
    test('Drag and Drop Test 1', async ({ page }) => {

        await page.goto('https://roiciansautomationlab.netlify.app/');

        await page.getByRole('link', { name: 'Drag and Drop' }).click();


        await page.locator('#draggable-1').dragTo(page.locator('#drop-hint'));

        await expect(page.locator('#dropped-draggable-1')).toContainText('Playwright');
    })
   /* test('Drag and Drop Test 2', async ({ page }) => {

        await page.goto('https://roiciansautomationlab.netlify.app/');
        await page.getByRole('link', { name: 'Drag and Drop' }).click();

        await page.locator('#draggable-2').dragTo(page.locator('#drop-hint'));

        await expect(page.locator('#dropped-draggable-2')).toContainText('Selenium');
     })*/
})
     