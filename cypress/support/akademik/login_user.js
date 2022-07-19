Cypress.Commands.add('loginsuperadmin', () => {
  cy.visit("/")
  cy.fixture("login/login_user").then((data) => {
    cy.get("#userid").type(data.usersuadm);
    cy.get("#password").type(data.passsuadm);
  })
  cy.get(".btn").click();
});

Cypress.Commands.add("loginmhs", () => {
  cy.visit("/");
  cy.fixture("login/login_user").then((data) => {
    cy.get("#userid").type(data.usermhs);
    cy.get("#password").type(data.passmhs);
  });
  cy.get(".btn").click();
});

Cypress.Commands.add("logindosen", () => {
  cy.visit("/");
  cy.fixture("login/login_user").then((data) => {
    cy.get("#userid").type(data.userdosen);
    cy.get("#password").type(data.passdosen);
  });
  cy.get(".btn").click();
});

// Command Modul
Cypress.Commands.add("moduladminaplikasi", () => {
  cy.get('.admin > .inner').click()
  cy.get('#admin > .content > .role_box').click();
  cy.get('.container > .nav > :nth-child(1) > a').click()
});

Cypress.Commands.add("modulakademik", () => {
  cy.get(".siakad > .inner").click();
  cy.get("#siakad > .content > .role_box").click();
  cy.get('.container > .nav > :nth-child(1) > a').click();
  // cy.get('#link-siakad').click();
  // // cy.visit('http://localhost/siakadcloud/gate/menu');
  // // cy.get('.siakad img').click();
  // cy.get('#siakad .role_box:nth-child(2)').click();
  // //cy.url().should('contains', 'http://localhost/siakadcloud/siakad/home');
});

Cypress.Commands.add("modulkeuangan", () => {
  cy.get(".keuangan > .inner").click();
  cy.get("#keuangan > .content > .role_box").click();
  cy.get('.container > .nav > :nth-child(1) > a').click();
});

