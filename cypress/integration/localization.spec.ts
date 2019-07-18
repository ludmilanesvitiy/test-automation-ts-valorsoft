/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";

describe('localisation test suit', () => {

    const homePage = new HomePo();
    let labelText: string;

    beforeEach(()=> {
        cy.visit('');
    });

    it('check localization default en language', () => {
        labelText = 'EN';
        homePage.isElemContainText(homePage.langLabel, labelText);
        cy.fixture('en_locale').then(enLocale => {
            homePage.isElemContainText(homePage.mainNavElem.department, enLocale.departments);
            homePage.isElemContainText(homePage.mainNavElem.greeting, enLocale.greetingText);
            homePage.isElemContainText(homePage.mainNavElem.account, enLocale.accountLists);
            homePage.isElemContainText(homePage.mainNavElem.orders, enLocale.orders);
            homePage.isElemContainText(homePage.mainNavElem.cart, enLocale.cart);
        });
    });

    it('check localization es language', () => {
        labelText = 'ES';
        const esLang = '[href="#switch-lang=es_US"]';

        homePage.hoverOnElem(homePage.langNavTool);
        homePage.isElemVisible(homePage.langDropdown);
        homePage.clickOnElem(esLang);

        cy.fixture('es_locale').then( esLocale => {
            homePage.isElemContainText(homePage.mainNavElem.department, esLocale.departments);
            homePage.isElemContainText(homePage.mainNavElem.greeting, esLocale.greetingText);
            homePage.isElemContainText(homePage.mainNavElem.account, esLocale.accountLists);
            homePage.isElemContainText(homePage.mainNavElem.orders, esLocale.orders);
            homePage.isElemContainText(homePage.mainNavElem.cart, esLocale.cart);
        });
    });

    it('check localization de language', () => {
        labelText = 'DE';
        const esLang = '[href="#switch-lang=de_DE"]';

        homePage.hoverOnElem(homePage.langNavTool);
        homePage.isElemVisible(homePage.langDropdown);
        homePage.clickOnElem(esLang);

        cy.fixture('de_locale').then( edLocale => {
            homePage.isElemContainText(homePage.mainNavElem.department, edLocale.departments);
            homePage.isElemContainText(homePage.mainNavElem.greeting, edLocale.greetingText);
            homePage.isElemContainText(homePage.mainNavElem.account, edLocale.accountLists);
            homePage.isElemContainText(homePage.mainNavElem.orders, edLocale.orders);
            homePage.isElemContainText(homePage.mainNavElem.cart, edLocale.cart);
        });
    });
});