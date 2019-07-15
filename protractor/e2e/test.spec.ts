import { browser } from "protractor";


describe('Test', async () => {

});



describe('Protractor Demo App', function() {
    it('should have a title', async function() {
        await browser.get('http://juliemr.github.io/protractor-demo/');
        expect(await browser.getTitle()).toEqual('Super Calculator');
    });

});