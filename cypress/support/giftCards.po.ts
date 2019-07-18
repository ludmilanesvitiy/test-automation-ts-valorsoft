/// <reference types="Cypress" />
import { BaseComponent } from './base.component';

export class GiftCardsPo extends BaseComponent {
    pageUrl = '/gift-cards';
    giftCardPrintAtHome = `img[alt='Print-at-Home']`;
    giftPrice100 = '#a-autoid-25';
    cartTotalPrice = '#gc-buy-box .a-color-price';
    addToCartBtn = '#gc-buy-box-atc';
    addedToCartSuccessMsg = '#huc-v2-order-row-confirm-text';
}
