import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class SecondPo extends BaseComponent{
    pageUrl: string =  '/2';

    headerLinks: ElementArrayFinder = $$('.nav-links');
    downloadChapterButton: ElementFinder = $('.hero-cta');
    fieldNameInput: ElementFinder = $('#greensboro-field-name');
    filedEmailInput: ElementFinder = $('#greensboro-field-email');
    emailErrorMessage: ElementArrayFinder = $$('.greensboro-error');
    submitButton: ElementFinder = $('.greensboro-field-submit');
    closeButton: ElementFinder = $('.greensboro-CloseButton');
    stepBlocks: ElementArrayFinder = $$('div .step');
    fullStuckLink: ElementFinder = $('.navbar-brand');
    bookTabElement: ElementFinder = $('.curriculum-list');
    bookItemElement: ElementArrayFinder = $$('.curriculum-list-item');
    fullbutton: ElementFinder = $('.curriculum-btn.btn-action');
    pdf: ElementFinder = $('[src$="ng-book-2-table-of-contents.pdf"]');
    toGoodInfoSection: ElementFinder = $('.too-good');
    infoSectionEmail: ElementFinder = $('#inf_field_Email');
    infoSectionButton: ElementFinder = $('.input-group-btn');

}