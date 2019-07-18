///<reference types="Cypress" />

import {BaseComponent} from "./Base.component";

export class SearcDetailsPO extends BaseComponent{
    pageUrl = 'computers';
    departmentTitle = 'h1>b';
    resultsCounter = '#s-result-count';
    sortDropdown = '#sort';
    searchInput = '#twotabsearchtextbox';
    searchIcon = '.nav-search-submit';
    afterSearchBreadcumb = '.s-breadcrumb';
    afterSearchResCounter = '.s-breadcrumb span';
    searchResNames = '.s-search-results h2 a';
}