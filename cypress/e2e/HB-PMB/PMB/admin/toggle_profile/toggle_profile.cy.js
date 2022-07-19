/// <reference types="cypress"/>

const judulModal = "Profile";

describe(judulModal, () => {
    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
    });

    it('Buka Modal Profile', () => {
        cy.get('#toggle-profile').click()
        cy.fixture("login/login_user").then((data) => {
            cy.get('.profile > :nth-child(2) > h4').should('contain', data.nama_profil)
        });

        // untuk klik pilih bahasa
        // cy.get('#pilih-bahasa').click()
        // cy.get('.modal-title').should('contain', 'Pilih Bahasa')

        // untuk klik bantuan 
        // cy.get('.footer > :nth-child(2) > a').click()

        // untuk logout
        cy.get('#logout').click()
        
    });

});

