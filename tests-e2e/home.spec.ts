import { test, expect } from '@playwright/test';

test('has title and main heading', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Matheo Pinget/);

  // Expect a main heading to be visible.
  await expect(page.getByRole('heading', { name: 'Matheo Pinget' })).toBeVisible();

  // Expect "Mes Projets" heading to be visible
  await expect(page.getByRole('heading', { name: 'Mes Projets' })).toBeVisible();

  // Expect at least one project card to be visible
  await expect(page.getByRole('heading', { name: 'Pentesting' })).toBeVisible();
});