import {BaseComponent} from "./base.component";

export class GiftCardPo extends BaseComponent {

    pageUrl: string = '';

    title: string = '#gc-asin-title';
    previewContainer: string = "#gc-live-preview-container";
    previewPrice: string = "#gc-live-preview-amount";
    oneHundredDollarsPicker = '#gc-mini-picker-amount-4[value="100"]';
    addToCartBtn: string = '#gc-buy-box-atc';
    buyBoxText: string = '#gc-buy-box-text';
    buyBoxPrice: string = this.buyBoxText + " span";
    recipientField: string = '#gc-recipient-field textarea';
}
