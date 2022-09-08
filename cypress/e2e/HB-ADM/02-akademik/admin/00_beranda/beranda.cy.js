/// <reference types="cypress"/>

const judulHalaman = "Beranda";

describe(judulHalaman, () => {
  beforeEach(() => {
    //login
    cy.loginsuperadmin();
    //open Akademik module
    cy.modulakademik();
    // go to target page
    cy.menuberanda();
  });

  it("Buka Halaman", () => {
    cy.get(".content-header > h1").should("contain", judulHalaman);
  });
});
