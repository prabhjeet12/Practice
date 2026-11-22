import {test, expect, request} from '@playwright/test';


test('CRUD API Testing', async ({request}) => {

    const response = await request.get('https://banklite.onrender.com/');

    console.log('Status:', response.status());
    await expect(response.status()).toBe(200);

})