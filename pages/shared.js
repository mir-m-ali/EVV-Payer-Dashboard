const { I } = inject();
const { browser } = inject();

const c = {
    waitTime: 120,
    dashboardBtn: '//button[contains(@mattooltip,"Payer Dashboard")]',
    tileItem: '//p[contains(text(), "$tileName")]',
    previewGraph: '//div[@data-componentid="$previewGraph"]//*[name()="g"][contains(@style,"cursor")]',
    startDate: '//input[contains(@id, "start_date")]',
    endDate: '//input[contains(@id, "end_date")]',
    firstProvider: '//div[contains(@class, "Multiselect-list")]//a[contains(@class,"Selectlist-item-text")][position()=1]',
    applyBtn: '//span[contains(@class, "mat-button-wrapper") and contains(text(), "Apply")]',
    resetBtn: '//span[contains(@class, "mat-button-wrapper") and contains(text(), "Reset")]',
    zeroSelection: '//span[contains(text(), "Selected: 0")]',
    providerFilterButton: '//li[contains(@title, "$buttonTitle")]',
    providerListDisabled: '//div[contains(@class, "MultiSelect") and contains(@class, "Disabled")]',
    loadingMsg: '//div[contains(text(), "Loading")]',
    exportBtn: '//button//span[contains(text(),"Export")]',     
    pdfBtn: '//button[contains(text(), "PDF")]',
    excelBtn: '//button[contains(text(), "Excel")]',
    xlsxBtn: '//button[contains(text(), "XLSX")]',
    graph: '//*[name()="g"][contains(@style,"cursor")]',  
    activityPage: '//span[contains(text(), "$activityPage")]',
    activityDataPage: '//span[contains(text(), "$activityDataPage")]',
}

let initialGraph = '';

async function getGraphIfRendered() {
    const num = await I.grabNumberOfVisibleElements(c.graph);
    return num >= 1 ? await I.grabHTMLFrom(c.graph) : '';
}

function formatDate(date) {
    let m = date.getMonth() + 1;    
    let d = date.getDate();
    return date.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
}

module.exports = {

    clickOnDashboardButton() {
        I.waitForVisible(c.dashboardBtn, c.waitTime);
        I.click(c.dashboardBtn);
    },

    verifyTileIsPresent(tileName) {
        I.waitForVisible(c.tileItem.replace('$tileName', tileName), c.waitTime);
    },

    clickOnPreviewGraphFor(previewGraph) {   
        let locator = c.previewGraph.replace('$previewGraph', previewGraph);      
        I.waitForVisible(locator, c.waitTime);
        I.click(locator);
    },

    verifyTileMaximizedFor(activityPage) {     
        I.waitForVisible(c.activityPage.replace('$activityPage', activityPage), c.waitTime);   
        I.wait(1);
    },

   selectDatesAndProvider() {
        let d = new Date();       
        let startDate = new Date();
        let endDate = new Date(); 
        startDate.setDate(d.getDate() - 35);
        endDate.setDate(d.getDate() - 20);        
        I.fillField(c.startDate, formatDate(startDate));
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.fillField(c.endDate, formatDate(endDate)); 
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.wait(2);
        this.selectOneProvider();
        this.apply();
    },

    selectProviderFilterButton(buttonTitle) {
        I.click(c.providerFilterButton.replace('$buttonTitle', buttonTitle));
        I.wait(3);
    },

    selectOneProvider(index) {
        index = !index ? 0 : index;
        I.click(c.firstProvider);
        I.wait(2);
    },

    reset() {
        I.click(c.resetBtn);
        I.waitForVisible(c.zeroSelection, c.waitTime);    
    },

    apply() {
        I.click(c.applyBtn);
        I.waitForInvisible(c.loadingMsg, c.waitTime);
        I.wait(2);
    },

    clickOnGraphToSee(activityDataPage) {
        I.click(c.graph); 
        I.click(c.graph);
        I.waitForVisible(c.activityDataPage.replace('$activityDataPage', activityDataPage), c.waitTime);
        I.wait(2);
    },

    clickExportToSeeExportOptions() {
        I.click(c.exportBtn);
        I.waitForVisible(c.pdfBtn);
        I.waitForVisible(c.excelBtn);
        I.waitForVisible(c.xlsxBtn);
    },

}
