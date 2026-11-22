import {test, expect} from '@playwright/test'

test('basic test', async ({ page }) => {
    await page.goto('https://www.roicians.com');
    await expect(page).toHaveTitle(/Roicians/);
    //const heading = page.getByRole('heading', { name: 'AI Powere QA Program' }).locator('.elementor-heading-title   elementor-size-default');
    
    await page.locator('.elementor-heading-title   elementor-size-default').getByRole('heading', { name: 'AI Powere QA Program' });

    await page.locator('.tutor-form-control tutor-input').getByPlaceholder('Username or Email Address');
   

    await page.getByRole('link', { name: 'About Us' }).first().click();
    await page.getByLabel('#label_ff_8_input_text_5');
    await page.getByPlaceholder('First Name');
    await page.getByPlaceholder('Last Name');

}
);

















/*test ('verifying about us page', async ({ page }) => {

    await page.goto('https://www.roicians.com');
    await page.getByRole('link', { name: 'About Us' }).click();
    
    
    
})*/