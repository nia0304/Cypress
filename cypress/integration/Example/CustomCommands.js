/// <reference types="cypress"/>

describe("Refensi Tahapan Alur PMB", () => {
  it("Tambah Data Referensi Gelombang", () => {
    cy.login("fikri", "j77/FQjF");
    cy.get(".spmb > .inner").click(); //pilih modul pmb
    cy.get("#spmb > div > div:nth-child(3)").click(); //pilih role login
    cy.get(".container > .nav > :nth-child(1) > a").click(); //trigger untuk akses url
    cy.visit("https://dev.siakadcloud.com/spmb/ms_gelombang");
    cy.get(".col-md-12 > .btn").click();
    cy.get("#i_idgelombang").type("7");
    cy.get("#i_namagelombang").type("Gelombang 7");
    cy.get(":nth-child(3) > .btn-success").click();
    cy.get(".alert").should("contain", "data gelombang berhasil");
    cy.logout();
  });

  it("Hapus Data Refensi Gelombang", () => {
    cy.login("fikri", "j77/FQjF");
    cy.get(".spmb > .inner").click(); //pilih modul pmb
    cy.get("#spmb > div > div:nth-child(3)").click(); //pilih role login
    cy.get(".container > .nav > :nth-child(1) > a").click(); //trigger untuk akses url
    cy.visit("https://dev.siakadcloud.com/spmb/ms_gelombang");
    cy.get(":nth-child(8) > :nth-child(3) > .btn-danger").click();
    cy.get(".modal-body").should(
      "contain",
      "Apakah anda yakin akan menghapus data ini?"
    );
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".alert").should("contain", "Penghapusan data gelombang berhasil");
    cy.logout();
  });
});
