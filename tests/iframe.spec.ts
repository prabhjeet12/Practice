import {test, expect} from '@playwright/test';

test('iframe Handling', async ({ page }) => {

    await page.goto('https://roiciansautomationlab.netlify.app'); 


    await page.getByRole('link', { name: 'Frames / iFrame' }).click();
    const iframe = page.frameLocator('#lab-iframe');

    await iframe.locator('#iframe-name').fill('Prabh')
    await iframe.locator('#iframe-email').fill('prabh@gmail.com')
    

})