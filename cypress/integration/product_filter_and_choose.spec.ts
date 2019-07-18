/// <reference types="Cypress" />
import { HomePo } from '../support/home.po';
import { SearchDetailsPo } from '../support/searchDetails.po';
import { DealsPo } from '../support/deals.po';

describe('Product filtering and choosing product', () => {
    const homePage = new HomePo();
    const searchDetailsPage = new SearchDetailsPo();


    beforeEach(() => cy.visit(homePage.pageUrl));

    it('Product filtering by category check', () => {
        const productForSearch = 'mouse';
        const departmentName = 'Computers';
        const defaultFilter = 'Featured'

        homePage.clickOnElem(homePage.shopByCategoryLink);
        homePage.clickOnElem(homePage.computerDepLink);

        searchDetailsPage.isElemContainText(searchDetailsPage.departmentTitle, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.resultsCounter, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.sortDropdown, defaultFilter);

        searchDetailsPage.typeIntoElement(searchDetailsPage.searchInput, `${productForSearch} {enter}`);

        searchDetailsPage.isElemContainText(searchDetailsPage.afterSearchBreadcumb, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.afterSearchBreadcumb, productForSearch);
    });

    it('Product filtering by deal type', () => {
        const dealsPage = new DealsPo();
        const defaultSortOpt = 'Relevance';
        const dealsTitleText = 'Deals';

        homePage.clickOnElemWithText(homePage.headerNavLinks, homePage.dealLinkText);

        dealsPage.isElemContainText(dealsPage.pageTitle, dealsTitleText);
        dealsPage.isElemContainText(dealsPage.sortDropdown, defaultSortOpt);

        dealsPage.clickOnElem(dealsPage.dealOfTheDayFilter);

        dealsPage.isProdHasLabel(dealsPage.productCard, dealsPage.dealOfDayLabel);
    });
});
