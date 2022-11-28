Feature: Login feature

Background:
Given I login

@login-logout
Scenario: Launch the payer dashboard site, login, and then logout
Then I log out

@verify-different-tiles
Scenario: Verify different tiles display on the dahboard page
When I am on the Dashboard page
Then I see the 'Top Provider Activity' tile
And I see the 'Missed Visits By Provider' tile
And I see the 'Unmatched Claims By Error' tile
And I see the 'Late Visits By Provider' tile
And I see the 'Claims Adjudication By Provider' tile
And I see the 'Submitted Claims By Reason Code' tile
