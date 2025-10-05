import { Page } from "@playwright/test";

export async function login(
    page: Page,
    username: string,
    password: string
): Promise<void> {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill("#username", username);
    await page.fill("#password", password);
    await page.click('button[type="submit"]');
}
