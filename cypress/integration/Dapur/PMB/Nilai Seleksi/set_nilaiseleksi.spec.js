/// <reference types="cypress" />

describe("Pengisian Nilai Seleksi", () => {
    beforeEach("Login Siakad", () => {
      cy.userlogin();
      cy.modulpmb();
    });

    it.only("Pengisian Nilai Seleksi" , () => {
        cy.visit("/spmb/set_nilaiseleksi");
        cy.get("#idpendaftar_label").type("2021006")
        cy.get('.tt-suggestion > p').each(($el, index , $list) =>{
            if($el.text() == '2021006 - ANGGI' ) {
                cy.wrap($el).click()
            }
        });
        cy.get(".input-group-btn > .btn").click();
        cy.get("#form_list > div.box.box-success > div > table.table.table-bordered.table-striped.dataTable > tbody > tr:nth-child(1) > td:nth-child(4)")
          .should("contain" , "2021006");
        cy.get("#form_list > div.box.box-success > div > table.table.table-bordered.table-striped.dataTable > tbody > tr:nth-child(2) > td:nth-child(3)")
          .should("contain" , "ANGGI");
        cy.get("tbody > :nth-child(3) > :nth-child(3)")
          .should("contain" , "Pilihan 1 : Ilmu Hukum")
          .should("contain" , "Pilihan 2 : Manajemen ");
        cy.get("tbody > :nth-child(5) > :nth-child(3)")
          .should("contain" , "2020/2021 Genap - Mandiri - Gelombang 1 - Reguler B");
        cy.get("#form_list > div.box.box-success > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)")
          .type("{selectall}")
          .type("78");
        cy.get("#form_list > div.box.box-success > div > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2)")
          .type("{selectall}")
          .type("78");
        cy.get("tbody > tr:nth-child(1) > td:nth-child(2) > label > div > ins").click();

         //upload template bukan file jpg dan pdf
        const filepath = 'File Upload/template_import_nilai_pendaftar.xlsx'
        cy.get(":nth-child(1) > :nth-child(5) > input").attachFile(filepath);
        cy.get("body > div.bootbox.modal.fade.bootbox-alert.in > div > div")
          .should("contain" , "File yang dapat diunggah hanya jpg, jpeg, pdf");
        cy.get(".modal-footer > .btn").click();
        cy.get("header").scrollIntoView();

        //upload template file jpg
        //const image = 'Images/minion 3.jpg'
        //cy.get(":nth-child(1) > :nth-child(5) > input").attachFile(image);
        //cy.get(":nth-child(2) > :nth-child(5) > input").attachFile(image);
        cy.get(".col-sm-4 > .btn").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should("contain" , "Berhasil melakukan perubahan penilaian seleksi pendaftar")
    });

    it("Download file berkas pendaftar" , () => {
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
      
    });
});