/// <reference types="cypress"/>

describe('', ()=>{
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulakademik()
        cy.visit('http://localhost/siacloud/siakad/set_kurikulum');
        
    });

    it('Cek perubahan writing tombol cetak "RPS dan SAP" menjadi "RPS"', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#select2-unit-container').type(data.prodisi)
            cy.get('#select2-kurikulum-container').type(data.thn_kur)
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(1) > .text-left').should('contain', data.ctk_rps)
        })
    });

    it('Cek laporan cetak RPS di kurikulum prodi untuk level prodi', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#select2-unit-container').type(data.prodisi)
            cy.get('#select2-kurikulum-container').type(data.thn_kur)
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(1) > .text-left').click()
        })
    });    
})