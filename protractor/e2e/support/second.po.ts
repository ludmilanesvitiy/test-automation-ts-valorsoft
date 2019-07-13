import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class secondPo extends BaseComponent{
    pageUrl = '2/';
    headerButtons: ElementArrayFinder = $$('.nav-links a');
    downloadFirstChapterButton: ElementFinder = $('.hero-cta')
    firstNameInput: ElementFinder = $('.greensboro-field-name');
    emailInput: ElementFinder = $('.greensboro-field-email');
    submitButton: ElementFinder = $('.greensboro-field-submit');
    popUpCloseButton: ElementFinder = $('.greensboro-CloseButton');
    errorMessages: ElementArrayFinder = $$('.greensboro-error');
    steps: ElementArrayFinder = $$('div.step');
    secondPageLinkTo2: ElementFinder = $('.navbar-brand');
    bookContentBlock: ElementFinder = $('.curriculum');
    tableElements: ElementArrayFinder = $$('.curriculum-list-item-name');
    readFullBtn: ElementFinder = $('.curriculum-btn');
    pdfContent: ElementFinder = $('[src$="ng-book-2-table-of-contents.pdf"]');
    infoCard: ElementFinder = $ ('.info-card.too-good.container--narrow');
    infoCardEmailInput: ElementFinder = $('.infusion-field-input-container');
    infoCardSubmit: ElementFinder = $('.input-group-btn [type="submit"]');

}