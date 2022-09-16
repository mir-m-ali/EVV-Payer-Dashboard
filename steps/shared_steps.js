const p = require('../pages/shared');

When('I am on the Dashboard page', () => {
    p.clickOnDashboardButton();
});

Then('I see the {string} tile', (title) => {
    p.verifyTileIsPresent(title);
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


Then('I click on Reset to clear the filters and click Apply to see the initial data', () => {
    p.reset();
    p.apply();
});

Then('I click anywhere on the graph to see {string}', (activityDataPage) => {
    p.clickOnGraphToSee(activityDataPage);
});

Then('I click on Export to see PDF, Excel, XSLX export options', () => {
    p.clickExportToSeeExportOptions();
});


