// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('account', (firstname, lastname,address1,address2,email,zip,phone,city,state,country) => {
    cy.get(':nth-child(1) > :nth-child(2) > input').type(firstname)
    cy.get(':nth-child(4) > tbody > :nth-child(2) > :nth-child(2) > input').type(lastname)
    cy.get(':nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > input').type(email)
    cy.get(':nth-child(4) > tbody > :nth-child(4) > :nth-child(2) > input').type(phone)
    cy.get(':nth-child(5) > :nth-child(2) > input').type(address1)
    cy.get(':nth-child(6) > :nth-child(2) > input').type(address2)
    cy.get(':nth-child(7) > :nth-child(2) > input').type(city)
    cy.get(':nth-child(8) > :nth-child(2) > input').type(state)
    cy.get(':nth-child(9) > :nth-child(2) > input').type(zip)
    cy.get(':nth-child(10) > :nth-child(2) > input').type(country)
})

Cypress.Commands.add('test', (Username,Password) => {
    cy.get('#username').type(Username)
    cy.get('#password').type(Password)
})