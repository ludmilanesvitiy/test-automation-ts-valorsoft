import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class MainPo extends BaseComponent {
    static title: string = 'ng-book: The Complete Book on AngularJS';
    static headerLinks = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];

    pageUrl: string = "/";
    headerRoutes: ElementArrayFinder = $$('ul.nav a');
    jumpToPackagesBtn: ElementFinder = $('div.intro a');
    getItBtns: ElementArrayFinder = $$('div.getit a');
    packagesPrices: ElementArrayFinder = $$('.pricing-table h3');


}