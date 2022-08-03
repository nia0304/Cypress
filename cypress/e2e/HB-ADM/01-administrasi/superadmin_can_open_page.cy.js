/// <reference types="cypress"/>

describe("superadmin can login and open all page in administrasi aplikasi module", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".admin > .inner").click();
    cy.get("#admin > div:nth-child(1) > div:nth-child(3)").click();
  });

  it("superadmin can open dashboard administrasi aplikasi module", () => {
    cy.get(".content-header > h1").should("contain.text", "Dashboard");
  });

  it("superadmin can open menu di modul administrasi aplikasi", () => {
    describe("test", () => {
      cy.visit("admin/ms_modul");
      cy.get(".content-header > h1").should("contain.text", "Aplikasi");
    });

    cy.visit("admin/list_target");
    cy.get(".content-header > h1").should("contain.text", "File Halaman");

    cy.visit("admin/set_menu");
    cy.get(".content-header > h1").should("contain.text", "Struktur Menu");

    cy.visit("admin/list_unit");
    cy.get(".content-header > h1").should("contain.text", "Unit Kerja");

    cy.visit("admin/list_user");
    cy.get(".content-header > h1").should("contain.text", "Pengguna");

    cy.visit("admin/ms_role");
    cy.get(".content-header > h1").should("contain.text", "Role");

    cy.visit("admin/set_akses");
    cy.get(".content-header > h1").should("contain.text", "Hak Akses");

    cy.visit("admin/list_log");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Log Aktivitas Login Pengguna"
    );

    cy.visit("admin/list_pengaturanlog");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pengaturan Log Daftar Pengaturan Log Aktivitas"
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

    cy.visit("admin/ms_labeltabel");
    cy.get(".content-header > h1").should("contain.text", "Label Tabel");

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
    //migrasi

    cy.visit("admin/ms_migrasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Migrasi Daftar Migrasi (Upload dan Download Template)"
    );

    cy.visit("admin/list_prosesmigrasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Proses Migrasi Validasi dan Migrasi Data"
    );

    cy.visit("admin/repp_rekapmhs");
    cy.get(".content-header > h1").should("contain.text", "Rekap Mahasiswa");

    cy.visit("admin/repp_rekapnimduplikat");
    cy.get(".content-header > h1").should("contain.text", "Rekap NIM Duplikat");
    cy.visit("admin/repp_rekapmhsbtsstudi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Mahasiswa Batas Studi"
    );

    cy.visit("admin/repp_rekapmkkurikulum");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Mata Kuliah dan Kurikulum"
    );

    cy.visit("admin/repp_rekapmkduplikat");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Mata Kuliah Duplikat"
    );

    cy.visit("admin/repp_mksmtkosong");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Mata Kuliah Semester 0"
    );

    cy.visit("admin/repp_rekapmkkrs");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Kelas dan KRS"
    );

    cy.visit("admin/repp_sebarankrs");
    cy.get(".content-header > h1").should("contain.text", "Sebaran KRS");

    cy.visit("admin/repp_pesertaklskosong");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Kelas dengan Peserta 0"
    );

    cy.visit("admin/repp_rekapyudisium");
    cy.get(".content-header > h1").should("contain.text", "Rekap Yudisium");

    cy.visit("admin/repp_rekapakm");
    cy.get(".content-header > h1").should("contain.text", "Rekap AKM");

    cy.visit("admin/repp_rekapkepegawaian");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Data Kepegawaian SDM V1 dan SDM V2"
    );

    cy.visit("admin/repp_rekapkeluarga");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Data Keluarga SDM V1 dan SDM V2"
    );

    cy.visit("admin/repp_rekappengembangan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Data Pengembangan SDM V1 dan SDM V2"
    );

    cy.visit("admin/repp_rekapkompensasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Data Kompensasi SDM V1 dan SDM V2"
    );

    cy.visit("admin/repp_rekappresensi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Data Kehadiran SDM V1 dan SDM V2"
    );

    cy.visit("admin/repp_rekapvalidasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Data Validasi SDM V1 dan SDM V2"
    );

    cy.visit("admin/repp_rekapunitstruktural");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Data Unit dan Struktural SDM V1 dan SDM V2"
    );

    //pelengkap
    cy.visit("admin/ms_dokumen");
    cy.get(".content-header > h1").should("contain.text", "Dokumen / UG");

    cy.visit("admin/ms_aksesdokumen");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Akses Dokumen Daftar Hak Akses Dokumen"
    );

    //laporan

    cy.visit("admin/repp_user");
    cy.get(".content-header > h1").should("contain.text", "Daftar User");

    cy.visit("admin/repp_log");
    cy.get(".content-header > h1").should("contain.text", "Log Login ");

    //live api

    cy.visit("admin/list_resource");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Resource Daftar Resource"
    );

    cy.visit("admin/list_role");
    cy.get(".content-header > h1").should("contain.text", "Role Daftar Rele");

    cy.visit("admin/list_client");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Client Daftar Client"
    );

    cy.visit("admin/list_resource");
    cy.get(".content-header > h1").should(
      "contain.text",
      " Resource Daftar Resource"
    );

    cy.visit("admin/list_logapi");
    cy.get(".content-header > h1").should("contain.text", "Log Aktivitas API");

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
