/// <reference types="Cypress" />
import {BaseComponent} from "./base.component";

export class GiftCardsPo extends BaseComponent{
    pageUrl = 'gift-cards';

    giftCards = '.bxc-grid__column.bxc-grid__column--4-of-12';
    eGiftCardTitle = '#gc-asin-title';
    giftAmount100Button = '#a-autoid-23 #gc-mini-picker-amount-4';
    amountButton100 = '#a-autoid-23';
    previewAmount = '#gc-live-preview-amount';
    buyBoxText = '#gc-buy-box-text';
    emailInput = '#gc-order-form-recipients';
    addToCartButton = '#gc-buy-box-atc';
    orderMessage = '#huc-v2-order-row-messages';
    cartCount = '#nav-cart-count';








}