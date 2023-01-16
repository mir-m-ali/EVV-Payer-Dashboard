Feature: Test scenarios for 'Claims Adjudication By Provider'

Background:
Given I login


@DCHT-806 @DCHT-803 @DCHT-804 @DCHT-805
Scenario: Verify functionality of Claims Adjudication By Provider tile
When I click the preview graph of tile 'Claims Adjudication By Provider'
Then I see the title 'CLAIMS ADJUDICATION BY PROVIDER' in maximized tile and the data in a graph
Then I click the filter button All to see all options selected
Then I click the filter button None to see all options deselected
Then I click on a single provider to see that provider selected
Then I click on the provider filter button Invert to see the provider selection is inverted
Then I click Reset
Then I select the dates and provider and click Apply to see the data change
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-719 @DCHT-798 @DCHT-799 @DCHT-800 @DCHT-807
Scenario: Verify dynamic chart behavior by clicking the legends of Claims Adjudication By Provider graph
When I click the preview graph of tile 'Claims Adjudication By Provider'
Then I see the title 'CLAIMS ADJUDICATION BY PROVIDER' in maximized tile and the data in a graph
Then I click on each of the '5' legends to see the graph change if applicable


@DCHT-801 @DCHT-802
Scenario: Verify functionality of Claims Adjudication By Provider tile
When I click the preview graph of tile 'Claims Adjudication By Provider'
Then I see the title 'CLAIMS ADJUDICATION BY PROVIDER' in maximized tile and the data in a graph
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click on a single provider to see that provider selected
Then I click Apply
Then I see the graph change as per the selection