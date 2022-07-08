/// <reference types="cypress"/>

describe('Penyesuaian rekap laporan pembayaran berdasarkan jenis penerima di Modul Keuangan', ()=>{
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/repp_rekappembayaran');
    });

    it('Cek filter Penerima pada halaman Laporan Pembayaran', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#block-penerima > .col-md-4').should('be.visible')
            cy.get('#penerima').should('be.visible').select(data.select_mhs)
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
            cy.get('#penerima').select(data.select_pdt)
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
        })
    });
    
    it('Cek range tanggal akhir > tanggal awal', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#tanggal_awal').type(data.tgl_awalpembayaran)
            cy.get('#tanggal_akhir').type(data.tgl_akhirpembayaran).tab()
            cy.get('.alert-empty-data').should('contain', data.alert_tglpembayaran)
        })
    });
    
})