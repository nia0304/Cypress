const judulHalaman = "Generate Mahasiswa";

describe(judulHalaman, () => {

    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
        // go to target page
        cy.Menu_Generate_Mahasiswa()

        cy.fixture('HB-PMB/sprint27/konfirmasi_generate_mahasiswa').as('data')
    });

    it('Admin menggunakan fitur generate mahasiswa all', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        // klik generate mahasiswa all
        cy.get('#wrap-button > .btn-success').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateMhsAll)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilGenerateMhsAll)

        

    });

    it('Admin menggunakan aksi Generate mahasiswa untuk satu pendaftar', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('td').contains(this.data.namaPendaftar)
            .parent()
            .find('button.btn.btn-success.btn-xs.btn-flat').click().wait(0)

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateMhs)
        cy.get('.bootbox-body > span').should('contain', this.data.namaPendaftar)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilGenerateMhs)

    });

    it('Admin menggunakan aksi generate mahasiswa pada kolom aksi pendaftar berdasarkan filter nama mahasiswa', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('#cfilter').select(this.data.pilihFilter)

        cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.idPendaftarFilter)

        cy.get('.input-group-btn > .btn-success').click()

        cy.get('td').contains(this.data.namaPendaftarFilter)
            .parent()
            .find('.btn-success').click().wait(0)

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateMhs)
        cy.get('.bootbox-body > span').should('contain', this.data.namaPendaftarFilter)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilGenerateMhs)

    });

    it('Admin menggunakan aksi button generate all mahasiswa dengan filter nama mahasiswa', function() {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('#cfilter').select(this.data.pilihFilter)

        cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.idPendaftarFilter)

        cy.get('.input-group-btn > .btn-success').click()

        // klik batalkan mahasiswa all
        cy.get('#wrap-button > .btn-success').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateMhsAll)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', 'Berhasil')

    });

    it('Admin menggunakan aksi Generate mahasiswa untuk satu pendaftar yang memiliki tagihan', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('td').contains(this.data.namaPendaftar)
            .parent()
            .find('button.btn.btn-success.btn-xs.btn-flat').click().wait(0)

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateMhs)
        cy.get('.bootbox-body > span').should('contain', this.data.namaPendaftar)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilGenerateMhs)

    });
})