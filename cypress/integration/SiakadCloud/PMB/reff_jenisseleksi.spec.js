/// <reference types="cypress" />

describe("Referensi Jenis Seleksi", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });

  it("Tambah jenis seleksi", () => {
    cy.visit("/spmb/ms_jenisseleksi");
    cy.get(".content-header > h1").should("contain", "Daftar Jenis Seleksi");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Seleksi"
    );
    cy.get(".col-md-12 > .btn").click();
    cy.get("#i_kodejenisseleksi").type("AUT");
    cy.get("#i_namajenisseleksi").type("Automation");
    cy.get("#i_jeniskelulusan").select("Kelengkapan");
    cy.get(
      ":nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(6) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(7) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(8) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(":nth-child(9) > .btn-success").click();
    cy.get(".alert").should(
      "contain",
      "Penambahan data Jenis Seleksi berhasil"
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
  it("Edit jenis seleksi", () => {
    cy.visit("/spmb/ms_jenisseleksi");
    cy.get(".content-header > h1").should("contain", "Daftar Jenis Seleksi");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Seleksi"
    );
    cy.get(":nth-child(2) > :nth-child(9) > .btn-primary").click();
    cy.get("#u_kodejenisseleksi").clear().type("AUTO");
    cy.get("#u_namajenisseleksi").clear().type("AUTO");
    cy.get("#u_jeniskelulusan").select("Nilai");
    cy.get(
      ":nth-child(2) > :nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(2) > :nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(2) > :nth-child(6) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(2) > :nth-child(7) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      ":nth-child(2) > :nth-child(8) > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(":nth-child(2) > :nth-child(9) > .btn-success").click();
    cy.get(".alert").should("Pengubahan data Jenis Seleksi berhasil");
  });
  it("Lihat detail dan ubah jenis seleksi", () => {
    cy.visit("/spmb/ms_jenisseleksi");
    cy.get(".content-header > h1").should("contain", "Daftar Jenis Seleksi");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Seleksi"
    );
    cy.get(":nth-child(2) > :nth-child(9) > .btn-info").click();
    cy.contains("Detail Jenis Seleksi").should("be.visible");
    cy.contains("Keterangan: Jenis Akun").should("be.visible");
    cy.get(".btn-danger").should("contain", "Hapus").and("be.visible");
    cy.get(".btn-warning").click();
    cy.get(".btn-success").should("contain", "Simpan").and("be.visible");
    cy.get(".btn-warning").should("contain", "Batal").and("be.visible");
    cy.get("#kodejenisseleksi").clear().type("Aut");
    cy.get("#namajenisseleksi").clear().type("Automation");
    cy.get("#keterangan").clear().type("Keterangan Auto");
    cy.get(
      "#block-iswajibikut > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      "#block-iswajiblulus > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get("#dayatampung").type("daya tampung 100");
    cy.get(
      "#block-isruang > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      "#block-isbebastes > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get(
      "#block-iscbt > .col-md-7 > .labelinput > .icheckbox_minimal > .iCheck-helper"
    ).click();
    cy.get("#idjenisakun").select("TES KESEHATAN");
    cy.get(".btn-success").click();
    cy.get(".modal-content").should(
      "contain",
      "Apakah anda yakin akan menyimpan data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Pengubahan data Jenis Seleksi berhasil"
    );
  });
  it.only("Hapus jenis seleksi", () => {
    cy.visit("/spmb/ms_jenisseleksi");
    cy.get(".content-header > h1").should("contain", "Daftar Jenis Seleksi");
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Jenis Seleksi"
    );
    cy.get(":nth-child(2) > :nth-child(9) > .btn-danger").click();
    cy.get(".bootbox > .modal-dialog > .modal-content").should(
      "contain",
      "Apakah anda yakin akan menghapus data ini?"
    );
    cy.get(".modal-footer > .btn-default")
      .should("contain", "Cancel")
      .and("be.visible");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should(
      "contain",
      "Penghapusan data Jenis Seleksi berhasil"
    );
  });
});
