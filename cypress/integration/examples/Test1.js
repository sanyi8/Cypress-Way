/// <reference types="Cypress" />

describe('My First Test', () => {
  it('My first test case', () => {
    
    cy.visit("https://www.amazon.co.uk/");
    //fixture
    //Accept Button
    cy.get("#a-autoid-0").click()
    //Search for rc car
    cy.get('#twotabsearchtextbox').type("rc car")
    cy.get('#nav-search-submit-button').click()
    //for item is on the first promo products
    cy.get('._bGlmZ_item_awNhH').should('have.length',3)
  })
})