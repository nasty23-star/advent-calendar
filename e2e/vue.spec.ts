import { test, expect } from '@playwright/test';

test.describe('Advent Calendar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should display header and footer', async ({ page }) => {
    await expect(page.locator('header h1')).toHaveText('Advent Calendar');
    await expect(page.locator('header p')).toHaveText('Мои рекомендации фантастики');
    await expect(page.locator('footer p')).toHaveText('From Krasnodar with love');
  });

  test('should display all 24 cards', async ({ page }) => {
    await expect(page.locator('.card')).toHaveCount(24);
  });

  test('should show numbers from 1 to 24 on card fronts', async ({ page }) => {
    // Проверяем несколько конкретных чисел
    await expect(page.getByText('1', { exact: true })).toBeVisible();
    await expect(page.getByText('12', { exact: true })).toBeVisible();
    await expect(page.getByText('24', { exact: true })).toBeVisible();
    
    // Проверяем общее количество и наличие всех чисел
    const fronts = await page.locator('.front').all();
    expect(fronts.length).toBe(24);
    
    const numbers = await Promise.all(fronts.map(f => f.textContent()));
    for (let i = 1; i <= 24; i++) {
      expect(numbers).toContain(i.toString());
    }
  });

  test('should flip card on click and show content', async ({ page }) => {
    const firstCard = page.locator('.card').first();
    await page.locator('label').first().click();

    await expect(firstCard).toHaveCSS('transform', /matrix3d\(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1\)/);
    await expect(firstCard.locator('.card_title')).toBeVisible();
  });

  test('should have correct links on card backs', async ({ page }) => {
    await page.locator('label').first().click();
    const link = page.locator('.back_href a').first();

    await expect(link).toHaveAttribute('href', /^https:\/\/www\.kinopoisk\.ru\/film\/\d+\/$/);
    await expect(link).toHaveText('Ссылка');
    await expect(link).toHaveAttribute('target', '_blank');
  });

  test('should match visual snapshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('advent-calendar.png', {
      maxDiffPixels: 100,
      fullPage: true
    });
  });
});