describe('Example Test Suite', () => {
  it('should visit example.com and verify page title', () => {
    // Visit the example.com website
    cy.visit('https://example.com')
    
    // Verify the page title
    cy.title().should('include', 'Example Domain')
    
    // Verify the main heading exists
    cy.get('h1').should('be.visible')
    cy.get('h1').should('contain', 'Example Domain')
    
    // Verify the paragraph text
    cy.get('p').should('contain', 'This domain is for use in illustrative examples')
  })
})

