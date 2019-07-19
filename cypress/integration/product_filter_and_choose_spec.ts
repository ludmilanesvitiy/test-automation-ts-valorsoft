/// <reference types="Cypress" />
import {HomePo} from "../support/home.po";
import {SearchDetailsPo} from "../support/searchDetails.po";
import {DealsPo} from "../support/deals.po";
import {GiftCardsPo} from "../support/giftCards.po";
import {GiftCardPo} from "../support/giftCard.po";

describe("Product filtering and adding to the wishlist", ()=>{
    const homePage = new HomePo();
    const searchDetailsPage = new SearchDetailsPo();
    const dealsPage = new DealsPo();
    const giftCardsPage = new GiftCardsPo();
    const giftCardPage = new GiftCardPo();

    beforeEach(()=>{
        cy.visit(homePage.pageUrl);
    });

    it('Product filtering by category check', ()=>{
        const productForSearch = 'mouse';
        const departmentName = 'Computers';
        const defaultFilter = 'Featured';

        homePage.clickOnElem(homePage.shopByCategoryLink);
        homePage.clickOnElem(homePage.computerDepLink);

        searchDetailsPage.isElemContainText(searchDetailsPage.departmentTitle, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.resultsCounter, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.sortDropdown, defaultFilter);

        searchDetailsPage.typeIntoElement(searchDetailsPage.searchInput, `${productForSearch} {enter}`);
        searchDetailsPage.isElemContainText(searchDetailsPage.afterSearchBreadcumb, departmentName);
        searchDetailsPage.isElemContainText(searchDetailsPage.afterSearchBreadcumb, productForSearch);
        //searchDetailsPage.clickOnElem(searchDetailsPage.searchIcon);
    });

    it('Check todays deals page', ()=>{
        const departmentName = 'Deals';
        const defaultFilter = 'Relevance';

        homePage.clickOnLinkText(homePage.dealLinkText);

        dealsPage.isElemContainText(dealsPage.departmentTitle, departmentName);
        dealsPage.isElemContainText(dealsPage.sortDropdown, defaultFilter);

        dealsPage.clickOnElem(dealsPage.dealOfTheDayLink);
        cy.get(dealsPage.dealsDetailsContainer).each(($el)=>{
            cy.wrap($el).within(()=>{
                dealsPage.isElemVisible(dealsPage.dealOfTheDayBadge);
            })
        })
    });

    it.only('Check Gift Cards page', ()=>{
        const price = '50';
        const addedToCart = 'Added to Cart';

        homePage.clickOnLinkText(homePage.giftCardsLinkText);

        cy.url().should('include', giftCardsPage.pageUrl);
        cy.get(giftCardsPage.giftContainers).each(($el)=>{
            cy.wrap($el).should('to.be.visible');
        })

        giftCardsPage.clickOnElem(giftCardsPage.giftContainers,0);

        cy.url().should('include', giftCardPage.pageUrl);
        giftCardPage.clickOnElem(giftCardPage.button50Dollars);

        cy.get(giftCardPage.button50Dollars).should('have.class', giftCardPage.selectedButton);
        giftCardPage.isElemContainText(giftCardPage.priceSpan, price);

        giftCardPage.clickOnElem(giftCardPage.shareButton);
        giftCardPage.clickOnElem(giftCardPage.addToCardButton);
        giftCardPage.isElemContainText(giftCardPage.addedToCardH1, addedToCart);
    });
});