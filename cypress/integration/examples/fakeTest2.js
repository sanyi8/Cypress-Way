/// <reference types="Cypress" />

describe('My First Test Suite', function() {
  it('My First Test Case', function() {
    cy.visit('https://www.rahulshettyacademy.com/angularAppdemo');


    //when you receive this request
    cy.intercept('Get', 'https://www.rahulshettyacademy.com/library/getbook.php?authorname=shetty',
    (req)=>
    {
      //you modify to this
    req.url="https://www.rahulshettyacademy.com/library/getbook.php?AuthorName=malhotra"
    
    // send to server with continue method with expected response for 403
    req.continue((res)=>
    {
      //expecting 403
      expect(res.statusCode).to.equal(403)

      //until above line it is just intercepting

    })



  }).as("dummyUrl")
  cy.get("button[class='btn btn-primary']").click()
  cy.wait('@dummyUrl')
})
})