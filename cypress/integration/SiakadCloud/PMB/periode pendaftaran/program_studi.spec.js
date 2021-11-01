/// <reference types="cypress" />

describe("Program Studi", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it.only("Penambahan program studi", () => {
    cy.visit("/spmb/list_periode");
    cy.contains("a", /^2020\/2021 Genap$/)
      .click()
      .wait(0);
    cy.get("[data-testid=collapseidgelombang]").click();
    cy.contains("a", /^Gelombang 4$/)
      .click()
      .wait(0);
    cy.get(".text-right > .btn-info").click();
    cy.get("#sidebar-menu-list > :nth-child(4) > a")
      .should("be.visible")
      .click();
    cy.get(".col-md-7 > .btn-success").click();
    cy.get("#idunit").select("S1 - Sistem Informasi");
    cy.get("#idjenispilihan").select("IPA");
    cy.get("#jmlditerima").type("150");
    cy.get("#nilaiminimal").type("75");
    cy.get("#prefixnim").type("202104");
    cy.get("#jmlurutannim").select("3");
    // cy.get(
    //   "#block-pilihan[1] > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    // ).click();
    // cy.get("#block-pilihan[1] > div > label > div > ins").click();
    cy.get(
      "#block-pilihan[1] > div > label > .icheckbox_minimal > .iCheck-helper"
    ).click();
  });
  it("Edir Program Studi");
  it("Hapus program studi");
  it("Duplikasi data program studi");
  it("Salin data program studi");
});
