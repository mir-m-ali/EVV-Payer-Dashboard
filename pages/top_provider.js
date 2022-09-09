const { I } = inject();

const c = {
    waitTime: 120,
    graphPreview: '//div[@data-componentid="Top_Provider_Activity"]//*[name()="g"][@class="highcharts-series-group"]',
    startDate: '//input[contains(@id, "start_date")]',
    endDate: '//input[contains(@id, "end_date")]',
    providerList: '//ul[@class="jr-mSelectlist jr"]',
    applyBtn: '//span[contains(@class, "mat-button-wrapper") and contains(text(), "Apply")]',
    resetBtn: '//span[contains(@class, "mat-button-wrapper") and contains(text(), "Reset")]',
    exportBtn: '//button//span[contains(text(),"Export")]',     
    pdfBtn: '//button[contains(text(), "PDF")]',
    excelBtn: '//button[contains(text(), "Excel")]',
    xlsxBtn: '//button[contains(text(), "XLSX")]',
    graph: '//*[name()="g"][contains(@style,"cursor")]',//'//*[name()="g"][@class="highcharts-series-group"]',    
    activityPage: '//span[contains(text(), "TOP PROVIDER ACTIVITY")]',
    activityDataPage: '//span[contains(text(), "TOP PROVIDER ACTIVITY DATA PAGE")]',
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

    clickOnPreviewGraph() {
        I.waitForVisible(c.graphPreview, c.waitTime);
        I.click(c.graphPreview);
    },

    async verifyPanelMaximized() {
        I.waitForVisible(c.activityPage, c.waitTime);   
        I.wait(3);
        initialGraph = await getGraphIfRendered();
        //console.log(initialGraph);    
    },

    async selectDatesAndProvider() {
        let d = new Date();
        let startDate = new Date();
        let endDate = new Date(); 
        startDate.setDate(d.getDate() - 35);
        endDate.setDate(d.getDate() - 10);        
        I.fillField(c.startDate, formatDate(startDate));
        I.fillField(c.endDate, formatDate(endDate)); 
        I.click(c.applyBtn);
        let newGraph = await getGraphIfRendered();
        I.wait(3);
        console.log(newGraph == initialGraph ? 'New graph and initial graph match' : 'New graph is different from initial graph');
        I.wait(20);
    },

    async reset() {
        I.click(c.resetBtn);
        I.waitForVisible(c.graph, c.waitTime);
        let graphAfterReset = await I.grabHTMLFrom(c.graph);
        console.log(initialGraph == graphAfterReset ? 'contents match' : 'contents do not match');
    },

    clickOnGraph() {
        I.click(c.graph);
        I.waitForVisible(c.activityDataPage, c.waitTime);
        I.wait(2);
    },

    clickExportToSeeExportOptions() {
        I.click(c.exportBtn);
        I.waitForVisible(c.pdfBtn);
        I.waitForVisible(c.excelBtn);
        I.waitForVisible(c.xlsxBtn);
    },

}
