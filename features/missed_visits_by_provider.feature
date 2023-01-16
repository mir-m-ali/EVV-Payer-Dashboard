Feature: Test scenarios for 'Missed Visits By Provider'

Background:
Given I login


#regression?
@DCHT-89 @DCHT-91 @DCHT-92 @DCHT-93 @DCHT-94 @DCHT-95 
Scenario: Verify functionality of Missed Visits By Provider tile
When I click the preview graph of tile 'Missed Visits By Provider'
Then I see the title 'MISSED VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I click the filter button All to see all options selected
Then I click the filter button None to see all options deselected
Then I click on a single provider to see that provider selected
Then I click on the provider filter button Invert to see the provider selection is inverted
Then I click Reset
Then I select the dates and provider and click Apply to see the data change
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I click anywhere on the graph to see 'MISSED VISITS BY PROVIDER'
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-96
Scenario: Verify Provider Search in 'Missed Visits By Provider'
When I click the preview graph of tile 'Missed Visits By Provider'
Then I see the title 'MISSED VISITS BY PROVIDER' in maximized tile and the data in a graph
Then I search for a known 'provider' in the 'provider' list search box
Then I see the 'provider' in the 'provider' list