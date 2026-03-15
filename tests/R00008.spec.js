import { test, expect } from '@playwright/test';
test('R00008', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/register_user.php');
    await page.screenshot({ path: 'C:/automation_test_mini/image/R00008/R00008-1.png', fullPage: true });
    await page.fill('#username', 'TestTeam2');
    await page.fill('#email', 'test02@domain.com');
    await page.fill('#password', 'Test@123456');
    await page.fill('#confirm_password', 'Test@123456');
    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await page.screenshot({ path: 'C:/automation_test_mini/image/R00008/R00008-2.png', fullPage: true });
});