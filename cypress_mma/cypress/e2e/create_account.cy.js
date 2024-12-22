let firstname
let lastname
let username
let password
let confirmPassword
let myname
describe('new_account && connexion', () => {
    firstname = "first"
    lastname = "last"
    username = "user"
    password = "pass"
    confirmPassword = "pass"
    myname = "first l"
    
    it('create a new acount', () => {
        cy.visit("http://localhost:3000/signin")
        cy.get('a[href="/signup"]').click()
        cy.get('input[id="firstName"]').type(firstname)
        cy.get('input[id="lastName"]').type(lastname)
        cy.get('input[id="username"]').type(username)
        cy.get('input[id="password"]').type(password)
        cy.get('input[id="confirmPassword"]').type(confirmPassword)
        cy.get('button[data-test="signup-submit"]').should("contain", "Sign Up").click()
        
    });
    //it('signin after creating an account', () => {
        after(() => {
            cy.verif(username, password, myname);
        });
    
});
