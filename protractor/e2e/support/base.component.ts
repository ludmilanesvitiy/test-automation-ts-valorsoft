import {$, browser, ElementFinder, ExpectedConditions} from "protractor";
let timeout = 6000;

export abstract class BaseComponent {
    abstract pageUrl: string;

    async navigateTo(){
        await browser.get(this.pageUrl);
    }

    getTitle(){
        return browser.getTitle();
    }

    async waitForVisible(element: ElementFinder, duration = timeout){
        await browser.wait(ExpectedConditions.visibilityOf(element), timeout);
    }
}