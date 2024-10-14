describe('shop', () => {

    beforeEach(()=> {
        cy.viewport(1500, 1500)
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    const testDataLogin = require("../../fixtures/Login.json")

    it.only('tc-01', () => {
    
        cy.wait(3000)
        cy.test(
            testDataLogin.Username,
            testDataLogin.Password
        )
        cy.get('.fa').click()
        cy.get('.subheader').should('have.text','Welcome to the Secure Area. When you are done click logout below.')        
        
    })


})