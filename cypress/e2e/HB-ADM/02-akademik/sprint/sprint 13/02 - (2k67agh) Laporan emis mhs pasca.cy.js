/// <reference types="cypress"/>

describe('Penyesuaian laporan emis untuk mahasiswa pasca sarjana', () => {
    before(()=>{
        cy.fixture("akademik/sprint/sprint13").as('data')
    })
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulakademik()
        cy.visit('http://localhost/siacloud/siakad/repp_emismhs');
        
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

    it.only('Admin cek isi filter prodi/unit sesuai dengan tingkat pendidikan diploma', function () {
        cy.get('#tingkatpendidikan').select(this.data.diploma)
        cy.get('#idunit').invoke('text').then((text => cy.log(text)))
    });
    
})