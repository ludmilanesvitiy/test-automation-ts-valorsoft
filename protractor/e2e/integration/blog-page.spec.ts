import {SecondPo} from "../support/second.po";
import {BlogPo} from "../support/blog.po";
import {PaginatorPe} from "../support/paginator.pe";

describe('Blog page should have content', () => {
    const secondPage = new SecondPo();
    const blogPage = new BlogPo();
    const paginationElement = new PaginatorPe();
    const numberOfArticles: number = 20;

    it('user should be able to navigate from main page to blog', async () => {
        await secondPage.navigateTo();
        await secondPage.waitForElementVisible(secondPage.blogHeaderLink);
        await secondPage.blogHeaderLink.click();
        await blogPage.waitForElementVisible(blogPage.posts.first());
        expect(await blogPage.getCurrentUrl()).toContain(blogPage.pageUrl);
    });

    it('should see all 20 posts on first blog page', async () => {
        await blogPage.navigateTo();
        await blogPage.waitForElementVisible(blogPage.posts.first());
        expect(await blogPage.posts.count()).toBe(numberOfArticles);
    });

    it('Posts should not have empty content', async () => {
        await blogPage.navigateTo();
        await blogPage.waitForElementVisible(blogPage.posts.first());
        const postsCount = await blogPage.posts.count();
        for (let i = 0; i < postsCount; i++) {
            let header = blogPage.postHeaders.get(i);
            let entry = blogPage.postEntries.get(i);
            await blogPage.scrollToElement(entry);
            expect(await header.getText().toString().length).toBeGreaterThan(1, "One of posts headers is empty");
            expect(await entry.getText().toString().length).toBeGreaterThan(1, "One of posts entries is empty");
        }
        expect(await blogPage.postReadMoreBtns.count()).toBe(20);
    });

    it('pagination should be present', async () => {
        await blogPage.navigateTo();
        await blogPage.waitForElementVisible(blogPage.posts.first());
        await blogPage.scrollToElement(paginationElement.paginationBlock);
        expect(await paginationElement.paginationBlock.isPresent()).toBeTruthy();
        expect(await paginationElement.firstBtn.isDisplayed()).toBeTruthy();
        expect(await paginationElement.nextBtn.isDisplayed()).toBeTruthy();
        expect(await paginationElement.lastBtn.isDisplayed()).toBeTruthy();
        expect(await paginationElement.pageNumber.count()).toBe(2);
    });

    it('second blog page should contain at least one post', async () => {
        await blogPage.navigateTo()
        await blogPage.scrollToElement(paginationElement.paginationBlock);
        await blogPage.secondBlogPageLink.click();
        await secondPage.waitForElementVisible(blogPage.posts.first());
        expect(await blogPage.getCurrentUrl()).toContain('page/2');
        expect(await blogPage.posts.count()).toBeGreaterThan(0);
    });
});
