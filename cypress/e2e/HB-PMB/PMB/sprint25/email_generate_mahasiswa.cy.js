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
    });

    it('Melakukan generate NIM all pendaftar', () => {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        // klik generate nim all
        cy.get('#wrap-button > .btn-info').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan melakukan generate NIM pendaftar?')

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // asset berhasil 
        cy.get('.alert').should('contain', 'Berhasil 3 dan Gagal 0 generate NIM Pendaftar')

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

    });

    it('Ketika generate Mahasiswa all terdapat kurikulum prodi yang belum di atur', () => {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        // klik generate mahasiswa all 
        cy.get('#wrap-button > .btn-success').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan melakukan generate Mahasiswa dan Mengirimkan Email pemberitahuan lulus kepada Mahasiswa?')

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', 'Terdapat Kurikulum Prodi yang belum di atur')
        // Terdapat Kurikulum Prodi yang belum di atur : Manajemen

    });

    it('Melakukan generate Mahasiswa all pendaftar', () => {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        // klik generate mahasiswa all 
        cy.get('#wrap-button > .btn-success').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan melakukan generate Mahasiswa dan Mengirimkan Email pemberitahuan lulus kepada Mahasiswa?')

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        // cy.get('.alert').should('contain', 'Berhasil 3 dan Gagal 0 generate Mahasiswa')
        // Terdapat Kurikulum Prodi yang belum di atur : Manajemen

    });

    it('Ketika Melakukan generate Mahasiswa all pendaftar pada pendaftar yang belum mendapatkan NIM', () => {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        // klik generate mahasiswa all 
        cy.get('#wrap-button > .btn-success').click()

        // assert modal
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan melakukan generate Mahasiswa dan Mengirimkan Email pemberitahuan lulus kepada Mahasiswa?')

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', 'Tidak ada data Pendaftar yang akan dipindahkan ke Mahasiswa')

    });


    it('Melakukan generate NIM untuk satu pendaftar', () => {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.fixture("pmb/data_pendaftar").then((data) => {

            cy.get(".table > tbody > tr > td:nth-child(2)")
                    .contains(data.kode_pendaftar_mhs)
                    .next()
                    .next()
                    .next()
                    .next()
                    .next()
                    .next()
                    .next()
                    .find(".btn-info")
                    .click();

        })

        // assert modal
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan melakukan generate NIM pendaftar?')

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // assert berhasil
        cy.get('.alert').should('contain', 'Berhasil Generate NIM')


    });

    it('Melakukan generate mahasiswa untuk satu pendaftar', () => {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.fixture("pmb/data_pendaftar").then((data) => {

            cy.get(".table > tbody > tr > td:nth-child(2)")
                    .contains(data.kode_pendaftar_mhs)
                    .next()
                    .next()
                    .next()
                    .next()
                    .next()
                    .next()
                    .next()
                    .find(".btn-success")
                    .click();

        })

        // assert modal
        cy.get('.bootbox-body').should('contain', 'Apakah anda yakin akan melakukan generate Mahasiswa dan Mengirimkan Email pemberitahuan lulus kepada Mahasiswa?')

        // klik ya yakin
        cy.get('.modal-footer > .btn-primary').click()

        // klik batal
        // cy.get('.modal-footer > .btn-default').click()

        // assert berhasil
        cy.get('.alert').should('contain', 'Berhasil Generate Mahasiswa')


    });

});
