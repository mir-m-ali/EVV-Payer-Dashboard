const { I } = inject();

const c = {
    waitTime: 160,
    logo: '//div[@class="evv-nav-logo"]',
    controlsLabel: '//span[contains(text(), "Control")]',    
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
    filterButton: '//li[contains(@title, "$buttonTitle")]',
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
    legendItem: '//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=$position]',
    legendLateVisits: '//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=1]',
    legendVariance: '//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=2]',
    previewGraphFirstLegend: '//div[@data-componentid="$tileName"]//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=1]',
    previewGraphLastLegend: '//div[@data-componentid="$tileName"]//*[name()="g"][contains(@class,"highcharts-legend-item")][position()=last()]',
    columnName: '(//td[contains(@class,"interactive")]/span)[$index][contains(text(), "$text")]',
    selectedItemInList: '(//div[contains(@class,"Scalablelist")])[$index]//li[contains(@class, "isSelected")]//a',
    providerInReport: '(//td[contains(@class, "cel_provider")]/span)[1]',
    reasonCodeInReport: '(//td[contains(@class, "cel_matching_display")]/span)[1]',
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


function removeLinebreaks(htmlText) {        
    //return !htmlText ? '' : htmlText.trim().replace(/<br\/?>|(&nbsp;)|(&amp;)/gi,'').replace(/\s{2,}/g, ' ');
    return !htmlText ? '' : htmlText.replace(/\s{2,}/g, ' ').replace(/\r?\n|\r/g,' ').trim();
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
        I.moveCursorTo(c.controlsLabel);
        this.waitForContentToLoad();
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
        I.moveCursorTo(c.controlsLabel);
        this.waitForContentToLoad();
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
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.fillField(c.endDate, formatDate(endDate)); 
        I.click(c.controlsLabel);
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.wait(3);
    },

    setStartDate(date) {
        if (date === 'today')  date = formatDate(new Date());
        if (!date) {
            date = new Date();        
            date.setDate(date.getDate() - 35);
            date = formatDate(date);
        }        
        I.fillField(c.startDate, date);
        I.click(c.controlsLabel);
    },

    setEndDate(date) {
        if (date === 'today')  date = formatDate(new Date());
        if (!date) {
            date = new Date();        
            date.setDate(date.getDate() - 20);
            date = formatDate(date);
        }              
        I.fillField(c.endDate, date);
        I.click(c.controlsLabel);        
        I.waitForInvisible(c.providerListDisabled, c.waitTime);
        I.wait(3);
    },

    selectFilterButton(buttonTitle) {
        I.click(c.filterButton.replace('$buttonTitle', buttonTitle));
        I.wait(3);
    },

    selectOneProvider(index) {
        index = !index ? 0 : index;
        I.waitForInvisible(c.providerListDisabled, c.waitTime);        
        I.click(c.firstProvider);
        I.wait(2);
    },

    selectItemInList(item) {
        if (item === 'provider')
            I.click(c.lastProvider);
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
        this.waitForContentToLoad();        
    },

    clickLegendLateVisits() {
        I.waitForVisible(c.legendLateVisits, c.waitTime);
        I.click(c.legendLateVisits);
        I.wait(2);
    },

    clickLegendVariance() {
        I.waitForVisible(c.legendVariance, c.waitTime);
        I.click(c.legendVariance);
        I.wait(2);
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
        I.wait(3);
        I.waitForVisible(c.pdfBtn);
        I.waitForVisible(c.excelBtn);
        I.waitForVisible(c.xlsxBtn);        
    },

    clickFirstAndLastLegend(tileName) {
        tileName = tiles[tileName];
        let firstLegend = c.previewGraphFirstLegend.replace('$tileName', tileName);
        let lastLegend = c.previewGraphLastLegend.replace('$tileName', tileName);
        I.waitForVisible(firstLegend, c.waitTime);
        I.click(firstLegend);
        I.wait(2);
        I.click(lastLegend);        
    },

    clickEachLegendInSet(numberOfLegendsInSet) {
        if (!numberOfLegendsInSet) numberOfLegendsInSet = 1;
        for (let i = 1; i <= numberOfLegendsInSet; i++) {            
            I.click(c.legendItem.replace('$position', i));
            I.wait(2);
        }
    },

    verifyColumn(colNumber, colName) {
        colName = colName.split(' ')[0].trim();
        I.click(c.columnName.replace('$index', colNumber).replace('$text', colName));
    },

    async verifySelectedItemInFilterMatchesThatInReport(filterType) {        
        let locatorForTextInFilterList = undefined;   
        let locatorForTextInReport = undefined;  
        

        if (filterType === 'provider') {
            locatorForTextInFilterList = c.selectedItemInList.replace('$index', 1);
            locatorForTextInReport = c.providerInReport;            
        }
        else if (filterType === 'reason code') {
            locatorForTextInFilterList = c.selectedItemInList.replace('$index', 3);
            locatorForTextInReport = c.reasonCodeInReport;
        }                    
        let selectedTextInFilter = await I.grabTextFrom(locatorForTextInFilterList);
        let textInReport = await I.grabTextFrom(locatorForTextInReport);      
        selectedTextInFilter = removeLinebreaks(selectedTextInFilter);        
        textInReport = removeLinebreaks(textInReport);
    },

    waitForContentToLoad() {
        I.waitForInvisible(c.loadingMsg, c.waitTime);
        I.wait(2);
    },

    wait() {
        I.wait(2);
    }
}
