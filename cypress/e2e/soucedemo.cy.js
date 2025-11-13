describe('Source Demo', () => {
  beforeEach('should open the source demo page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type(Cypress.env('USER_PASSWORD'))
    cy.get('#login-button').click()
    cy.get('.inventory_item_name').should('have.length', 6)
  })

  it('should add a product to the cart', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})