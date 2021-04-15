describe('Login/Logout Test', () => {
  const BASE = Cypress.config('baseUrl')
  before(() => {
    cy.visit(BASE + '/login.html')
    cy.get('#login_form').should('be.visible')
  })
  it('Invalid Data', () => {
    cy.get('#user_login').type('invalid username')
    cy.get('#user_password').type('invalid password')
    cy.get('[type="submit"]').click()
  })
  it('Error Message Displays', () => {
    cy.get('div.alert-error').contains('Login and/or password are wrong')
  })
  it('Valid Data', () => {})
  it('Successfully Logged in', () => {})
  it('Log Out Successfully', () => {})
})
