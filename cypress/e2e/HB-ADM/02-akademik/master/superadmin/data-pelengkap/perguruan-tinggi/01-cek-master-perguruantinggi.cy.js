/// <reference types="cypress"/>

describe("superadmin can login and open all page in akademik aplikasi module", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".siakad > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#siakad")
      .contains("Super Administrator")
      .should("be.visible")
      .click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("superadmin can open menu data pelengkap di modul akademik aplikasi", () => {
    //data pelengkap
    cy.visit("siakad/data_universitas/detail");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Data Universitas Sevima"
    );
    //klik edit
    cy.get(".col-md-12 > .btn").contains("Edit").should("be.visible").click();
    //assert edit page
    cy.get(".btn-success").contains("Simpan").should("be.visible");
    cy.get(".box-title").contains("Batal").should("be.visible");

    cy.get("#namasingkat").clear().type("UNILAK Edited");
    cy.get("#namaunit").clear().type("Universitas Lancang Kuning Edited");
    cy.get("#namauniten").clear().type("Universitas Lancang Kuning Edited");
    cy.get(".btn-success").contains("Simpan").should("be.visible").click();

    cy.get(".modal-content .btn-primary").should("be.visible").click();
    cy.get("#block-namasingkat > .col-md-5")
      .contains("Nama Singkat")
      .next()
      .should("contain.text", "UNILAK Edited");

    //reset
    cy.get(".col-md-12 > .btn").contains("Edit").should("be.visible").click();
    //assert edit page
    cy.get(".btn-success").contains("Simpan").should("be.visible");
    cy.get(".box-title").contains("Batal").should("be.visible");

    cy.get("#namasingkat").clear().type("UNILAK");
    cy.get("#namaunit").clear().type("Universitas Lancang Kuning");
    cy.get("#namauniten").clear().type("Universitas Lancang Kuning");
    cy.get(".btn-success").contains("Simpan").should("be.visible").click();

    cy.get(".modal-content .btn-primary").should("be.visible").click();
    cy.get("#block-namasingkat > .col-md-5")
      .contains("Nama Singkat")
      .next()
      .should("contain.text", "UNILAK");
    cy.get("#block-namaunit > .col-md-5")
      .contains("Nama Unit")
      .next()
      .should("contain.text", "Universitas Lancang Kuning");
    cy.get("#block-namauniten > .col-md-5")
      .contains("Nama Unit (EN)")
      .next()
      .should("contain.text", "Universitas Lancang Kuning");
  });
});
