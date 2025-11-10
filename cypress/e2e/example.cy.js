describe('GitHub Login Test', () => {
  it('should open GitHub and login with provided credentials', () => {
    // Visit GitHub homepage
    cy.visit('https://github.com/')
    
    // Click on Sign in button
    cy.contains('Sign in').click()
    
    // Wait for login page to load
    cy.url().should('include', '/login')
    cy.reload()
    // Fill in email address
    cy.get('input[name="login"]').type('oksana.barodina.i@yandex.ru')
    
    // Fill in password - use env variable with fallback
    const password = Cypress.env('USER_PASSWORD') || '111222oks'
    if (!password) {
      throw new Error('USER_PASSWORD environment variable is not set')
    }
    cy.get('input[name="password"]').click()
    cy.wait(4000)

    cy.get('input[name="password"]').type(password, {force: true})
    
    // Click Sign in button
    cy.get('input[type="submit"]').click()
    
    // Verify successful login - check for user navigation menu or dashboard
    cy.url().should('not.include', '/login')
      
    // Alternative verification - check for dashboard or user-specific elements
    cy.get('body').should('not.contain', 'Sign in')
  })
})

