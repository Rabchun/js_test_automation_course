import { test, expect } from "@playwright/test";
import { DashboardPage } from "../pages/coding_task2.ts";

test("Check dashboard page title", async ({ page }) => {
    const dashboardPage = new DashboardPage();
    await dashboardPage.open(page);
    const pageTitle = await dashboardPage.getTitle(page);
    expect(pageTitle).toBe("Google");
});
