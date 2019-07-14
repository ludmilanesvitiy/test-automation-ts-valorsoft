import { BlogPo } from '../support/blog.po';
import { SecondPo } from '../support/second.po';

describe("tests for blog page", () => {
    const blogPage = new BlogPo();
    const secondPage = new SecondPo();

    beforeEach(async () => {
        await secondPage.navigateTo();
        await secondPage.headerMenuBlog.click();
    });

    it("when user click on blog redirect to the pending page", async () => {
        const expectedArticlesNumber = 20;
        expect(await blogPage.getCurrentUrl()).toContain('blog.ng-book.com');
        expect(await blogPage.postsSection.isDisplayed()).toBeTruthy();
        expect(await blogPage.article.count()).toEqual(expectedArticlesNumber);
        expect(await blogPage.articleTitle.count()).toEqual(expectedArticlesNumber);
        expect(await blogPage.articleDescription.count()).toEqual(expectedArticlesNumber);
        expect(await blogPage.articleReadMore.count()).toEqual(expectedArticlesNumber);
        await blogPage.scrollToElement(blogPage.pagingBlock);
        expect(await blogPage.pagingLast.isDisplayed()).toBeTruthy();
        expect(await blogPage.pagingNext.isDisplayed()).toBeTruthy();
        expect(await blogPage.pagingFirst.isDisplayed()).toBeTruthy();
        expect(await blogPage.pagingSecond.isDisplayed()).toBeTruthy();
        await blogPage.pagingSecond.click();
        await blogPage.waitForVisible(blogPage.postsSection);
        expect(await blogPage.getCurrentUrl()).toContain('page/2/');
        expect(await blogPage.article.count()).toBeGreaterThan(0);
    });
});
