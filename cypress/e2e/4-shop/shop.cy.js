describe('shop', () => {

    beforeEach(()=> {
        cy.viewport(1500, 1500)
        cy.visit('https://www.shopist.io')
    })

    it('tc-01', () => {
    
        cy.wait(3000)
        cy.get('.sofas > .menu-item-large-container > .menu-item-large').click()
        cy.wait(5000)
        cy.get(':nth-child(7) > :nth-child(1) > .product-card > img').click()
        cy.wait(5000)
        cy.get('.modal-title').should('have.text','Oops! This item is sold out.')
        cy.wait(3000)
        cy.get('.modal-button').click()
    })


    const testDataProfile = require("../../fixtures/profile.json")

    it('tc-02', () => {
        cy.wait(3000)
        cy.get('.profile > .menu-item-large-container > .menu-item-large').click()
        cy.wait(5000)
        cy.get('.button').click()
        cy.wait(3000)
        cy.get('#firstname').clear()
        cy.get('#lastname').clear()
        cy.get('#address1').clear()
        cy.get('#address2').clear()
        cy.get('#addressCity').clear()
        cy.get('#addressZipcode').clear()
        cy.get('#phone').clear()
        cy.shop(
            testDataProfile.firstname, 
            testDataProfile.lastname, 
            testDataProfile.address1, 
            testDataProfile.address2, 
            testDataProfile.addressCity, 
            testDataProfile.addressZipcode, 
            testDataProfile.phone
        )
        
        cy.get('.inverted').click()
        cy.get('.inline-link').click()
        cy.get('section.profile > .profile > :nth-child(1) > :nth-child(2)').should('have.text','Pothiwat Chaisena')

    })

    it('tc-03', () => {

        cy.wait(3000)
        cy.get('.jumbotron-large > a > .jumbotron-box > :nth-child(3)').click()
        cy.wait(5000)
        cy.get(':nth-child(5) > :nth-child(1) > a > .product-card > img').click()
        cy.wait(3000)
        cy.get('.purchase-button').click()
        cy.wait(3000)
        cy.get('.cart > .menu-item-large-container > .menu-item-large').click()
        cy.wait(3000)
        cy.get('.checkout').click()
        cy.wait(10000)
        cy.get('.checkout-title').should('have.text','Thank you!')
    })


})  