/// <reference types="cypress" />

describe("Peserta Seleksi", () => {
    beforeEach("Login Siakad", () => {
      cy.userlogin();
      cy.modulpmb();
    });

    it.only("Generate Peserta Seleksi", () => {
        cy.visit('/spmb/list_jadwal');
        cy.get("#periode").select("2020/2021 Genap");
        cy.wait(5000);
        cy.get("#jalur").select("Mandiri");
        cy.wait(5000);
        cy.get("#gelombang").select("Gelombang 1");
        cy.wait(5000);
        cy.get("#sistem").select("Reguler A");
        cy.wait(5000);
        cy.get(":nth-child(2) > .text-right > .btn-info > .fa").click();
        cy.get("#sidebar-menu-list > :nth-child(3) > a")
          .should("contain" , "Peserta")
          .click();
        cy.get(".btn-success > span").click();
        cy.get(".modal-footer > .btn-primary").click();
        cy.get("#form_list > div > table").getTable().should(tableData => { 
//        hasil log data diletakkan di fixture          
//        cy.log(tableData)
          cy.fixture('Jadwal Seleksi/list_peserta_seleksi.json').then((dataFixture) => {
                expect(tableData).to.deep.equal(dataFixture)
              });
        });
    });

    it("Hapus Peserta Seleksi", () => {
      cy.visit('/spmb/list_jadwal');
      cy.get("#periode").select("2020/2021 Genap");
      cy.wait(5000);
      cy.get("#jalur").select("Mandiri");
      cy.wait(5000);
      cy.get("#gelombang").select("Gelombang 1");
      cy.wait(5000);
      cy.get("#sistem").select("Reguler A");
      cy.wait(5000);
      cy.get(":nth-child(2) > .text-right > .btn-info > .fa").click();
      cy.get("#sidebar-menu-list > :nth-child(3) > a")
        .should("contain" , "Peserta")
        .click();
      cy.get(".btn-danger > .fa").click();
      cy.get(".modal-footer > .btn-primary").click();
      cy.get("header").scrollIntoView();
      cy.get(".alert").should("contain" , "Pengubahan data Seleksi Pendaftar berhasil");
  });
});