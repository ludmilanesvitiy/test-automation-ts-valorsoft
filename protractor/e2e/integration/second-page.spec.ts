import {SecondPo} from "../support/second.po";
import {browser} from "protractor";

describe('tests for second page', async () => {

    const secondPage = new SecondPo();
    const headerRoutes = ['#contents', '#testimonials', 'http://blog.ng-book.com',
        '#get-it-now', '/modern-ng1/', '/'];
    beforeEach(async () => {
        await secondPage.navigateTo();
    });

    it ('check header links', async () => {
        for (let link of headerRoutes) {
            expect(await secondPage.headerLinks.get(headerRoutes.indexOf(link)).getAttribute('href')).toContain(link);
        }
    });


    it('check popup', async () => {
        await secondPage.downloadChapterButton.click();
        await  secondPage.waitForVisible(secondPage.firstnameInput);
        expect(await secondPage.firstnameInput.isDisplayed()).toBeTruthy();
        await  secondPage.sendKeys(secondPage.firstnameInput, 'Nataly');
        await  secondPage.sendKeys(secondPage.emailInput, 'jhjhb');
        await  secondPage.submitButton.click();
        expect (await  secondPage.errorMassege.count()).toEqual(2);
        expect (await secondPage.errorMassege.get(0).getText()).toContain('A valid email address');
        await secondPage.popupCloseButton.click();
        await secondPage.waitForInVisible(secondPage.firstnameInput);
        expect(await secondPage.firstnameInput.isDisplayed()).toBeFalsy();
    });

    fit('when user click on submit redirect to the pending page', async () => {
        await secondPage.downloadChapterButton.click();
        await secondPage.waitForVisible(secondPage.firstnameInput);
        expect(await secondPage.firstnameInput.isDisplayed()).toBeTruthy();
        await secondPage.sendKeys(secondPage.firstnameInput, 'Nataly');
        await secondPage.sendKeys(secondPage.emailInput, 'test@gmail.com');
        await secondPage.submitButton.click();
        await secondPage.waitForVisible(secondPage.stepsBlock.get(0), 7000);
        expect (await secondPage.stepsBlock.count()).toEqual(3);
        expect (await secondPage.getCurrentUrl()).toContain('pending');
            await secondPage.secondPageLink.click();
            await secondPage.waitForVisible(secondPage.downloadChapterButton);
            expect(await secondPage.getCurrentUrl()).toContain('2');

    });

    fit('when user scroll', async () => {
            await secondPage.scrollToElement(secondPage.bookSection);
            expect(await secondPage.bookContentSection.count()).toEqual(20);
            await secondPage.readTableContentButton.click();
            const windows = await browser.getAllWindowHandles();
            await browser.switchTo().window(windows[1]);
            await secondPage.waitForVisible(secondPage.pdfContent, 10000);
            expect(await secondPage.getCurrentUrl()).toContain('media/ng2/ng-book-2-table-of-contents.pdf');
            await browser.switchTo().window(windows[0]);
            await secondPage.scrollToElement(secondPage.infoCardSection);
            expect(await secondPage.infoEmailInput.isDisplayed()).toBeTruthy();
            expect(await secondPage.infoSubmitButton.isDisplayed()).toBeTruthy();
            await secondPage.infoSubmitButton.click();





    });




});