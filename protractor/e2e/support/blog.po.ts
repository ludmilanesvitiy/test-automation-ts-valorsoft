import {$$, $, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponents} from "./base.components";

export class BlogPo extends BaseComponents{
    pageUrl = '/2';
    blogHeaderLink: ElementFinder = $('a[href*="/blog"]');
    postsContentSection: ElementArrayFinder = $$('.col-md-4');
    postsHeader: ElementArrayFinder = $$('header h2');
    postsDescription: ElementArrayFinder = $$('.post-entry');
    postsReadMore: ElementArrayFinder = $$('a[href*="/blog.ng-book.com/"].btn-action ');
    pagination: ElementFinder = $('.paging');
    firstPage: ElementFinder = $('.paging-first');
    currentPage: ElementFinder = $('.page-numbers.current');
    page2: ElementFinder = $('a.page-numbers[href*="/page/2/"]');
    nextPage: ElementFinder = $('.paging-next');
    lastPage: ElementFinder = $('.paging-last');



}