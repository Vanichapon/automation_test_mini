import { test, expect } from '@playwright/test';
test('R00017', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');
    await page.screenshot({ path: './image/R00017/R00017-1.png', fullPage: true });
    await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
    await expect(page).toHaveURL(/register_user/);
    await page.screenshot({ path: './image/R00017/R00017-2.png', fullPage: true });
});
