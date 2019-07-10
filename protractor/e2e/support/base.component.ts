import {$, browser, ElementFinder, ExpectedConditions} from "protractor";

export abstract class BaseComponent {
    abstract pageUrl: string;

    async navigateTo() {
        await browser.get(this.pageUrl);
    }

    getTitle() {
        return  browser.getTitle();
    }

    async waitForElementVisible(element: ElementFinder, duration?) {
        await browser.wait(ExpectedConditions.visibilityOf(element), duration ? duration:5000);
    }
}