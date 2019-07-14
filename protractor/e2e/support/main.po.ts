import { $$, $, ElementArrayFinder, ElementFinder } from 'protractor';
import { BaseComponentsPo } from './base.components.po';

export class MainPo extends BaseComponentsPo {
    pageUrl = "/";
    headerButtons: ElementArrayFinder = $$("ul.nav a");
    getItIframe: ElementFinder = $('iframe.gumroad-overlay-iframe');
    jumpToButton: ElementFinder = $('div.intro a');
    priceHeaders: ElementArrayFinder = $$('.pricing-table h3');
    getItButtons: ElementArrayFinder = $$('div.getit a');
    paymentContainerEmail: ElementFinder = $('.payment-container [name="email"]');
    closeButton: ElementFinder = $('.changed_mind_button i');

    getCurrentPrice() {
        return $('.price').getText();
    }
}
