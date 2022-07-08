/// <reference types="cypress"/>

describe('Penambahan filter & kolom "Unit Kerja" pada laporan Honorarium Dosen', ()=> {

    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/siakad/repp_honordosen');
    });
        
    it('Cek tanggal akhir lebih kecil dari tanggal awal', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
        cy.get('#tanggal_awal').clear().type(data.tglawal_honorarium)
        cy.get('#tanggal_akhir').clear().type(data.tglakhir_honorarium).tab()
        cy.get('.alert-empty-data').should('contain', data.alert_tglhonorarium).and('be.visible')
    })
    });

    it('Cek ketika tanggal awal kosong', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#tanggal_awal').clear().tab()
            cy.get('[onclick="goSubmitBlankRep(this)"]').click()
            cy.get('.modal-content').should('contain', data.alert_kolomkosonghonorarium)
            cy.get('.modal-footer > .btn').should('be.visible').click()
        })
    });

    it('Cek ketika tanggal akhir kosong', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#tanggal_akhir').clear().tab()
            cy.get('[onclick="goSubmitBlankRep(this)"]').click()
            cy.get('.modal-content').should('contain', data.alert_kolomkosonghonorarium)
            cy.get('.modal-footer > .btn').should('be.visible').click()
        })
    });

    it.only('Cek filter unit kerja', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#block-idunit > .col-md-4').should('contain', data.label_unitkerja).and('be.visible')
            cy.get('#select2-idunit-container').should('be.visible')
        })
    });
})