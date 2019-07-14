import {HomeTaskPo} from "../support/hometask.po";

describe('Hometask test', () => {
    const homeTask = new HomeTaskPo();
    beforeEach(async () => {
        await homeTask.navigateTo();
    });

    fit('Check articles and pagination navigation', async () => {

        expect(await homeTask.blogLink.getText()).toContain('BLOG');
        await homeTask.blogLink.click();
        await homeTask.waitForVisible(homeTask.articlesHeaders.get(0));
        expect(await homeTask.getCurrentUrl()).toContain('https://blog.ng-book.com/');
        expect(await homeTask.articlesHeaders.count()).toEqual(20);
        expect(await homeTask.articlesDescriptions.count()).toEqual(20);
        expect(await homeTask.articlesLinks.count()).toEqual(20);
        expect(await homeTask.pagingFirst.getText()).toContain('First Page');
        expect(await homeTask.pagingNext.getText()).toContain('Next');
        expect(await homeTask.pagingLast.getText()).toContain('Last Page');
        for (let i = 0; i < await homeTask.pageNumbers.count(); i++) {
            expect(await homeTask.pageNumbers.get(i).getText(i + 1)).toContain(i + 1)
        }
        await homeTask.pageNumbers.get(1).click();
        expect(await homeTask.getCurrentUrl()).toContain('/page/2/');
        expect(await homeTask.articlesHeaders.count()).not.toEqual(0);
    })
});

