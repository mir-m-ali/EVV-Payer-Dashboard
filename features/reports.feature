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

@DCHT-210 @DCHT-211 @DCHT-212
Scenario: Verify the user can open the Claim Status report
When I click on the Reports menu
Then I click on item 'Claim status' to see the report load
Then I select a valid date range
Then I click the Apply button
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-214 @DCHT-215 @DCHT-216 @DCHT-380
Scenario: Verify the user can open the Care Delivery report
When I click on the Reports menu
Then I click on item 'Care Delivery' to see the report load
Then I select a valid date range
Then I click the Apply button
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-217
Scenario: As a user, verify Clear Button clears filters on the Care Delivery report
When I click on the Reports menu
Then I click on item 'Care Delivery' to see the report load
Then I select a valid date range
Then I click the Reset button


@DCHT-221
Scenario: Verify the user can open the Provider Adoption Consolidated report
When I click on the Reports menu
Then I click on item 'Provider Adoption Consolidated' to see the report load
Then I select a valid date range
Then I click the Apply button
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-728
Scenario: Verify the user can open the Prior Authorization Utilization report
When I click on the Reports menu
Then I click on item 'Prior Authorization Utilization' to see the report load
Then I select 100% for Balance Less Than or Equal
Then I select a valid date range
Then I click the Apply button
Then I click on Export to see PDF, Excel, XSLX export options

@DCHT-213 @DCHT-377
Scenario: As a user, verify Clear Button clears filters on the Claim status report
When I click on the Reports menu
Then I click on item 'Claim status' to see the report load
Then I select a valid date range
Then I select a claim status
Then I click the Apply button
Then I click the Reset button

@DCHT-582
Scenario: As a user, verify column data for the test visit is accurate in Visit Report
When I click on the Reports menu
Then I click on item 'Visit report' to see the report load
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the detailed report with the following columns
| No | Name             |
| 1  | Record Count     |
| 2  | Provider         |
| 3  | Provider ID      |
| 4  | Provider NPI     |
| 5  | Caregiver        |
| 6  | Recipient        |
| 7  | Recipient ID     |
| 8  | Service Code     |
| 9  | Visit ID         |
| 11 | Scheduled Start  |
| 12 | Scheduled End    |
| 13 | Actual Start     |
| 14 | Actual End       |
| 15 | Actual Duration  |
| 16 | Status           |

@DCHT-748 @DCHT-749 @DCHT-750
Scenario Outline: As a user, verify CMS KPI reports are selectable, generated, and exported with a start and end date
When I click on the Reports menu
Then I click on item <Report> to see the report load
Then I set '2021-04-01' as the start date
Then I set 'today' as the end date
Then I click Apply
Then I click on Export to see PDF, Excel, XSLX export options

Examples:
| Report        |
| 'CMS KPI 1'   |
| 'CMS KPI 2'   |
| 'CMS KPI 3'   |
