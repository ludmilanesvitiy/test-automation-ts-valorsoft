import {ElementArrayFinder, $$} from "protractor";
import {BaseComponent} from "./base.component";

export class MainPo extends BaseComponent {
    pageUrl: string = "/";
    headerRoutes: ElementArrayFinder = $$('ul.nav a');
}