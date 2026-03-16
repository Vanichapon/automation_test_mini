import { test, expect } from '@playwright/test';
test('R00019', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');
    await page.fill('#username', 'TestTeam2');
    await page.fill('#password', 'Test@123456');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByText('ตั้งค่า').click();
    await expect(page).toHaveURL(/settings/);
    await page.screenshot({ path: './image/R00019/R00019-1.png', fullPage: true });
    await page.fill('#username', 'TestTeam2');
    await page.fill('#email', 'test2@domain.com');
    await page.fill('#new_password', 'NewPass@1234');
    await page.fill('#confirm_password', 'NewPass@1234');
    await page.fill('#current_password', 'NewPass@123456');
    await page.getByRole('button', { name: ' บันทึกการเปลี่ยนแปลง' }).click();
    await expect(page.getByText('รหัสผ่านปัจจุบันไม่ถูกต้อง')).toBeVisible();
    await page.screenshot({ path: './image/R00019/R00019-2.png', fullPage: true });
});
