/// <reference types="cypress"/>

describe("super admin can open tracer page", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".alumni").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#alumni > div:nth-child(1) > div:nth-child(2)").click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("super admin can open tracer page", () => {
    //dashboard
    cy.get(".content-header > h1").should(
      "contain.text",
      "Dashboard Selamat Datang di SIM Tracer Alumni"
    );

    //alumni
    cy.visit("alumni/list_alumni");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Alumni Daftar Alumni"
    );

    //forum
    cy.visit("alumni/list_forum");
    cy.get(".content-header > h1").should("contain.text", "Forum Daftar Forum");

    //kuesioner
    cy.visit("alumni/list_kuesioner");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Kuesioner Daftar Kuesioner"
    );

    cy.visit("alumni/list_hasilkuesioner");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Hasil Kuesioner Hasil Kueisoner"
    );
    //referensi
    cy.visit("alumni/ms_bidang");
    cy.get(".content-header > h1").should("contain.text", "Bidang Pekerjaan");

    cy.visit("alumni/ms_keahlian");
    cy.get(".content-header > h1").should("contain.text", "Kompetensi");
    cy.visit("alumni/ms_jenisforum");
    cy.get(".content-header > h1").should("contain.text", "Jenis Forum");
    cy.visit("alumni/ms_skalakeahlian");
    cy.get(".content-header > h1").should("contain.text", "Skala Kompetensi");
    cy.visit("alumni/ms_skalaperusahaan");
    cy.get(".content-header > h1").should("contain.text", "Skala Perusahaan");
    cy.visit("alumni/ms_penghasilan");
    cy.get(".content-header > h1").should("contain.text", "Penghasilan");
    cy.visit("alumni/ms_skalaperusahaan");
    cy.get(".content-header > h1").should("contain.text", "Skala Perusahaan");
    cy.visit("alumni/ms_waktutunggu");
    cy.get(".content-header > h1").should("contain.text", "Waktu Tunggu");

    //laporan
    //laporan alumni
    cy.visit("alumni/repp_alumni");
    cy.get(".content-header > h1").should("contain.text", "Daftar Alumni");
    cy.visit("alumni/repp_rekapaktivasialumni");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Aktivasi Alumni"
    );
    //laporan kuesioner
    cy.visit("alumni/repp_rekapkuesioner");
    cy.get(".content-header > h1").should("contain.text", "Rekap Kuesioner");
    cy.visit("alumni/repp_rekaphasilkuesioner");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Hasil Kuesioner"
    );
    cy.visit("alumni/repp_rekapkuesioner");
    cy.get(".content-header > h1").should("contain.text", "Rekap Kuesioner");
    cy.visit("alumni/repp_distkuesioner");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Distribusi Kuesioner"
    );
    cy.visit("alumni/repp_rekapdistkuesioner");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Rekap Distribusi Kuesioner"
    );
    //laporan bidang
    cy.visit("alumni/repp_kompetensi");
    cy.get(".content-header > h1").should("contain.text", "Kompetensi");
    cy.visit("alumni/repp_bidangkerja");
    cy.get(".content-header > h1").should("contain.text", "Bidang Pekerjaan");
    cy.visit("alumni/repp_lamatunggu");
    cy.get(".content-header > h1").should("contain.text", "Lama Tunggu");
    //laporan manual
    cy.visit("alumni/list_laporan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Laporan Daftar Laporan Manual"
    );
    cy.visit("alumni/repp_laporan");
    cy.get(".content-header > h1").should("contain.text", "Laporan Manual");
    //administrasi
    cy.visit("alumni/set_loginas");
    cy.get(".content-header > h1").should("contain.text", "Login As");
    cy.visit("alumni/data_landing/detail");
    cy.get(".content-header > h1").should("contain.text", "Landing Page");
    cy.visit("alumni/list_broadcast");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Broadcast Daftar Broadcast"
    );
    cy.visit("alumni/ms_settingapk");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Setting Setting Pengaturan SIM"
    );
  });
});
