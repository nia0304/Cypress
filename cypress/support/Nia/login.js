
  Cypress.Commands.add('login', () => {
    cy.visit("/gate/login");
    cy.fixture("Nia/login").then((data) => {
        cy.get("#userid").type(data.username);
        cy.get("#password").type(data.password);
    });
    cy.get(".btn").click();
    cy.get('.main_title').should('contain','Daftar Modul');
  });

  Cypress.Commands.add('pilih_modul_akademik', () => {
    //cy.login();
    cy.get('.siakad > .inner').click();
    cy.get('#siakad').contains('Super Administrator').should('be.visible').click();
    cy.get('.content-header.content-header-vertical h1').should('contain','Beranda');
  });