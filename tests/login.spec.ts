import { test,expect } from '@playwright/test';
import { LoginPage } from '../pom/LoginPage';

test.describe('POM Practice', () => {
test.skip('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
})
test.skip('Invalid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.login('standard_user', 'wrong123');
    await expect(await loginPage.getErrorMessage()).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  })

test('Logout Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await expect((page).getByPlaceholder('Username')).toBeVisible();
    await expect((page).locator('#password')).toBeVisible();
})

const loginData = [
    { username: 'standard_user', password: 'secret_sauce' },
    { username: 'locked_out_user', password: 'secret_sauce' },
    { username: 'invalid_user', password: 'wrong123' }
];
loginData.forEach((data) => {

    test(`Login Test - ${data.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.openLoginPage();

        await loginPage.login(data.username, data.password);

        console.log(data.username);
        console.log(data.password);

    });

});

})
