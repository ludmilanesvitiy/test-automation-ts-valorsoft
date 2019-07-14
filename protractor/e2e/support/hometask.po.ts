import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class HomeTaskPo extends BaseComponent {
    pageUrl = '/2';
    blogLink: ElementFinder = $('a.nav-link[href$="book.com"]');
    articlesHeaders: ElementArrayFinder = $$('header h2');
    articlesDescriptions: ElementArrayFinder = $$('.post-entry p:nth-child(1)');
    articlesLinks: ElementArrayFinder = $$('.post-entry p:nth-child(1) a');
    pagingFirst: ElementFinder = $('.paging-first');
    pagingNext: ElementFinder = $('.paging-next');
    pagingLast: ElementFinder = $('.paging-last');
    pageNumbers: ElementArrayFinder = $$('li .page-numbers');


}
