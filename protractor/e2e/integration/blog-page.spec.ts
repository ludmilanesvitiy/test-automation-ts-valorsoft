import { BlogPo } from '../support/blog.po';
import { SecondPo } from '../support/second.po';
import {PaginationPo} from "../support/pagination.po";

describe("blog page", () => {
    const blogPage = new BlogPo();
    const secondPage = new SecondPo();
    const paginationElement = new PaginationPo();
    const numberOfArticles: number = 20;

    it('navigate from second page to blog', async () => {
        await secondPage.navigateTo();
        await secondPage.waitForElementVisible(secondPage.blogHeaderLink);
        await secondPage.blogHeaderLink.click();
        await blogPage.waitForElementVisible(blogPage.posts.first());
        expect(await blogPage.getCurrentUrl()).toContain(blogPage.pageUrl);
    });

    it('user see 20 articles with header, description and link', async () => {
        await secondPage.navigateTo();
        await secondPage.waitForElementVisible(secondPage.blogHeaderLink);
        await secondPage.blogHeaderLink.click();
        await blogPage.waitForElementVisible(blogPage.posts.first());
        expect(await blogPage.posts.count()).toBe(numberOfArticles);
        const postsCount = await blogPage.posts.count();
        for (let i = 0; i < postsCount; i++) {
            let header = blogPage.postHeaders.get(i);
            let entry = blogPage.postEntries.get(i);
            await blogPage.scrollToElement(entry);
            expect(await header.getText().toString().length).toBeGreaterThan(1, "headers is not empty");
            expect(await entry.getText().toString().length).toBeGreaterThan(1, "description is not empty");
        }
        expect(await blogPage.postReadMoreBtns.count()).toBe(20);
    });

    it('pagination', async () => {
        await secondPage.navigateTo();
        await secondPage.waitForElementVisible(secondPage.blogHeaderLink);
        await secondPage.blogHeaderLink.click();
        await blogPage.waitForElementVisible(blogPage.posts.first());
        await blogPage.scrollToElement(paginationElement.paginationBlock);
        //expect(await paginationElement.paginationBlock.isPresent()).toBeTruthy();
        expect(await paginationElement.firstBtn.isDisplayed()).toBeTruthy();
        expect(await paginationElement.nextBtn.isDisplayed()).toBeTruthy();
        expect(await paginationElement.lastBtn.isDisplayed()).toBeTruthy();
        expect(await paginationElement.pageNumber.count()).toBe(2);
    });

    it('second blog page is not empty', async () => {
        await secondPage.navigateTo();
        await secondPage.waitForElementVisible(secondPage.blogHeaderLink);
        await secondPage.blogHeaderLink.click();
        await blogPage.scrollToElement(paginationElement.paginationBlock);
        await blogPage.secondBlogPageLink.click();
        await secondPage.waitForElementVisible(blogPage.posts.first());
        expect(await blogPage.getCurrentUrl()).toContain('page/2');
        expect(await blogPage.posts.count()).toBeGreaterThan(0);
    });
});