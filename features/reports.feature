Feature: Scenarios for various reports

Background:
Given I login

@DCHT-98
Scenario: Verify the user can open the Provider Adoption Consolidated report
When I click on the Reports menu
Then I click on item 'Provider Adoption Consolidated' to see the report load

@DCHT-99
Scenario: Verify the user can open the Overlap Care Caregivers report
When I click on the Reports menu
Then I click on item 'Overlap Care Caregivers' to see the report load

@DCHT-216
Scenario: Verify the user can open the Care Delivery report
When I click on the Reports menu
Then I click on item 'Care Delivery' to see the report load
Then I select a valid date range
Then I click the Apply button
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-217
Scenario: As a user, verify Clear Button clears filters
When I click on the Reports menu
Then I click on item 'Care Delivery' to see the report load
Then I select a valid date range
Then I click the Reset button
