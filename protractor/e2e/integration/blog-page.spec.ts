import {SecondPo} from "../support/second.po";
import {BlogPo} from "../support/blog.po";

describe('Blog page should have content', () => {
    const secondPage = new SecondPo();
    const blogPage = new BlogPo();

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
        expect(await blogPage.posts.count()).toBe(20);
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
        await blogPage.scrollToElement(blogPage.paginationBlock);
        expect(await blogPage.paginationBlock.isPresent()).toBeTruthy();
    });

    it('second blog page should contain at least one post', async () => {
        await blogPage.navigateTo()
        await blogPage.scrollToElement(blogPage.paginationBlock);
        await blogPage.secondBlogPageLink.click();
        await secondPage.waitForElementVisible(blogPage.posts.first());
        expect(await blogPage.getCurrentUrl()).toContain('page/2');
        expect(await blogPage.posts.count()).toBeGreaterThan(1);
    });
});
