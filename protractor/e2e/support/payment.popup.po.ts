import {$$, $, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";
import {MainPo} from "./main.po";

export class PaymentPopupPo extends BaseComponent{
    pageUrl = 'https://ng-book.com';

    paymentContainerEmail: ElementFinder = $('.payment-container [name="email"]');
    closeButton: ElementFinder = $('.changed_mind_button i');

    getCurrentPrice() {
        return $('.price').getText();
    }

    async closePaymentPopup(){
        await this.closeButton.click();
    }
}