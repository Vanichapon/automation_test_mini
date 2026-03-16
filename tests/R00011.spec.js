import { test, expect } from '@playwright/test';
test('R00011', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/register_user.php');
    await page.screenshot({ path: './image/R00011/R00011-1.png', fullPage: true });
    await page.fill('#username', '');
    await page.fill('#email', 'test02@domain.com');
    await page.fill('#password', 'Test123456');
    await page.fill('#confirm_password', '');
    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    await page.screenshot({ path: './image/R00011/R00011-2.png', fullPage: true });
});
