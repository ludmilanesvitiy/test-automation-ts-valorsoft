// conf.js
'use strict';
const path = require('path');
const testResultsDir = 'results';
const JR = require('protractor-jasmine2-html-reporter');

exports.config = { baseUrl: 'https://ng-book.com',
    framework: 'jasmine',
    directConnect: true,
    specs: ['./e2e/integration/*spec.ts'],
    onPrepare: function() {
        require('ts-node').register({ project: path.join(__dirname, './e2e/tsconfig.json') });
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(
            new JR({
                takeScreenshotsOnlyOnFailures: true,
                savePath: testResultsDir,
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
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1,
        chromeOptions: {
            args: [  '--window-size=1920x1080'], //'headless',
            prefs: {
                'profile.managed_default_content_settings.notifications': 1
            }
        }
    },

    exclude: [],
    allScriptsTimeout: 60000,

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 60000,
        print: function() {}
    }
}