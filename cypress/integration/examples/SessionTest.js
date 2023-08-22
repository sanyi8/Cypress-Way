// [routerlink*='cart']
describe('JWT Session', () => {
    it('is logged in through local storage', () => {
        cy.LoginAPI().then(function()   // for the login token
        {
           cy.visit("https://rahulshettyacademy.com/client",
           {
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
           })
           
        })
        cy.get(".card-body button:last-of-type").eq(1).click() //1 select second "add to cart" button
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click()     //chose an UI element$$$ by name "Checkout"
        cy.get("[placeholder='Select Country']").type("ind");

        // create a loop for iterate thro dropdown menu and pick india
        cy.get(".ta-results button").each(($el,index,$list)=>
        {
            if($el.text === "India")
            {
                // when I find "India I wrap then click"
                cy.wrap($el).click()

            }
        })
        
        // wait only here as Rahul server slow DO NOT USE IN REAL
        // chose India button which is the 3rd it should be by above I loop
        cy.wait(800);
        cy.get('.ta-results > :nth-child(3)').click()
        cy.get(".action__submit").click();
        


    })
})