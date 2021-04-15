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
  it('Form Data Entered', () => {
    cy.get('#name').type('First Last')
    cy.get('#email').type('email@email.com')
    cy.get('#subject').type('Subject')
    cy.get('#comment').type('Test Comment 123 !@#')
  })
  it('Form Submitted', () => {
    cy.get('[name="submit"]').click()
  })
  it('Feedback Message Displayed', () => {
    cy.url().should('eq', BASE + '/sendFeedback.html')
    cy.get('h3').should('have.text', 'Feedback')
  })
})
