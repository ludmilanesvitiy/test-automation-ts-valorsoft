/// <reference types="Cypress" />

import {BaseComponent} from "./base.component";

export class GiftCardPo extends BaseComponent {
    pageUrl = '/dp';

    giftAmmount50 = '#a-autoid-21';
    previewPrice = '#gc-buy-box-text .a-color-price';
    shareViaMessage= '#gc-delivery-mechanism-button-Shareable-announce';
    addToCardButton = '#gc-buy-box-atc';
    addedToCard = '#huc-v2-order-row-confirm-text h1';

}