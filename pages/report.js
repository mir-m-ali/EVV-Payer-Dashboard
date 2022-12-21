const { I } = inject();

const c = {
    waitTime: 160,
    reportsButton: '//button[@ng-reflect-message="Reports"]',
    //reportMenuItem: '//button[@mattooltip="$reportName"]',
    reportMenuItem: '//button[contains(., "$reportName")]',
    detailsOfReport: '//span[contains(text(), "$reportTitle")]',
    loadingMsg: '//div[contains(text(), "Loading")]',
    startDate: '//input[contains(@id, "start_date")]',
    endDate: '//input[contains(@id, "end_date")]',
    datepickerCloseBtn: '//button[contains(@class, "datepicker-close")]',
    applyBtn: '//span[contains(@class, "mat-button-wrapper") and contains(text(), "Apply")]',
    resetBtn: '//span[contains(@class, "mat-button-wrapper") and contains(text(), "Reset")]',
}

// may not need this
const reportTitleText = {
    'Provider Adoption Consolidated': 'Provider Adoption Summary',
    'Overlap Care Caregivers': 'Overlap Care - Caregivers'
}

function formatDate(date) {
    let m = date.getMonth() + 1;    
    let d = date.getDate();
    return date.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
}

module.exports = {

    clickReportsButton() {       
        I.click(c.reportsButton);   
        I.wait(3);            
    },

    clickReportItem(reportName) {
        let menuItem = c.reportMenuItem.replace('$reportName', reportName);
        I.waitForVisible(menuItem, c.waitTime);
        I.click(menuItem);  
        I.waitForInvisible(c.loadingMsg, c.waitTime);
        I.wait(2);
    },

    selectDates() {
        let d = new Date();       
        let startDate = new Date();
        let endDate = new Date(); 
        startDate.setDate(d.getDate() - 35);
        endDate.setDate(d.getDate() - 20);        
        I.fillField(c.startDate, formatDate(startDate));
        I.fillField(c.endDate, formatDate(endDate)); 
        I.wait(1);
        I.click(c.datepickerCloseBtn);       
    },

    apply() {
        I.click(c.applyBtn);
        I.waitForInvisible(c.loadingMsg, c.waitTime);
        I.wait(2);
    },

    reset() {
        I.click(c.resetBtn);
        I.wait(2);
    },

    selectBalanceLessThanOrEqual(percentage) {
        // this particular drop down is difficult...unable to grab the options directly via xpath
        I.click('//div[@class="jr-mSingleselect-input-expander jr"]')
        I.fillField('//div[contains(@class, "jr-mSingleselect-search jr")]//input', percentage);
        I.wait(2);
        I.pressKey('ArrowDown');
        I.pressKey('Enter');
    },

    selectOneClaimStatus() {
        I.click('(//ul[contains(@class, "Selectlist")])[1]//li[1]');         
    }
};