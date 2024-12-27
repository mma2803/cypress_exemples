describe("api testing", () => {
let cookienew = str.split('');
    it.only("Appraoch1- hard coded json object", () => {
        const requestBody = {
            tourist_name: "Myriem",
            tourist_email: "Myriem12@gmail.com",
            tourist_location: "Paris"
        }
    
    
        const str = 'The quick brown fox jumps over the lazy dog.';

        const words = str.split(;);
    console.log(words[3]);
    // Expected output: "fox"

    const chars = str.split('');
    console.log(chars[8]);
    // Expected output: "k"

    const strCopy = str.split();
    console.log(strCopy);
    // Expected output: Array ["The quick brown fox jumps over the lazy dog."]

    cy.request({
        method: 'POST',
        url: 'http://restapi.adequateshop.com/api/Tourist',
        body: requestBody
    })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("Myriem")
            expect(response.body.tourist_email).to.eq("Myriem12@gmail.com")
            expect(response.body.tourist_location).to.eq("Paris")
        })
})


it("Appraoch2- Dynamically generating json object", () => {
    const requestBody = {
        tourist_name: Math.random().toString(5).substring(2),
        tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
        tourist_location: "Paris"
    }
    cy.request({
        method: 'POST',
        url: 'http://restapi.adequateshop.com/api/Tourist',
        body: requestBody
    })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
})

it.only("Approach3- using Fixture", () => { //fichier crée dans fixtures
    cy.fixture('tourist').then((data) => {// data qui contient les données chargées depuis le fichier toursit.json
        const requestBody = data
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                // on évalue les données

                // on vérifie que la propriété tourist_name dans le body de la réponse correspond à celle enoyée dans la requete
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)


                // on évalue les propriétés 
                // on vérifie que le body de la réponse contient la propriété "tourist_email" 
                // et que sa valeur correspond à celle du body
                expect(response.body).has.property('tourist_email', requestBody.tourist_email)
            })




    })

})
})