/// <reference types="cypress" />

describe("Referensi Jenis Program", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it("Tambah reff jenis program", () => {
    cy.visit("/spmb/ms_jenisprogram");
    cy.get(".content-header > h1").should("contain", "Jenis Program");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Program"
    );
    cy.get(".col-md-12 > .btn").click();
    cy.get("#i_idjenispilihan").type("AU");
    cy.get("#i_namajenispilihan").type("Automation");
    cy.get(".iCheck-helper").click();
    cy.get(":nth-child(4) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Jenis Program berhasil"
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
  it("Edit reff jenis program", () => {
    cy.visit("/spmb/ms_jenisprogram");
    cy.get(".content-header > h1").should("contain", "Jenis Program");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Program"
    );
    cy.get(":nth-child(3) > :nth-child(4) > .btn-primary").click();
    cy.get("#u_idjenispilihan").clear().type("AT");
    cy.get("#u_namajenispilihan").clear().type("Auto");
    cy.get(
      ':nth-child(3) > [style="text-align:center"] > .labelinput > .icheckbox_minimal > .iCheck-helper'
    ).click();
    cy.get(":nth-child(3) > :nth-child(4) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data Jenis Program berhasil"
    );
  });
  it("Hapus reff jenis program", () => {
    cy.visit("/spmb/ms_jenisprogram");
    cy.get(".content-header > h1").should("contain", "Jenis Program");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Program"
    );
    cy.get(":nth-child(3) > :nth-child(4) > .btn-danger").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menghapus data ini?"
    );
    cy.get(".modal-footer > .btn-default").should("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Jenis Program berhasil"
    );
  });
});
