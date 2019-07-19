import {BaseComponent} from "./base.component";

export class GiftCardsPo extends BaseComponent{
    pageUrl = '/gift-cards/';
    giftCardLinks = [
        '[href*="/dp/B07TMMZKBJ"]',
        '[href*="/dp/B07P76HM3B/"]',
        '[href*="/s/ref=s9_acss_bw_cg_gclptcg_2c1_w?rh=i%3Agift-cards"]'
    ]
    customGiftAmountInput = '#gc-order-form-custom-amount';
    customGiftAmountField = '#gc-order-form-amount-wrapper';
    giftCardAmount = '#gc-live-preview-amount';
    emailField = '#gc-order-form-recipients';
    addToCartButton = '[name="submit.gc-add-to-cart"]';
    cartCounter = '#nav-cart-count';
    cartLink = '[href="/gp/cart/view.html?ref_=nav_cart"]';
    cartSubtotal = '#sc-subtotal-amount-activecart'

}