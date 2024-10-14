describe('pet', () => {

    beforeEach(()=> {
        cy.viewport(1500, 1500)
        cy.visit('https://petstore.octoperf.com/actions/Account.action?editAccountForm=')
    })

    const testDataProfile = require("../../fixtures/profile.json")

    it.only('tc-Edit-Account', () => {
    
        cy.wait(3000)
        cy.pet(
            testDataProfile.firstname,
            testDataProfile.lastname,
            testDataProfile.email,
            testDataProfile.phone,
            testDataProfile.address1,
            testDataProfile.address2,
            testDataProfile.city,
            testDataProfile.state,
            testDataProfile.zip,
            testDataProfile.country
        )

        cy.get(":nth-child(2) > :nth-child(2) > select").select(4)
        cy.wait(3000)
        cy.get('[name="editAccount"]').click()
        cy.get('#LogoContent > a > img').click()
        cy.get('[href="/actions/Account.action?signonForm="]').should('have.text','Sign In')
        
    })


})