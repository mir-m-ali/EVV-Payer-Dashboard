const { I } = inject();

const c = {
    waitTime: 160,
    barCharts: ['missed visits by provider', 'late visits by provider'], // hack for now...need to come up with something better
    dashboardBtn: '//button[contains(@mattooltip,"Payer Dashboard")]',
    tileItem: '//p[contains(text(), "$tileName")]',
    previewGraph: '//div[@data-componentid="$tileName"]//*[name()="g"][contains(@class,"highcharts-tracker")]',
    startDate: '//input[contains(@id, "start_date")]',
    endDate: '//input[contains(@id, "end_date")]',
    datepickerCloseBtn: '//button[contains(@class, "datepicker-close")]',
    firstProvider: '//div[contains(@class, "Multiselect-list")]//a[contains(@class,"Selectlist-item-text")][position()=1]',
    applyBtn: '//span[contains(@class, "mat-button-wrapper") and contains(text(), "Apply")]',
    resetBtn: '//span[contains(@class, "mat-button-wrapper") and contains(text(), "Reset")]',
    zeroSelection: '//span[contains(text(), "Selected: 0")]',
    providerFilterButton: '//li[contains(@title, "$buttonTitle")]',
    providerListDisabled: '//div[contains(@class, "MultiSelect") and contains(@class, "Disabled")]',
    lastProvider: '//li[contains(@class, "Selectlist-item")][position()=last()]',
    searchProviderListInput: '//input[contains(@class,"Input-search")]',
    loadingMsg: '//div[contains(text(), "Loading")]',
    exportBtn: '//button//span[contains(text(),"Export")]',     
    pdfBtn: '//button[contains(text(), "PDF")]',
    excelBtn: '//button[contains(text(), "Excel")]',
    xlsxBtn: '//button[contains(text(), "XLSX")]',
    graph: '//*[name()="g"][contains(@style,"cursor")]',  
    firstBarInTileBarGraph: '//div[@data-componentid="$tile"]//*[name()="g"][contains(@class,"highcharts-tracker")]//*[name()="rect"][position()=1]',
    firstBarInGraph: '//*[name()="g"][contains(@class,"highcharts-tracker")]//*[name()="rect"][position()=1]',
    lastWedgeInTilePieChart: '//div[@data-componentid="$tile"]//*[name()="g"][contains(@class,"highcharts-tracker")]//*[name()="path"][position()=last()]',
    lastWedgeOfPieChart: '//*[name()="g"][contains(@class,"highcharts-tracker")]//*[name()="path"][position()=last()]',
    highlightedWedgeOfPieChart: '//*[name()="path"][contains(@class,"highcharts-point-hover")]',
    activityPage: '//span[contains(text(), "$activityPage")]',
    activityDataPage: '//span[contains(text(), "$activityDataPage")]',
    legendLateVisits: '//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=1]',
    legendVariance: '//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=2]',
    previewGraphFirstLegend: '//div[@data-componentid="$tileName"]//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=1]',
    previewGraphLastLegend: '//div[@data-componentid="$tileName"]//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=last()]',
}

const tiles = {
    'Top Provider Activity': 'Top_Provider_Activity',
    'Missed Visits By Provider': 'Missed_Visits_By_Provider',
    'Unmatched Claims By Error': 'Unmatched_Claims_By_Reason',
    'Late Visits By Provider': 'Late_Visits_By_Provider',
    'Claims Adjudication By Provider': 'Claims_Adjudication_By_Provider',
    'Submitted Claims By Reason Code': 'Submitted_Claims_By_Reason_Code',
};

const barGraphs = ['Missed Visits By Provider', 'Late Visits By Provider'];

function formatDate(date) {
    let m = date.getMonth() + 1;    
    let d = date.getDate();
    return date.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
}

function isChartBarGraph(itemName) {
    // replace _ from tileName and convert to lowercase
    itemName = itemName.replace(/_/g, ' ').toLowerCase();
    return c.barCharts.indexOf(itemName) >= 0;
}

function clickOnGraph(baseGraph, isBarGraph) {
    let chart = isBarGraph 
        ? locate(baseGraph + '//*[name()="rect"]') // for bar charts
        //: locate(baseGraph);
        : locate(baseGraph + '//*[name()="path"]').last(); // for pie charts        
    I.click(chart);
}


 

module.exports = {
    
     clickOnDashboardButton() {
        I.waitForVisible(c.dashboardBtn, c.waitTime);
        I.click(c.dashboardBtn);
    },

    verifyTileIsPresent(tileName) {
        I.waitForVisible(c.tileItem.replace('$tileName', tileName), c.waitTime);
    },

    clickItemInBarGraph(item) {  
    
        if (!item) item = c.firstBarInGraph;
        
        I.waitForVisible(item, c.waitTime);
    
        // this is needed if the bar in the graph is too small and webdriverio fails to correctly click on the desired bar
        I.executeScript((bar) => {
            let minHeight = 30;
            let _bar = findByXpath(bar);
            let height = parseFloat(_bar.getAttribute('height'));
            let y = parseFloat(_bar.getAttribute('y'));
            let del = minHeight - height;
            if (!del) return;
            _bar.setAttribute('height', height + del);
            _bar.setAttribute('y', y - del);
        }, item);
        
        I.click(item);
    },

    clickPieChartWedge(wedge) {    

        if (!wedge) wedge = c.lastWedgeOfPieChart;

        I.waitForVisible(wedge, c.waitTime);    

        // this needs to be done when a wedge of a pie chart is very thin and webdriverio fails to correctly click on the desired wedge
        // for now using the last wedge of the pie chart
        I.executeScript((wedge) => {
            let minArcSize = 30;
            let _wedge = findByXpath(wedge);
            let indexOfLastWedge = _wedge.point.series.data.length - 1;
            let arcSize = parseFloat(_wedge.point.series.data[indexOfLastWedge].y);
            if (arcSize >= minArcSize) return;
            _wedge.point.series.data[indexOfLastWedge].update(minArcSize);
        }, wedge);
                
        I.moveCursorTo(wedge);
        I.click(wedge);
        //I.click(c.highlightedWedgeOfPieChart);
        //I.moveCursorTo(wedge);
    },

    clickPreviewGraph(tileName) { 
        let isBarGraph = barGraphs.indexOf(tileName) > -1;
        if (isBarGraph)
            this.clickItemInBarGraph(c.firstBarInTileBarGraph.replace('$tile', tiles[tileName]));            
        else
            this.clickPieChartWedge(c.lastWedgeInTilePieChart.replace('$tile', tiles[tileName]));
    },

    clickOnPreviewGraphFor(tileName) {   
        let previewGraph = c.previewGraph.replace('$tileName', tileName);      
        I.waitForVisible(previewGraph, c.waitTime);
        if (isChartBarGraph(tileName)) {
            let num = I.grabNumberOfVisibleElements(previewGraph + '//*[name()="rect"]');
            clickBarChartPreview(previewGraph, num);
        }            
        else
            I.click(previewGraph); //clickOnGraph(previewGraph, false);
    },

    clickOnTilePreviewPieChart(tileName) {
        let previewPieChart = c.previewGraph.replace('$tileName', tileName);
        I.waitForVisible(previewPieChart, c.waitTime);
        I.click(previewPieChart);
    },

    verifyTileMaximizedFor(activityPage) {     
        I.waitForVisible(c.activityPage.replace('$activityPage', activityPage), c.waitTime);   
        I.wait(1);
    },

    selectDatesAndProvider() {
        /*
        let d = new Date();       
        let startDate = new Date();
        let endDate = new Date(); 
        startDate.setDate(d.getDate() - 35);
        endDate.setDate(d.getDate() - 20);        
        I.fillField(c.startDate, formatDate(startDate));
        I.click(c.datepickerCloseBtn);
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.fillField(c.endDate, formatDate(endDate)); 
        I.click(c.datepickerCloseBtn);
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.wait(3);
        */
        this.selectStartAndEndDates();
        this.selectOneProvider();
        this.apply();
    },

    selectStartAndEndDates() {
        let d = new Date();       
        let startDate = new Date();
        let endDate = new Date(); 
        startDate.setDate(d.getDate() - 35);
        endDate.setDate(d.getDate() - 20);        
        I.fillField(c.startDate, formatDate(startDate));
        I.click(c.datepickerCloseBtn);
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.fillField(c.endDate, formatDate(endDate)); 
        I.click(c.datepickerCloseBtn);
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.wait(3);
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

    async searchForKnownProviderOrCode() {
         // for now just grabbing the last provider in the list
        I.waitForVisible(c.lastProvider, c.waitTime);       
        let title = await I.grabAttributeFrom(c.lastProvider, 'title');
        I.fillField(c.searchProviderListInput, title);
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

    clickLegendLateVisits() {
        I.waitForVisible(c.legendLateVisits, c.waitTime);
        I.click(c.legendLateVisits);
        I.wait(3);
    },

    clickLegendVariance() {
        I.waitForVisible(c.legendVariance, c.waitTime);
        I.click(c.legendVariance);
        I.wait(3);
    },
    
    // this is only for Late Visits By Provider...will have to make it dynamic
    selectDates() {
        I.fillField(c.startDate, '2022-07-01');
        I.click(c.datepickerCloseBtn);       
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.wait(5);
    },

    clickOnGraphToSee(activityDataPage) {       
        clickOnGraph(c.graph, isChartBarGraph(activityDataPage));          
        // there appears to be a bug when clicking on a pie chart. Moving the mouse anywhere appears to fix the issue
        I.moveCursorTo(c.exportBtn);
        I.waitForVisible(c.activityDataPage.replace('$activityDataPage', activityDataPage), c.waitTime);
        I.wait(2);
    },

    clickExportToSeeExportOptions() {
        I.click(c.exportBtn);
        I.waitForVisible(c.pdfBtn);
        I.waitForVisible(c.excelBtn);
        I.waitForVisible(c.xlsxBtn);
    },

    clickFirstAndLastLegend(tileName) {
        let firstLegend = c.previewGraphFirstLegend.replace('$tileName', tileName);
        let lastLegend = c.previewGraphLastLegend.replace('$tileName', tileName);
        I.waitForVisible(firstLegend, c.waitTime);
        I.click(firstLegend);
        I.wait(2);
        I.click(lastLegend);        
    },

    wait() {
        I.wait(2);
    }
}
