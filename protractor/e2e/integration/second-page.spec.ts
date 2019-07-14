import {$$, browser, $, ExpectedConditions, protractor, ElementFinder} from "protractor";
import {MainPo} from "../support/main.po";
import {SecondPo} from "../support/second.po";

describe('tests for second page', ()=> {
   const secondPage = new SecondPo()
    const headerLinks = ['#contents', '#testimonials', 'http://blog.ng-book.com',
        '#get-it-now', '/modern-ng1/', '/'];
   const bottomPages = ['First Page', '1','2', 'Next','Last Page']

    beforeEach(async ()=>{
        await secondPage.navigateTo();

    });

    it('check header links',async ()=> {
        for (let link of headerLinks) {
            expect(await secondPage.headerLinks.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);

        }
    });




       it('check download the first chapter popup error message',async ()=> {
            await secondPage.downloadChapterButton.click();
            await secondPage.waitForVisible(secondPage.emailInput);
            expect(await secondPage.FirstNameInput.isDisplayed()).toBeTruthy();
            await secondPage.sendKeys(secondPage.FirstNameInput, 'Oleg');
            await secondPage.sendKeys(secondPage.emailInput, 'test');
            await secondPage.submitButton.click();
            browser.sleep(10000);
            expect(await secondPage.errorMessage.count()).toEqual(2);
            expect(await secondPage.errorMessage.get(0).getText()).toContain('A valid email address is required.');
            await secondPage.popupCloseButton.click();
            await secondPage.waitForInVisible(secondPage.FirstNameInput);
            expect(await secondPage.FirstNameInput.isDisplayed()).toBeFalsy();

        });

            it('check the redirection if user clicks on Submit of Send my free chapter popup',async () => {
                await secondPage.downloadChapterButton.click();
                await secondPage.waitForVisible(secondPage.FirstNameInput);
                await secondPage.sendKeys(secondPage.FirstNameInput, 'Oleg');
                await secondPage.sendKeys(secondPage.emailInput, 'test@test.test');
                await secondPage.submitButton.click();
                await secondPage.waitForVisible(secondPage.stepsBlock.get(0), 7000);
                expect(await secondPage.stepsBlock.count()).toEqual(3);
                expect(await secondPage.getCurrentUrl()).toContain('pending');
                await secondPage.secondPageLink.click();
                await secondPage.waitForVisible(secondPage.downloadChapterButton);
                expect(await secondPage.getCurrentUrl()).toContain('2');

            });


    it('when user scrolls to Book Contents',async () => {
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