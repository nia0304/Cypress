const judulHalaman = "Generate Mahasiswa";

describe(judulHalaman, () => {

    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
        // go to target page
        cy.Menu_Generate_Mahasiswa()

        cy.fixture('HB-PMB/sprint26/tagihan_pendaftar_generate_nim').as('data')
    });

    it('Admin input NIM pendaftar yang memiliki tagihan belum lunas (Belum ada tagihan dengan aturan akademik untuk Generate NIM / MHS)', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('td').contains(this.data.idPendaftar)
            .parent()
            .find('button.btn.btn-primary.btn-xs.btn-flat').click()

        cy.get('#u_nim').type(this.data.nimPendaftar)
            .parent()
            .next()
            .next()
            .find("button.btn.btn-success.btn-xs.btn-flat")
            .click();

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilEditNim)

    });

    it('Admin generate NIM pendaftar yang memiliki tagihan belum lunas  (Belum ada tagihan dengan aturan akademik untuk Generate NIM / MHS)', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('#cfilter').select(this.data.pilihFilter)

        cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.idPendaftar)

        cy.get('.input-group-btn > .btn-success').click()

        cy.get('td').contains(this.data.idPendaftar)
            .parent()
            .find('button.btn.btn-info.btn-xs.btn-flat').click()

        cy.get('.bootbox-body').should('contain', this.data.modalGenerateNim)

        cy.get('.modal-footer > .btn-primary').click()
        // cy.get('.btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertBerhasilGenerateNim)

    });

    it('Admin input NIM pendaftar yang memiliki tagihan belum lunas (Sudah ada tagihan dengan aturan akademik untuk Generate NIM / MHS)', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('td').contains(this.data.idPendaftar)
            .parent()
            .find('button.btn.btn-primary.btn-xs.btn-flat').click()

        cy.get('#u_nim').type(this.data.nimPendaftar)
            .parent()
            .next()
            .next()
            .find("button.btn.btn-success.btn-xs.btn-flat")
            .click();

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertGagalEditNim)

    });

    it('Admin generate NIM pendaftar yang memiliki tagihan belum lunas  (Sudah ada tagihan dengan aturan akademik untuk Generate NIM / MHS)', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('#cfilter').select(this.data.pilihFilter)

        cy.get('.col-xs-8 > .input-group > .form-control').type(this.data.idPendaftar)

        cy.get('.input-group-btn > .btn-success').click()

        cy.get('td').contains(this.data.idPendaftar)
            .parent()
            .find('button.btn.btn-info.btn-xs.btn-flat').click()

        cy.get('.bootbox-body').should('contain', this.data.modalGenerateNim)

        cy.get('.modal-footer > .btn-primary').click()
        // cy.get('.btn-default').click()

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertGagalGenerateNim)

    });

    it('Admin input NIM pendaftar yang belum daftar ulang', function () {
        cy.get('.content-header > h1 > small').should('contain', judulHalaman)

        cy.filterPencarian()

        cy.get('td').contains(this.data.idPendaftar)
            .parent()
            .find('button.btn.btn-primary.btn-xs.btn-flat').click()

        cy.get('#u_nim').type(this.data.nimPendaftar)
            .parent()
            .next()
            .next()
            .find("button.btn.btn-success.btn-xs.btn-flat")
            .click();

        // asset berhasil 
        cy.get('.alert').should('contain', this.data.alertGagalBelumDaftarUlang)

    });
})