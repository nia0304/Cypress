/// <reference types="cypress" />

describe("Periode Pendaftaran", () => {
  beforeEach("Login Siakad", () => {
    cy.login();
    cy.modulpmb();
    cy.filterdashboard();
  });
  it("Penambahan periode pendaftaran tanpa isi kolom nama", () => {
    cy.visit("/spmb/list_periode");
    cy.get(".content-header > h1").should(
      "contain",
      "Daftar Periode Pendaftaran"
    );
    cy.get(".krs-float-title > div > .fs-14").should(
      "contain",
      "Persiapan Data: Periode Pendaftaran"
    );
    cy.get("#wrap-button > .btn-success").click();
    cy.get(".content-header > h1").should(
      "contain",
      "Detail Periode Pendaftaran"
    );
    cy.get("#idperiode").select("2020/2021 Genap");
    cy.get("#idgelombang").select("Gelombang 3");
    cy.get("#idsistemkuliah").select("Reguler B");
    cy.get("#tglawalbuka").type("01-10-2021").tab();
    cy.get("#tglakhirbuka").type("31-10-2021").tab();
    cy.get("#tglakhirfinalisasi").type("31-10-2021").tab();
    cy.get("#tglawaldaftarulang").type("01-11-2021").tab();
    cy.get("#tglakhirdaftarulang").type("02-11-2021").tab();
    cy.get("#prefixkodependaftar").type("202110").tab();
    cy.get("#prefixnoujian").type("202110");
  });
  it("Penambahan periode tanpa isi tanggal mulai");
  it("Penambahan periode tanpa isi tanggal akhir");
  it("Penambahan periode tanpa isi tanggal akhir finalisasi");
  it("Penambahan periode tanpa isi tanggal awal daftar ulang");
  it("Penambahan periode tanpa isi tanggal akhir daftar ulang");
  it("Penambahan periode tanpa isi Jumlah NIK Unik");
  it("Ketika kolom nama diisi lebih dari 255 karakter");
  it(
    "Ketika mengisi kolom periode yang masih belum ditambahkan pada referensi data master"
  );
  it(
    "Ketika mengisi kolom gelombang yang masih belum ditambahkan pada referensi data master"
  );
});
