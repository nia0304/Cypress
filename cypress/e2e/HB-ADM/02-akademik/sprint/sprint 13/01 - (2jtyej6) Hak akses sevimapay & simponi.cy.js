/// <reference types="cypress"/>

describe('Penyesuaian tombol edit untuk switching sevimapay', () => {
    
    it('Admin cek tombol tambah switching', () => {
        cy.loginadminpt()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/ms_switching');
        cy.get('#wrap-button > .btn').should('exist')
        
    });
    it('Admin PT cek tombol ubah dan hapus switching sevimapay', () => {
        cy.loginadminpt()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/ms_switching');
        cy.get(':nth-child(6) > :nth-child(5) > .btn-primary').should('not.exist')
        cy.get(':nth-child(6) > :nth-child(5) > .btn-danger').should('not.exist')
        assert.equal(2, '2', 'Result')
    });

    it('Admin PT cek tombol ubah dan hapus switching simponi', () => {
        cy.loginadminpt()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/ms_switching');
        cy.get(':nth-child(8) > :nth-child(5) > .btn-primary').should('not.exist')
        cy.get(':nth-child(8) > :nth-child(5) > .btn-danger').should('not.exist')
        assert.equal(2, '2', 'Result')
    });

    it('Superadmin cek tombol tambah switching', () => {
        cy.loginsuperadmin()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/ms_switching');
        cy.get('#wrap-button > .btn').should('exist')
    });

    it('Superadmin cek tombol ubah dan hapus switching sevimapay', () => {
        cy.loginsuperadmin()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/ms_switching');
        cy.get('#wrap-button > .btn').should('exist')
        cy.get(':nth-child(6) > :nth-child(5) > .btn-primary').should('exist')
        cy.get(':nth-child(6) > :nth-child(5) > .btn-danger').should('exist')
        assert.equal(2, '2', 'Result')
    });

    it('Superadmin cek tombol ubah dan hapus switching simponi', () => {
        cy.loginsuperadmin()
        cy.modulkeuangan()
        cy.visit('http://localhost/siacloud/keuangan/ms_switching');
        cy.get('#wrap-button > .btn').should('exist')
        cy.get(':nth-child(8) > :nth-child(5) > .btn-primary').should('exist')
        cy.get(':nth-child(8) > :nth-child(5) > .btn-danger').should('exist')
        assert.equal(2, '2', 'Result')
    });
    
})