/// <reference types="cypress"/>

describe("superadmin can open cbt page", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".cbt > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#cbt > div:nth-child(1) > div:nth-child(2)").click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("superadmin can open keuangan page", () => {
    cy.get(".content-header > h1").should(
      "contain.text",
      "Dashboard Selamat Datang di SIM Computer Based Test"
    );

    //portal
    cy.visit("cbt/list_peserta");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Peserta Daftar Peserta"
    );

    cy.visit("cbt/list_berita");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Berita Daftar Berita"
    );

    cy.visit("cbt/data_alurujian");
    cy.get(".content-header > h1").should("contain.text", "Alur Ujian");

    //ujian
    cy.visit("cbt/list_soal");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Bank Soal Daftar Soal"
    );

    cy.visit("cbt/list_ujian");
    cy.get(".content-header > h1").should("contain.text", "Ujian Daftar Ujian");

    cy.visit("cbt/list_evaluasi");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Evaluasi Evaluasi Ujian per Tanggal"
    );

    cy.visit("cbt/list_monitorujian");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Monitoring Ujian Daftar Ujian"
    );

    cy.visit("cbt/list_ujiankuliah");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Ujian Perkuliahan Daftar Ujian Perkuliahan"
    );

    //referensi
    cy.visit("cbt/ms_panitia");
    cy.get(".content-header > h1").should("contain.text", "Ketua Panitia");

    cy.visit("cbt/ms_periode");
    cy.get(".content-header > h1").should("contain.text", "Periode");

    cy.visit("cbt/ms_jenisperiode");
    cy.get(".content-header > h1").should("contain.text", "Jalur Ujian");

    cy.visit("cbt/ms_jenisujian");
    cy.get(".content-header > h1").should("contain.text", "Jenis Ujian");

    cy.visit("cbt/ms_ruang");
    cy.get(".content-header > h1").should("contain.text", "Ruangan");

    cy.visit("cbt/ms_skor");
    cy.get(".content-header > h1").should("contain.text", "Skor");

    cy.visit("cbt/ms_sk");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Syarat dan Ketentuan"
    );

    //laporan

    cy.visit("cbt/repp_daftarhadir");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Hadir Peserta"
    );

    cy.visit("cbt/repp_hasilujian");
    cy.get(".content-header > h1").should("contain.text", "Daftar Hasil Ujian");

    cy.visit("cbt/repp_rankingujian");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Ranking Peserta"
    );

    cy.visit("cbt/repp_hasilujiangrade");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Hasil Ujian Grade"
    );

    cy.visit("cbt/repp_ujianpercobaan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Peserta Ujian Percobaan"
    );

    cy.visit("cbt/repp_soal");
    cy.get(".content-header > h1").should("contain.text", "Laporan Bank Soal");

    cy.visit("cbt/repp_jawabanujian");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Jawaban Ujian Peserta"
    );

    cy.visit("cbt/list_laporan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Daftar Laporan Manual"
    );

    cy.visit("cbt/repp_daftarhadir");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Daftar Hadir Peserta"
    );

    cy.visit("cbt/repp_laporan");
    cy.get(".content-header > h1").should("contain.text", "Laporan Manual");
  });
});
