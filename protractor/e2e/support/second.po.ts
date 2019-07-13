import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {GetChapterPopupPo} from "./get.chapter.popup.po";
import {BlogPo} from "./blog.po";

export class SecondPo extends BaseComponent {
    pageUrl: string='https://ng-book.com/2/';

    headerLinks: ElementArrayFinder = $$('.nav-links a');
    blogLink: ElementArrayFinder = $$('a[href="http://blog.ng-book.com"]');
    downloadChapterButton: ElementFinder = $('.hero-cta');
    stepsBlock: ElementArrayFinder = $$('div.step');
    secondPageLink: ElementFinder = $('.navbar-brand');
    bookSection: ElementFinder = $('.curriculum');
    bookContentSection: ElementArrayFinder = $$(' .curriculum-list-item-name');
    readTableContentButton: ElementFinder = $('.curriculum-btn');
    pdfContent: ElementFinder = $('[src$="media/ng2/ng-book-2-table-of-contents.pdf"]');
    infoCardSection: ElementFinder = $('.info-card.too-good');
    infoEmailInput: ElementFinder = $('.infusion-field-input-container');
    infoSubmitButton: ElementFinder = $('.input-group-btn [type="submit"]');

    async openGetChapterPopup() {
        await this.downloadChapterButton.click();
        const getChapterPopupPo = new GetChapterPopupPo();
        await this.waitForVisible(getChapterPopupPo.firstNameInput);
        return new GetChapterPopupPo();
    }

    async openBlogPage() {
        await this.blogLink.click();
        const blogPo = new BlogPo();
        await this.waitForVisible(blogPo.articles.get(0));
        return new BlogPo();
    }
}