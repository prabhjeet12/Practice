import {test,expect} from '@playwright/test'

test('Handling dropdown', async({ page }) => {
    await page.goto('https://roiciansautomationlab.netlify.app/')

    await page.getByRole('link', { name: 'Dropdown' }).click()
    //select by value in dropdown
   // await page.locator('#dropdown-country').selectOption('India')
// select by visible text label in dropdown
await page.locator('#dropdown-country').selectOption({ label: 'Canada' })


await page.locator('#dropdown-course').selectOption({ label: 'AWS' })


// select by position in dropdown
//await page.locator('#dropdown-country').selectOption({ index: 3 })
})