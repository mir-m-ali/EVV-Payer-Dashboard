const { I } = inject();

const waitTime = 120;

module.exports = {

    debug() {
        I.amOnPage('/');
        I.fillField('//input[@id="username"]', 'mali');
        I.fillField('//input[@id="password"]', 'Password!123');
    },

    login() {
        I.amOnPage('/');        
        I.wait(2);
        //console.log(process.env.USERNAME, process.env.PASSWORD);
        I.fillField('//input[@id="username"]', process.env.USERNAME);
        I.fillField('//input[@id="password"]', process.env.PASSWORD);
        //I.fillField('//input[@id="username"]', 'mali');
        //I.fillField('//input[@id="password"]', 'Password!123');
        I.click('//button[@id="kc-login"]');        
        I.waitForVisible('//span[contains(text(),"Dashboard")]', waitTime);  
        I.executeScript(() => {            
            window.findByXpath = (path) => { return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; }
        });
    },

    logout() {
        I.click('//mat-icon[contains(text(),"account_circle")]');
        I.click('//span[contains(text(),"Logout")]');
        I.waitForVisible('//button[@id="kc-login"]', waitTime);
    }
};