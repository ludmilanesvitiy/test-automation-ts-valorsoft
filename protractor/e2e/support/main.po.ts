import {$$, $, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";
import {PaymentPopupPo} from "./payment.popup.po";

export class MainPo extends BaseComponent {
    pageUrl = 'https://ng-book.com';

    headerRoutes: ElementArrayFinder = $$('ul.nav a');
    jumpToButton: ElementFinder = $('div.intro a');
    priceHeaders: ElementArrayFinder = $$('.pricing-table h3');
    getItButtons: ElementArrayFinder = $$('div.getit a');
    getItIframe: ElementFinder = $('iframe.gumroad-overlay-iframe');

    getCurrentPrice() {
        return $('.price').getText();
    }

    async openPaymentPopup() {
        await this.switchToiFrame(this.getItIframe);
        return new PaymentPopupPo();
    }
}