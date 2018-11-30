
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