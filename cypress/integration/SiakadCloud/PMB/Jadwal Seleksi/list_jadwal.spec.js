/// <reference types="cypress" />

describe("List Jadwal Seleksi", () => {
    beforeEach("Login Siakad", () => {
      cy.userlogin();
      cy.modulpmb();
    });

    it("Tambah Jadwal Seleksi", () => {
        cy.visit('/spmb/list_jadwal');
        cy.get("#periode").select("2020/2021 Genap");
        cy.wait(5000);
        cy.get("#jalur").select("Mandiri");
        cy.wait(5000);
        cy.get("#gelombang").select("Gelombang 1");
        cy.wait(5000);
        cy.get("#sistem").select("Reguler A");
        cy.wait(5000);
        cy.get("#wrap-button > .btn-success").click();
        cy.get("header").scrollIntoView();
        cy.get("#idjenispilihan").select("IPA").should("have.value", "IPA");
        cy.get("#idjenisseleksi").select("TES CBT").should("have.value", "12");
        cy.get("#idruang").select("111 - Ruang 111").should("have.value","22");
        cy.get("#tgljadwal").type("01-10-2021").tab();
        cy.get("#waktumulai").type("11:00");
        cy.get("#waktuselesai").type("14:00");
        cy.get("header").scrollIntoView();
        cy.get(".btn-success > span").click();
        cy.get(".modal-footer > .btn-primary").click();
        cy.get("header").scrollIntoView();
        cy.get(".alert").should(
          "contain",
          "Penambahan data Jadwal Seleksi berhasil"
        );
    });

});