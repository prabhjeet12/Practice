
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {

    await page.goto('https://www.roicians.com', {
        waitUntil: 'domcontentloaded'
    });

    // Verify page title
    await expect(page).toHaveTitle(/Roicians/i);
})

    // Verify heading
   /* await expect(
        page.getByRole('heading', {
            name: 'AI Powered QA Program'
        })
    ).toBeVisible();

    // Click About Us
    await page.getByRole('link', { name: 'About Us' })
        .first()
        .click();

    // Verify About Us page fields
    await expect(
        page.getByPlaceholder('First Name')
    ).toBeVisible();

    await expect(
        page.getByPlaceholder('Last Name')
    ).toBeVisible();

});*/
