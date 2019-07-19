import {HomePo} from "../support/home.po";
import {SearchDetailsPo} from "../support/searchDetails.po";

describe('Product filtering and adding to wishlist', () => {
    const homePage = new HomePo();
    const searchDeatilsPage = new SearchDetailsPo()

    beforeEach(() => {
        cy.visit(homePage.pageUrl);
    })

    it('Product filtering by category check', () => {
        const productForSearch = 'mouse';
        const departmentName = 'Computers';
        const defaultFilter = 'Featured'

        homePage.clickOnElem(homePage.shopByCategoryLink);
        homePage.clickOnElem(homePage.computerDepLink);
        searchDeatilsPage.isElemContainText(searchDeatilsPage.departmentTitle, departmentName);
        searchDeatilsPage.isElemContainText(searchDeatilsPage.resultsCounter, departmentName);
        searchDeatilsPage.isElemContainText(searchDeatilsPage.sortDropdown, defaultFilter);
        searchDeatilsPage.typeIntoElement(searchDeatilsPage.searchInput, `${productForSearch} {enter}`);
        searchDeatilsPage.isElemContainText(searchDeatilsPage.afterSearchBreadcumb, departmentName);
        searchDeatilsPage.isElemContainText(searchDeatilsPage.afterSearchBreadcumb, productForSearch);



    });

});