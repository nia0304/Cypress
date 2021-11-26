/// <reference types="cypress" />

describe("List Nilai Seleksi", () => {
    beforeEach("Login Siakad", () => {
      cy.userlogin();
      cy.modulpmb();
    });

    it.only("Edit Nilai Seleksi" , () => {
        cy.visit("/spmb/set_nilaiseleksi");
        cy.get("#idpendaftar_label").type("123000012")
        cy.get('.tt-suggestion > p').each(($el, index , $list) =>{
            if($el.text() == '123000012 - TEST123' ) {
                cy.wrap($el).click()
            }
        });
        cy.get(".input-group-btn > .btn").click();
        cy.get("#form_list > div.box.box-success > div > table.table.table-bordered.table-striped.dataTable > tbody > tr:nth-child(1) > td:nth-child(4)")
          .should("contain" , "123000012");
        cy.get("#form_list > div.box.box-success > div > table.table.table-bordered.table-striped.dataTable > tbody > tr:nth-child(2) > td:nth-child(3)")
          .should("contain" , "TEST123");
        cy.get("tbody > :nth-child(3) > :nth-child(3)")
          .should("contain" , "Pilihan 1 : AKUNTANSI")
          .should("contain" , "Pilihan 2 : Manajemen ");
        cy.get("tbody > :nth-child(5) > :nth-child(3)")
          .should("contain" , "2020/2021 Genap - Mandiri - Gelombang 1 - Reguler A");
        cy.get("#form_list > div.box.box-success > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2)")
          .type("78.00");
        cy.get("#form_list > div.box.box-success > div > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2)")
          .type("78");
        cy.get("tbody > tr:nth-child(1) > td:nth-child(2) > label > div > ins").click();

    });
});