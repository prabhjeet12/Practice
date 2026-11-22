import {test, expect} from '@playwright/test';


test('Hover Test', async ({ page }) => {

    await page.goto('https://roiciansautomationlab.netlify.app/');
    await page.getByRole('link', { name: 'Hovers' }).click();

    await page.locator('#user-2').hover();

    await expect(page.locator('#tooltip-2')).toContainText('user2 — Automation Lead');

})
test.afterEach(async ({ page }) => {
    await page.close();
})