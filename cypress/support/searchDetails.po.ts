/// <reference types="Cypress" />
import {BaseComponent} from "./base.component";

export class SearchDetailsPo extends BaseComponent {
    pageUrl = 'computers';

    departmentTitle = 'h1>b';
    resultsCounter = '#s-result-count';
    sortDropdown = '#sort';
    searchInput = '#twotabsearchtextbox';
    afterSearchBreadcumb = '.s-breadcrumb';
}
