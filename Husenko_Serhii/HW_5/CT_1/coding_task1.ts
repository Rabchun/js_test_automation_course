import { Page } from "@playwright/test";

export class LoginPage {
    private url = "https://example.com/login";

    public get loginUrl(): string {
        return this.url;
    }

    async open(page: Page): Promise<void> {
        await page.goto(this.url);
    }
}