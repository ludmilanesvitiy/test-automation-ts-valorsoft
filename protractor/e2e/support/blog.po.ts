import { $$, $, ElementArrayFinder, ElementFinder } from 'protractor';
import { BaseComponentsPo } from './base.components.po';

export class BlogPo extends BaseComponentsPo {
    pageUrl = '';
    postsSection: ElementFinder = $(".posts-section");
    article: ElementArrayFinder = $$(".post-group");
    articleTitle: ElementArrayFinder = $$(".post-group h2");
    articleReadMore: ElementArrayFinder = $$("a.btn-action ");
    articleDescription: ElementArrayFinder = $$(".post-entry p:first-child");
    pagingBlock: ElementFinder = $(".paging");
    pagingFirst: ElementFinder = $(".paging-first");
    pagingLast: ElementFinder = $(".paging-last");
    pagingNext: ElementFinder = $(".paging-next");
    pagingSecond: ElementFinder = $(".page-numbers a");
}
