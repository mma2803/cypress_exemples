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

//connexion
Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://localhost:3000/signin');
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get("button").contains("Sign In").click();
    //cy.get("header button").first().click();
    //cy.get('[data-test="sidenav-user-full-name"]').should("contain",myname) 
   // cy.get('[data-test="sidenav-username"]').should("have.text", `@${username}`);
});

Cypress.Commands.add('verif', (username, password, myname) => {
    //cy.visit('http://localhost:3000/signin');
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get("button").contains("Sign In").click();
    //cy.get("header button").first().click();
    cy.get('[data-test="sidenav-user-full-name"]').should("contain",myname) 
    cy.get('[data-test="sidenav-username"]').should("have.text", `@${username}`);
})
  
