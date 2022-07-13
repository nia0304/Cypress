Cypress.Commands.add('Menu_Beranda', () => {
  cy.get('.container > .nav > :nth-child(1) > :nth-child(1)').click()
});