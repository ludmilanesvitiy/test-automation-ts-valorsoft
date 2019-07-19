/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";
import {SearchDetailsPagePo} from "../support/search-details-page.po";

describe('product filter and adding to the shop list', () => {

    const homePage = new HomePo();
    const searchDetailsPage = new SearchDetailsPagePo();

    beforeEach(()=> {
        cy.visit('');
    });

    it('search in computers page', () => {
        const productForSearch = 'mouse';
        const departmentName = 'Computers';
        const defaultFilter = 'Featured';

        homePage.clickOnElem(homePage.shopByCategoryLink);
        homePage.clickOnElem(homePage.computerDepLink);

        searchDetailsPage.isElemContainText(searchDetailsPage.departmentTitle, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.resultsCounter, departmentName);

        searchDetailsPage.isElemContainText(searchDetailsPage.sortDropdown, defaultFilter);

        searchDetailsPage.typeIntoElement(searchDetailsPage.searchInput, productForSearch);

        searchDetailsPage.clickOnElem(searchDetailsPage.searchIcon);

        searchDetailsPage.isElemContainText(searchDetailsPage.afterSearchBreadcumb, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.afterSearchBreadcumb, productForSearch);
    });
});
