import {$$, $, element, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class SecondPo extends BaseComponent{
    pageUrl = '/2';
    downloadChapterButton: ElementFinder = $('.hero-cta');
    headerLinks: ElementArrayFinder = $$('.nav-links a')
    stepsBlock: ElementArrayFinder= $$('div.step');
    firstnameInput: ElementFinder = $('.greensboro-field-name');
    emailInput: ElementFinder = $('.greensboro-field-email');
    errorMassege: ElementArrayFinder =  $$('.greensboro-error');
    submitButton: ElementFinder = $('.greensboro-field-submit');
    popupCloseButton: ElementFinder = $('.greensboro-CloseButton');
    secondPageLink: ElementFinder = $('.navbar-brand');
    bookSection: ElementFinder = $('.curriculum');
    bookContentSection: ElementArrayFinder = $$('.curriculum-list-item');
    readTableContentButton: ElementFinder = $('.curriculum-btn');
    pdfContent: ElementFinder = $('[src*="media/ng2/ng-book-2-table-of-contents.pdf"]');
    infoCardSection: ElementFinder = $('.info-card.too-good');
    infoEmailInput: ElementFinder = $('.infusion-field-input-container');
    infoSubmitButton: ElementFinder = $ ('.input-group-btn [type="submit"]');
//home work
    menuItemBlog: ElementFinder= $ ('.nav-links a[href^="http"]');
    header: ElementArrayFinder = $$('.row h2');
    description: ElementArrayFinder = $$('.post-entry p:nth-child(1)');
    link: ElementArrayFinder = $$('h2 a');
    linkFirstPage: ElementFinder = $('a.paging-first');
    linkOne: ElementFinder = $('span.page-numbers');
    linkTwo: ElementFinder = $('a.page-numbers');
    linkNext: ElementFinder = $('.paging-next');
    linkLastPage: ElementFinder = $('.paging-last');
    blockPost: ElementFinder = $$('.post-group');
}










