import {$$, ElementArrayFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class MainPo extends BaseComponent{
    pageUrl = '/';

    headerRoutes: ElementArrayFinder = $$('ul.nav a');
}
