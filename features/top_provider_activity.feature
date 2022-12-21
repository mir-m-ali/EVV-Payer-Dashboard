Feature: Test scenarios for 'Top Provider Activity'

Background:
Given I login


@DCHT-81
Scenario: Verify functionality of Top Provider Activity tile
When I click the preview graph of tile 'Top Provider Activity'
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