const { I } = inject();

const c = {    
    graphPreview: '//div[@data-componentid="Top_Provider_Activity"]//*[name()="g"][@class="highcharts-series-group"]',    
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
        endDate.setDate(d.getDate() - 20);        
        I.fillField(c.startDate, formatDate(startDate));
        I.fillField(c.endDate, formatDate(endDate)); 
        I.click(locate(c.providerList).first()); // select first provider
        I.click(c.applyBtn);
        I.wait(10);
        let newGraph = await getGraphIfRendered();
        I.wait(1);      
    },

    reset() {
        I.click(c.resetBtn);
        I.wait(5);   
        I.click(c.applyBtn);
        I.wait(5);  
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
