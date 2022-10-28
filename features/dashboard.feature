Feature: Different dashboard validation scenarios

Background:
Given I login

@verify-different-tiles
Scenario: Verify different tiles display on the dahboard page
When I am on the Dashboard page
Then I see the 'Top Provider Activity' tile
And I see the 'Missed Visits By Provider' tile
And I see the 'Unmatched Claims By Error' tile
And I see the 'Late Visits By Provider' tile
And I see the 'Claims Adjudication By Provider' tile
And I see the 'Submitted Claims By Reason Code' tile

@DCHT-81
Scenario: Verify functionality of Top Provider Activity tile
When I click on the preview graph in the 'Top_Provider_Activity' tile
Then I see the title 'TOP PROVIDER ACTIVITY' in maximized tile and the data in a graph
Then I click the provider filter button All to see all providers selected
Then I click the provider filter button None to see all providers deselected
Then I click on a single provider to see that provider selected
Then I click on the provider filter button Invert to see the provider selection is inverted
Then I click Reset
Then I select the dates and provider and click Apply to see the data change
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I click anywhere on the graph to see 'TOP PROVIDER ACTIVITY DATA PAGE'
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-82 @DCHT-83 @DCHT-84 @DCHT-85 @DCHT-86
Scenario: Verify functionality of Late Visits By Provider tile
When I click on the preview graph in the 'Late_Visits_By_Provider' tile
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I click the provider filter button All to see all providers selected
Then I click the provider filter button None to see all providers deselected
Then I click on a single provider to see that provider selected
Then I click on the provider filter button Invert to see the provider selection is inverted
Then I click Reset
Then I select the dates and provider and click Apply to see the data change
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I click anywhere on the graph to see 'LATE VISITS BY PROVIDER'
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-87
Scenario: Verify Provider Search in 'Late Visits By Provider'
When I click on the preview graph in the 'Late_Visits_By_Provider' tile
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I search for a known 'provider' in the 'provider' list search box
Then I see the 'provider' in the 'provider' list

@DCHT-88
Scenario: Verify dynamic bar chart for 'Late Visits By Provider'
When I click on the preview graph in the 'Late_Visits_By_Provider' tile
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I click on the legend Late Visits
Then I click on the legend Variance

@DCHT-90
Scenario: Verify dynamic bar chart for 'Late Visits By Provider'
When I click on the preview graph in the 'Late_Visits_By_Provider' tile
Then I see the title 'LATE VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I select a valid date range and click Apply to see the graph
Then I click on the first bar of the chart in 'LATE VISITS BY PROVIDER' to see the detailed data of the provider 
Then I see the provider filter is set to the provider that was clicked on the bar chart


@DCHT-89 @DCHT-91 @DCHT-92 @DCHT-93 @DCHT-94 @DCHT-95
Scenario: Verify functionality of Missed Visits By Provider tile
When I click on the preview graph in the 'Missed_Visits_By_Provider' tile
Then I see the title 'MISSED VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I click the provider filter button All to see all providers selected
Then I click the provider filter button None to see all providers deselected
Then I click on a single provider to see that provider selected
Then I click on the provider filter button Invert to see the provider selection is inverted
Then I click Reset
Then I select the dates and provider and click Apply to see the data change
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I click anywhere on the graph to see 'MISSED VISITS BY PROVIDER'
Then I click on Export to see PDF, Excel, XSLX export options


@DCHT-97
Scenario: Verify user can open Unmatched Claims By Error tile
When I click on the preview graph in the 'Unmatched_Claims_By_Reason' tile
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph

@DCHT-158
Scenario: Verify Reset button clears filters in the Umatched Claims By Error tile
When I click on the preview graph in the 'Unmatched_Claims_By_Reason' tile
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I select the dates and error code and click Apply to see the data change
Then I click on Reset to clear the filters and click Apply to see the initial data

@DCHT-157
Scenario: Verify Reset button clears filters in the Umatched Claims By Error tile
When I click on the preview graph in the 'Unmatched_Claims_By_Reason' tile
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I select the dates and error code and click Apply to see the data change
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-152 @DCHT-153
Scenario: Verify Umatched Claims By Error tile is dynamic based on selection of legend
When I click on a few legend items in the preview graph in the 'Unmatched_Claims_By_Reason' tile
Then I see the graph change as per the selection


@debug
Scenario: Simple test
When I test
#When I click on the preview graph in the 'Missed_Visits_By_Provider' tile
#Then I see the title 'MISSED VISITS BY PROVIDER' in maximized tile and the data in a graph
#When I click on the preview graph in the 'Late_Visits_By_Provider' tile
#When I click on the preview graph in the 'Top_Provider_Activity' tile

