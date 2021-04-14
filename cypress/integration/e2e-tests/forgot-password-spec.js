describe('Forgot Password E2E', () => {
  before(() => {
    const base = Cypress.config('baseUrl')
    cy.visit(base)
  })
  it('Click on the sign in button', () => {
    cy.get('#signin_button').click()
  })
  it('Click on the Forgot Password link', () => {
    cy.get('a').contains('Forgot your password ?').click()
    cy.get('h3').contains('Forgotten Password')
  })
  it('Enter email', () => {
    cy.get('#user_email').type('test@gmail.com')
  })
  it('Submit', () => {
    cy.contains('Send Password').click()
  })
  it('Assert success message', () => {
    cy.get('div').contains(
      'Your password will be sent to the following email: test@gmail.com'
    )
  })
})
