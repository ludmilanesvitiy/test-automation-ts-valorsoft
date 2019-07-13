import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class BlogPo extends BaseComponent {
    pageUrl = 'https://blog.ng-book.com/';

    articles: ElementArrayFinder = $$('.post-group');
    headers: ElementArrayFinder = $$('.post-group h2');
    descriptions: ElementArrayFinder = $$('.post-group  .post-entry');
    links: ElementArrayFinder = $$('.post-group  h2 a');
    firstPageLink: ElementFinder = $('.paging-first');
    onePageLink: ElementFinder = $('span.page-numbers');
    twoPageLink: ElementFinder = $('a.page-numbers');
    nextPageLink: ElementFinder = $('.paging-next');
    lastPageLink: ElementFinder = $('.paging-last');
}
