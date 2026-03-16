import { test, expect } from '@playwright/test';
test('R00018', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');
    await page.fill('#username', 'TestTeam02');
    await page.fill('#password', 'NewPass@1234');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.screenshot({ path: './image/R00018/R00018-1.png', fullPage: true });
    await page.getByText('ตั้งค่า').click();
    await expect(page).toHaveURL(/settings/);
    await page.screenshot({ path: './image/R00018/R00018-2.png', fullPage: true });
});
