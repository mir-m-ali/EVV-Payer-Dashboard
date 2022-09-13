const p = require('../pages/dashboard');

When('I am on the Dashboard page', () => {
    p.clickOnDashboardButton();
});

Then('I see the Top Provider Activity panel', () => {
    p.verifyTopProviderActivityIsPresent();
});

Then('I see the Missed Visits By Provider panel', () => {
    p.verifyMissedVisitsByProviderIsPresent();
});

Then('I see the Unmatched Claims By Error panel', () => {
    p.verifyUnmatchedClaimsByErrorIsPresent();
});

Then('I see the Late Visits By Provider panel', () => {
    p.verifyLateVisitsByProviderIsPresent();
});

Then('I see the Claims Adjudication By Provider panel', () => {
    p.verifyClaimsAdjudicationByProviderIsPresent();
});

Then('I see the Submitted Claims By Reason Code panel', () => {
    p.verifySubmittedClaimsByReasonCodeIsPresent();
});

