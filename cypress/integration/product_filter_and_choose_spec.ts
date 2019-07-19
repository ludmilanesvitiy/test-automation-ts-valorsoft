/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";
import {SearchDetailsPo} from "../support/searchDetails.po";

describe('Product filtering and adding to the wishlist', () => {
    const homePage = new HomePo();
    const searchDetailsPage = new SearchDetailsPo();

    beforeEach(() => cy.visit(homePage.pageUrl));

    it('Product filtering by category check', () => {
        const productForSearch = 'mouse';
        const departmentName = 'Computers';
        const defaultFilter = 'Featured';

        homePage.clickOnElem(homePage.shopByCategoryLink);
        homePage.clickOnElem(homePage.computerDepLink);

        searchDetailsPage.isElemContainText(searchDetailsPage.departmentTitle, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.resultsCounter, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.sortDropdown, defaultFilter );

        searchDetailsPage.typeIntoElement(searchDetailsPage.searchInput, `${productForSearch} {enter}`);
        searchDetailsPage.isElemContainText(searchDetailsPage.afterSearchBreadcumb, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.afterSearchBreadcumb, productForSearch);

    })

});