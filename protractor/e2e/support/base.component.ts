import {browser, ElementFinder, ExpectedConditions, Key} from "protractor";

const timeout: number = 5000;

export abstract class BaseComponent {
    abstract pageUrl: string;

    async navigateTo() {
        await browser.get(this.pageUrl);
    }

    getTitle() {
        return browser.getTitle();
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    async waitForElementVisible(element: ElementFinder, duration?) {
        await browser.wait(ExpectedConditions.visibilityOf(element), duration ? duration : timeout);
    }

    async waitForElementInVisible(element: ElementFinder, duration?) {
        await browser.wait(ExpectedConditions.invisibilityOf(element), duration ? duration : timeout);
    }

    async pressEscapeBtn() {
        await browser.actions().sendKeys(Key.ESCAPE).perform();
    }

    async switchToDefaultContent() {
        await await browser.switchTo().defaultContent();
    }

    sendKeys(element: ElementFinder, value: string) {
        element.clear();
        element.sendKeys(value);
    }

    async scrollToElement(element: ElementFinder) {
        await browser.executeScript('arguments[0].scrollIntoView', element.getWebElement());
    }
}
