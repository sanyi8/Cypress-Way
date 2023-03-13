/// <reference types="Cypress" />
 
describe('My forth Test Suite', function() 
{
 
it('My forth case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

//window:alert

cy.on('window:alert',(str) => 
{
  //MOCHA PART
expect(str).to.equal('Hello , share this practice page and share your knowledge')

})

//windows:confirm
cy.on('window:confirm',(str) => 
{

expect(str).to.equal('Hello , Are you sure you want to confirm?')
  
})

// not support child windows

cy.get('#opentab').invoke('removeAttr','target').click()
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}  )
 
 
 
}  )
