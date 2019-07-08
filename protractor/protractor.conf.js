'use strict';
const path = require('path');
const Jasmine_Reporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/*.ts'],
    directConnect: true,
    baseUrl : 'https://ng-book.com/',

    capabilities :
        {
            browserName: 'chrome',
            maxInstances: 1,
            chromeOptions: {
                args: ['--window-size=1920x1080'] //headless
            }
        },

    onPrepare : function () {
        require('ts-node').register({ project: path.join(__dirname, './e2e/tsconfig.json') });

        jasmine.getEnv().addReporter(
            new Jasmine_Reporter({
                takeScreenshotsOnlyOnFailures: true,
                savePath: 'results/'

            })
        );

        browser.driver
            .manage()
            .window()
            .maximize();

        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true,
                    displayFailuresSummary: true,
                    displaySpecDuration: true
                }
            })
        );
    },

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 60000,
        print: function() {}
    },
}
