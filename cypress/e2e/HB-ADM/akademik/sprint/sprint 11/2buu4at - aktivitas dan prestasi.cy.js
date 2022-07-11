/// <reference types="cypress"/>

describe('Penyesuaian alur validasi aktivitas & prestasi mahasiswa pada modul Akademik', ()=>{
    before("create db", () => {
        cy.exec("createdb -U postgres -p 5432 -T dbcypress cytes");
    });

    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulakademik()
        cy.visit('http://localhost/siacloud/siakad/list_aktivitasmhs');
    });

    after('drop db', () => {
        cy.exec("dropdb -U postgres -p 5432 cytes");
    });

    it('Cek wording di menu aksi', () => {
        cy.get('.btn-group > .dropdown-toggle').click()
        cy.get(':nth-child(1) > .text-left').should('contain', 'Set Valid').and('be.visible')
        cy.get(':nth-child(2) > .text-left').should('contain', 'Set Tidak Valid').and('be.visible')
        cy.get(':nth-child(3) > .text-left').should('contain', 'Set Tampil di SKPI').and('be.visible')
        cy.get(':nth-child(4) > .text-left').should('contain', 'Set Tidak Tampil di SKPI').and('be.visible')
    });

    it('Admin klik batalkan ketik Set Valid', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get(':nth-child(1) > .text-center > .icheckbox_minimal > .iCheck-helper').click()
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(1) > .text-left').click()
            cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', data.modal_valid)
            cy.get('.modal-footer > .btn-default').should('have.text', data.btn_batal).click()
        })
    });

    it('Admin Set Valid', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get(':nth-child(1) > .text-center > .icheckbox_minimal > .iCheck-helper').click()
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(1) > .text-left').click()
            cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', data.modal_valid)
            cy.get('.modal-footer > .btn-default').should('have.text', data.btn_batal).should('be.visible')
            cy.get('.modal-footer > .btn-primary').should('have.text', data.btn_yakin).click()
            cy.get('.alert').should('contain', data.alert_setvalid)
        })
    });

    it('Admin Set Tidak Valid', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get(':nth-child(1) > .text-center > .icheckbox_minimal > .iCheck-helper').click()
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(2) > .text-left').click()
            cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', data.modal_tidakvalid)
            cy.get('.modal-footer > .btn-default').should('have.text', data.btn_batal).should('be.visible')
            cy.get('.modal-footer > .btn-primary').should('have.text', data.btn_yakin).click()
            cy.get('.alert').should('contain', data.alert_settdkvalid)
        })
    });

    it('Admin Set Tampil di SKPI', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get(':nth-child(1) > .text-center > .icheckbox_minimal > .iCheck-helper').click()
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(3) > .text-left').click()
            cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', data.modal_tampilskpi)
            cy.get('.modal-footer > .btn-default').should('have.text', data.btn_batal).should('be.visible')
            cy.get('.modal-footer > .btn-primary').should('have.text', data.btn_yakin).click()
            cy.get('.alert').should('contain', data.alert_tampilskpi)
        })
    });

    it('Admin Set Tidak Tampil di SKPI', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get(':nth-child(1) > .text-center > .icheckbox_minimal > .iCheck-helper').click()
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(4) > .text-left').click()
            cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', data.modal_tdkskpi)
            cy.get('.modal-footer > .btn-default').should('have.text', data.btn_batal).should('be.visible')
            cy.get('.modal-footer > .btn-primary').should('have.text', data.btn_yakin).click()
            cy.get('.alert').should('contain', data.alert_tdkskpi)
        })
    });

    it('Admin Set Tampil di SKPI saat belum valid', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get(':nth-child(2) > .text-center > .icheckbox_minimal > .iCheck-helper').click()
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(3) > .text-left').click()
            cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', data.modal_tampilskpi)
            cy.get('.modal-footer > .btn-default').should('have.text', data.btn_batal).should('be.visible')
            cy.get('.modal-footer > .btn-primary').should('have.text', data.btn_yakin).click()
            cy.get('.alert').should('contain', data.alert_tampilskpi)
        })
    });
    
    it('Admin Set Tidak Valid saat sudah valid SKPI', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get(':nth-child(2) > .text-center > .icheckbox_minimal > .iCheck-helper').click()
            cy.get('.btn-group > .dropdown-toggle').click()
            cy.get(':nth-child(2) > .text-left').click()
            cy.get('.bootbox > .modal-dialog > .modal-content').should('contain', data.modal_tidakvalid)
            cy.get('.modal-footer > .btn-default').should('have.text', data.btn_batal).should('be.visible')
            cy.get('.modal-footer > .btn-primary').should('have.text', data.btn_yakin).click()
            cy.get('.alert').should('contain', data.alert_settdkvalid)
        })
    });
})