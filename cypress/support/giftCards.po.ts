/// <reference types="Cypress" />
import { BaseComponent } from './base.component';

export class GiftCardsPo extends BaseComponent {
    pageUrl = 'gift-cards';

    giftContainers = '.bxc-grid__column--4-of-12';
}