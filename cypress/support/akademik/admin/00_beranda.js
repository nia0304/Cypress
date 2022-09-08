Cypress.Commands.add('menuberanda', () => {
  cy.visit("siakad/home");
  cy.get(".content-header > h1").should(
    "contain.text",
    "Beranda"
  );
});