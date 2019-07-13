import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {PaymentPopupPo} from "./payment.popup.po";
import {GetChapterPopupPo} from "./get.chapter.popup.po";

export class SecondPo extends BaseComponent {
    pageUrl: string='https://ng-book.com/2/';

    headerLinks: ElementArrayFinder = $$('.nav-links a');
    downloadChapterButton: ElementFinder = $('.hero-cta');
    firstNameInput: ElementFinder = $('.greensboro-field-name');
    emailInput: ElementFinder = $('.greensboro-field-email');
    submitButton: ElementFinder = $('.greensboro-field-submit');
    closeButton: ElementFinder = $('.greensboro-CloseButton');
    errorMessages: ElementArrayFinder = $$('.greensboro-error');
    stepsBlock: ElementArrayFinder = $$('div.step');
    secondPageLink: ElementFinder = $('.navbar-brand');
    bookSection: ElementFinder = $('.curriculum');
    bookContentSection: ElementArrayFinder = $$(' .curriculum-list-item-name');
    readTableContentButton: ElementFinder = $('.curriculum-btn');
    pdfContent: ElementFinder = $('[src$="media/ng2/ng-book-2-table-of-contents.pdf"]');
    infoCardSection: ElementFinder = $('.info-card.too-good');
    infoEmailInput: ElementFinder = $('.infusion-field-input-container');
    infoSubmitButton: ElementFinder = $('.input-group-btn [type="submit"]');

    async openGetChapterPopup() {
        await this.downloadChapterButton.click();
        await this.waitForVisible(this.firstNameInput);
        return new GetChapterPopupPo();
    }
}