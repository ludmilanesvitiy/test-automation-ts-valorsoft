import {$,$$, browser, by, element} from "protractor";

describe('Protractor Demo App', function() {
    it('should have a title', async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/');
        // element.all('').get();
        // element.all('').each();
        // element.all('').count();
        // $$('')
        // $('');
        // element(by.css('img'));
        // element(by.xpath('img'));
        // element(by.name())
        // element(by.model)
        // element(by.binding)
        expect(await browser.getTitle()).toEqual('Super Calculator');
    });
});

// describe('Test', function () {
//     beforeAll(async () => {
//         await browser.waitForAngularEnabled(false);
//     });
//
//     it('should be true', async () => {
//
//     });
//
// });
