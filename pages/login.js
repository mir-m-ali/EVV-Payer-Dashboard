const { I } = inject();

const waitTime = 120;

module.exports = {

    login() {
        I.amOnPage('/');
        /*
        I.executeScript(() => {
            let path = '//input[@id="username"]';
            let username = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;;
            username.style.backgroundColor = 'yellow';
        });     
        */  
        I.wait(2);
        I.fillField('//input[@id="username"]', process.env.USERNAME);
        I.fillField('//input[@id="password"]', process.env.PASSWORD);
        I.click('//button[@id="kc-login"]');        
        I.waitForVisible('//span[contains(text(),"Dashboard")]', waitTime);  
    },

    logout() {
        I.click('//mat-icon[contains(text(),"account_circle")]');
        I.click('//span[contains(text(),"Logout")]');
        I.waitForVisible('//button[@id="kc-login"]', waitTime);
    }
};