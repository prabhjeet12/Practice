import {test, expect} from '@playwright/test';

/*test('Download File', async ({ page }) => {
    await page.goto('https://roiciansautomationlab.netlify.app/');
    await page.getByRole('link', { name: 'File Download' }).click();

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#download-readme-txt').click(),
    ]);

    expect(download.suggestedFilename()).toBe('readme.txt');

    const [download1] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#download-test-example-js').click(),
    ]);

    expect(download1.suggestedFilename()).toBe('test-example.js');

})*/


test ('Download from DemoQASite', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download', {
    waitUntil: 'domcontentloaded'
});
   

    const [demodnld] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click(),
    ]);

    expect(demodnld.suggestedFilename()).toBe('sampleFile.jpeg');

})