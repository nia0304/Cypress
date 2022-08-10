/// <reference types="cypress"/>

describe('Penyesuaian laporan emis untuk mahasiswa pasca sarjana', () => {
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulakademik()
        cy.visit('http://localhost/siacloud/siakad/repp_emismhs');
        cy.fixture("akademik/sprint/sprint13").as('data')
        
    });

    it('Admin cek filter tingkat pendidikan',  function () {
        cy.get('#block-tingkatpendidikan')
        .should('contain', 'Tingkat Pendidikan')
        .and('be.visible')
        cy.get('#tingkatpendidikan').select(this.data.pasca)
        cy.get('#tingkatpendidikan option:selected').invoke('text').then((text) => {
            cy.wrap(text).should('contain', text)
        })
    });

    it('Admin cek isi filter prodi/unit sesuai dengan tingkat pendidikan diploma', function () {
        cy.get('#tingkatpendidikan').select(this.data.diploma)
        cy.get('#idunit').select(this.data.d3)
        cy.get('#idunit option:selected').invoke('text').then((text => {
            cy.wrap(text).should('contain', text)
        }))
    });

    it('Admin cek isi filter prodi/unit sesuai dengan tingkat pendidikan sarjana', function () {
        cy.get('#tingkatpendidikan').select(this.data.sarjana)
        cy.get('#idunit').select(this.data.s1)
        cy.get('#idunit option:selected').invoke('text').then((text => {
            cy.wrap(text).should('contain', text)
        }))
    });

    it('Admin cek isi filter prodi/unit sesuai dengan tingkat pendidikan pascasarjana', function () {
        cy.get('#tingkatpendidikan').select(this.data.pasca)
        cy.get('#idunit').select(this.data.s2)
        cy.get('#idunit option:selected').invoke('text').then((text => {
            cy.wrap(text).should('contain', text)
        }))
    });
    
})