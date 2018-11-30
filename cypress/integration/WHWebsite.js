context('WilliamHill - Performance tests', () => {
  beforeEach(() => {  
    cy.visit('http://sports.williamhill-pp2.com/betting/en-gb')
    
    
    })
    // get loginTabButton()  { return browser.element('#accountTabButton') }
        // get depositButton() { return browser.element('#depositHeaderButtonLink') }
            // browser. .element('#loginButton') }

      describe('Scenario 1 - Login', function() {
        it('Login ', function() {
          cy.get('#accountTabButton').click()
          cy.get('#loginUsernameInput').type('betslip01')
          cy.get('#loginPasswordInput').type('Password123')
          cy.get('#loginButton').click()
          cy.wait(5000)
          cy.get('.betbutton__odds:first').click()

        })
      })
  })


  // #stake-input__29167177L
  // #bets-container-singles > div > div

  // #betslip-container .betslip-selection