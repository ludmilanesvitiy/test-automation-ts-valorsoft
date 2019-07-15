import {$$, $,ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class SecondPo extends BaseComponent{
    pageUrl = '/2';
    downloadChapterButton: ElementFinder = $('.hero-cta');
    headerLinks: ElementArrayFinder = $$('.nav-links a');
    firstNameInput: ElementFinder = $('.greensboro-field-name');
    emailInput: ElementFinder = $('.greensboro-field-email');
    errorMessage: ElementArrayFinder = $$('.greensboro-error');
    submitButton: ElementFinder = $('.greensboro-field-submit');
    popupCloseButton: ElementFinder = $('.greensboro-CloseButton');
    stepsBlock: ElementArrayFinder = $$('div.step');
    secondPageLink: ElementFinder = $('.navbar-brand');
    bookSection: ElementFinder = $('.curriculum');
    bookContentSection: ElementArrayFinder = $$('.curriculum-list-item');
    readTableContentButton: ElementFinder = $('.curriculum-btn');
    pdfContent: ElementFinder = $('[src*="media/ng2/ng-book-2-table-of-contents.pdf"]');
    infoCardSection: ElementFinder = $('.info-card.too-good');
    infoEmailInput: ElementFinder = $('.infusion-field-input-container');
    infoSubmitButton: ElementFinder = $('.input-group-btn [type="submit"]');

    blogHeaderButton: ElementFinder = $('ul.nav-links a:nth-child(3)');
    articles: ElementArrayFinder = $$('.post.post-group');
    articleHeader: ElementArrayFinder = $$('.post.post-group h2');
    articleDescription: ElementArrayFinder = $$('p:first-child');
    articleLink: ElementArrayFinder = $$('.post-entry .btn-more');
    footer: ElementFinder = $('div.paging');
    firstPage: ElementFinder = $('.paging-first');
    currentPage: ElementFinder = $('.page-numbers.current');
    secondPage: ElementFinder = $('.page-numbers [href$="page/2/"]');
    nextPage: ElementFinder = $('.paging-next');
    lastPage: ElementFinder = $('.paging-last');

}
