import { test } from '@playwright/test'

test('test', async ({ page }) => {
   await page.goto('/')
   await page.getByRole('link', { name: 'Каталог', exact: true }).click()
   await page.getByRole('link', { name: 'Главная' }).click()
})
