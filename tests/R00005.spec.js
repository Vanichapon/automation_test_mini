import { test, expect } from '@playwright/test';
test('R00005', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.screenshot({ path: './image/R00005/R00005-1.png', fullPage: true });
    await page.getByRole('link', { name: 'ประกาศ' }).click();
    await expect(page).toHaveURL(/annunciate/);
    await page.screenshot({ path: './image/R00005/R00005-2.png', fullPage: true });
});
