describe("test Postman", () => {
    let Newcookie;
    let object
    // userRequests

    before(() => {
        const loginIn = {
            type: "LOGIN",
            username: "Dina20",
            password: "s3cret"
        };

        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/login',
            body: loginIn
        }).then((LoginInResponse) => {
            expect(LoginInResponse.status).to.eq(200);
            //expect(LoginInResponse.duration).to.be.lessThan(100);
            expect(LoginInResponse.body.user.username).to.eq("Dina20");
            const cookie = LoginInResponse.headers["set-cookie"][0];
            Newcookie = cookie.split(';')[0];
        });
    });

    it("user settings", () => {
         const userRequests = {
            firstName: "myriem",
            lastName: "mansar",
            email: "myriem@gmail.com",
            phoneNumber: "123456678",
            defaultPrivacyLevel: "contacts"
        };
        cy.request({
            method: 'PATCH',
            url: 'http://localhost:3001/users/_XblMqbuoP',
            headers: {
                'Cookie': Newcookie
            },
            body: userRequests
        })
            .then((userResponse) => {
                expect(userResponse.isOkStatusCode).to.be.true;
                object=JSON.parse(userResponse.requestBody)
                cy.log(object.firstName)
            })
    })
    // it("user settings", () => {
    // cy.log(JSON.stringify(object)) 
    // cy.log(object.firstName)
    // })

    it("verify user settings after update", () => {
    
      
        cy.request({
                method: 'GET',
                url: 'http://localhost:3001/checkAuth',
                headers: {
                    'Cookie': Newcookie
                },
                body: null
            })
            .then((response) => {
                expect(response.status).to.eq(200)
                //cy.log(JSON.stringify(userResponseUpdate))
                expect(response.body.user.firstName).to.eq(object.firstName)
                expect(response.body.user.lastName).to.eq(object.lastName)

            })
        
    })






    // object=JSON.parse(userResponse.requestBody)
    // cy.log(object)
    // cy.log(JSON.stringify(object.firstName))


});
