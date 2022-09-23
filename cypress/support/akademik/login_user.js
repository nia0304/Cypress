Cypress.Commands.add("loginsuperadmin", () => {
  cy.visit("/");
  cy.fixture("login/login_user").then((data) => {
    cy.get("#userid").type(data.usersuadm);
    cy.get("#password").type(data.passsuadm);
  });
  cy.get(".btn").click();
});

Cypress.Commands.add('loginadminpt', ()=> {
  cy.visit("/");
  cy.fixture("login/login_user").then((data) => {
    cy.get("#userid").type(data.useradmin);
    cy.get("#password").type(data.passadmin);
  });
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
  cy.get(".admin > .inner").click();
  cy.get("#admin > .content > .role_box").click();
  cy.get(".container > .nav > :nth-child(1) > a").click();
});

Cypress.Commands.add("modulakademik", () => {
  cy.get(".siakad > .inner").click();
  cy.get("#siakad").contains("Super Admin").should('be.visible').click();
  cy.get('.container > .nav > :nth-child(1) > a').click()
});

Cypress.Commands.add("modulkeuangan", () => {
  cy.get(".keuangan > .inner").click();
  cy.get("#keuangan > .content > .role_box").click();
  cy.get(".container > .nav > :nth-child(1) > a").click();
});

Cypress.Commands.add("modulmbkm", () => {
  cy.get('.mbkm > .inner').click();
  cy.get("#mbkm").contains("Super Admin").should('be.visible').click();
  cy.get('.container > .nav > :nth-child(1) > a').click()
});