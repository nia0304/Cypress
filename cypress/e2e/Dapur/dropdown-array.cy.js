
/// <reference types="cypress" />

describe('Registrasi Ulang', () => {
    beforeEach("Login Siakad", () => {
        cy.login();
        cy.modulpmb();
    });
    it('Generate NIM Pendaftar', () => {
        cy.visit("/spmb/set_registrasi");
        cy.get('#idpendaftar_label').type('khalil')
        cy.get('.tt-suggestions div').each(($el, index, $list) => {
            if ($el.text() === '2021041400010 - KHALIL GIBRAN') {
                cy.wrap($el).click()
            }
        })
        cy.get('.col-md-6 > .input-group > .input-group-btn > .btn').click();
        cy.get('select[name="idpilihansyarat[27]"]').select("XL");
        // cy.get('[id="idpilihansyarat[27]"]').select("XL");
        // cy.get('//*[@id="#idpilihansyarat\[27\]"]').select("XL");
    })
})

