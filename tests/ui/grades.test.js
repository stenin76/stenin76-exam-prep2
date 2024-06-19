const { test, expect } = require('@playwright/test');

test('Check grades page', async ({ page }) => {
    await page.goto('http://localhost:8080/grades-list');
    const list = await page.$('dl');
    expect(list).toBeTruthy();
  });
  