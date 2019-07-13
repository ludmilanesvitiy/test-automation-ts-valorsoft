import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class MainPo extends BaseComponent{

    pageUrl = '/';

    headerButtons: ElementArrayFinder = $$('ul.nav a');
    pricingTable: ElementArrayFinder = $$('.pricing-table h3');
    buyButtons: ElementArrayFinder = $$('div.getit a');
    priceElement: ElementFinder = $('.price');
    buyEmailField: ElementFinder = $('.payment-container [name="email"]');
    closeButton: ElementFinder = $('.changed_mind_button');
    getItIframe: ElementFinder = $('iframe.gumroad-overlay-iframe');

    getCurrentPrice() {
        return this.priceElement.getText();
    }
}