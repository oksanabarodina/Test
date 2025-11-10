describe('GitHub Login Test', () => {
  it('should open GitHub and login with provided credentials', () => {
    // Visit GitHub homepage
    cy.visit('https://github.com/')
    
    // Click on Sign in button
    cy.contains('Sign in').click()
    
    // Wait for login page to load
    cy.url().should('include', '/login')
    
    // Fill in email address
    cy.get('input[name="login"]').type('oksana.barodina.i@yandex.ru')
    
    // Fill in password
    cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
    
    // Click Sign in button
    cy.get('input[type="submit"]').click()
    
    // Verify successful login - check for user navigation menu or dashboard
    cy.url().should('not.include', '/login')
    
    // Verify we're logged in by checking for user menu or dashboard elements
    cy.get('button[aria-label*="Open user navigation menu"]', { timeout: 10000 }).should('be.visible')
    
    // Alternative verification - check for dashboard or user-specific elements
    cy.get('body').should('not.contain', 'Sign in')
  })
})

