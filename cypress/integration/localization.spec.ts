/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";

describe("Localization test suite", () => {
    beforeEach(()=> cy.visit(''));
    const homePage = new HomePo();
    let labelText: string;

    it('EN localization should be default', () => {
        labelText = 'EN';
        homePage.isElemContainText(homePage.langLabel, labelText);
        cy.fixture('en-locale').then(enLocale  => {
            homePage.isElemContainText(homePage.mainNavElem.department, enLocale.departments);
            homePage.isElemContainText(homePage.mainNavElem.greeting, enLocale.greetingText);
            homePage.isElemContainText(homePage.mainNavElem.account, enLocale.accountLists);
            homePage.isElemContainText(homePage.mainNavElem.orders, enLocale.orders);
            homePage.isElemContainText(homePage.mainNavElem.cart, enLocale.cart);
        })
    })

    it('ES localization test', () => {
        labelText = 'ES';
        const esLang = '[href="#switch-lang=es_US"]';
        homePage.hoverOnElem(homePage.langNavTool);
        homePage.isElemVisible(homePage.langDropdown);
        homePage.clickOnElem(esLang);
        homePage.isElemContainText(homePage.langLabel, labelText);
        cy.fixture('es_locale').then(esLang  => {
            homePage.isElemContainText(homePage.mainNavElem.department, esLang.departments);
            homePage.isElemContainText(homePage.mainNavElem.greeting, esLang.greetingText);
            homePage.isElemContainText(homePage.mainNavElem.account, esLang.accountLists);
            homePage.isElemContainText(homePage.mainNavElem.orders, esLang.orders);
            homePage.isElemContainText(homePage.mainNavElem.cart, esLang.cart);
        })
    })

    it('DE localization test', () => {
        labelText = 'DE';
        const deLang = '[href="#switch-lang=de_DE"]';
        homePage.hoverOnElem(homePage.langNavTool);
        homePage.isElemVisible(homePage.langDropdown);
        homePage.clickOnElem(deLang);
        homePage.isElemContainText(homePage.langLabel, labelText);
        cy.fixture('de_locale').then(deLang  => {
            homePage.isElemContainText(homePage.mainNavElem.department, deLang.departments);
            homePage.isElemContainText(homePage.mainNavElem.greeting, deLang.greetingText);
            homePage.isElemContainText(homePage.mainNavElem.account, deLang.accountLists);
            homePage.isElemContainText(homePage.mainNavElem.orders, deLang.orders);
            homePage.isElemContainText(homePage.mainNavElem.cart, deLang.cart);
        })
    })


});