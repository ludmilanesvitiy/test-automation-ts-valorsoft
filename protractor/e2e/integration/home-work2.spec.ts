import {SecondPage} from "../support/secondPage";
import {BlogPage} from "../support/blog-page.po";
import {element} from "protractor";

describe('home work 2', () => {

    const secondPage = new SecondPage();
    const blogPage = new BlogPage();

    fit('check open article', async () => {
        await secondPage.navigateTo();
        await secondPage.blogHeaderLink.click();

        //check that we on blog page
        await secondPage.waitForVisible(blogPage.postSection);
        expect(await secondPage.getCurrentUrl()).toEqual(blogPage.pageUrl);

        // check article count
        expect(await blogPage.article.count()).toEqual(20);
        for (let i = 1; i <= 20; i++) {
            // check that each article have header description and link
            expect(element('.col-md-4:nth-of-type(' + i + ') header').isPresent).toBeTruthy();
            expect(element('.col-md-4:nth-of-type(' + i + ') p:nth-of-type(1)').isPresent).toBeTruthy();
            expect(element('.col-md-4:nth-of-type(' + i + ') p:nth-of-type(2)').isPresent).toBeTruthy();
        }
        await blogPage.waitForVisible(blogPage.navigationPaginator);
        await blogPage.secondBlogPage.click();

        // check that we on second page
        expect(await blogPage.article.count()).toBeGreaterThan(0);
        expect(await secondPage.getCurrentUrl()).toEqual(blogPage.pageUrl + 'page/2/');

    })
});