// describe('login', () => {

    
//         it.only('tc-01', () => {

//             cy.visit('https://practicetestautomation.com/practice-test-login/')
//             cy.get('#username').type('student')
//             cy.get('#password').type('Password123')
//             cy.get('#submit').click()
//             cy.get('.post-title').should('have.text','Logged In Successfully')
//             cy.wait(3000)
//             cy.go('back')
//         })

//         it('tc-02', () => {

//             cy.visit('https://practicetestautomation.com/practice-test-login/')
//             cy.get('#username').type('student')
//             cy.get('#password').type('Password123')
//             cy.get('#submit').click()
//             cy.get('.post-title').should('have.text','Logged In Successfully')
//             cy.get('.wp-block-button').should('have.text','Log out')
//             cy.wait(3000)
//             cy.visit('https://practicetestautomation.com/')
//             cy.get('#menu-item-20 > a').click()
//             cy.get('.wp-container-core-columns-is-layout-1 > [style="flex-basis:33.33%"] > p > a').click()
//         })

//         it('tc-03', () => {

//             cy.visit('https://practicetestautomation.com/practice-test-login/')
//             cy.get('#username').type('student')
//             cy.get('#password').type('incorrectPassword')
//             cy.get('#submit').click()
//             cy.get('.post-title').should('have.text','Logged In Successfully')
//         })


// })  

// const testDataLogin = require("../../fixtures/login.json")
// describe('login', () => {

//     beforeEach(()=> {
//         cy.visit('https://practicetestautomation.com/practice-test-login/...')
//     })
//     it('tc-01', () => {
//         cy.login(testDataLogin.username.positive, testDataLogin.password.positive)
//         cy.get('.post-title').should('have.text','Logged In Successfully')
        
//     })
//     it('tc-02', () => {
//         cy.login(testDataLogin.username.negative, testDataLogin.password.positive)
//         cy.get('.post-title').should('have.text','Logged In Successfully')
        
//     })
//     it('tc-03', () => {
//         cy.login(testDataLogin.username.positive, testDataLogin.password.negative)
//         cy.get('.post-title').should('have.text','Logged In Successfully')
        
//     })
    
    


// })  

const testDataLogin = require("../../fixtures/login.json")

import loginPage from "../../support/page_object/loginPage"

describe('login', () => {

    beforeEach(()=> {
        cy.visit('https://practicetestautomation.com/practice-test-login/...')
    })
    it('tc-01', () => {
        cy.login(testDataLogin.username.positive, testDataLogin.password.positive)
        loginPage.verifyLoginSucessText()
        
    })
    it('tc-02', () => {
        cy.login(testDataLogin.username.negative, testDataLogin.password.positive)
        loginPage.verifyLoginErrorUsername
        
    })
    it('tc-03', () => {
        cy.login(testDataLogin.username.positive, testDataLogin.password.negative)
        loginPage.verifyLoginErrorPassword
        
    })
    
    


})  
