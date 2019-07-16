import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class BlogPo extends BaseComponent {

    private postClass: string = '.post-group';

    pageUrl: string = 'https://blog.ng-book.com/';
    posts: ElementArrayFinder = $$(this.postClass);
    postHeaders: ElementArrayFinder = $$(this.postClass + ' h2');
    postEntries: ElementArrayFinder = $$(this.postClass + ' .post-entry');
    postReadMoreBtns: ElementArrayFinder = $$(this.postClass + ' .btn-more');
    paginationBlock: ElementFinder = $('.paging')
    secondBlogPageLink: ElementFinder = $('.page-numbers [href$="page/2/"]');
}
