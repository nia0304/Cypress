/// <reference types="cypress"/>

describe('Automation Test Suite - Fixtures',  () => {
    //looping data dari fixture
    before(()=> {
        cy.fixture("looping").then(function (testData) {
            this.testData = testData;
        })
    })
    
    beforeEach(() => {
        cy.loginsuperadmin()
        
    }); 
    it("login", function () {
        cy.modulakademik()
        cy.visit('http://localhost/siacloud/siakad/ms_tahapajuta');
        cy.get('#select2-jenis-container').click()
        cy.get('.select2-search__field').type('tesis{enter}')
        this.testData.apa.forEach((value) => {
            // cy.log(value)
            cy.get('#wrap-button > .btn').click()
            cy.get('#i_nourut').type(value.urut)
            cy.get('#i_namatahap').type(value.nama)
            cy.get(':nth-child(4) > .btn-success').click()
        })
    })

    it.only('Admin hapus tahap pengajuan proposal', () => {
        cy.visit('http://localhost/siacloud/siakad/ms_tahapajuta');
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('#select2-jenis-container').click()
            cy.get('.select2-search__field').type("tesis{enter}")
            //lopping hapus tahap ujian
            for(let n = 1; n <= 6; n++){
                 cy.get(':nth-child(2) > :nth-child(4) > .btn-danger').click({multiple: true})
                 cy.get('.modal-footer > .btn-primary').click()
                 cy.wait(400)
             }
         })
     });
})