/// <reference types="cypress"/>

describe("admin pt can login and open all page in administrasi aplikasi module", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".admin > .inner").click();
    cy.get("#admin > div:nth-child(1) > div:nth-child(2)").click();
  });

  it("admin pt can open menu di modul administrasi aplikasi", () => {
    //pengguna
    cy.visit("admin/list_unit");
    cy.get(".content-header > h1").should("contain.text", "Unit Kerja");

    cy.visit("admin/list_user");
    cy.get(".content-header > h1").should("contain.text", "Pengguna");

    cy.visit("admin/ms_role");
    cy.get(".content-header > h1").should("contain.text", "Role");

    cy.visit("admin/set_akses");
    cy.get(".content-header > h1").should("contain.text", "Hak Akses");

    //log
    cy.visit("admin/list_log");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Log Aktivitas Login Pengguna"
    );

    cy.visit("admin/list_logaktivitas");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Log Aktivitas Perubahan Data"
    );

    cy.visit("admin/list_trxlog");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Log Aktivitas Transaksi"
    );

    //setting
    cy.visit("admin/ms_setting");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengaturan Daftar Pengaturan SIM"
    );

    cy.visit("admin/data_backup");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Data Backup Export Data"
    );

    cy.visit("admin/file_backup");
    cy.get(".content-header > h1").should(
      "contain.text",
      "File Backup Export File"
    );

    cy.visit("admin/ms_form");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Kustomisasi Form Daftar Kustomisasi Form"
    );

    cy.visit("admin/ms_field");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Kustomisasi Kolom Daftar Kustomisasi Kolom Data Master"
    );

    cy.visit("admin/list_kustomisasittd");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengaturan Penandatangan"
    );

    //laporan

    cy.visit("admin/repp_user");
    cy.get(".content-header > h1").should("contain.text", "Daftar User");

    cy.visit("admin/repp_log");
    cy.get(".content-header > h1").should("contain.text", "Log Login ");

    //live api
    cy.visit("live/doc.php");
    cy.get("#pengenalan > h1").should("contain", "Pengenalan");

    //login as
    cy.visit("admin/set_loginas");
    cy.get(".content-header > h1").should(
      "contain",
      "Login As Login sebagai pengguna lain"
    );
  });

  // it("admin can open menu aplikasi - file", () => {});

  // it("admin can open menu aplikasi - menu", () => {});

  // it("admin can open menu pengguna - unit kerja", () => {});

  // it("admin can open menu pengguna - user", () => {});

  // it("admin can open menu pengguna - role", () => {});

  // it("admin can open menu pengguna - hak akses", () => {});

  // //menu log
  // it("admin can open menu log - log login", () => {});

  // it("admin can open menu log - Pengaturan Log Table", () => {});

  // it("admin can open menu log - Log Table", () => {});

  // it("admin can open menu log - Log Transaksi", () => {});
});
