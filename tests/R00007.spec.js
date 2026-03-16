import { test, expect } from '@playwright/test';
test('R00007', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.screenshot({ path: './image/R00007/R00007-1.png', fullPage: true });
    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
    await expect(page).toHaveURL(/login/);
    await page.screenshot({ path: './image/R00007/R00007-2.png', fullPage: true });
});
