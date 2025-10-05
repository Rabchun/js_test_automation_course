import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/coding_task1.ts";

test("Login page opens", async ({ page }) => {
    const loginPage = new LoginPage();
    await loginPage.open(page);
    await expect(page).toHaveURL(loginPage.loginUrl);
});
