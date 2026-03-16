import { test, expect } from '@playwright/test';
test('R00001', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.screenshot({ path: './image/R00001/R00001-1.png', fullPage: true });
    await page.getByRole('link', { name: 'สมัครทีม' }).nth(1).click();
    await expect(page).toHaveURL(/register_user/);
    await page.screenshot({ path: './image/R00001/R00001-2.png', fullPage: true });
});
