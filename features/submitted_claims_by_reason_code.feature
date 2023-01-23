Feature: Test scenarios for 'Submitted Claims By Reason Code'

Background:
Given I login


@DCHT-722 @DCHT-723 @DCHT-725 @DCHT-726
Scenario: Verify dynamic chart behavior, filter options, and Reason Code Search in Submitted Claims By Reason Code
When I click the preview graph of tile 'Submitted Claims By Reason Code'
Then I see the title 'Claims Submitted By Reason Code' in maximized tile and the data in a graph
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click the filter button All to see all options selected
Then I click the filter button None to see all options deselected
Then I search for a known 'reason code' in the 'reason code' list search box
Then I see the 'reason code' in the 'reason code' list
Then I click on the reason code to see that reason code selected
Then I click Apply
Then I see the graph change as per the selection

@DCHT-720 @DCHT-727
Scenario: Verify dynamic chart behavior in Submitted Claims By Reason Code
When I click the preview graph of tile 'Submitted Claims By Reason Code'
Then I see the title 'Claims Submitted By Reason Code' in maximized tile and the data in a graph
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click on each of the '10' legends to see the graph change if applicable

@DCHT-581
Scenario: Verify dynamic chart behavior in Submitted Claims By Reason Code
When I click the preview graph of tile 'Submitted Claims By Reason Code'
Then I see the title 'Claims Submitted By Reason Code' in maximized tile and the data in a graph
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click on the pie chart
Then I click on the bar graph
Then I see the detailed report with the following columns
| No | Name             |
| 1  | Provider ID      |
| 2  | Provider         |
| 3  | Caregiver        |
| 4  | Recipient        |
| 5  | Recipient ID     |
| 6  | Reason Code      |
| 7  | Submitted Date   |
| 8  | Count            |
| 9  | Visit ID         |
| 10 | Data Source      |
Then I see the 'reason code' filter set to the 'reason code' clicked in the graph

@DCHT-816
Scenario: Verify Export report options show up
When I click the preview graph of tile 'Submitted Claims By Reason Code'
Then I see the title 'Claims Submitted By Reason Code' in maximized tile and the data in a graph
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click on Export to see PDF, Excel, XSLX export options


@Regression
Scenario: Verify dynamic chart behavior and filters in 'Submitted Claims By Reason Code' tile
When I click the preview graph of tile 'Submitted Claims By Reason Code'
Then I see the title 'Claims Submitted By Reason Code' in maximized tile and the data in a graph
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I see the graph change as per the selection
Then I click the filter button All to see all options selected
Then I click the filter button None to see all options deselected
Then I search for a known 'reason code' in the 'reason code' list search box
Then I see the 'reason code' in the 'reason code' list
Then I click on the reason code to see that reason code selected
Then I click Apply
Then I see the graph change as per the selection
Then I click the filter button None to see all options deselected
Then I click Apply
Then I see the graph change as per the selection
Then I click on Reset to clear the filters and click Apply to see the initial data
Then I set '2022-01-01' as the start date
Then I set '2022-03-31' as the end date
Then I click Apply
Then I click on each of the '10' legends to see the graph change if applicable
Then I click on each of the '10' legends to see the graph change if applicable
Then I click on the pie chart
Then I click on the bar graph
Then I see the detailed report with the following columns
| No | Name             |
| 1  | Provider ID      |
| 2  | Provider         |
| 3  | Caregiver        |
| 4  | Recipient        |
| 5  | Recipient ID     |
| 6  | Reason Code      |
| 7  | Submitted Date   |
| 8  | Count            |
| 9  | Visit ID         |
| 10 | Data Source      |
Then I see the 'reason code' filter set to the 'reason code' clicked in the graph
Then I click on Export to see PDF, Excel, XSLX export options