/// <reference types='cypress' />

describe("Referensi Jalur Pendaftaran", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });

  it("Tambah reff jalur pendaftaran", () => {
    cy.visit("/spmb/ms_jalurpendaftaran");
    cy.get(".content-header > h1").should("contain", "Jalur Pendaftaran");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jalur Pendaftaran"
    );
    cy.get(".col-md-12 > .btn").click();
    cy.get("#i_idjalurpendaftaran").type("15");
    cy.get("#i_namajalurpendaftaran").type("Automation");
    cy.get("#i_istransfer").select("Lintas Jalur").should("have.value", "3");
    cy.get("#i_keterangan").type("Test Automation");
    cy.get(":nth-child(5) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data jalurpendaftaran berhasil"
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

  it("Edit reff jalur pendaftaran", () => {
    cy.visit("/spmb/ms_jalurpendaftaran");
    cy.get(".content-header > h1").should("contain", "Jalur Pendaftaran");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jalur Pendaftaran"
    );
    cy.get(":nth-child(15) > :nth-child(5) > .btn-primary").click();
    cy.get("#u_idjalurpendaftaran").clear().type("16");
    cy.get("#u_namajalurpendaftaran").clear().type("Auto16");
    cy.get("#u_istransfer").select("Peserta Didik Baru").should("be.visible");
    cy.get("#u_keterangan").clear().type("Auto tes");
    cy.get(":nth-child(15) > :nth-child(5) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data jalurpendaftaran berhasil"
    );
  });

  it("Hapus reff jalur pendaftaran", () => {
    cy.visit("/spmb/ms_jalurpendaftaran");
    cy.get(".content-header > h1").should("contain", "Jalur Pendaftaran");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jalur Pendaftaran"
    );
    cy.get(":nth-child(15) > :nth-child(5) > .btn-danger").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menghapus data ini?"
    );
    cy.get(".modal-footer > .btn-default").should("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data jalurpendaftaran berhasil"
    );
  });
});
