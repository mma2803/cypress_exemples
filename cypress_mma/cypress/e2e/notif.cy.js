let username = "Dina20"
let password = "s3cret"
let contact = "Ruthie Prosacco"
let montant = "10"
let montantEnReel = `$${montant}.00`
let numberNotificationsIcon
let motif = "Achats"

describe('All about notifications', () => {
    beforeEach(() => {
        cy.login(username, password);
    });
    /*it('affichage page notif', () => {
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
            
    })*/
    it('je vérifie si le nbr de notifications affichées identique aux nbr de lignes ', () => {
        let countLinesNumber
        let notifcationsBadgeNumber
        cy.get('[data-test="sidenav-notifications"]').should('contain', 'Notifications').click()
        cy.get('ul[data-test="notifications-list"]').find('li button').first().click({force:true})
        cy.get('ul[data-test="notifications-list"]').find('li').its('length').then((count) => {
            cy.log(`Nombre total de notifications - lignes: ${count}`);
            //countLinesNumber = count
            cy.get('[data-test="nav-top-notifications-count"],[data-testid="NotificationsIcon"]').siblings('span').invoke('text').then((badgeValue) => {
                cy.log(`Valeur du badge : ${badgeValue}`);
                //notifcationsBadgeNumber = +badgeValue
            cy.wrap(count).should('equal', +badgeValue); 
                
                
            })
        })
        
    })
})

