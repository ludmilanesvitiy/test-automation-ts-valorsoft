import {BaseComponent} from "./base-component";

export class GiftCardPo extends BaseComponent {

    pageUrl = '/gift-cards/';

    giftCardsLinks = 'div > [title*="Card"].a-link-normal';
}