/// <reference types="cypress" />

describe("Dashboard PMB", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });

  it("Filter Dashboard", () => {
    //Menampilkan Progres Bar Tahapan PMB
    cy.get(":nth-child(1) > .col-md-12 > .box").should(
      "contain",
      "Anda Belum Melakukan Pengisian Tahapan Alur SPMB"
    );
    cy.get("a > .btn").should("contain", "Lihat Detail").click();
    cy.get(".content-header > h1").should("contain", "Tahapan Alur SPMB");
    cy.get("a > .btn").should("contain", "Mulai Setting").click();
  });
});
