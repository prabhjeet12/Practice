import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://shop-look.vercel.app/')
})
test.describe('Shop Look Tests', () => {
   
    //tags
test('Search for a product', { tag: '@regression' }, async ({ page }) => {
  
    await page.getByRole('searchbox').fill('Laptop')
    await page.keyboard.press('Enter')
})
test ('Today Deals', { tag: '@smoke' }, async ({ page }) => {

await page.getByTestId('hero-cta-view-deals').click()
await expect(page).toHaveURL('https://shop-look.vercel.app/deals')
})
})
test.afterEach(async ({ page }) => {
    await page.close()
})
