Feature: Test scenarios for 'Late Visits By Provider'

Background:
Given I login


@DCHT-82 @DCHT-83 @DCHT-84 @DCHT-85 @DCHT-86
Scenario: Verify functionality of Late Visits By Provider tile
When I click the preview graph of tile 'Late Visits By Provider'
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I click the filter button All to see all options selected
Then I click the filter button None to see all options deselected
Then I click on a single provider to see that provider selected
Then I click on the provider filter button Invert to see the provider selection is inverted
Then I click Reset
Then I select the dates and provider and click Apply to see the data change
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I click anywhere on the graph to see 'LATE VISITS BY PROVIDER'
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-87
Scenario: Verify Provider Search in 'Late Visits By Provider'
When I click the preview graph of tile 'Late Visits By Provider'
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I search for a known 'provider' in the 'provider' list search box
Then I see the 'provider' in the 'provider' list

@DCHT-88
Scenario: Verify dynamic bar chart for 'Late Visits By Provider'
When I click the preview graph of tile 'Late Visits By Provider'
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I click on the legend 'Late Visits'
Then I click on the legend 'Variance'

@DCHT-90
Scenario: Verify dynamic bar chart for 'Late Visits By Provider'
When I click the preview graph of tile 'Late Visits By Provider'
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I select a valid date range and click Apply to see the graph
Then I click any bar on the graph to see data for that item
Then I see the 'provider' filter set to the 'provider' clicked in the graph

@DCHT-795 @DCHT-796 @DCHT-797
Scenario: Verify legend behavior for 'Late Visits By Provider' tile
When I click the preview graph of tile 'Late Visits By Provider'
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click on the legend 'Late Visits'
Then I see the graph change as per the selection
Then I click on the legend 'Variance'
Then I see the graph change as per the selection
Then I click on the legend 'Late Visits'
Then I see the graph change as per the selection
Then I click on the legend 'Variance'
Then I see the graph change as per the selection
Then I click any bar on the graph to see data for that item
Then I see the 'provider' filter set to the 'provider' clicked in the graph


@Regression-2
Scenario: Verify dynamic chart behavior and filters in 'Late Visits By Provider' tile
When I click the preview graph of tile 'Late Visits By Provider'
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click on a single provider to see that provider selected
Then I click on the provider filter button Invert to see the provider selection is inverted
Then I click the filter button All to see all options selected
Then I click the filter button None to see all options deselected
Then I search for a known 'provider' in the 'provider' list search box
Then I see the 'provider' in the 'provider' list
Then I select the 'provider'
Then I click Apply
Then I see the graph change as per the selection
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click on the legend 'Late Visits'
Then I see the graph change as per the selection
Then I click on the legend 'Variance'
Then I see the graph change as per the selection
Then I click on the legend 'Late Visits'
Then I see the graph change as per the selection
Then I click on the legend 'Variance'
Then I see the graph change as per the selection
Then I click anywhere on the graph to see 'LATE VISITS BY PROVIDER'
Then I see the 'provider' filter set to the 'provider' clicked in the graph
Then I click on Export to see PDF, Excel, XSLX export options