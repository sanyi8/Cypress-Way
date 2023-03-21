/// <reference types="Cypress" />

describe("Tab Frames and child windows", function () {
  it("My forth case", function () {
    //Check boxes
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

    // .prop() is a method which will get the value of the property
    cy.get('#opentab').then(function(el))
    {
      const url=el.prop('href')
      cy.log(url)
      cy.visit(url)
      //rahulshettyacademy.com/seleniumpractise
      
  });
});
