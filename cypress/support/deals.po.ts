/// <reference types="Cypress" />
import { BaseComponent } from './base.component';

export class DealsPo extends BaseComponent {
    pageUrl = 'international-sales-offers/b/?node=15529609011';

    departmentTitle = 'h1>b';
    sortDropdown = '.a-native-dropdown';
    dealsDetailsContainer = '.dealDetailContainer';
    dealOfTheDayBadge = '.dotdBadge';
    dealOfTheDayLink = '[data-value="DEAL_OF_THE_DAY"]';
}