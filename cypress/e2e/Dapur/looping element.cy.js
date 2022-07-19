/// <reference types="cypress"/>

const dataValue = [
    {
        "urut": "1",
        "nama": "Tesis 1"
    },
    {
        "urut": "2",
        "nama": "Tesis 2"
    }
]

describe('looping auto', ()=> {

    dataValue.forEach((fixturedata)=>{
        it('tes looping', () => {
            cy.loginsuperadmin()
            cy.modulakademik()
            cy.visit('http://localhost/siacloud/siakad/ms_tahapajuta');
            cy.get('#select2-jenis-container').click()
            cy.get('.select2-search__field').type('tesis{enter}')
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_nourut').type(fixturedata.urut)
            cy.get('#i_namatahap').type(fixturedata.nama)
            cy.get(':nth-child(4) > .btn-success').click()
        });
    })
    
})