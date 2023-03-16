/// <reference types="cypress"/>

describe('Automation Kelas Perkuliahan', ()=>{
 
  beforeEach(() => {
    cy.login();
    cy.modulakademik();
    cy.visit('/siakad/ms_kelasperkuliahan'); 
  });

  it('Admin bisa membuka halaman', () => {
    cy.get('.content-header > h1').should('contain','kelas perkuliahan');
  });

  it('Admin bisa menambah data',()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idkelasperkuliahan').type('2A');
      cy.get('#i_namakelas').type('Kelas 2A');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
  });

  it('Admin tidak bisa menambah data',()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idkelasperkuliahan').clear();
      cy.get('#i_namakelas').clear();
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idkelasperkuliahan').clear();
      cy.get('#i_namakelas').clear();
      cy.get('#i_idkelasperkuliahan').type('3A');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idkelasperkuliahan').clear();
      cy.get('#i_namakelas').clear();
      cy.get('#i_namakelas').type('Kelas 3A');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();
  });

  it('Admin batal menambah data',()=>{
    cy.get('#wrap-button > .btn').click();
    cy.get('#insert-row-ms > :nth-child(3) > .btn-warning').click();
  });

  it('Admin bisa mengubah data',()=>{
      cy.get('td').contains('2A').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
      cy.get('#u_idkelasperkuliahan').clear().type('3A').parent().next().next().find('.btn.btn-success.btn-xs.btn-flat').click();
      cy.get('.alert').should('contain','Pengubahan data kelas perkuliahan berhasil');
  });

  it('Admin batal mengubah data',()=>{
    cy.get('td').contains('A').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get(':nth-child(4) > :nth-child(3) > .btn-warning').click();
  });

  it('Admin bisa menghapus data',()=>{
    cy.get('td').contains('2A').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data kelas perkuliahan berhasil');
  });

  it('Admin tidak bisa menghapus data',()=>{
    cy.get('td').contains('A').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?');
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data kelas perkuliahan gagal, data masih dijadikan referensi pada Kelas Perkuliahan');
    cy.get('.close').click();
  });

  it('Admin batal menghapus data',()=>{
    cy.get('td').contains('A').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?');
    cy.get('.modal-footer > .btn-default').click();
  });
  
});
