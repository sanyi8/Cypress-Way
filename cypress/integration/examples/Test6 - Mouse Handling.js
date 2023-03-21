/// <reference types="Cypress" />

describe("My forth Test Suite", function () {
  it("My forth case", function () {
    //Check boxes
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

    // go to top and click
    cy.contains("Top").click({force: true});

    // check url if include top
    cy.url().should("include", "top");
  });
});
