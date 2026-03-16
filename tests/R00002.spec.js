import { test, expect } from '@playwright/test';
test('R00002', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.screenshot({ path: './image/R00002/R00002-1.png', fullPage: true });
    await page.getByRole('link', { name: 'หน้าหลัก' }).click();
    await expect(page).toHaveURL(/index/);
    await page.screenshot({ path: './image/R00002/R00002-2.png', fullPage: true });
});
