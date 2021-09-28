/// <reference types="cypress"/>

describe("Referensi Sistem Kuliah", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it("Tambah reff sistem kuliah", () => {
    cy.visit("/spmb/ms_sistemkuliah");
    cy.get(".content-header > h1").should("contain", "Sistem Kuliah");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Sistem Kuliah"
    );
    cy.get(".col-md-12 > .btn").click();
    cy.get("#i_idsistemkuliah").type("5");
    cy.get("#i_namasistemkuliah").type("Automation");
    cy.get("#i_keterangan").type("Full Auto");
    cy.get(":nth-child(4) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Sistem Kuliah berhasil"
    );
    cy.get(".krs-float-buttons-center").click();
    cy.get(".alert").should(
      "contain",
      "Penyimpanan data cek Proses Alur SPMB berhasil"
    );
    cy.get(".krs-float-buttons-center")
      .should("contain", "Batal")
      .and("be.visible");
  });
  it("Edit reff sistem kuliah", () => {
    cy.visit("/spmb/ms_sistemkuliah");
    cy.get(".content-header > h1").should("contain", "Sistem Kuliah");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Sistem Kuliah"
    );
    cy.get(":nth-child(6) > :nth-child(4) > .btn-primary").click();
    cy.get("#u_idsistemkuliah").clear().type("6");
    cy.get("#u_namasistemkuliah").clear().type("Auto6");
    cy.get("#u_keterangan").clear().type("Full Automation");
    cy.get(":nth-child(6) > :nth-child(4) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data Sistem Kuliah berhasil"
    );
  });
  it("Hapus reff sistem kuliah", () => {
    cy.visit("/spmb/ms_sistemkuliah");
    cy.get(".content-header > h1").should("contain", "Sistem Kuliah");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Sistem Kuliah"
    );
    cy.get(":nth-child(6) > :nth-child(4) > .btn-danger").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menghapus data ini?"
    );
    cy.get(".modal-footer > .btn-default").should("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Sistem Kuliah berhasil"
    );
  });
});
