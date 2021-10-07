/// <reference types="cypress" />

describe("Referensi Jenis Syarat", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it("Memastikan isi tabel jenis syarat ada 4", () => {
    cy.visit("/spmb/ms_jenissyarat");
    cy.get(".content-header > h1").should("contain", "Jenis Syarat");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Syarat"
    );
    cy.get(".table-responsive > .table")
      .should("contain", "ADM")
      .and("contain", "BM")
      .and("contain", "DFU")
      .and("contain", "UKT");
    cy.get(".krs-float-buttons-center").click();
    cy.get(".alert").should(
      "contain",
      "Penyimpanan data cek Proses Alur SPMB berhasil"
    );
  });
  it.only("Edit nama jenis syarat", () => {
    cy.visit("/spmb/ms_jenissyarat");
    cy.get(".content-header > h1").should("contain", "Jenis Syarat");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Syarat"
    );
    cy.get(":nth-child(1) > :nth-child(3) > .btn").click();
    cy.get("#u_namajenissyarat").clear().type("Administrasi Berkas");
    cy.get(".btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data Kelompok Syarat berhasil"
    );
  });
});
