describe('contact page', () => {
   it('login TREMAU' , () =>{
        cy.visit('https://pretesting.nima.tremau.net')
        cy.get('input[id=":r0:"],[name="email"]').type('product-and-tech@tremau.com') //adresse mail
        cy.get('input[name="password"]').type ('tremauPass1!') // password
        cy.get('button').contains('Login').click() //login
        cy.contains('Login Succesfully')
        cy.get('h1').should('contain','Hi')
        cy.get('tbody button').contains('START').click()
        cy.get('h6').contains('Ignore').click()
    }) 
    it('je clique sur premier start', () =>{
        //cy.get('table tr').first()
       // cy.get('.MuiTableBody-root .MuiTableRow-root').first().find('td').contains('START').click()
       // cy.get('tbody button').contains('START').click()

    })
})
      
  