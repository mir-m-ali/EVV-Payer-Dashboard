Feature: Different dashboard validation scenarios

Background:
Given I login


@DCHT-156
Scenario: As a user, verify Date Range shows correct Specific Error Code
When I click on the preview pie chart in the 'Unmatched_Claims_By_Reason' tile
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I select the dates and error code and click Apply to see the data change

@DCHT-160
Scenario: As a user, perform Error Code search
When I click on the preview pie chart in the 'Unmatched_Claims_By_Reason' tile
Then I see the title 'UNMATCHED CLAIMS BY ERROR' in maximized tile and the data in a graph
Then I search for a known 'error code' in the 'error code' list search box
Then I see the 'error code' in the 'error code' list