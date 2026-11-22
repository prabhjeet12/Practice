import { expect, test } from '@playwright/test';

test.describe('Screenshot Tests', () => {

test('Screenshot', async ({ page }) => {
    await page.goto('https://shop-look.vercel.app/');
    await page.screenshot({
        path: 'screenshots/homepage-full.png',
        fullPage: true,
    });
});

test('Screenshot of product', async ({ page }) => {
    await page.goto('https://shop-look.vercel.app/category/electronics');
    const screen = page.getByTestId('product-card').first();
    await screen.screenshot({ path: 'screenshots/product.png' });
});

test('visual regression test', async ({ page }) => {
    await page.goto('https://shop-look.vercel.app/');
    await expect(page).toHaveScreenshot('screenshots/homepage-full.png', {
        maxDiffPixelRatio: 0.1,
    });
});

})



