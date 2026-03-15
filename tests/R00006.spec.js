import { test, expect } from '@playwright/test';
test('R00006', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
    await page.screenshot({ path: 'C:/automation_test_mini/image/R00006/R00006-1.png', fullPage: true });
    await page.getByRole('link', { name: 'ติดต่อเรา' }).click();
    await expect(page).toHaveURL(/contact/);
    await page.screenshot({ path: 'C:/automation_test_mini/image/R00006/R00006-2.png', fullPage: true });
});