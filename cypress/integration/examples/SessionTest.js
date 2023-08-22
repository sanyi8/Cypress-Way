// [routerlink*='cart']
describe('JWT Session', () => {
    it('is logged in through local storage', () => {
        cy.LoginAPI().then(function()
        {
           cy.visit("https://rahulshettyacademy.com/client",
           {
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
           })
        })
    })
})