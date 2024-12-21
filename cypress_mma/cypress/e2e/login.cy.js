describe("template spec", () => {
  let Balance_initiale;
  let New_Balance;
  let montant;
  let montant_char;
  let myname;
  let motif;
  let contact;
  let verify;

  it("singin/signout", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get('[id="username"]').type("Dina20");
    cy.get('[id="password"]').type("s3cret");
    cy.get("button").contains("Sign In").click();
    cy.get("header button").first().click();
    cy.get('[data-test="sidenav-user-full-name"]').should(
      "contain",
      "Darrel O"
    );
    cy.get('[data-test="sidenav-username"]').should("have.text", "@Dina20");

    //cy.get('[data-test="sidenav-signout"]').contains('Logout').click();

    /*cy.get('[data-test="sidenav-user-balance"]')
      .invoke("text")
      .then((old_balance) => {
        cy.log("old_Balance : " + old_balance);
        Balance_initiale = old_balance;
      });*/

    /* contact = "Lia Rosenbaum"
    montant= 1.00;
    motif = "Remboursement";
    cy.get('a[href="/transaction/new"]').click();
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"]').contains(contact).click();
    cy.get('input[placeholder="Amount"]').type(montant);
    cy.get('input[placeholder="Add a note"]').type(motif);
    cy.get('button[data-test="transaction-create-submit-payment"]').contains("Pay").click();
    cy.contains("Transaction Submitted!")
    //cy.wait(1000);
    cy.get('h2').should('contain','Paid')
  

    // vérifier si le virement apparait bien dans mine
    cy.get('[data-test="new-transaction-return-to-transactions"]').should('have.text','Return To Transactions').click()
    cy.get('[href="/personal"]').should('have.text','Mine').click()
    */

    // demander de l'argent
    contact = "Ted Parisian";
    myname = "Darrel Ortiz";
    montant = 3;
    motif = "Achats";
    montant_char = `+$${montant}.00`;
    cy.log(montant_char);
    cy.get('a[href="/transaction/new"]').click();
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
      .get("span")
      .last()
      .should("contain", montant_char);
    //cy.get('.TransactionTitle-titleName').eq(0).should('have.text',myname).click({force: true})
    //cy.get('[data-test="transaction-amount-V790_6QTR"]').click({force: true})

    /*cy.get('[data-test="sidenav-user-balance"]')
      .invoke("text")
      .then((balance) => {
        cy.log("New_Balance:" + balance);
        let New_Balance = balance;
        let numericString_1 = New_Balance.replace("$", "").replace(",", "");
        let New_Balance_BF = parseFloat(numericString_1);
        cy.log("New_Balance_BF :" + New_Balance_BF);

        cy.log("balance initiale:" + Balance_initiale);
        let numericString_2 = Balance_initiale.replace("$", "").replace(
          ",",
          ""
        );
        let Balance_initiale_BF = parseFloat(numericString_2);
        cy.log("Balance_initiale_BF :" + Balance_initiale_BF);

        // vérifier la différence entre ancien et nouveau solde
        let diff = Balance_initiale_BF - New_Balance_BF;
        cy.log("diff :" + diff);
        expect(diff).to.equal(montant_a_envoyer);
      });*/
  });
});
