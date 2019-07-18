///<reference types="Cypress" />


import {HomePO} from "../support/Home.PO";

describe('Localization test suite', () => {
    const HP = new HomePO();
    let labelText: string;

    beforeEach(() => cy.visit(''));

    it('EN localisation should be default', () => {
        labelText = 'EN';
        HP.isElemContainText(HP.langLabel, labelText);
        cy.fixture('en_local').then(enLocale => {
            HP.isElemContainText(HP.mainNavElem.department, enLocale.departments);
            HP.isElemContainText(HP.mainNavElem.greeting, enLocale.greetingText);
            HP.isElemContainText(HP.mainNavElem.account, enLocale.accountLists);
            HP.isElemContainText(HP.mainNavElem.orders, enLocale.orders);
            HP.isElemContainText(HP.mainNavElem.cart, enLocale.cart);
        })
    });

    it('ES localisation test', () => {
        labelText = 'ES';
        const esLangLink = '[href="#switch-lang=es_US"]';
        HP.hoverOnElem(HP.langNavTool);
        HP.isElemVisible(HP.langDropdown);
        HP.clickOnElem(esLangLink);
        HP.isElemContainText(HP.langLabel, labelText);
        cy.fixture('es_local').then(esLocale => {
            HP.isElemContainText(HP.mainNavElem.department, esLocale.departments);
            HP.isElemContainText(HP.mainNavElem.greeting, esLocale.greetingText);
            HP.isElemContainText(HP.mainNavElem.account, esLocale.accountLists);
            HP.isElemContainText(HP.mainNavElem.orders, esLocale.orders);
            HP.isElemContainText(HP.mainNavElem.cart, esLocale.cart);
        })
    });

    it('DE localisation test', () => {
        labelText = 'DE';
        const esLangLink = '[href="#switch-lang=de_DE"]';
        HP.hoverOnElem(HP.langNavTool);
        HP.isElemVisible(HP.langDropdown);
        HP.clickOnElem(esLangLink);
        HP.isElemContainText(HP.langLabel, labelText);
        cy.fixture('de_local').then(deLocale => {
            HP.isElemContainText(HP.mainNavElem.department, deLocale.departments);
            HP.isElemContainText(HP.mainNavElem.greeting, deLocale.greetingText);
            HP.isElemContainText(HP.mainNavElem.account, deLocale.accountLists);
            HP.isElemContainText(HP.mainNavElem.orders, deLocale.orders);
            HP.isElemContainText(HP.mainNavElem.cart, deLocale.cart);
        })
    });

});