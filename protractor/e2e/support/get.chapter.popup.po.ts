import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class GetChapterPopupPo extends BaseComponent{
    pageUrl: string='https://ng-book.com/2/';

    firstNameInput: ElementFinder = $('.greensboro-field-name');
    emailInput: ElementFinder = $('.greensboro-field-email');
    submitButton: ElementFinder = $('.greensboro-field-submit');
    closeButton: ElementFinder = $('.greensboro-CloseButton');
    errorMessages: ElementArrayFinder = $$('.greensboro-error');


}