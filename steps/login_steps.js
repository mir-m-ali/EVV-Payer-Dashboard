const p = require('../pages/login');

Given('I login', () => {
    p.login();
});

Then('I log out', () => {
    p.logout();
}); 