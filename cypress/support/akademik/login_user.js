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

Cypress.Commands.add("modulakademik", () => {
  cy.get(".siakad > .inner").click();
  cy.get("#siakad > .content > .role_box").click();
  cy.get(":nth-child(1) > .nav-link").click();
});

Cypress.Commands.add("moduladminaplikasi", () => {
  cy.get('.admin > .inner').click()
  cy.get('#admin > .content > .role_box').click();
  cy.get('.container > .nav > :nth-child(1) > a').click()
});
