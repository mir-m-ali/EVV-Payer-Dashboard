const p = require('../pages/report');


When('I click on the Reports menu', () => {
    p.clickReportsButton();
});

Then('I click on item {string} to see the report load', (reportName) => {
    p.clickReportItem(reportName);
}); 

Then('I select a valid date range', () => {
    p.selectDates();
});

Then('I click the Apply button', () => {
    p.apply();
});

Then('I click the Reset button', () => {
    p.reset();
});


