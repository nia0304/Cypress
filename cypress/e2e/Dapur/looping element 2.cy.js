/// <reference types="cypress"/>
import data from '../../fixtures/looping.json'

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

    it('Admin hapus tahap pengajuan proposal', () => {
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

     it('test get element from tabel', () => {
      cy.modulakademik()
      cy.visit('siakad/ms_kota');
        cy.get('#propinsi').select('JAWA TIMUR').wait(0)
        cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td:nth-child(1)').each(($el) => {
          if ($el.text() === '3522 ') {
            cy.get($el).parent().find('button.btn.btn-primary.btn-xs.btn-flat').click()
            return false
          }
          cy.log($el.text())
        })
      });
})

describe('Dynamic loop', () => {
    data.login.forEach((tes) => {  
        it.only('Login user ketika '+tes.case, () => {
            cy.visit('http://localhost/siacloud')
            if (tes.user) {
                cy.get('#userid').type(tes.user)
            }
            if(tes.pass){
                cy.get('#password').type(tes.pass)
            }
            cy.get('.btn').click()

            //assertion
            if(tes.negatif){
                cy.get('.alert').should('be.visible')
                // if()
            }else{
                cy.get('.out').should('be.visible')
            }
        });
    }) 
})