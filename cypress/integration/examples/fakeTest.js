/// <reference types="Cypress" />

describe('My First Test Suite', function() {
  it('My First Test Case', function() {
    cy.visit('https://www.rahulshettyacademy.com/angularAppdemo');

    cy.intercept(
      {
        method: 'GET',
        url: '**/GetBook.php**'
      },
      (req) => {
        if (req.url.includes('AuthorName=shetty')) {
          req.reply({
            statusCode: 200,
            body: [
              {
                book_name: 'RestAssured with Java',
                isbn: 'RSU',
                aisle: '2301'
              },
              {
                book_name: 'RestAssured with Java',
                isbn: 'RSU',
                aisle: '2301'              }
            ]
          });
        }
      }
    ).as('bookretrievals');

    cy.get("button[class='btn btn-primary']").click();

    cy.wait('@bookretrievals').then(({ request, response }) => {
      cy.get('tr').should('have.length', response.body.length + 1);
    //  cy.get('p').should('have.text', 'Oops only 1 Book available');
    });

    // Move any other commands outside the callback function if needed
  });
});
