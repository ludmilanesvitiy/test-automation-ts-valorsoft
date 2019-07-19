/// <reference types="Cypress" />

import {BaseComponent} from "./base.component";

export class Product_routePo extends BaseComponent {
    pageUrl = '/gp/product/B07TMMZKBJ/';

    productUrl = 'product';
    onehundreddollars = '#gc-mini-picker-amount-4[value="100"]';
    shareviamessaging = 'gc-delivery-mechanism-button-Shareable-announce[value="Shareable"]';
    addtocartbtn = 'gc-buy-box-atc';
    checktext = '#huc-v2-order-row-confirm-text';
    confirmText = 'Added to Cart';
}