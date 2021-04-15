describe('Navbar Test', () => {
  const BASE = Cypress.config('baseUrl')
  before(() => {
    cy.visit(BASE)
  })
  it('Home', () => {
    cy.get('#homeMenu').click()
    cy.url().should('eq', BASE + '/index.html')
    cy.get('#carousel').should('be.visible')
  })
  it('Online Banking', () => {
    cy.get('#onlineBankingMenu').click()
    cy.url().should('eq', BASE + '/online-banking.html')
    cy.get('div.hero-unit').find('h1').should('have.text', 'Online Banking')
  })
  it('Feedback', () => {
    cy.get('#feedback').click()
    cy.url().should('eq', BASE + '/feedback.html')
    cy.get('h3').should('have.text', 'Feedback')
  })
})
