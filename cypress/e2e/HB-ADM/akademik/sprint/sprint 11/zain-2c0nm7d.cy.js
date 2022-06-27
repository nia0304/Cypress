/// <reference types="cypress"/>

describe('Penyesuaian rekap laporan pembayaran berdasarkan jenis penerima di Modul Keuangan', ()=>{
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/repp_rekappembayaran');
    });

    it('Cek filter Penerima pada halaman Laporan Pembayaran', () => {
        cy.get('#block-penerima > .col-md-4').should('be.visible')
        cy.get('#penerima').should('be.visible').select('Mahasiswa')
        Cypress.on('uncaught:exception', (err, runnable) => {
           return false
        })
        cy.get('#penerima').select('Pendaftar')
        Cypress.on('uncaught:exception', (err, runnable) => {
           return false
        })
    });
    
    it('Cek range tanggal akhir > tanggal awal', () => {
        cy.get('#tanggal_awal').type('27-06-2022')
        cy.get('#tanggal_akhir').type('20-06-2022').tab()
        cy.get('.alert-empty-data').should('contain', 'Tanggal Awal tidak boleh lebih besar dari Tanggal Akhir')
    });
    
})