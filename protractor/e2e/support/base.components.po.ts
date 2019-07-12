import { $, browser, ElementFinder, ExpectedConditions, protractor } from 'protractor';
let timeout =5000;

export abstract class BaseComponentsPo{
    abstract pageUrl: string;

    async navigateTo(){
        await  browser.get(this.pageUrl);

    }
    getTitle(){
        return browser.getTitle();

    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    async waitForVisible(element:ElementFinder, duration?){
        await browser.wait(ExpectedConditions.visibilityOf(element), timeout);
    }

    async pressEsc() {
        await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    }

    async switchToDefaultContent() {
        await browser.switchTo().defaultContent();
    }

    async waitForInVisible(element: ElementFinder, timeout?: number) {
        await browser.wait(ExpectedConditions.invisibilityOf(element), timeout ? timeout : timeout);
    }
}
