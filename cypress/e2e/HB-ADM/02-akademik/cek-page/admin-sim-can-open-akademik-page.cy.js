/// <reference types="cypress"/>

describe("admin sim can login and open all page in akademik aplikasi module", () => {
    beforeEach(() => {
        cy.loginsuperadmin();
        cy.get(".main_title").should("contain", "Daftar Modul");
        cy.get('.siakad > .inner').click();
        cy.intercept({
        method: "GET",
        url: "http://localhost/siacloud/gate/ajax/access/**",
        }).as("adminAccess");
        cy.get('#siakad > div > div:nth-child(4)').click();
        cy.wait("@adminAccess").its("response.statusCode").should("equal", 200);
    });

    it("admin sim can open dashboard akademik aplikasi module", () => {
        cy.get(".content-header > h1").should("contain.text", "Beranda");
    });

    it("admin sim can open menu portal di modul akademik aplikasi", () => {
        //Portal
        cy.visit("siakad/list_mahasiswa");
        cy.get(".content-header > h1").should("contain.text", "Mahasiswa Daftar Mahasiswa");
        
        cy.visit("siakad/list_pegawai");
        cy.get(".content-header > h1").should("contain.text", "Pegawai Daftar Pegawai");
        
        cy.visit("siakad/list_berita");
        cy.get(".content-header > h1").should("contain.text", "Pengumuman Daftar Pengumuman");
    });
});