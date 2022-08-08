/// <reference types="cypress"/>

const judulHalaman = "Daftar Pertanyaan";

describe(judulHalaman, () => {
    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
        // go to target page
        cy.Menu_Pertanyaan_Kuisoner()
    });

    it('Pencarian kuisoner berhasil', () => {
        cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain', judulHalaman)

        cy.fixture("pmb/data_kuisoner").then((data) => {
            cy.get('.col-xs-8 > .input-group > .form-control').type(data.pencarian)
            cy.get('.input-group-btn > .btn-success').click()

            cy.get('.table-responsive > .table > tbody > tr > td:nth-child(3)').should('contain', data.pencarian)

        })

    });

    it.only('Pencarian kuisoner tidak ditemukan', () => {
        cy.get('body > div.container > div > aside > section.content-header.content-header-vertical > h1 > small').should('contain', judulHalaman)

        cy.fixture("pmb/data_kuisoner").then((data) => {
            cy.get('.col-xs-8 > .input-group > .form-control').type(data.pencarian_salah)
            cy.get('.input-group-btn > .btn-success').click()

            cy.get('.table-responsive > .table > tbody > tr > td').should('contain', data.data_kosong)

        })

    });

});
