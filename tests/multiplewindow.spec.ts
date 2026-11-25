
import { test, expect } from '@playwright/test';

test('Multiple Window Handling', async ({ page, context }) => {

    await page.goto('https://roiciansautomationlab.netlify.app');

    const googlepage = await context.newPage();

    await googlepage.goto('https://www.google.com/', {
        waitUntil: 'domcontentloaded'
    });

    const roicianspage = await context.newPage();

    await roicianspage.goto('https://www.roicians.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    await googlepage.bringToFront();

    console.log('Google Title:', await googlepage.title());

    await expect(googlepage).toHaveTitle(/Google/);

});
