const p = require('../pages/dashboard');

When('I am on the Dashboard page', () => {
    p.clickOnDashboardButton();
});

Then('I see the {string} tile', (title) => {
    p.verifyTileIsPresent(title);
}); 

When('I click the preview graph of tile {string}', (tileName) => { p.clickPreviewGraph(tileName); });

When('I click on the preview pie chart in the {string} tile', (tileName) => {
    p.clickOnTilePreviewPieChart(tileName);
});

When('I click on the preview graph in the {string} tile', (tileName) => {
    p.clickOnPreviewGraphFor(tileName);
});

Then('I see the title {string} in maximized tile and the data in a graph', (title) => {
    p.verifyTileMaximizedFor(title);
}); 

Then('I click the provider filter button All to see all providers selected', () => {
    p.selectProviderFilterButton('All');
});

Then('I click the provider filter button None to see all providers deselected', () => {
    p.selectProviderFilterButton('Deselect');
});

Then('I click on a single provider to see that provider selected', () => {
    p.selectOneProvider();
});

Then('I click on the provider filter button Invert to see the provider selection is inverted', () => {
    p.selectProviderFilterButton('Invert');
});

Then('I click Reset', () => {
    p.reset();
});

Then('I select the dates and provider and click Apply to see the data change', () => {
    p.selectDatesAndProvider();
}); 

Then('I select the dates and error code and click Apply to see the data change', () => {
    p.selectDatesAndProvider();
}); 

Then('I select a valid Start Date and End Date', () => {
    p.selectStartAndEndDates();
}); 


Then('I click on Reset to clear the filters and click Apply to see the initial data', () => {
    p.reset();
    p.apply();
});

Then('I click on the legend Late Visits', () => {
    p.clickLegendLateVisits();
});

Then('I click on the legend Variance', () => {
    p.clickLegendVariance();
});

Then('I click Apply', () => {
    p.apply();
});

Then('I select a valid date range and click Apply to see the graph', () => {
    p.selectDates();
    p.apply();
});

Then('I click any bar on the graph to see data for that item', () => p.clickItemInBarGraph());

Then('I click on the first bar of the chart in {string} to see the detailed data of the provider', (activityDataPage) => {
    p.clickOnGraphToSee(activityDataPage);
});

Then('I see the {string} filter set to the {string} clicked in the graph', () => {
    // currently not possible to do any test. Only visual verification
});

Then('I search for a known {string} in the {string} list search box', async () => {
    await p.searchForKnownProviderOrCode();
});

Then('I see the {string} in the {string} list', () => {
    console.log('...');
});

Then('I click anywhere on the graph to see {string}', (activityDataPage) => {
    p.clickOnGraphToSee(activityDataPage);
});

Then('I click on Export to see PDF, Excel, XSLX export options', () => {
    p.clickExportToSeeExportOptions();
});

When('I click on a few legend items in the preview graph in the {string} tile', (tileName) => {
    p.clickFirstAndLastLegend(tileName);
});

Then('I see the graph change as per the selection', () => { p.wait(); });
