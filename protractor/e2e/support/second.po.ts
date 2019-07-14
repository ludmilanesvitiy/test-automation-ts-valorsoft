import {$$, $, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponents} from "./base.components";

export class SecondPo extends BaseComponents{
    pageUrl = '/2';
    downloadChapterButton: ElementFinder = $('.hero-cta');
    headerLinks: ElementArrayFinder = $$('.nav-links a');
    FirstNameInput: ElementFinder = $('.greensboro-field-name');
    emailInput: ElementFinder = $('.greensboro-field-email');
    errorMessage: ElementArrayFinder = $$('.greensboro-error');
    submitButton: ElementFinder = $('.greensboro-field-submit ');
    popupCloseButton: ElementFinder = $('.greensboro-CloseButton');
    stepsBlock: ElementArrayFinder = $$ ('.steps-container .col-sm-4');
    secondPageLink: ElementFinder = $('.navbar-brand');
    bookSection: ElementFinder = $('.curriculum');
    bookContentSection: ElementArrayFinder = $$('.curriculum-list-item');
    readTableContentButton: ElementFinder = $('.curriculum-btn');
    pdfContent: ElementFinder = $('[src*="https://ng-book.com/media/ng2/ng-book-2-table-of-contents.pdf"]')
    infoCardSection: ElementFinder = $('.info-card.too-good');
    infoEmailInput: ElementFinder = $('.infusion-field-input-container');
    infoSubmitButton: ElementFinder = $('.input-group-btn [type="submit"]');


}