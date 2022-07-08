/// <reference types="cypress"/>

describe('Perbaikan Rekap Percakapan Bimbingan di Tugas Akhir', ()=>{
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulakademik()
        cy.visit('http://localhost/siacloud/siakad/list_ta');
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('.col-xs-8 > .input-group > .form-control').type(data.mhs_bimbinganTA)
            cy.get('.input-group-btn > .btn-success').click()
            cy.get('[data-type="edit"]').click()
        })
    });

    it('Tambah Bimbingan', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('.list-unstyled > :nth-child(2) > a').click()
            //bimbingan ke 1
            cy.get('.btn-success').click()
            cy.get('#bimbinganke').type(data.bimbinganke1)
            cy.get('#tglbimbingan').type(data.tgl_bimbingan1).tab()
            cy.get('#topikbimbingan').type(data.topik_bimbingan1)
            cy.get('#bahasan').type(data.bahasan)
            cy.get('.btn-success').click()  
            cy.get('.modal-footer > .btn-primary').click()
            //bimbingan ke 2
            cy.get('.btn-success').click()
            cy.get('#bimbinganke').type(data.bimbinganke2)
            cy.get('#tglbimbingan').type(data.tgl_bimbingan2).tab()
            cy.get('#topikbimbingan').type(data.topik_bimbingan2)
            cy.get('#bahasan').type(data.bahasan)
            cy.get('.btn-success').click() 
            cy.get('.modal-footer > .btn-primary').click()
        })
    });
    it('Dosen & Mahasiswa melihat histori percakapan bimbingan ke 1', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('.list-unstyled > :nth-child(3) > a').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
            // cy.get('[data-cy="data-select"]').invoke('val').then(valuetext => cy.log(valuetext));
            cy.get('[data-cy="data-select"]').invoke('val').then((valuetext)=> {
                if(valuetext === data.valuetext1){
                    cy.wrap(valuetext).should('contain', data.valuetext1)
                }
            });
            cy.get('[data-cy="data-topik"]').should('contain', data.topik_bimbingan1)
            cy.get('[data-cy="data-tgl"]').should('contain', data.viewtgl_bimbingan1)
            cy.get('[data-cy="data-desk"]').should('contain', data.bahasan)
        })
    });

    it.only('Dosen & Mahasiswa melihat histori percakapan bimbingan ke 2', () => {
        cy.fixture('akademik/sprint/sprint11').then((data) => {
            cy.get('.list-unstyled > :nth-child(3) > a').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
            cy.get('[data-cy="data-select"]').select(data.bimbinganke2)
            // cy.get('[data-cy="data-select"]').invoke('val').then(valuetext => cy.log(valuetext));
            cy.get('[data-cy="data-select"]').invoke('val').then((valuetext)=> {
                if(valuetext === data.valuetext2){
                    cy.wrap(valuetext).should('contain', data.valuetext2)
                }
            });
            cy.get('[data-cy="data-topik"]').should('contain', data.topik_bimbingan2)
            cy.get('[data-cy="data-tgl"]').should('contain', data.viewtgl_bimbingan2)
            cy.get('[data-cy="data-desk"]').should('contain', data.bahasan)
        })
    });
    
    
})