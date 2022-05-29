// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-file-upload";
require("cypress-downloadfile/lib/downloadFileCommand");

//get data login menggunakan fixture dan baseurl
Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.fixture("userLogin").then((data) => {
    cy.get("#userid").type(data.username);
    cy.get("#password").type(data.password);
  });
  cy.get(".btn").click();
});

Cypress.Commands.add("logout", () => {
  cy.get(".user > .dropdown-toggle").click().wait(0);
  cy.get(
    "body > header > nav > div > div > ul > li.dropdown.user.user-menu > ul > li.user-footer > div > a:nth-child(3)"
  ).click();
});

Cypress.Commands.add("loginopsional", (username, password) => {
  cy.visit("dev.siakadcloud.com");
  cy.get("#userid").type(username);
  cy.get("#password").type(password);
  cy.get(".btn").click();
});

// user login (meida)
Cypress.Commands.add("loginuserstaging", () => {
  cy.visit("/");
  cy.fixture("dataLogin").then((data) => {
    cy.get("#userid").type(data.username);
    cy.get("#password").type(data.password_staging);
  });
  cy.get(".btn").click();
});

// user login (meida)
Cypress.Commands.add("loginuserdev", () => {
  cy.visit("/");
  cy.fixture("dataLogin").then((data) => {
    cy.get("#userid").type(data.username);
    cy.get("#password").type(data.password_dev);
  });
  cy.get(".btn").click();
});

//user yasinta
Cypress.Commands.add("userlogin", () => {
  cy.visit("/");
  cy.fixture("user_yas").then((data) => {
    cy.get("#userid").type(data.username);
    cy.get("#password").type(data.password);
  });
  cy.get(".btn").click();
});
