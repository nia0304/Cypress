/// <reference types="cypress"/>

it("login siakad password gagal", () => {
  cy.visit("dev.siakadcloud.com");
  cy.get("#userid").type("fikri");
  cy.get("#password").type("fikri");
  cy.get(".btn").click();
  cy.contains("Akun Pengguna atau Kata Sandi anda tidak sesuai");
});
