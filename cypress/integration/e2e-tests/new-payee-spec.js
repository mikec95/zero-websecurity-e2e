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
    cy.get('body').type('{esc}') // Escape browser alert informing user of poor password

    cy.get('ul.nav-tabs').should('be.visible')
  })
  it('Navigate to "Pay Bills" tab', () => {
    cy.get('a').contains('Pay Bills').click()
    cy.get('li#pay_bills_tab').should('have.class', 'active')
    cy.get('form').should('be.visible')
  })
  it('Navigate to "Add New Payee" tab', () => {
    cy.get('li').contains('Add New Payee').click()
    cy.get('form.form-horizontal').should('be.visible')
  })
})
