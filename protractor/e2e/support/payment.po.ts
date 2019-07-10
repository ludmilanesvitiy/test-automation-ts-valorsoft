import {$, browser, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class PaymentPo extends BaseComponent {

    static prices = ['39', '79', '299'];

    switchToPurchaseIframe() {
        browser.switchTo().frame($('iframe.gumroad-overlay-iframe').getWebElement());
    };

    paymentContainer: ElementFinder = $(".payment-container");
    emailField: ElementFinder = $(".payment-container [name=\'email\']");
    price: ElementFinder = $(".price");
    pageUrl: string = '#';
    changedMindBtn: ElementFinder = $('.changed_mind_button i');
}