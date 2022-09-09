const p = require('../pages/top_provider');

When('I click on the preview graph in the Top Provider Activity panel', () => {
    p.clickOnPreviewGraph();
});

Then('I see the Top Provider Activity panel maximize and the data in a graph', async () => {
    await p.verifyPanelMaximized();
}); 


Then('I can click on Reset to see the initial graph data', async () => {
    await p.reset();
});

Then('I can click anywhere on the graph to see the details in a table', () => {
    p.clickOnGraph();
});

Then('I can click on Export to see PDF, Excel, XSLX export options', () => {
    p.clickExportToSeeExportOptions();
});

When('I select the dates and provider and click Apply', async () => {
    await p.selectDatesAndProvider();
}); 

