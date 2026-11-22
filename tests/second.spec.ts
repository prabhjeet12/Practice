import { test, expect } from '@playwright/test'
import { HomePage } from '../pom/homepage';
let homePage: HomePage;
test.beforeEach(async ({ page }) => {
    await page.goto('https://shop-look.vercel.app/')
    homePage = new HomePage(page);
})
test.describe('Shop Look Tests', () => {
   
    //tags
test('Search for a product', { tag: '@regression' }, async ({ page }) => {
  
    await homePage.searchForProduct('Laptop')
})
test ('Today Deals', { tag: '@smoke' }, async ({ page }) => {

await page.getByTestId('hero-cta-view-deals').click()
await expect(page).toHaveURL('https://shop-look.vercel.app/deals')
})
})
test.afterEach(async ({ page }) => {
    await page.close()
})
