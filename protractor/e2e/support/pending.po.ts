import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class PendingPo extends BaseComponent {
    pageUrl: string = 'pending/';
    steps: ElementArrayFinder = $$('.step');
    secondPageUrl: ElementFinder = $('.navbar-brand');
}
