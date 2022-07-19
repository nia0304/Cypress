/// <reference types="cypress"/>

const judulModal = "User Guide";

describe(judulModal, () => {
    beforeEach(() => {
        //login
        cy.loginUserSuperAdmin()
        //open PMB module
        cy.openModulPmb()
    });

    it('Buka Modal Userguide', () => {
        cy.get('#spmbbantuan').click()
    });

});

