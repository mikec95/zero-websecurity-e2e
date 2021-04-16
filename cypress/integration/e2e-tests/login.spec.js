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
  it('Valid Data', () => {
    cy.fixture('user').then(user => {
      const username = user.id
      const pass = user.pass
      cy.get('#user_login').type(username)
      cy.get('#user_password').type(pass)
    })
    cy.get('#user_remember_me').click()
  })
  it('Successfully Logged in', () => {
    cy.get('[type="submit"]').click()
    cy.get('ul.nav-tabs').should('be.visible')
  })
  it('Log Out Successfully', () => {
    cy.get('username').click()
    cy.get('Logout').click()
    cy.url().should('eq', BASE + '/index.html')
  })
})
