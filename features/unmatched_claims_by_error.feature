Feature: Test scenarios for 'Unmatched Claims By Error'

Background:
Given I login


@DCHT-97
Scenario: Verify user can open Unmatched Claims By Error tile
When I click the preview graph of tile 'Unmatched Claims By Error'
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph

@DCHT-152 @DCHT-153
Scenario: Verify Umatched Claims By Error tile is dynamic based on selection of legend
When I click on a few legend items in the preview graph in the 'Unmatched_Claims_By_Reason' tile
Then I see the graph change as per the selection

@DCHT-156
Scenario: As a user, verify Date Range shows correct Specific Error Code
When I click the preview graph of tile 'Unmatched Claims By Error'
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I select the dates and error code and click Apply to see the data change

@DCHT-157
Scenario: Verify Reset button clears filters in the Umatched Claims By Error tile
When I click the preview graph of tile 'Unmatched Claims By Error'
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I select the dates and error code and click Apply to see the data change
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-158
Scenario: Verify Reset button clears filters in the Umatched Claims By Error tile
When I click the preview graph of tile 'Unmatched Claims By Error'
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I select the dates and error code and click Apply to see the data change
Then I click on Reset to clear the filters and click Apply to see the initial data

@DCHT-159
Scenario: Verify Reset button clears filters in the Umatched Claims By Error tile
When I click the preview graph of tile 'Unmatched Claims By Error'
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I select the dates and error code and click Apply to see the data change
Then I click the provider filter button All to see all providers selected
Then I click the provider filter button None to see all providers deselected
Then I click on the provider filter button Invert to see the provider selection is inverted

@DCHT-160
Scenario: As a user, perform Error Code search
When I click the preview graph of tile 'Unmatched Claims By Error'
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I search for a known 'error code' in the 'error code' list search box
Then I see the 'error code' in the 'error code' list

@DCHT-345
Scenario: As a user, verify Date Range shows correct Global Error Code
When I click the preview graph of tile 'Unmatched Claims By Error'
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I select a valid Start Date and End Date
Then I click Apply

