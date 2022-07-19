/// <reference types="cypress"/>

const judulModal = "Notifikasi";
const judulHalaman = "Daftar Notifikasi";

describe(judulHalaman, () => {
    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
    });

    it('Buka Modal Notifikasi', () => {
        cy.get('#toggle-notif').click()
        cy.get('.header-title > h4').should('contain', judulModal)
    });

    it.only('Buka Semua Notifikasi', () => {
        cy.get('#toggle-notif').click()
        cy.get('.header-title > h4').should('contain', judulModal)

        cy.get('#notif-content > div > div.footer')
            .find('a')
            .should('have.attr', 'href')
            .should('include', '/spmb/daftar_notifikasi')

        cy.get('#notif-content > div > div.footer').click()

        // pengecekan title
        cy.get('.title').should('contain', judulHalaman)
    });

});

