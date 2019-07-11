'use strict';
const path = require('path');
const JR = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://www.ng-book.com',
    directConnect: true,  //заставляет сразу конектиться и не нужен //seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['./e2e/spec.ts'],
    specs: ['./e2e/integration/*spec.ts'],
    allScriptsTimeout: 60000,

    capabilities: {
        browserName: 'chrome',
        maxInstances: 1,
        chromeOptions: {
            args: ['--window-size=1920x1080'], //'headless',
            prefs: {
                'profile.managed_default_content_settings.notifications': 1
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 60000,
        print: function () {
        }
    },

    onPrepare: function () {
        require('ts-node').register({project: path.join(__dirname, './e2e/tsconfig.json')});
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(
            new JR({
                takeScreenshotsOnlyOnFailures: true,
                savePath: 'results',
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
            }));
    }
}