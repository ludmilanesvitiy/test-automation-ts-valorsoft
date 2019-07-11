import {$$, ElementArrayFinder} from "protractor";
import {BaseComponent} from "./base.component";

export class MainPo extends BaseComponent{
    headerButtons: ElementArrayFinder = $$('ul.nav a');
    pageUrl = '/';
}