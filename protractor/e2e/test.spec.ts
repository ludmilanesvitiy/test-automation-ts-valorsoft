import {browser} from "protractor";

describe('Protractor Demo App', () => {
    // @ts-ignore
    it('should have a title', async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/');

        expect(await browser.getTitle()).toEqual('Super Calculator');
    });
});