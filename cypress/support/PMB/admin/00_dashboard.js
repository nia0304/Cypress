Cypress.Commands.add('Menu_Dashboard', () => {
    // cy.get('#menu > div > div > ul > li:nth-child(2) > a').click()
    cy.get(':nth-child(1) > .nav-link').click()
  });