const judulHalaman = "Generate Mahasiswa";

describe(judulHalaman, () => {

    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
        // go to target page
        cy.Menu_Generate_Mahasiswa()

        cy.fixture('HB-PMB/sprint27/konfirmasi_generate_nim').as('data')
    });

    it('Admin menggunakan fitur generate NIM all', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        // klik generate NIM all
        cy.get('#wrap-button > .btn-info').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateNimAll)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilGenerateNimAll)

        

    });

    it('Admin menggunakan aksi Generate NIM untuk satu pendaftar', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('td').contains(this.data.namaPendaftarFilter)
            .parent()
            .find('button.btn.btn-info.btn-xs.btn-flat').click().wait(0)

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateNim)
        cy.get('.bootbox-body > span').should('contain', this.data.namaPendaftarFilter)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilGenerateNim)

    });

    it('Admin menggunakan aksi generate mahasiswa pada kolom aksi pendaftar berdasarkan filter nama mahasiswa', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('#cfilter').select(this.data.pilihFilter)

        cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.idPendaftarFilter)

        cy.get('.input-group-btn > .btn-success').click()

        cy.get('td').contains(this.data.namaPendaftarFilter)
            .parent()
            .find('.btn-info').click().wait(0)

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateNim)
        cy.get('.bootbox-body > span').should('contain', this.data.namaPendaftarFilter)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilGenerateNim)

    });

    it('Admin menggunakan aksi button generate all mahasiswa dengan filter nama mahasiswa', function() {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('#cfilter').select(this.data.pilihFilter)

        cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.idPendaftarFilter)

        cy.get('.input-group-btn > .btn-success').click()

        // klik batalkan nim all
        cy.get('#wrap-button > .btn-info').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateNimAll)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', 'Berhasil')

    });

    it('Admin menggunakan aksi generate nim untuk satu pendaftar yang memiliki tagihan belum lunas', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('td').contains(this.data.idPendaftar)
            .parent()
            .find('button.btn.btn-info.btn-xs.btn-flat').click().wait(0)

        // assert modal
        cy.get('.bootbox-body').should('contain', this.data.modalGenerateNim)
        cy.get('.bootbox-body > span').should('contain', this.data.namaPendaftar)

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertGagal)

    });
})