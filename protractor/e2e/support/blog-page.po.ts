import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class BlogPage extends BaseComponent {
    pageUrl: string = 'https://blog.ng-book.com/';

    postSection: ElementFinder = $('.section.posts-section');
    article: ElementArrayFinder = $$('.post-group');
    navigationPaginator: ElementFinder = $('.paging');
    secondBlogPage: ElementFinder = $('.page-numbers [href*="page/2"]');

}