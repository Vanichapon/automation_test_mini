import { test, expect } from '@playwright/test';
test('R00014', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');
    await page.screenshot({ path: './image/R00014/R00014-1.png', fullPage: true });
    await page.fill('#username', 'TestTeam2');
    await page.fill('#password', '123456');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.screenshot({ path: './image/R00014/R00014-2.png', fullPage: true });
});
