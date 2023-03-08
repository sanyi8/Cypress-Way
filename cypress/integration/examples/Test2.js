/// <reference types="Cypress" />

describe('My First Test2', () => {
  it('My first test2 case', () => {
    
    cy.visit("https://courses.rahulshettyacademy.com/courses");
    //fixture
    //go to search bar on the page
    cy.get("#search-courses").type("all{enter}")
    //wait 2sec
    cy.wait(2000)
    //for item is on the first promo products
    cy.get('.course-list').should('have.length',2)

  })
})