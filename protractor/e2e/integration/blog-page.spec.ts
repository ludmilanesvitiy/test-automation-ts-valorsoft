import {$$, browser, $, ExpectedConditions, protractor} from "protractor";
import {MainPo} from "../support/main.po";
import {BlogPo} from "../support/blog.po";

describe('tests for Blog page', ()=> {
    const BlogPage = new BlogPo();

    beforeEach(async ()=>{
        await BlogPage.navigateTo();

    });


    fit('check the redirection to the 2nd page on Blog page',async () => {
        await BlogPage.blogHeaderLink.click();
        expect(await BlogPage.getCurrentUrl()).toContain('blog.ng-book.com');
        expect(await BlogPage.postsContentSection.count()).toEqual(20);
        expect(await BlogPage.postsHeader.count()).toEqual(20);
        expect(await BlogPage.postsDescription.count()).toEqual(20);
        expect(await BlogPage.postsReadMore.count()).toEqual(20);
        await BlogPage.waitForVisible(BlogPage.pagination);
        expect(await BlogPage.firstPage.isDisplayed()).toBeTruthy();
        expect(await BlogPage.currentPage.isDisplayed()).toBeTruthy();
        expect(await BlogPage.page2.isDisplayed()).toBeTruthy();
        expect(await BlogPage.nextPage.isDisplayed()).toBeTruthy();
        expect(await BlogPage.lastPage.isDisplayed()).toBeTruthy();
        await BlogPage.page2.click();
        expect(await BlogPage.getCurrentUrl()).toContain('page/2/');
        expect(await BlogPage.postsContentSection.isDisplayed()).toBeTruthy();
        expect(await BlogPage.postsContentSection.count()).toBeGreaterThan(0);


    });
});