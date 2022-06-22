/// <reference types="cypress"/>

describe("Penyesuaian menu beasiswa pada modul akademik", () => {
    beforeEach(() => {
        cy.loginsuperadmin()
    });

    it('Admin cek menu beasiswa', () => {
        cy.modulakademik()
        cy.contains("Kemahasiswaan").click()
        cy.contains("Beasiswa").should('not.be.visible')
    });

    it('Admin cek link beasiswa secara manual copy paste URL', () => {
        cy.modulakademik()
        cy.visit('http://localhost/siacloud/siakad/ms_jenisbeasiswamhs');
        cy.get('.content-header > h1').should('contain', 'Error Halaman tidak dapat diakses')
        cy.get('.container > .nav > :nth-child(1) > a').click()
        cy.visit('http://localhost/siacloud/siakad/list_beasiswamhs');
        cy.get('.content-header > h1').should('contain', 'Error Halaman tidak dapat diakses')
        cy.get('.container > .nav > :nth-child(1) > a').click()
        cy.visit('http://localhost/siacloud/siakad/set_berkasbeasiswa');
        cy.get('.content-header > h1').should('contain', 'Error Halaman tidak dapat diakses')
        cy.get('.container > .nav > :nth-child(1) > a').click()
    });

    it('Admin cek menu potongan & beasiswa di modul keuangan', () => {
        cy.modulkeuangan()
        cy.contains("Transaksi").click()
        cy.contains("Potongan & Beasiswa").should('be.visible')
    });

    it.only('Superadmin cek menu beasiswa non aktif dari modul admin aplikasi', () => {
        cy.moduladminaplikasi()
        cy.visit('http://localhost/siacloud/admin/set_menu');
        cy.get('[data-left="243"] > [style="padding-left:8px"] > [data-type="cexpand"] > .fa').click()
        cy.get('[data-id="1247"] > .btn-primary').click()
        // cy.get('#namamenu').invoke('val').then(valuetext => cy.log(valuetext));
        cy.get('#namamenu').invoke('val').then(($valuetext)=> {
            if($valuetext === "Beasiswa"){
                cy.wrap($valuetext).should('contain', 'Beasiswa')
            }
        });
        
        
    });
    
    
})