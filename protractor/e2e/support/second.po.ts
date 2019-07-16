import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class SecondPo extends BaseComponent {
    pageUrl: string = '2/';
    headerLinks: ElementArrayFinder = $$('.nav-links a');
    downloadFirstChapterBtn: ElementFinder = $('a[href="/downloads/ng-book/"]');
    popUpEmailField: ElementFinder = $('#greensboro-field-email');
    popUpNameField: ElementFinder = $('#greensboro-field-name');
    submitPopUpBtn: ElementFinder = $('[name="greensboro-submit"]');
    errorMessages: ElementArrayFinder = $$('.greensboro-error');
    bookContent: ElementFinder = $('#contents');
    contensListItems: ElementArrayFinder = $$('#contents .curriculum-list-item-name');
    readTableContentBtn: ElementFinder = $('#contents .curriculum-btn');
    pdfContent: ElementFinder = $('[src*="ng-book-2-table-of-contents.pdf"]');
    infoCardSection: ElementFinder = $('.info-card.too-good');
    infoEmailInpt: ElementFinder = $('#inf_field_Email');
    infoSubmitBtn: ElementFinder = $('.too-good [type=\'submit\']');
    blogHeaderLink: ElementFinder = $('[href="http://blog.ng-book.com"]');
}
