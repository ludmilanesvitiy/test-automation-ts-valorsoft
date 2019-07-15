import {SecondPo} from "../support/second.po";
import {PendingPo} from "../support/pending.po";
import {browser} from "protractor";
import {BlogPo} from "../support/blog.po";

describe('test for second page', () => {
    const secondPage = new SecondPo();
    const pendingPage = new PendingPo();
    const blogPage = new BlogPo();

    const headerLinks = ['#contents', '#testimonials', 'http://blog.ng-book.com',
        '#get-it-now', '/modern-ng1/', '/'];
    beforeEach(async () => {
        await secondPage.navigateTo();
    });

    it('should contain links in header', async () => {
        for (let link of  headerLinks) {
            expect(await secondPage.headerLinks.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }
    });

    it('download free chapter error case', async () => {
        await secondPage.downloadFirstChapterBtn.click();
        await secondPage.waitForElementVisible(secondPage.popUpEmailField);
        await secondPage.sendKeys(secondPage.popUpNameField, 'John');
        await secondPage.sendKeys(secondPage.popUpEmailField, 'Doe');
        await secondPage.submitPopUpBtn.click();
        await secondPage.waitForElementVisible(secondPage.errorMessages.first());
        expect(await secondPage.errorMessages.count()).toEqual(2);
        expect(await secondPage.errorMessages.first().getText()).toContain('A valid email address is required');
        await secondPage.pressEscapeBtn();
        await secondPage.waitForElementInVisible(secondPage.popUpNameField);
        expect(await secondPage.popUpNameField.isDisplayed()).toBeFalsy();
    });

    it('download free chapter', async () => {
        await secondPage.downloadFirstChapterBtn.click();
        await secondPage.waitForElementVisible(secondPage.popUpEmailField);
        await secondPage.sendKeys(secondPage.popUpNameField, 'John');
        await secondPage.sendKeys(secondPage.popUpEmailField, 'john@doe.com');
        await secondPage.submitPopUpBtn.click();
        await pendingPage.waitForElementVisible(pendingPage.steps.first(), 7000);
        expect(await pendingPage.steps.count()).toBe(3);
        expect(await pendingPage.getCurrentUrl()).toContain(pendingPage.pageUrl);
        await pendingPage.secondPageUrl.click();
        await secondPage.waitForElementVisible(secondPage.downloadFirstChapterBtn);
        expect(await secondPage.getCurrentUrl()).toContain('2');
    });

    it('Count items in content section', async () => {
        await secondPage.scrollToElement(secondPage.bookContent);
        expect(await secondPage.contensListItems.count()).toEqual(20);
        await secondPage.readTableContentBtn.click();
        const windows = await browser.getAllWindowHandles();
        await browser.switchTo().window(windows[1]);
        await secondPage.waitForElementVisible(secondPage.pdfContent);
    });

    it('info card error case', async () => {
        await secondPage.scrollToElement(secondPage.infoCardSection);
        await secondPage.waitForElementVisible(secondPage.infoEmailInpt);
        await secondPage.infoSubmitBtn.click();
    });

    fit('should open page blog pages with articles', async () => {
        await secondPage.waitForElementVisible(secondPage.blogHeaderLink);
        await secondPage.blogHeaderLink.click();
        await blogPage.waitForElementVisible(blogPage.postClass.first());
        expect(await blogPage.getCurrentUrl()).toContain(blogPage.pageUrl);
        expect(await blogPage.postClass.count()).toEqual(20);
        await blogPage.scrollToElement(blogPage.paginationBlock);
        await blogPage.secondBlogPageLink.click();
        await secondPage.waitForElementVisible(blogPage.postClass.first());
        expect(await blogPage.getCurrentUrl()).toContain('page/2');
        expect(await blogPage.postClass.count()).toBeGreaterThan(1);
    });
});
