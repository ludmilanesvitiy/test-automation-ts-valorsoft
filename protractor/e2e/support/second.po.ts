import { $$, $, ElementArrayFinder, ElementFinder } from 'protractor';
import { BaseComponentsPo } from './base.component';

export class SecondPo extends BaseComponentsPo {
    pageUrl = "/2";
    headerLinks: ElementArrayFinder = $$('.nav-links a');
    downloadChapter: ElementFinder = $(".hero-cta");
    firstNameInput: ElementFinder = $(".greensboro-field-name");
    emailInput: ElementFinder = $(".greensboro-field-email");
    errorMessage: ElementArrayFinder = $$('.greensboro-error');
    submitButton: ElementFinder = $(".greensboro-field-submit");
    closeButton: ElementFinder = $(".greensboro-CloseButton");
    stepsBlock: ElementArrayFinder = $$("div .step");
    secondPageLink: ElementFinder = $(".navbar-brand");
    bookSection: ElementFinder = $(" .curriculum");
    readTableContentButton: ElementFinder = $('.curriculum-btn');
    pdfContent: ElementFinder = $('[src*="media/ng2/ng-book-2-table-of-contents.pdf"]');
    infoCardSection: ElementFinder = $('.info-card.too-good');
    infoInputEmail: ElementFinder = $(".infusion-field-input-container");
    infoSubmitButton: ElementFinder = $('.input-group-btn [type="submit"]');
    bookContentSection: ElementArrayFinder = $$('.curriculum-list-item');
    blogHeaderLink: ElementFinder = $('[href="http://blog.ng-book.com"]');
}