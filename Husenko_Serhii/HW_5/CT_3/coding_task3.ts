import { Page } from "@playwright/test";

abstract class Component {
    abstract click(page: Page): Promise<void>;
}

export class Button extends Component {
    constructor(private selector: string) {
        super();
    }
    async click(page: Page): Promise<void> {
        await page.click(this.selector);
    }
}

export class Link extends Component {
    constructor(private selector: string) {
        super();
    }
    async click(page: Page): Promise<void> {
        await page.hover(this.selector);
        await page.click(this.selector);
    }
}

export async function clickAll(components: Component[], page: Page) {
    for (const component of components) {
        try {
            await component.click(page);
        } catch (error) {
            console.error("Unable to click component: ", error);
        }
    }
}
