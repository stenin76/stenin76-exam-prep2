const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const heading = await page.$('h6');
  const text = await heading.textContent();
  expect(text).toBe('About my grades ');
});

test('Check about page test', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const heading = await page.$('a');
  const text = await heading.textContent();
  expect(text).toBe('This is my gardes list');
});
