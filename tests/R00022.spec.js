import { test, expect } from '@playwright/test';
test('R00022', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/login.php');
    await page.fill('#username', 'TestTeam02');
    await page.fill('#password', 'NewPass@1234');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByText('เกียรติบัตร').click();
    await expect(page).toHaveURL(/certificate/);
    await page.screenshot({ path: './image/R00022/R00022-1.png', fullPage: true });
    await page.getByPlaceholder('กรุณากรอกชื่อ-นามสกุล').fill('คิม');
    await page.getByRole('button', { name: 'ค้นหาเกียรติบัตร' }).click();
    await expect(page.locator('.swal2-popup')).toBeVisible();
    await page.screenshot({ path: './image/R00022/R00022-2.png', fullPage: true });
});
