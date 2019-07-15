import {$, browser, ElementFinder, ExpectedConditions} from "protractor";
let timeout = 10000;

export abstract class BaseComponent {
    abstract pageUrl: string;

    async navigateTo() {
        await browser.get(this.pageUrl)
    };

    getTitle() {
        return browser.getTitle()
    };

    async waitForVisible(element: ElementFinder, timeout = 5000) {
        await browser.wait(ExpectedConditions.visibilityOf(element), timeout)
    };

    async waitForInvisible(element: ElementFinder) {
        await browser.wait(ExpectedConditions.invisibilityOf(element), timeout)
    };

    async sendKeys(element: ElementFinder, value: string) {
        await element.clear();
        await element.sendKeys(value);
    };

    getCurrentUrl() {
        return browser.getCurrentUrl();
    };

    async scrollToElement(element: ElementFinder) {
        await browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
    };

    async isElementDisplayed(selector: ElementFinder) {
        await selector.isDisplayed()
    };
};