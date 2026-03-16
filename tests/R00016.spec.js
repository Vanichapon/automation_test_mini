import { test, expect } from '@playwright/test';
test('R00016', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');
    await page.screenshot({ path: './image/R00016/R00016-1.png', fullPage: true });
    await page.fill('#username', 'TestTeam2');
    await page.fill('#password', '');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.screenshot({ path: './image/R00016/R00016-2.png', fullPage: true });
});
