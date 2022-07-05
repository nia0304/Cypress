/// <reference types="cypress"/>

it("login siakad password gagal", () => {
  cy.visit("dev.siakadcloud.com");
  cy.get("#userid").type("fikri");
  cy.get("#password").type("fikri");
  cy.get(".btn").click();
  cy.contains("Akun Pengguna atau Kata Sandi anda tidak sesuai");
});

it.only("login siakad berhasil", () => {
  cy.visit("/");
  cy.get("#userid").type("fikri");
  cy.get("#password").type("j77/FQjF");
  cy.get(".btn").click();
});

it("Modul PMB - reff gelombang", () => {
  cy.visit("dev.siakadcloud.com");
  cy.get("#userid").type("fikri");
  cy.get("#password").type("j77/FQjF");
  cy.get(".btn").click();
  cy.get(".spmb > .inner").click(); //pilih modul
  cy.get("#spmb > div > div:nth-child(3)").click(); //pilih role login
  cy.get(".container > .nav > :nth-child(1) > a").click();
  cy.visit("https://dev.siakadcloud.com/spmb/ms_gelombang");
  cy.get(".col-md-12 > .btn").click();
  cy.get("#i_idgelombang").type("7");
  cy.get("#i_namagelombang").type("Gelombang 7");
  cy.get(":nth-child(3) > .btn-success").click();
  cy.contains("Penambahan data gelombang berhasil");
});

describe("Contoh Login", () => {
  it("Login Ke Sistem", () => {
    cy.visit("https://dev.siakadcloud.com/");
    cy.get("#userid").type("adminpt");
    cy.get("#password").type("adminpt1234");
    cy.contains("Masuk Aplikasi").click();
    cy.get("#link-siakad").click();
    cy.get(
      "#siakad > .content > .role_box > .role_container > .rolename"
    ).click();
    cy.get(".container > .nav > :nth-child(3) > :nth-child(1) > .fa").click();
    cy.visit("https://dev.siakadcloud.com/siakad/list_mahasiswa");
  });
});
