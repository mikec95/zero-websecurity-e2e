describe('Feedback Test', () => {
  const BASE = Cypress.config('baseUrl')
  before(() => {
    cy.visit(BASE)
    cy.get('li#feedback').click()
  })
  it('Form Loaded', () => {
    cy.url().should('eq', BASE + '/feedback.html')
    cy.get('form').should('be.visible')
  })
  it('Form Data Entered', () => {})
  it('Form Submitted', () => {})
  it('Feedback Message Displayed', () => {})
})
