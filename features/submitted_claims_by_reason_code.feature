Feature: Test scenarios for 'Submitted Claims By Reason Code'

Background:
Given I login


@DCHT-726
Scenario: Verify Reason Code Search
When I click the preview graph of tile 'Submitted Claims By Reason Code'
Then I see the title 'Claims Submitted By Reason Code' in maximized tile and the data in a graph
Then I search for a known 'reason code' in the 'reason code' list search box
Then I see the 'reason code' in the 'reason code' list