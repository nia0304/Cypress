/// <reference types="cypress"/>

const judulHalaman = "Generate Mahasiswa";

describe(judulHalaman, () => {

    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
        // go to target page
        cy.Menu_Generate_Mahasiswa()

        cy.fixture('HB-PMB/sprint27/konfirmasi_batal_nim').as('data')
    });

    it('Admin menggunakan fitur batal NIM all', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        // klik batalkan mahasiswa all
        cy.get('#wrap-button > .btn-warning').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalBatalNimAll)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilBatalNimAll)

        

    });

    it('Admin menggunakan aksi batal NIM untuk satu pendaftar', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('td').contains(this.data.idPendaftarFilter)
            .parent()
            .find('button.btn.btn-warning.btn-xs.btn-flat').click().wait(0)

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalBatalNim)
        cy.get('.bootbox-body > span').should('contain', this.data.namaPendaftarFilter)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilBatalNim)

    });

    it('Admin menggunakan aksi batalkan NIM pada kolom aksi pendaftar berdasarkan filter nama mahasiswa', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('#cfilter').select(this.data.pilihFilter)

        cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.idPendaftarFilter)

        cy.get('.input-group-btn > .btn-success').click()

        cy.get('td').contains(this.data.namaPendaftarFilter)
            .parent()
            .find('.btn-warning').click().wait(0)

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalBatalNim)
        cy.get('.bootbox-body > span').should('contain', this.data.namaPendaftarFilter)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilBatalNim)

    });

    it('Admin menggunakan aksi button batalkan all mahasiswa dengan filter nama mahasiswa', function() {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('#cfilter').select(this.data.pilihFilter)

        cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.idPendaftarFilter)

        cy.get('.input-group-btn > .btn-success').click()

        // klik batalkan mahasiswa all
        cy.get('#wrap-button > .btn-warning').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalBatalNimAll)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', 'Berhasil')

    });

});
