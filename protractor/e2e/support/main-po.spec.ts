import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class MainPo extends BaseComponent{
    pageUrl = '/';

    headerRoutes: ElementArrayFinder = $$('ul.nav a');
    jumpToButton: ElementFinder = $('div.intro a');
    priceHeaders: ElementArrayFinder = $$('.pricing-table h3');
    getItButtons: ElementArrayFinder = $$('div.getit a');
    getItIframe: ElementFinder = $('iframe.gumroad-overlay-iframe');
    paymentContainerEmail: ElementFinder = $('.payment-container [name="email"]');
    closeButton: ElementFinder = $('.changed_mind_button i');

    getCurrentPrice() {
        return $('.price').getText();
    }
}