import { test, expect } from '@playwright/test';

test('App home page should load properly', async ({ page }) => {
  await page.goto('/');
  const heading = await page.getByRole('heading', { name: /QuickMart/i });
  await expect(heading).toBeVisible();
});
