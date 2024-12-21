/// <reference types="cypress" />
describe ("login de ma page web", ()=>{
    it('je me connecte avec mon login et mon mdp', ()=>{
        cy.visit('https://demo.applitools.com/')
        cy.get('input[ type="text"]').type('myriem12636') // username
        cy.get('#password').type('280319')
        cy.get('#log-in').click()
        cy.get('#time').should('contain',' closes in: 45m 5s')
    })
})