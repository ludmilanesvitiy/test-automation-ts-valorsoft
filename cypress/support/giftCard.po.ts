
/// <reference types="Cypress" />
import { BaseComponent } from './base.component';

export class GiftCardsPo extends BaseComponent {
    pageUrl = '';
    giftCardLink = '[href*="nav_cs_gift_cards"]';
    giftCardUrl = '/gift-cards';
    eGift = `img[alt='eGift']`;
    prise100 = '#gc-mini-picker-amount-4';
    emailField = '#gc-order-form-recipients';
    totalPrice = '#gc-buy-box .a-color-price';
    addToCartButton = '#gc-buy-box-atc';
    addedToCart = '#huc-v2-order-row-confirm-text';
}