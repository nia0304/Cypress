/// <reference types="cypress" />

describe("Data Penguji", () => {
    beforeEach("Login Siakad", () => {
      cy.userlogin();
      cy.modulpmb();
    });

    it("Tambah Data Penguji", () => {
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
        cy.get("#sidebar-menu-list > :nth-child(2) > a")
          .should("contain" , "Penguji")
          .click();
        cy.get('#i_nip_label').type("andr")
        cy.get('.tt-dataset-1 div').each(($el, index , $list) =>{
            if($el.text() == '1001079001 - ANDREW SHANDY UTAMA' ) {
                cy.wrap($el).click()
            }
        });
        cy.get(":nth-child(2) > .labelinput > .icheckbox_minimal > .iCheck-helper").click();
        cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should("contain" , "Penambahan data Penguji Seleksi berhasil");
    });

    it.only("Edit Data Penguji", () => {
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
        cy.get("#sidebar-menu-list > :nth-child(2) > a")
          .should("contain" , "Penguji")
          .click();
        cy.get(':nth-child(2) > :nth-child(4) > .btn-primary > .fa').click();
        cy.get('#u_nip_label').clear().type("yetti");
        cy.get('.tt-dropdown-menu > .tt-dataset-2 div').each(($el, index , $list) =>{
           if($el.text() == '1001106501 - YETTI' ) {
               cy.wrap($el).click()
           }
        });
        // .tt-dropdown-menu > .tt-dataset-2
        cy.get(":nth-child(2) > :nth-child(4) > .btn-success > .fa").click();
        //cy.get("#insert-row-ms > :nth-child(4) > .btn > .fa").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should("contain" , "Pengubahan data Penguji Seleksi berhasil");
    });
});
