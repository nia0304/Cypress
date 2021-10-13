/// <reference types="cypress" />

describe("Jenis Program Periode Pendaftaran", () => {
    beforeEach("Login Siakad", () => {
      cy.login();
      cy.modulpmb();
    });
  
    it.only("Menambahkan Jenis Program", () => {
      cy.visit('/spmb/list_periode')
      cy.get('li').filter(':contains("2021 Genap")').click
    });
  });