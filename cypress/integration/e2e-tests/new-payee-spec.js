describe('New Payee Creation Test', () => {
  const BASE = Cypress.config('baseUrl')
  before(() => {
    cy.visit(BASE + '/login.html')
    cy.get('#login_form').should('be.visible')

    cy.fixture('user').then(user => {
      const username = user.id
      const pass = user.pass
      cy.get('#user_login').type(username)
      cy.get('#user_password').type(pass)
    })
    cy.get('#user_remember_me').click()
    cy.get('[type="submit"]').click()

    cy.get('ul.nav-tabs').should('be.visible')
  })
  it('', () => {})
})
