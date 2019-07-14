import {browser} from "protractor";
import {SecondPage} from "../support/secondPage";

describe('tests for second page', () => {

    const secondPage = new SecondPage();

    const headerLinks = ['[href="#contents"]', '[href="#testimonials"]'];

    beforeEach(async () => {
        await secondPage.navigateTo();
    });

    it('check header links', async () => {
        for (let link of headerLinks)
            expect(await secondPage.headerLinks.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
    });

    it('download the first chapter', async () => {
        await secondPage.downloadChapterButton.click();
        await secondPage.waitForVisible(secondPage.fieldNameInput);
        expect(await secondPage.fieldNameInput.isDisplayed()).toBeTruthy();
        await secondPage.sendKeys(secondPage.fieldNameInput, 'KatyaFedorova');
        await secondPage.sendKeys(secondPage.filedEmailInput, '587235848935');
        await secondPage.submitButton.click();
        expect(await secondPage.emailErrorMessage.count()).toEqual(2);
        expect(await secondPage.emailErrorMessage.get(0).getText()).toContain('A valid email address is required.');
        await secondPage.closeButton.click();
        await secondPage.waitForInVisible(secondPage.filedEmailInput);
        expect(await secondPage.filedEmailInput.isDisplayed()).toBeFalsy();
    });

    it('check open popup with animation', async () => {
        await secondPage.downloadChapterButton.click();
        await secondPage.waitForVisible(secondPage.fieldNameInput);
        expect(await secondPage.fieldNameInput.isDisplayed()).toBeTruthy();
        await secondPage.sendKeys(secondPage.fieldNameInput, 'KatyaFedorova');
        await secondPage.sendKeys(secondPage.filedEmailInput, 'katya@taxer.ua');
        await secondPage.submitButton.click();
        await secondPage.waitForVisible(secondPage.stepBlocks.get(0), 1000000);
        expect(await secondPage.stepBlocks.count()).toEqual(3);
        expect(await secondPage.getCurrentUrl()).toContain('/pending/');
        await secondPage.fullStuckLink.click();
        await secondPage.waitForVisible(secondPage.downloadChapterButton);
        expect(await secondPage.getCurrentUrl()).toContain('/2/');
    });

    it('scroll to book contents', async () => {
        await secondPage.scrollTo(secondPage.bookTabElement);
        await browser.sleep(2000);
        expect(await secondPage.bookItemElement.count()).toEqual(20);
        await secondPage.fullbutton.click();
        const windows = await browser.getAllWindowHandles();
        await console.log('it is us windows ' + windows);
        await browser.switchTo().window(await windows[1]);
        await secondPage.waitForVisible(secondPage.pdf);
        expect(await secondPage.getCurrentUrl()).toContain('ng-book-2-table-of-contents.pdf');
        await browser.switchTo().window(await windows[0]);
        await secondPage.scrollTo(secondPage.bookTabElement);
        await secondPage.waitForVisible(secondPage.infoSectionEmail);
        await secondPage.waitForVisible(secondPage.infoSectionButton);
        await secondPage.infoSectionButton.click();
        await browser.sleep(1000);
    });
})