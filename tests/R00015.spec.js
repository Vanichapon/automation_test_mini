import { test, expect } from '@playwright/test';
test('R00015', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');
    await page.screenshot({ path: 'C:/automation_test_mini/image/R00015/R00015-1.png', fullPage: true });
    await page.getByRole('link', { name: 'ลืมรหัสผ่าน' }).click();
    await expect(page).toHaveURL(/forgot/);
    await page.screenshot({ path: 'C:/automation_test_mini/image/R00015/R00015-2.png', fullPage: true });
});