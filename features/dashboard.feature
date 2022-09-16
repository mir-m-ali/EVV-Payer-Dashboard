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

