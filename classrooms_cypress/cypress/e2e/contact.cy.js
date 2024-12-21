/// <reference types="cypress" />
/*describe('contact cypress', () => {
/*it('vérifier que le msg est bien affiché si formulaire valide', () => {
    cy.visit('http://192.168.1.20:8080/#/contact')
    cy.get('#email .ng-dirty .ng-touched .ng-invalid').type('mansarmyriemgmail.com')
    cy.get('#name').type('myriem')
    cy.get('#email').type('mansarmyriem@gmail.com')
    cy.get('#message').type('bonjour')
    cy.get('form > button').click()
    cy.contains('Message envoyé avec succès.')
    cy.get('form > p').should('contain','Message envoyé avec succès')


  })*/
/*it('si email invalide, on change la couleur de input en rouge' , () => {
    cy.visit('http://192.168.1.20:8080/#/contact')
    cy.get('#email').type('mansarmyriem@mail.com')
    cy.get('form > button').click() 
    cy.get('#email').should('have.class','ng-invalid')

    
  })
})*/

    describe('contact page', () => {
     it('it navigate to the contact page', () => {
        cy.visit('http://192.168.1.20:8080/#/contact')
        cy.get('#name').type('marie')
        cy.get('#email').type('mma@gmail.com')
        cy.get('#message').type('Bonjour, votre site est génial !')
        cy.contains('Envoyer').click()
        cy.get('.success').should('be.visible').should('contain', 'Message envoyé avec succès.')
      })
      

      })

