/// <reference types="Cypress" />
import { BaseComponent } from './base.component';

export class GiftCardPo extends BaseComponent {
    pageUrl = 'dp';

    button50Dollars = '#a-autoid-21';
    selectedButton = 'a-button-selected';
    priceSpan = '#gc-buy-box-text .a-color-price';
    addToCardButton = '#gc-buy-box-atc';
    addedToCardH1 = '#huc-v2-order-row-confirm-text h1';
    shareButton = '#gc-delivery-mechanism-button-Shareable-announce';
}