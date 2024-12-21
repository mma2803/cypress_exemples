describe('contact page', () => {
   /* it('login TREMAU' , () =>{
        cy.visit('https://pretesting.nima.tremau.net')
        cy.get('input[id=":r0:"],[name="email"]').type('product-and-tech@tremau.com') //adresse mail
        cy.get('input[name="password"]').type ('tremauPass1!') // password
        cy.get('button').contains('Login').click() //login
        cy.contains('Login Succesfully')
        cy.get('h1').should('contain','Hi')
    }) 
    it('je vérifie si onglet Appeals s ouvre ', () =>{
    //cy.get('button[tabindex="0"],[type="button"],[role="tab"]').click()
    cy.get('[data-cy="Appeals"]').click()
      
    
    })
    })
    
    
    it ('si password incorrect, affichage login failed' , ()=> {
        cy.visit('https://pretesting.nima.tremau.net')
        cy.get('input[id=":r0:"],[name="email"]').type('product-and-tech@tremau.com') //adresse mail
        cy.get('input[name="password"]').type ('tremauass1!') // password
        cy.get('button').contains('Login').click() //login
        cy.contains('Login Failed')*/
})


    it('je vérifie le bouton déconnexion' , ()=>{ 
        cy.visit('https://pretesting.nima.tremau.net')
        cy.get('input[id=":r0:"],[name="email"]').type('product-and-tech@tremau.com') //adresse mail
        cy.get('input[name="password"]').type ('tremauPass1!') // password
        cy.get('button').contains('Login').click() //login
        cy.get('header svg').first().click() // MENU 
        cy.get('.MuiListItemButton-root span').contains('Logout').click()
    })