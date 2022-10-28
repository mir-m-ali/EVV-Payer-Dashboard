Feature: Different dashboard validation scenarios

Background:
Given I login


@DCHT-726
Scenario: Verify Reason Code Search
When I click on the preview graph in the 'Submitted_Claims_By_Reason_Code' tile
Then I see the title 'Claims Submitted By Reason Code' in maximized tile and the data in a graph
Then I search for a known 'reason code' in the 'reason code' list search box
Then I see the 'reason code' in the 'reason code' list