// all homepage elememt will go to here

class HomePage
{
    getEditBox() // method
    {
        return cy.get(':nth-child(1) > .form-control')
    }
    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-pristine')
    }
    getGender()
    {
        return cy.get("#exampleFormControlSelect1")
    }
    getEnterpreneaur()
    {
        return cy.get(':nth-child(1) > .form-control')
    }
    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
    
}

export default HomePage;