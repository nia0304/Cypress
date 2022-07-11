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

Cypress.Commands.add('unex',  () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
});

// support/commands.js
// const COMMAND_DELAY = 500;
// for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
//     Cypress.Commands.overwrite(command, (originalFn, ...args) => {
//         const origVal = originalFn(...args);

//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(origVal);
//             }, COMMAND_DELAY);
//         });
//     });
// } 