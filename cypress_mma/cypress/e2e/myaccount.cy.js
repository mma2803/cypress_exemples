

let username = "Dina20"
let password = "s3cret"
let myname = "Darrel O"
let firstname = "reda" 
let lastname = "wichou'"
let email = "Marielle_Wizayahoo.com"
let numberphone = "887-309-159"
let firstLetter_lastname = lastname.charAt(0)
let user_full_name = firstname + " " + firstLetter_lastname //ajouter un espace

describe('My account', () => {
    //connexion
   /* before(() => {
        //todo: le nom et prénom doivent etre des noms et prénom aléatoires utiliser la librairie faker
    });*/
    
    beforeEach(() => {
        cy.login(username, password);
    });
    
   /* it('access to My account && verify user settings', () => {
        cy.get('[href="/user/settings"]').contains('My Account').click()
        cy.get('[data-test="user-settings-firstName-input"]').should('have.value',firstname) //
        cy.get('[data-test="user-settings-lastName-input"]').should('have.value',lastname)
        cy.get('[data-test="user-settings-email-input"]').should('have.value',email)
    })*/

    /*it(' modify firstname/lastname && save && verify the new user details', () => {
        cy.get('[href="/user/settings"]').contains('My Account').click()
        cy.get('[data-test="user-settings-firstName-input"]').clear().type(firstname)
        cy.get('[data-test="user-settings-lastName-input"]').clear().type(lastname)
        cy.get('[data-test="user-settings-email-input"]').should('have.value', email) 
        cy.get('[data-test="user-settings-phoneNumber-input"]').should('have.value', numberphone)
        cy.get('button[data-test="user-settings-submit"]').click()
        cy.get('h6[data-test="sidenav-user-full-name"]').should('contain', user_full_name)
    })*/

    it(' email unvalid => cadre rouge, text forme invalide et can\'t save', () => {
        cy.get('[href="/user/settings"]').contains('My Account').click()
        cy.get('[data-test="user-settings-firstName-input"]').clear().type(firstname)
        cy.get('[data-test="user-settings-lastName-input"]').clear().type(lastname)
        cy.get('[data-test="user-settings-email-input"]').clear().type(email) //test adresse invalide sans @
        cy.get('[data-test="user-settings-email-input"]').siblings('fieldset')
            .invoke('css', 'border-color')
            .should('eq', 'rgb(211, 47, 47)');  // Vérifie que la couleur est noire (en format RGB) */
        cy.get('p[id="user-settings-email-input-helper-text"]')
            .should('have.text', 'Must contain a valid email address')
            .invoke('css', 'color')
            .should('eq', 'rgb(211, 47, 47)');  // Vérifie que la couleur est noire (en format RGB)
        cy.get('[data-test="user-settings-phoneNumber-input"]').should('have.value', numberphone)
        cy.get('button[data-test="user-settings-submit"]')
            .invoke('css', 'color')
            .should('eq', 'rgba(0, 0, 0, 0.26)')
    })


        /*it('verify notifications', () => {
            cy.get('[data-test="nav-top-notifications-link"]').click()
            cy.get('main h2').first().should('have.text', 'Notifications')
            //je supprime une notification && je revérifie le nombre des notifications 
            cy.get('[data-test="notifications-list"] li').eq(2).find('button').contains('Dismiss').click()
        it ()
    
    
        })*/
    })