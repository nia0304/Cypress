/// <reference types="cypress" />

describe('perlombaan testing', ()=> {
    it('001 - melakukan pendaftaran', ()=>{
        cy.visit('https://staging.siakadcloud.com/spmbfront/')
        cy.get('.btn-daftar').click()
        cy.get(':nth-child(3) > .cards-jalur > .card-footer > .row > :nth-child(2) > .btn').should('be.visible')
    })

    it('002- login gagal', ()=> {
        cy.visit('https://staging.siakadcloud.com')
        cy.get('#userid').type('fikri')
        cy.get('#password').type('asdf')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Akun Pengguna atau Kata Sandi anda tidak sesuai')
    })
})