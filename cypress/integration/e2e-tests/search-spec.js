describe('Searchbox Test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/')
  })
  it('Should type into Searchbox and press ENTER on keyboard', () => {
    cy.get('#searchTerm').as('search')
    cy.get('@search').type('Search Test {Enter}')
  })
  it('Should show Search Results page', () => {
    cy.get('h2').contains('Search Results:')
  })
})
