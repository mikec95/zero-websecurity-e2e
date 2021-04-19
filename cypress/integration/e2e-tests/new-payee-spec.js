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
  it('Submit Invalid Data', () => {
    cy.get('input#add_new_payee').click()
    cy.get('div#alert_content').should('not.be.visible')
  })
  it('Fill out form', () => {
    cy.get('input#np_new_payee_name').type('First Last')
    cy.get('textarea#np_new_payee_address').type('Address')
    cy.get('input#np_new_payee_account').type('Account')
    cy.get('input#np_new_payee_details').type('Payee Details')
  })
  it('Submit Valid Data', () => {
    cy.get('input#add_new_payee').click()
    cy.get('div#alert_content').should('be.visible')
  })
})
