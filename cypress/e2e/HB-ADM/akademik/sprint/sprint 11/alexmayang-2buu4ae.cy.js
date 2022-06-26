/// <reference types="cypress"/>

describe('Perbaikan Rekap Percakapan Bimbingan di Tugas Akhir', ()=>{
    beforeEach(() => {
        cy.loginsuperadmin()
        cy.modulakademik()
        cy.visit('http://localhost/siacloud/siakad/list_ta');
        cy.get('.col-xs-8 > .input-group > .form-control').type('1984202004')
        cy.get('.input-group-btn > .btn-success').click()
        cy.get('[data-type="edit"]').click()
    });

    it('Tambah Bimbingan', () => {
        cy.get('.list-unstyled > :nth-child(2) > a').click()
        //bimbingan ke 1
        cy.get('.btn-success').click()
        cy.get('#bimbinganke').type('1')
        cy.get('#tglbimbingan').type('26-06-2022').tab()
        cy.get('#topikbimbingan').type('Bab 1')
        cy.get('#bahasan').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
        cy.get('.btn-success').click()  
        cy.get('.modal-footer > .btn-primary').click()
        //bimbingan ke 2
        cy.get('.btn-success').click()
        cy.get('#bimbinganke').type('2')
        cy.get('#tglbimbingan').type('27-06-2022').tab()
        cy.get('#topikbimbingan').type('Bab 2')
        cy.get('#bahasan').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
        cy.get('.btn-success').click() 
        cy.get('.modal-footer > .btn-primary').click()
    });
    it('Dosen & Mahasiswa melihat histori percakapan bimbingan ke 1', () => {
        cy.get('.list-unstyled > :nth-child(3) > a').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        // cy.get('[data-cy="data-select"]').invoke('val').then(valuetext => cy.log(valuetext));
        cy.get('[data-cy="data-select"]').invoke('val').then((valuetext)=> {
          if(valuetext === '169'){
          cy.wrap(valuetext).should('contain', '169')
          }
        });
        cy.get('[data-cy="data-topik"]').should('contain', 'Bab 1')
        cy.get('[data-cy="data-tgl"]').should('contain', 'Minggu, 26 Juni 2022')
        cy.get('[data-cy="data-desk"]').should('contain', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    });

    it.only('Dosen & Mahasiswa melihat histori percakapan bimbingan ke 2', () => {
        cy.get('.list-unstyled > :nth-child(3) > a').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('[data-cy="data-select"]').select('2')
        // cy.get('[data-cy="data-select"]').invoke('val').then(valuetext => cy.log(valuetext));
        cy.get('[data-cy="data-select"]').invoke('val').then((valuetext)=> {
          if(valuetext === '170'){
          cy.wrap(valuetext).should('contain', '170')
          }
        });
        cy.get('[data-cy="data-topik"]').should('contain', 'Bab 2')
        cy.get('[data-cy="data-tgl"]').should('contain', 'Senin, 27 Juni 2022')
        cy.get('[data-cy="data-desk"]').should('contain', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    });
    
    
})