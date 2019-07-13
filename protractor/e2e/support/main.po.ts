import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponents} from "./base.components";

export class MainPo extends BaseComponents{
    pageUrl = '/';
    headerRoutes: ElementArrayFinder = $$('ul.nav a');
    PackagesButton: ElementFinder = $('div.intro a');
    PricingTable: ElementArrayFinder = $$('.pricing-table h3');
    getItButton: ElementArrayFinder = $$('div.getit a');
    iframePurchase: ElementFinder = $('iframe.gumroad-overlay-iframe');
    PaymentEmail: ElementFinder = $('.payment-container [name="email"]');
    price: ElementFinder = $('.price');
    closeButton: ElementFinder = $('.changed_mind_button ');


}