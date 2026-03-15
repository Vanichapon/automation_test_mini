import { test, expect } from '@playwright/test';
test('R00004', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.screenshot({ path: 'C:/automation_test_mini/image/R00004/R00004-1.png', fullPage: true });
    await page.getByRole('link', { name: 'สมัครทีม' }).nth(0).click();
    await expect(page).toHaveURL(/register_user/);
    await page.screenshot({ path: 'C:/automation_test_mini/image/R00004/R00004-2.png', fullPage: true });
});