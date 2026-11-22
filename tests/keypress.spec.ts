import { test, expect } from '@playwright/test'

test('Handling keypress', async ({ page }) => {
    await page.goto('https://roiciansautomationlab.netlify.app/')
    await page.getByRole('link', { name: 'Key Presses' }).click() 
  await page.locator("#key-press-input").click()
  await page.locator('#key-press-input').press('Enter')
})
