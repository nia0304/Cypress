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

    // get element check pilihan program studi baris Pertama = pilihan(1) dan pilihan(3)
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .first()
      .click();
    cy.get(
      "#sebaran-pilihan > div > div > div:nth-child(1) > div > label > .icheckbox_minimal > .iCheck-helper"
    )
      .last()
      .click();
    // get element check pilihan program studi baris Kedua = pilihan(2)
    // cy.get(
    //   "#sebaran-pilihan > div > div > div:nth-child(2) > div > label > .icheckbox_minimal > .iCheck-helper"
    // ).click();
    cy.get(".btn-success").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Pilihan Jurusan berhasil"
    );
    // cy.get('.btn-info').click()
  });
  it("Edir Program Studi");
  it("Hapus program studi");
  it("Duplikasi data program studi");
  it("Salin data program studi");
});
