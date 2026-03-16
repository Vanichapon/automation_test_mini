import { test, expect } from '@playwright/test';
test('R00003', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.screenshot({ path: './image/R00003/R00003-1.png', fullPage: true });
    await page.getByRole('link', { name: 'ตารางการแข่งขัน' }).click();
    await expect(page).toHaveURL(/schedule/);
    await page.screenshot({ path: './image/R00003/R00003-2.png', fullPage: true });
});
