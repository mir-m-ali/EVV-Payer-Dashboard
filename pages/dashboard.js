const { I } = inject();

const c = {
    waitTime: 120,
    dashboardBtn: '//button[contains(@mattooltip,"Payer Dashboard")]',
    topProvider: '//p[contains(text(), "Top Provider Activity")]',
    missedVisits: '//p[contains(text(), "Missed Visits By Provider")]',
    unmatchedClaims: '//p[contains(text(), "Unmatched Claims By Error")]',
    lateVisits: '//p[contains(text(), "Late Visits By Provider")]',
    claimsAdjudication: '//p[contains(text(), "Claims Adjudication By Provider")]',
    submittedClaims: '//p[contains(text(), "Submitted Claims By Reason Code")]',   
}

module.exports = {

    clickOnDashboardButton() {
        I.click(c.dashboardBtn);
    },

    verifyTopProviderActivityIsPresent() {
        I.waitForVisible(c.topProvider, c.waitTime);
    },
     
    verifyMissedVisitsByProviderIsPresent() {
        I.waitForVisible(c.missedVisits, c.waitTime);
    },

    verifyUnmatchedClaimsByErrorIsPresent() {
        I.waitForVisible(c.unmatchedClaims, c.waitTime);
    },

    verifyLateVisitsByProviderIsPresent() {
        I.waitForVisible(c.lateVisits, c.waitTime);
    },

    verifyClaimsAdjudicationByProviderIsPresent() {
        I.waitForVisible(c.claimsAdjudication, c.waitTime);
    },

    verifySubmittedClaimsByReasonCodeIsPresent() {
        I.waitForVisible(c.submittedClaims, c.waitTime);
    }

}
