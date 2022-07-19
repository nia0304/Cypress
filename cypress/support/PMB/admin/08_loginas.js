
Cypress.Commands.add('Menu_Loginas', () => {
    cy.get('#menu > div > div > ul > li:nth-child(9) > a').click()
});