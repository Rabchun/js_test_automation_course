import { Page } from "@playwright/test";

export class LoginPage {
    private url = "https://example.com/login";

    public get loginUrl(): string {
        return this.url;
    }

    async open(page: Page): Promise<void> {
        try {
            await page.goto(this.url);
        } catch (error) {
            console.error(`Failed to open page at ${this.url}:`, error);
        }
    }
}
