context('WilliamHill - Performance tests', () => {
  beforeEach(() => {  
    cy.visit('http://sports.williamhill-pp2.com/betting/en-gb')
    cy.get('#accountTabButton').click()
    cy.get('#loginUsernameInput').type('betslip01')
    cy.get('#loginPasswordInput').type('Password123')
    cy.get('#loginButton').click()
    cy.wait(5000)
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })


    
  })
    // get loginTabButton()  { return browser.element('#accountTabButton') }
        // get depositButton() { return browser.element('#depositHeaderButtonLink') }
            // browser. .element('#loginButton') }

      describe('Scenario 1 - Place Bet', function() {
        it.skip('Place Bet ', function() {
        
          cy.get('.betbutton__odds:first').click()
          cy.get('#bets-container-singles>div>div>div:nth-child(3)>span>input').type('1.00')
          cy.get('#betslip-footer-actions > ul > li.betslip-bet-actions__list-item.betslip-bet-actions__list-item--full-width > input').click()
          cy.get('#receipt-notice-box > em').should('be.visible')
        })

        it.skip('Changing tabs and wait to load content', function() {
          cy.get('.betslip-concessions').should('be.visible')
          cy.get('#openbets-tab > a > span:nth-child(2)').click()
          cy.get('#open-bets > div > div > div > div:nth-child(2) > div > ul > li:nth-child(1) > ul > li > div > div.placed-bet-selection__data').should('be.visible')
          cy.get('#betslip-tab > a > span').click()
          cy.get('#betslip-message-empty').should('be.visible')
        })
      })
         describe ('Scenario 2 - clicking the Cash in button on an Open bet', function() {
           it('Cash in', function(){
             cy.get('#nav-football > a').should('be.visible')
             cy.get('#nav-football > a').click({ multiple: true })
             cy.get('#nav-football-matches > a').click()
             cy.wait(1000)
             cy.get('#filterSelectionTuesday > span').click()// To do test not on tuesday 
             cy.wait(1000)

             cy.get('.betbutton__odds:first ').should('be.visible')
             cy.get('.betbutton__odds:first ').click()
             cy.get('#bets-container-singles>div>div>div:nth-child(3)>span>input').type('1.00')
             cy.get('#betslip-footer-actions > ul > li.betslip-bet-actions__list-item.betslip-bet-actions__list-item--full-width > input').click()
            
             cy.get('#receipt-notice-box').should('be.visible')
             cy.get('#openbets-tab > a > span:nth-child(2)').click()
             
             cy.get('#open-bets > div > div > div > div:nth-child(2) > div > ul > li:nth-child(1) > div.cash-in > div > div.cash-in-button-container > button > span > span:nth-child(2)').should('be.visible')
             cy.get('#open-bets > div > div > div > div:nth-child(2) > div > ul > li:nth-child(1) > div.cash-in > div > div.cash-in-button-container > button > span > span:nth-child(2)').click()
             cy.get('#open-bets > div > div > div > div:nth-child(2) > div > ul > li:nth-child(1) > div.cash-in > div > div > button.button___zFeSd.button--button-outfit___2yHtd.button--button-theme-light___2w1zJ.button--button-green___2VZaO.button--button-expanded___2NFps > span').click()
             cy.get('li > header.cashed-in-header > div').should('be.visible')
            })
          
          })
        
      
})
     
      
        
          
      