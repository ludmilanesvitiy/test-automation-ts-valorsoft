import {BaseComponent} from "./base.component";

export class OrderRowPe extends BaseComponent {
    pageUrl: string = '';
    container: string = '#huc-v2-order-row-container';
    confirmTextElement: string = '#huc-v2-order-row-confirm-text';
    confirmTextEn: string = 'Added to Cart';
    totalPrice: string = this.container + ' .a-color-price';
    totalItems: string = '#huc-v2-order-row-container .huc-subtotal';
}
