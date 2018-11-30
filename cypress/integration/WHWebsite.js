
function login(username, password) {
  cy.get('#accountTabButton').click()
  cy.get('#loginUsernameInput').type(username)
  cy.get('#loginPasswordInput').type(password)
  cy.get('#loginButton').click()
  cy.wait(5000)
}

context('WilliamHill - Performance tests', () => {
  beforeEach(() => {  
    cy.visit('http://sports.williamhill-pp2.com/betting/en-gb')
    login('betslip01','Password123')
    
    
    })
    describe('Scenario 1 - Track clicking the Open Bets tab', function() {
      it('Changing between tabs', function() {
        cy.get('[ng-show="openBetsVersion"]').click()
        cy.get('#betslip-tab > .betslip-navigation__menu-link > .betslip-navigation__menu-text').click()
        cy.get('[ng-show="openBetsVersion"]').click()
      })
    })

      describe('Scenario 2 - Place a bet', function() {
        it('Login ', function() {
          cy.get('.betbutton__odds:first').click()
          cy.get('#bets-container-singles > div > div > div:nth-child(3) > span > input').type('1')
          cy.get('#betslip-footer-actions > ul > li.betslip-bet-actions__list-item.betslip-bet-actions__list-item--full-width > input').click()
          cy.get('#receipt-notice-box').should('be.visible')
        })
      })
  })


//   What/Why?
//  To track technical KPIs in betslip in order to be able to compare the performance numbers we are getting now to those we have after implementing the new betslip solution.

// using a similar solution as is implemented here:
//  [https://git.nonprod.williamhill.plc/whnft/sitespeedio/blob/master/run_scripts/run_script_football.sh]
//  [https://git.nonprod.williamhill.plc/sportsbook/sportsbook-web/blob/develop/web/js/app/components/Performance.js]
//  [http://sitespeed.williamhill.plc/dashboard/db/new-relic?refresh=5s&orgId=1]

// this is done by using the performance timing api to measure custom timing metrics in conjunction with the addPageAction method from new relic for recording the gathered metrics:
//  [https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action]

//  

// What should be tracked? extra info to be appended to event?

//  
//  # *How long does a user spend on the open bets tab before clicking the Cash In button?*
//  # *How long does a user spend on the open bets tab before navigating away?***

// *Scenario 1 - Track clicking the Open Bets tab*

// *Given* user is on the Betslip tab
//  *When* user clicks on the Open Bets tab
//  *Then* this event is tracked in newrelic

// *Scenario 2 - Track clicking the Cash In button on an Open bet*

// *Given* user is on the Open Bets tab
//  *When* user clicks on a cash in button on a OpenBet
//  *Then* this event is tracked in newrelic

// *Scenario 3 - Track navigating away from the Open Bets tab*

// *Given* user is on the Open Bets tab
//  *When* user navigates away from the Open Bets tab
//  *Then* this event is tracked in newrelic

// *Scenario 4 - Track time spent on Open Bets tab before clicking the Cash In button on an open bet*

// *Given scenario 1 and scenario 2*
//  *When* the events are logged in new relic
//  *Then* we can track the amount of time the user spends on the openbets tab before they attempt to cash in

// *Scenario 5 - Track time spent on Open Bets tab before navigating away from the Open Bets tab*

// *Given scenario 1 and scenario 3*
//  *When* the events are logged in new relic
//  *Then* we can track the amount of time the user spends on the openbets tab before they attempt to cash in

//  

// _*This will enable us to create a grafana dashboard which visualizes this data*_