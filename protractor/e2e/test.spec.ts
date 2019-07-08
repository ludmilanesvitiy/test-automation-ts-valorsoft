import {browser} from "protractor";

describe('Test', function () {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
    });

    it('should test', async () => {
         await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(false);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });
    it('should test', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });


});