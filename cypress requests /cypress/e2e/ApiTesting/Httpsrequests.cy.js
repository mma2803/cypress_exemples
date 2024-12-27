describe("HTTPS REQUESTS", () => {
    // request GET 
    it("GET call", () => {
        cy.request('Get', 'URL') //2 paramètres type de la requete et l'URL
        its('status')
        should('equal', 200) //200 code OK
    })
    // on save, et on tape de le terminal npx cypress run --spec lien_du_fichier

    // request POST or PUT
    it("POST or PUT call", () => {
        cy.request({
            method: 'POST or PUT',
            URL: 'URL',
            body: {
                corps: 'corps'// supprimer les "" affichées sur postman par ex : "id" :"myriem" et mettre id :"myriem"
            }

        }) //3 paramètres type de la requete, l'URL et le body qu'on copie/colle depuis postman
        its('status')
        should('equal', 200) //200 code OK
    })

    //request DELETE 
    it('DELETE CALL', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
        })
        its('status') // le statut de la reuquete 
        should('equal', 200);  // Vérifier que le statut est 200 (succès)
    });

});


