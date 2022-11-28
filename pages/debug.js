const { I } = inject();

const waitTime = 120;

module.exports = {

    debug() {
        I.amOnPage('/');
        I.fillField('//input[@id="username"]', 'mali');
        I.fillField('//input[@id="password"]', 'Password!123');
        I.click('//button[@id="kc-login"]');
        I.executeScript(() => {
            window.late_visits = '//div[@data-componentid="Late_Visits_By_Provider"]//div[@class="highcharts_parent_container"]';            
            window.xpath = (path) => { return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; }
        });
        pause();
    },
};