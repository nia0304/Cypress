/// <reference types="cypress" />

describe("Tahapan Alur PMB", () => {
  beforeEach("Login Siakad PMB", () => {
    // cy.login("fikri", "j77/FQjF");
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });

  // afterEach("Logout Siakad", () => {
  //   cy.logout();
  // });

  it("Filter Dashboar untuk menampilkan tahapan", () => {
    //Menampilkan Progres Bar Tahapan PMB
    cy.get(":nth-child(1) > .col-md-12 > .box").should(
      "contain",
      "Anda Belum Melakukan Pengisian Tahapan Alur SPMB"
    );
    cy.get("a > .btn").should("contain", "Lihat Detail").click();
    cy.get(".content-header > h1").should("contain", "Tahapan Alur SPMB");
    cy.get("a > .btn").should("contain", "Mulai Setting").click();
  });

  describe("Referensi Pendaftaran", () => {
    it("Referensi Pendaftaran - Gelombang", () => {
      cy.visit("http://localhost/siacloud/spmb/ms_gelombang");
      cy.get(".content-header > h1").should("contain", "Gelombang");
      cy.get(".col-md-12 > .btn").click();
      cy.get("#i_idgelombang").type("7");
      cy.get("#i_namagelombang").type("Gelombang 7");
      cy.get(":nth-child(3) > .btn-success").click();
      cy.get(".alert").should("contain", "data gelombang berhasil");
    });

    it("Referensi Pendaftaran - Jalur Pendaftaran", () => {
      cy.visit("http://localhost/siacloud/spmb/ms_jalurpendaftaran");
      cy.get(".content-header > h1").should("contain", "Jalur Pendaftaran");
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
    });

    it("Referensi Pendaftaran - Sistem Kuliah", () => {
      cy.visit("http://localhost/siacloud/spmb/ms_sistemkuliah");
      cy.get(".content-header > h1").should("contain", "Sistem Kuliah");
      cy.get(".col-md-12 > .btn").click();
      cy.get("#i_idsistemkuliah").type("4");
      cy.get("#i_namasistemkuliah").type("Automation");
      cy.get("#i_keterangan").type("Full Auto");
      cy.get(":nth-child(4) > .btn-success").click();
      cy.get(".alert").should(
        "contain",
        "Penambahan data Sistem Kuliah berhasil"
      );
    });

    it("Referensi Pendaftaran - Jenis Program", () => {
      cy.visit("http://localhost/siacloud/spmb/ms_jenisprogram");
      cy.get(".content-header > h1").should("contain", "Jenis Program");
      cy.get(".col-md-12 > .btn").click();
      cy.get("#i_idjenispilihan").type("AU");
      cy.get("#i_namajenispilihan").type("Automation");
      cy.get(".iCheck-helper").click();
      cy.get(":nth-child(4) > .btn-success").click();
      cy.get(".alert").should(
        "contain",
        "Penambahan data Jenis Program berhasil"
      );
    });
  });

  describe("Referensi Seleksi", () => {
    it("Referensi Seleksi - Jenis Seleksi", () => {
      cy.visit("http://localhost/siacloud/spmb/ms_jenisseleksi");
      cy.get(".content-header > h1").should("contain", "Daftar Jenis Seleksi");
      cy.get(".col-md-12 > .btn").click();
      cy.get("#i_kodejenisseleksi").type("A7");
      cy.get("#i_namajenisseleksi").type("Automation");
      cy.get("#i_jeniskelulusan").select("Kelengkapan");
      cy.get(
        ":nth-child(4) > .labelinput > .icheckbox_minimal > .iCheck-helper"
      ).click();
      cy.get(
        ":nth-child(5) > .labelinput > .icheckbox_minimal > .iCheck-helper"
      ).click();
      cy.get(
        ":nth-child(8) > .labelinput > .icheckbox_minimal > .iCheck-helper"
      ).click();
      cy.get(":nth-child(9) > .btn-success").click();
      cy.get(".alert").should(
        "contain",
        "Penambahan data Jenis Seleksi berhasil"
      );
    });
  });
});
