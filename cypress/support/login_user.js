Cypress.Commands.add("usermhs", () => {
    cy.visit("/");
    cy.fixture("login/login_user").then((data) => {
      cy.get("#userid").type(data.usermhs);
      cy.get("#password").type(data.passmhs);
    });
    cy.get(".btn").click();
  });