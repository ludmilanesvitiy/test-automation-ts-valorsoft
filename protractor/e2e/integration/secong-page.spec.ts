import { SecondPo} from "../support/second.po";
import {browser} from "protractor";

describe('tests for second page', ()=> {

    const secondPage = new SecondPo();
    const headerLinks = ['#contents', '#testimonials', 'http://blog.ng-book.com',
        '#get-it-now', '/modern-ng1/', '/'];

    beforeEach( async ()=> {
       await  secondPage.navigateTo();
    });

   it('check header links',async () => {
       for (let link of headerLinks) {
           expect(await secondPage.headerLinks.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
       }
   });

    it('check popup',async () => {
        await secondPage.downloadChapterButton.click();
        await secondPage.waitForVisible(secondPage.firstNameInput);
        expect(await secondPage.firstNameInput.isDisplayed()).toBeTruthy();
        await secondPage.sendKeys(secondPage.firstNameInput, 'Oleg');
        await secondPage.sendKeys(secondPage.emailInput, 'test');
        await secondPage.submitButton.click();
        expect(await secondPage.errorMessage.count()).toEqual(2);
        expect(await secondPage.errorMessage.get(0).getText()).toContain('A valid email address is required.');
        await secondPage.popupCloseButton.click();
        await secondPage.waitForInVisible(secondPage.firstNameInput);
        expect(await secondPage.firstNameInput.isDisplayed()).toBeFalsy();
    });

    it('when user click on submit redirect to the pending page',async () => {
        await secondPage.downloadChapterButton.click();
        await secondPage.waitForVisible(secondPage.firstNameInput);
        await secondPage.sendKeys(secondPage.firstNameInput, 'Oleg');
        await secondPage.sendKeys(secondPage.emailInput, 'test@test.test');
        await secondPage.submitButton.click();
        await secondPage.waitForVisible(secondPage.stepsBlock.get(0), 7000);
        expect(await secondPage.stepsBlock.count()).toEqual(3);
        expect(await secondPage.getCurrentUrl()).toContain('pending');
        await secondPage.secondPageLink.click();
        await secondPage.waitForVisible(secondPage.downloadChapterButton);
        expect(await secondPage.getCurrentUrl()).toContain('2');
    });

    it('check book content',async () => {
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


    fit('Homework 2: check amount of articles in the Blog', async () => {
        await secondPage.blogHeaderButton.click();
        expect (await secondPage.getCurrentUrl()).toContain('/blog.ng-book.com/');
        expect (await secondPage.articles.count()).toEqual(20);
        expect (await secondPage.articleHeader.count()).toEqual(20);
        expect (await secondPage.articleDescription.count()).toEqual(20);
        expect (await secondPage.articleLink.count()).toEqual(20);
        await secondPage.scrollToElement(secondPage.footer);
        expect (await secondPage.firstPage.isPresent()).toBeTruthy();
        expect (await secondPage.currentPage.isPresent()).toBeTruthy();
        expect (await secondPage.secondPage.isPresent()).toBeTruthy();
        expect (await secondPage.nextPage.isPresent()).toBeTruthy();
        expect (await secondPage.lastPage.isPresent()).toBeTruthy();
        await secondPage.secondPage.click();
        expect (await secondPage.getCurrentUrl()).toContain('/page/2');
        expect (await secondPage.articles.count()).toBeGreaterThan(0);
    })

});