/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";

describe("Localization test suite", () => {
    const homePage = new HomePo();
    let lableText;
    const esLang = '[href="#switch-lang=es_US"]';
    const deLang = '[href="#switch-lang=de_DE"]';

    beforeEach(() => {
        cy.visit('')
    });
    // it('EN localization should be default', () => {
    //     lableText = 'EN';
    //     homePage.isElemContainText(homePage.langLabel, lableText);
    //     cy.fixture('en_local').then(enLocale => {
    //         homePage.isElemContainText(homePage.mainNavElem.department, enLocale.departments);
    //         homePage.isElemContainText(homePage.mainNavElem.greeting, enLocale.greetingText);
    //         homePage.isElemContainText(homePage.mainNavElem.account, enLocale.accountLists);
    //         homePage.isElemContainText(homePage.mainNavElem.orders, enLocale.orders);
    //         homePage.isElemContainText(homePage.mainNavElem.cart, enLocale.cart);
    //
    //     })
    // })
    it('ES localization should be default', () => {
        lableText = 'ES';
        homePage.hoverOnElem(homePage.langNavTool);
        homePage.isElemVisible(homePage.langDropdown)
        homePage.clickOnElem(esLang);
        homePage.isElemContainText(homePage.langLabel, lableText);
        cy.fixture('es_locale').then(esLocale => {
            homePage.isElemContainText(homePage.mainNavElem.department, esLocale.departments);
            homePage.isElemContainText(homePage.mainNavElem.greeting, esLocale.greetingText);
            homePage.isElemContainText(homePage.mainNavElem.account, esLocale.accountLists);
            homePage.isElemContainText(homePage.mainNavElem.orders, esLocale.orders);
            homePage.isElemContainText(homePage.mainNavElem.cart, esLocale.cart);

        })
    })
    it('DE localization should be default', () => {
        lableText = 'DE';
        homePage.hoverOnElem(homePage.langNavTool);
        homePage.isElemVisible(homePage.langDropdown)
        homePage.clickOnElem(deLang);
        homePage.isElemContainText(homePage.langLabel, lableText);
        cy.fixture('de_locale').then(deLocale => {
            homePage.isElemContainText(homePage.mainNavElem.department, deLocale.departments);
            homePage.isElemContainText(homePage.mainNavElem.greeting, deLocale.greetingText);
            homePage.isElemContainText(homePage.mainNavElem.account, deLocale.accountLists);
            homePage.isElemContainText(homePage.mainNavElem.orders, deLocale.orders);
            homePage.isElemContainText(homePage.mainNavElem.cart, deLocale.cart);

        })
    })
});