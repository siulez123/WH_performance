context('WilliamHill - Technical Assessment', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)
    cy.visit('http://sports.williamhill.com/betting/en-gb')
    //cy.clearCookies()
  })

	describe('Scenario 1 - Accept Cookie policy', function() {
		it('Assert Cookie', function() {
			cy.get('.cookie-disclaimer')
			cy.get('.cookie-disclaimer__button').click()
		    cy.getCookie('cdb').should('have.property', 'name', 'cdb')
		})
	})

	
	describe('Scenario 2 - Change language', function() {
	
	it(`Assert Join button and change language`, () => {

		const languages = [
			{name: 'german', id: '#de', locale: 'de-de', joinLinkLable: 'Anmelden' },
			{name: 'japonese', id: '#ja', locale: 'ja-jp', joinLinkLable: '登録' },
			{name: 'greek', id: '#el', locale: 'el-gr', joinLinkLable: 'Εγγραφή' }
		]
	
		cy.wrap(languages)
			.each(language => {
	    		cy.get('.js-language-button').click()
				cy.get(language.id).click()
				cy.url().should('include', language.locale)
				cy.get('#joinLink').should('have.text',language.joinLinkLable)
	  		})
		})
	})
})