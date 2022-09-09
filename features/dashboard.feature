Feature: Different dashboard validation scenarios

Background:
Given I login

@DCHT-81
Scenario: Verify functionality of Top Provider Activity dashboard
When I click on the preview graph in the Top Provider Activity panel
Then I see the Top Provider Activity panel maximize and the data in a graph

When I select the dates and provider and click Apply
# Then I can see the graph data change
# Then I can click on Reset to see the initial graph data
# Then I can click anywhere on the graph to see the details in a table
# Then I can click on Export to see PDF, Excel, XSLX export options
