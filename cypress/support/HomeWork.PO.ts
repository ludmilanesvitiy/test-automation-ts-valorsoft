///<reference types="Cypress" />

import {BaseComponent} from "./Base.component";

export class HomeWorkPO extends BaseComponent{
    pageUrl = '';
    giftCardsLinkFromMain = '[href*="nav_cs_gift_cards"]';
    giftCards = '.a-box-group.a-spacing-top-micro.acs_product-title';
    hundredDollarAmount = '#gc-mini-picker-amount-4';
    customAmount = '#gc-order-form-custom-amount';
    priceAmount = '#gc-live-preview-amount';
    addToCartBtn = '#gc-buy-box-atc';
    shareViaMSG = '#gc-delivery-mechanism-button-Shareable-announce';
    addedToCart = '#huc-v2-order-row-confirm-text';

}