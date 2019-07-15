import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class BlogPo extends BaseComponent {
    pageUrl: string = 'https://blog.ng-book.com/';
    postClass: ElementArrayFinder = $$('.post-group');
    paginationBlock: ElementFinder = $('.paging')
    secondBlogPageLink: ElementFinder = $('.page-numbers [href$="page/2/"]');

}