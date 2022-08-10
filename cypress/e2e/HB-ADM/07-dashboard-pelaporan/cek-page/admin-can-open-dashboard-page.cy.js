/// <reference types="cypress"/>

describe("admin can open pelaporan page", () => {
  beforeEach(() => {
    cy.loginsuperadmin();
    cy.get(".main_title").should("contain", "Daftar Modul");
    cy.get(".dashboard > .inner").click();
    cy.intercept({
      method: "GET",
      url: "http://localhost/siacloud/gate/ajax/access/**",
    }).as("adminAccess");
    cy.get("#dashboard > div:nth-child(1) > div:nth-child(3)").click();
    cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
  });

  it("superadmin can open pelaporan page", () => {
    //dashboard
    cy.get(".content-header > h1").should(
      "contain.text",
      "Dashboard Selamat Datang di SIM Dashboard dan Pelaporan"
    );

    //statistik dosen

    cy.visit("dashboard/ds_dosen");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Overview Dosen Grafik Overview Dosen"
    );

    cy.visit("dashboard/ds_absensidosen");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Presensi Dosen Grafik Presensi Dosen"
    );

    cy.visit("dashboard/ds_kuesionerdosen");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Kuesioner Dosen Grafik Kuesioner Dosen"
    );

    //dashboard mahasiswa

    cy.visit("dashboard/ds_mahasiswa");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Overview Mahasiswa Grafik Overview Mahasiswa"
    );

    cy.visit("dashboard/ds_absensimhs");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Presensi Mahasiswa Grafik Presensi Mahasiswa"
    );

    cy.visit("dashboard/ds_krs");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Overview Mahasiswa Grafik Overview Mahasiswa"
    );

    cy.visit("dashboard/ds_nilai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Overview Mahasiswa Grafik Overview Mahasiswa"
    );

    //statistik pendaftar

    cy.visit("dashboard/ds_pendaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Overview Pendaftar Grafik Overview Pendaftar"
    );

    cy.visit("dashboard/ds_pendaftaran");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Pendaftar Overview Pendaftar"
    );

    //statistik pegawai
    cy.visit("dashboard/ds_pegawai");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Overview Pegawai Grafik Overview Pegawai"
    );

    //statistik keuangan
    cy.visit("dashboard/ds_keuangan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Keuangan Mahasiswa Grafik Keuangan Mahasiswa"
    );

    cy.visit("dashboard/ds_keuanganmhs");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Keuangan Mahasiswa Grafik Keuangan Mahasiswa"
    );

    cy.visit("dashboard/ds_keuanganpendaftar");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Keuangan Mahasiswa Grafik Keuangan Mahasiswa"
    );

    cy.visit("dashboard/ds_perkuliahan");
    cy.get(".content-header > h1").should(
      "contain.text",
      "Overview Perkuliahan Grafik Overview Perkuliahan"
    );
  });
});
