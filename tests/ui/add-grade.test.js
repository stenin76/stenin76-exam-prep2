const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('http://localhost:8080/add-to-my-grades-list');
    const form = await page.$('textfield');
    expect(form).toBeTruthy();
  });
  