import {$, $$, browser, ElementFinder , ExpectedConditions as EC} from "protractor";

describe('Test', function () {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
    });

    it('should be true', async () => {
        await browser.get('/#community');
        await browser.executeScript("return window.open('http://google.com', '_blank')");
        await browser.sleep(3000);
        let win = await browser.getAllWindowHandles();
        browser.switchTo().window(win[1]);
        await $$('input[name="q"]').sendKeys('11111111');
        await $$('input[name="q"]').clear();
        await $$('input[name="q"]').sendKeys('22222222');

        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(false);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });


});

export async function waitForVisible(element: ElementFinder, timeout = 5000, message = ''): Promise<void> {
    await browser.wait(EC.visibilityOf(element), timeout, message);
}