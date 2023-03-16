/// <reference types="Cypress" />

describe('My forth Test Suite', function() {
 
  it('My forth case',function() {
    //Check boxes
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const text=$el.text()
      //iterate thro the second column until get "Python"
      if(text.includes('Python')) {
        // move from sibling to desired element with .next
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
          // get the text (data)
          const priceText = price.text()
          expect(priceText).to.equal('25')
        })
      }
    })
  })
})
