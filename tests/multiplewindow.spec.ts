import {test, expect} from '@playwright/test';

test('Multiple Window Handling', async ({ page,context }) => {

    await page.goto('https://roiciansautomationlab.netlify.app');


    const googlepage = await context.newPage();

    await googlepage.goto('https://www.google.com/');


    const roicianspage = await context.newPage();

    await roicianspage.goto('https://www.roicians.com/');

    await googlepage.bringToFront();

    console.log('Google Title: ', await googlepage.title());


})
