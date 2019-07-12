import {browser, ElementFinder, ExpectedConditions, protractor} from "protractor";
const defaultTimeout = 5000;

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

    async waitForVisible(element: ElementFinder, timeout?: number) {
        await browser.wait(ExpectedConditions.visibilityOf(element), timeout ? timeout : defaultTimeout);
    }

    async waitForInVisible(element: ElementFinder, timeout?: number) {
        await browser.wait(ExpectedConditions.invisibilityOf(element), timeout ? timeout : defaultTimeout);
    }

    async pressEsc() {
        await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    }

    async switchToDefaultContent() {
        await browser.switchTo().defaultContent();
    }

    async sendKeys(element: ElementFinder, value: string) {
      await element.clear();
      await element.sendKeys(value);
    }

    async scrollToElement(element: ElementFinder) {
      await browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
    }
}
