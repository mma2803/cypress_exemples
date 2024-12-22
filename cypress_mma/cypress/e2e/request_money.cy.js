let username = "Dina20"
let password = "s3cret"
let myname = "Darrel O"
let contact
let montant
let motif
let montant_char
contact = "Ted Parisian";
montant = 3;
motif = "Achats";
montant_char = `+$${montant}.00`

describe('request_money', () => {
  beforeEach(() => {
    cy.login(username, password, myname);
  });
  it('devrait permettre d\'envoyer de l\'argent', () => {
    cy.visit("http://localhost:3000/transaction/new")
    cy.log(montant_char);
    //cy.get('a[href="/transaction/new"]').click();
    cy.get('[data-test="users-list"]').should("contain", contact).click();
    cy.get('input[placeholder="Amount"]').type(montant);
    cy.get('input[placeholder="Add a note"]').type(motif);
    cy.get('[data-test="transaction-create-submit-request"]')
      .contains("Request")
      .click();
    cy.contains("Transaction Submitted!");
    cy.get('[data-test="new-transaction-return-to-transactions"]')
      .should("have.text", "Return To Transactions")
      .click();
    cy.get('[data-test="nav-personal-tab"],[href="/personal"]')
      .should("have.text", "Mine")
      .click();
    cy.get('[data-test="transaction-list"] li')
      .first()
      .find("span")
      .last()
      .should("contain", montant_char).click({ force: true });
  })
})
