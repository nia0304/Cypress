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

    it('Admin cetak laporan pembayaran berdasarkan semua penerima (mahasiswa dan pendaftar) ', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#idperiode').select(data.periode)
            cy.get('#tanggal_awal').type(data.tglawal_cetakpembayaran)
            cy.get('#tanggal_akhir').type(data.tglakhir_cetakpembayaran).tab()
            cy.get('[onclick="goSubmitRep(this)"]').click()
            cy.get(':nth-child(3) > [width="34%"]').should('contain', data.semuapenerima)
        })
    });

    it.only('Admin cetak laporan pembayaran berdasarkan penerima mahasiswa', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#idperiode').select(data.periode)
            cy.get('#tanggal_awal').type(data.tglawal_cetakpembayaran)
            cy.get('#tanggal_akhir').type(data.tglakhir_cetakpembayaran).tab()
            cy.get('#penerima').select(data.penerimamhs)
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
            cy.get('[onclick="goSubmitRep(this)"]').click()
            cy.get(':nth-child(3) > [width="34%"]').should('contain', data.penerimamhs)
        })
    });

    it.only('Admin cetak laporan pembayaran berdasarkan penerima pendaftar ', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#idperiode').select(data.periode)
            cy.get('#tanggal_awal').type(data.tglawal_cetakpembayaran)
            cy.get('#tanggal_akhir').type(data.tglakhir_cetakpembayaran).tab()
            cy.get('#penerima').select(data.penerimapdft)
            cy.unex()
            cy.get('[onclick="goSubmitRep(this)"]').click()
            cy.get(':nth-child(3) > [width="34%"]').should('contain', data.penerimapdft)
        })
    });
    
})