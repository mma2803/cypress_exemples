let username = "Dina20"
let password = "s3cret"
let contact = "Ruthie Prosacco"
let montant = "5"
let montantEnReel =`$${montant}.00`
const { faker } = require('@faker-js/faker');
// or, if desiring a different locale
// const { fakerDE: faker } = require('@faker-js/faker');
const firstname = faker.person.firstName();
const lastname = faker.person.lastName(); 

let motif = "Achats"
describe('All about notifications', () => {
    beforeEach(() => {
        cy.login(username, password);
    });
    it('affichage page notif', () => {
        cy.get('[data-test="sidenav-notifications"]').should('contain', 'Notifications').click()
        cy.get('main h2')
            .should('be.visible')
            .should('contain', 'Notifications')//affichage titre de la section   
    })
    it('je vérifie si derniere transaction demandée apparait en premier dans Mine', () => {
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="users-list"] li').contains(contact).click({force:true})
        cy.get('input[placeholder="Amount"]').type(montant);
        cy.get('input[placeholder="Add a note"]').type(motif);
        cy.get('[data-test="transaction-create-submit-request"]').contains("Request").click();
        cy.contains("Transaction Submitted!");
        cy.get('[data-test="sidenav-home"]').click()
        cy.get('[data-test="nav-personal-tab"]').click()
        cy.get('[data-test="transaction-list"]').find('li').first()
            .should('contain',contact)
            .should('contain','requested')
            .should('contain',montantEnReel)
            
    })
})

