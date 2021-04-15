describe('Searchbox Test', () => {
  before(() => {
    const base = Cypress.config('baseUrl')
    cy.visit(base)
  })
  it('Should type into Searchbox and press ENTER on keyboard', () => {
    cy.get('#searchTerm').as('search')
    cy.get('@search').type('Search Test {Enter}')
  })
  it('Should show Search Results page', () => {
    cy.get('h2').should('have.text', 'Search Results:')
  })
})
