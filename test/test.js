"use strict";
/* eslint-env mocha */
const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');
const By = webdriver.By;
const siteUrl = "http://localhost:3000";

let browser;

function goToNavLink(target, id) {
    if (id) {
        browser.findElement(By.id(target)).then(function(element) {
            element.click();
        });
    } else {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }
}



function matchUrl(target) {
    browser.getCurrentUrl().then(function(url) {
        assert.ok(url.endsWith(`${siteUrl}/${target}`));
    });
}

function assertH(target, size=1) {
    browser.findElement(By.css(`h${size}`)).then(function(element) {
        element.getText().then(function(text) {
            assert.equal(text, target);
        });
    });
}

async function logIn() {
    browser.findElement(By.name("email")).then(function(element) {
        element.sendKeys("joakim@mail.se");
    });


    browser.findElement(By.name("password")).then(function(element) {
        element.sendKeys("test");
    });
    browser.sleep(50);
    browser.findElement(By.id("login")).then(function(element) {
        element.click();
    });
}


test.describe("Joakims mesida", function() {
    this.timeout(0);

    beforeEach(function(done) {
        browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox())
            .setFirefoxOptions(new firefox.Options().headless())
            .forBrowser("firefox")
            .build();

        browser.get(siteUrl);
        done();
    });

    afterEach(function(done) {
        browser.quit();
        done();
    });



    test.it("Testing start page", function(done) {
        browser.getTitle().then(function(title) {
            assert.equal(title, "Joakim´s me-sida");
        });
        matchUrl("");
        done();
    });

    test.it("Going to login and logging in", function(done) {
        goToNavLink("user", true);

        matchUrl("login/");

        logIn();

        browser.sleep(500);
        assertH("Inloggad");
        done();
    });

    test.it("Going to kmom01", function(done) {
        browser.findElement(By.id("reports")).then(function(element) {
            element.click();
        }).then(function() {
            browser.findElement(By.linkText("Kmom01")).then(function(element) {
                element.click();
            }).then(function() {
                browser.sleep(50);
                assertH("Kmom1", 2);
            });
        });
        done();
    });
});
