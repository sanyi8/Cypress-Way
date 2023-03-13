/// <reference types="Cypress" />

describe("My Third test case", function () {
  it("My third test case", function () {
    //checkbox
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    //Static dropdown
    //verify id option2 is selected
    cy.get("select").select("option2").should("have.value", "option2");
    //dynamic DD
    cy.get("#autocomplete").type("in");

    //loop through the dynamic dropdown all options
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      //choose === India from elemnets
      if ($el.text() === "India") {
        $el.click();
      }
    });

    //double checking / validation value
    cy.get("#autocomplete").should('have.value','India')

    // handle invisible and visible elements

    cy.get('#displayed-text').should('be.visible')
    // choose hide button
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //radio buttons to get checked
    //cy.get('[for="radio2"] > .radioButton') from this to bellow
    cy.get('[value="radio2"]').check().should('be.checked')

    //Handle ALERT and Confirm (Cypress auto accepts)






  });
});
