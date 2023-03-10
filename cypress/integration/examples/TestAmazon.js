/// <reference types="Cypress" />

describe("My Amazon Test", () => {
  it("My first test case", () => {
    cy.visit("https://www.amazon.co.uk/");
    // Click "Accept" Button
    cy.get("#sp-cc-accept").click();
    // Search for rc car
    cy.get("#twotabsearchtextbox").type("rc car");
    cy.get("#nav-search-submit-button").click();
    // Wait for results to load
    cy.wait(2000);
    // Ensure there are 96 items in the first promotion products
    cy.get(".s-result-list")
      .first()
      .find(".s-result-item")
      .should("have.length", 4);
  });
});
