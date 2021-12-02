/// <reference types="cypress" />

describe("List Nilai Seleksi", () => {
    beforeEach("Login Siakad", () => {
      cy.userlogin();
      cy.modulpmb();
    });

    it.only("Edit Nilai Seleksi" , () => {
        cy.visit("/spmb/list_nilaiseleksi");
        cy.get("#periode").select("2020/2021 Genap");
        cy.wait(5000);
        cy.get("#gelombang").select("Gelombang 1");
        cy.wait(5000);
        cy.get("#jalur").select("Mandiri");
        cy.wait(5000);
        cy.get("#sistem").select("Reguler B");
        cy.wait(5000);
        cy.get("#pilihan").select("IPS");
        cy.wait(5000);
        cy.get("#seleksi").select("Tes Kesehatan");
        cy.get(":nth-child(10) > .btn > .fa").click();
        cy.get("#u_nilaikomposisi0").type("78");
        cy.get("tbody > tr > :nth-child(7)").click();
        cy.get("#u_keteranganseleksi").type("Benar semua");
        //upload file
        const filepath = 'images/minion 3.jpg'
        cy.get('#form_list > div.table-responsive > table > tbody > tr > td:nth-child(9) > input[type=file]')
          .attachFile(filepath);
        cy.get("#form_list > div.table-responsive > table > tbody > tr > td:nth-child(10) > button.btn.btn-success.btn-xs.btn-flat").click();
        cy.get(".alert").should("contain","Pengubahan data Keterangan Seleksi Pendaftar berhasil");
    });

    it("Import Nilai Seleksi" , () => {
      cy.visit("/spmb/list_nilaiseleksi");
      cy.get("#periode").select("2020/2021 Genap");
      cy.wait(5000);
      cy.get("#gelombang").select("Gelombang 1");
      cy.wait(5000);
      cy.get("#jalur").select("Mandiri");
      cy.wait(5000);
      cy.get("#sistem").select("Reguler B");
      cy.wait(5000);
      cy.get("#pilihan").select("IPA");
      cy.wait(5000);
      cy.get("#seleksi").select("TES Kesehatan");
      cy.wait(5000);
      cy.get("#wrap-button > .btn").click();
      //klik download
      cy.get(":nth-child(9) > .col-md-12 > .btn").should("be.visible").click();
      cy.readFile("cypress/downloads/template_import_nilai_pendaftar.xlsx").should("exist");
      //upload template
      const filepath = 'File Upload/template_import_nilai_pendaftar.xlsx'
      cy.get("#modal_upload > div > div > div.modal-body > div:nth-child(1) > div.col-md-9 > span > input[type=file]")
        .attachFile(filepath);
      cy.get("#form_list > #modal_upload > .modal-dialog > .modal-content > .modal-footer > .btn-success").click();
      cy.get(".modal-footer > .btn-primary").click();
      cy.get("header").scrollIntoView();
      cy.get(".alert").should("contain","Import nilai pendaftar : Berhasil = 22, Gagal = 0");
  });
});