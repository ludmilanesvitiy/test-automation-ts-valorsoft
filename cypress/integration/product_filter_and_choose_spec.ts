///<reference types="Cypress" />

import {HomePO} from "../support/Home.PO";
import {SearcDetailsPO} from "../support/SearcDetails.PO";

describe('Product filtering and adding to the wish list', () => {
    const HP = new HomePO();
    const SDP = new SearcDetailsPO();
    let labelText: string;

    beforeEach(() => cy.visit(HP.pageUrl));

    it('Product filter and by category check', () => {
        const productForSearch = 'mouse';
        const depName = 'Computers';
        const defaultFilter = 'Featured';

        HP.clickOnElem(HP.shopByCategoryLink);
        HP.clickOnElem(HP.computerDepLink);

        SDP.isElemContainText(SDP.departmentTitle, depName);
        SDP.isElemContainText(SDP.resultsCounter, depName);
        SDP.isElemContainText(SDP.sortDropdown, defaultFilter);

        SDP.sendKeysToElement(SDP.searchInput, productForSearch + ' {enter}');
       // SDP.sendKeysToElement(SDP.searchInput, `${productForSearch} {enter}`);
        SDP.isElemContainText(SDP.afterSearchBreadcumb, depName);
        SDP.isElemContainText(SDP.afterSearchBreadcumb, productForSearch);
    });
});