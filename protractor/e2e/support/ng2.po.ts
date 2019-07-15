import {$$, $, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class SecondPage extends BaseComponent{
    // Second page
    pageUrl = '/2'
    headerLinks: ElementArrayFinder = $$('.nav-links a');
    downloadFirstChapter: ElementFinder = $('.hero-cta');
    firstNameField: ElementFinder = $('.greensboro-field-name');
    emailField: ElementFinder = $('.greensboro-field-email');
    wrongEmailErrorMessage: string = 'A valid email address is required.';
    submitButton: ElementFinder = $('.greensboro-field-submit')
    fieldsWithError: ElementArrayFinder = $$('.greensboro-error');
    closeButton: ElementFinder = $('.greensboro-CloseButton');
    stepsBlock: ElementArrayFinder = $$('div.step');
    secondPageLink: ElementFinder = $('.navbar-brand');
    bookSection: ElementFinder = $('.curriculum');
    bookContentSection: ElementArrayFinder = $$('.curriculum-list-item-name');
    readFullButton: ElementFinder = $('.curriculum-btn');
    pdfContents: ElementFinder = $('[src$="/ng2/ng-book-2-table-of-contents.pdf"]');

    // Card section
    infoCardSection: ElementFinder = $('.info-card.too-good');
    infoEmailInput: ElementFinder = $('.infusion-field-input-container');
    infoSubmitButton: ElementFinder = $('.input-group-btn [type="submit"]');

    // Pdf file
    pdfFileLink: string = 'media/ng2/ng-book-2-table-of-contents.pdf';

    // Blog section
    blogButton: ElementFinder = $('a[href="http://blog.ng-book.com"]');
    blogLink: string = 'https://blog.ng-book.com/';
    postsList: ElementArrayFinder = $$('.posts-section header');
    navigationBar: ElementFinder = $('.paging');
    linkTosSecondPage: ElementFinder = $('a.page-numbers')


}