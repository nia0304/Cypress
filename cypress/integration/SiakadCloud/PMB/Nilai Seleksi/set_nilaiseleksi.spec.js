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
    });
});