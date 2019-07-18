import {BaseComponent} from "./base.component";

export class HomePo extends BaseComponent {
    pageUrl = '';
    shopByCategoryLink = '[aria-label^="Shop by Category"]';
    computerDepLink = '[href*="leftnav_computers"]';
    langLabel = '.icp-nav-language';
    langNavTool = '#icp-nav-flyout';
    langDropdown = '#nav-flyout-icp';

    mainNavElem = {
        department: '#nav-shop .nav-line-2',
        greeting: '#nav-link-accountList .nav-line-1',
        account: '#nav-link-accountList .nav-line-2',
        returns: '#nav-orders .nav-line-1',
        orders: '#nav-orders .nav-line-2',
        cart: '#nav-cart .nav-line-2',
        giftCards: '#nav-xshop [tabindex="49"]',
    };
}
