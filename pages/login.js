const { I } = inject();

const USERNAME = 'mali';
const PASSWORD = 'Password!123';
const waitTime = 120;

module.exports = {

    login() {
        I.amOnPage('/');
        I.fillField('//input[@id="username"]', USERNAME);
        I.fillField('//input[@id="password"]', PASSWORD);
        I.click('//button[@id="kc-login"]');        
        I.waitForVisible('//span[contains(text(),"Dashboard")]', waitTime);  
    },

    logout() {
        I.click('//mat-icon[contains(text(),"account_circle")]');
        I.click('//span[contains(text(),"Logout")]');
        I.waitForVisible('//button[@id="kc-login"]', waitTime);
    }
};