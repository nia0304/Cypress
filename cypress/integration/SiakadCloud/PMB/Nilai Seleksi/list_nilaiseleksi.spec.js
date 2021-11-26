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
        cy.get("#sistem").select("Reguler A");
        cy.wait(5000);
        cy.get("#pilihan").select("IPA");
        cy.wait(5000);
        cy.get("#seleksi").select("TES CBT");
        cy.get(":nth-child(9) > :nth-child(10) > .btn > .fa").click();
        cy.get("#u_nilaikomposisi0").type("78");
        cy.get(":nth-child(9) > :nth-child(7)").click();
        cy.get("#u_keteranganseleksi").type("Benar semua");
        //upload file
        const filepath = 'images/minion 3.jpg'
        cy.get('#form_list > div.table-responsive > table > tbody > tr:nth-child(9) > td:nth-child(9) > input[type=file]')
          .attachFile(filepath);
        cy.get("#form_list > div.table-responsive > table > tbody > tr:nth-child(9) > td:nth-child(10) > button.btn.btn-success.btn-xs.btn-flat").click();
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
      cy.get("#sistem").select("Reguler A");
      cy.wait(5000);
      cy.get("#pilihan").select("IPA");
      cy.wait(5000);
      cy.get("#seleksi").select("TES CBT");
      cy.wait(5000);
      cy.get("#wrap-button > .btn").click();
      //klik download
      //cy.get(":nth-child(9) > .col-md-12 > .btn").click();
      //upload template

  });
});