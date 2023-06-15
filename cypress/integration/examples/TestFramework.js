/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage.js"

describe('My Second FrameWork', function ()
{

  before(function() {
  // root-level hook
  // runs once before all tests
  cy.fixture('example').then(function(data)
  {

// this is the global variable: data (this make it Global!!!)
this.data=data
  })
})

it('Second FrameWork Case', function() {
const homePage = new HomePage()
const ProductPage = new ProductPage()

    cy.visit("https://www.rahulshettyacademy.com/angularpractice/")

  homePage.getEditBox().type(this.data.name)
  homePage.getGender().select(this.data.gender)
  homePage.getTwoWayDataBinding().should("have.value",this.data.name)
  homePage.getEditBox().should("have.attr","minlength","2")
  homePage.getEnterpreneaur().should('be.disabled')

  homePage.getShopTab().click()
  //$el for element
    
    this.data.productName.forEach(function(element) {
      cy.selectProduct(element)

    });
    productPage.checkOutButton().click()

  })
})