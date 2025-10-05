import { Page } from "@playwright/test";

class BasePage {
    async getTitle(page: Page): Promise<string> {
        return await page.title();
    }
}
export class DashboardPage extends BasePage {
    private url = "https://www.google.com/";

    public get dashboardUrl(): string {
        return this.url;
    }

    async open(page: Page) {
        try {
            await page.goto(this.url);
        } catch (error) {
            console.error(`Failed to open page at ${this.url}:`, error);
        }
    }
}
