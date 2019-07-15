import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class MainPo extends BaseComponent{
    pageUrl = '/'
    headerButtons: ElementArrayFinder = $$('ul.nav a');
    headerLinks: any = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    pricesArray: any = ['39', '79', '299'];
    prices: ElementArrayFinder = $$('.pricing-table h3');
    emailField: ElementFinder = $('.payment-container [name="email"]');
    jumpToPackegesButton: ElementFinder = $('div.intro a');
    getItButtons: ElementArrayFinder = $$('div.getit a');
    paymentEmail: ElementFinder = $('.payment-container [name="email"]');
    paymentIframe: ElementFinder = $('iframe.gumroad-overlay-iframe');
    paymentPrice: ElementFinder = $('.price');
    paymentCloseButton: ElementFinder = $('.changed_mind_button i');
}