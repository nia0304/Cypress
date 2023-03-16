/// <reference types="cypress"/>

describe('Automation Bidang Ilmu', ()=>{
 
  beforeEach(() => {
    cy.login();
    cy.modulakademik();
    cy.visit('/siakad/ms_kelompokmk'); 
  });

  it('Admin bisa membuka halaman', () => {
    cy.get('.content-header > h1').should('contain','Kelompok MK');
  });

  it('Admin bisa menambah data',()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idkelompok').type('MPKK');
      cy.get('#i_namakelompok').type('MPKK');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
  });

  it('Admin tidak bisa menambah data',()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idkelompok').clear();
      cy.get('#i_namakelompok').clear();
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idkelompok').clear();
      cy.get('#i_namakelompok').clear();
      cy.get('#i_idkelompok').type('MBK');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idkelompok').clear();
      cy.get('#i_namakelompok').clear();
      cy.get('#i_namakelompok').type('MBK');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();
  });

  it('Admin batal menambah data',()=>{
    cy.get('#wrap-button > .btn').click();
    cy.get('#insert-row-ms > :nth-child(3) > .btn-warning').click();
  });

  it('Admin bisa mengubah data',()=>{
      cy.get('td').contains('MPKK').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
      cy.get('#u_idkelompok').clear().type('MPK-K').parent().next().next().find('.btn.btn-success.btn-xs.btn-flat').click();
      cy.get('.alert').should('contain','Pengubahan data kelompok mata kuliah berhasil');
  });

  it('Admin batal mengubah data',()=>{
    cy.get('td').contains('MPK-K').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get(':nth-child(4) > :nth-child(3) > .btn-warning').click();
  });

  it('Admin bisa menghapus data',()=>{
    cy.get('td').contains('MPK-K').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data kelompok mata kuliah berhasil');
  });

  it('Admin tidak bisa menghapus data',()=>{
    cy.get('td').contains('MBB').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?');
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data kelompok mata kuliah gagal, data masih dijadikan referensi pada Mata Kuliah');
    cy.get('.close').click();
  });

  it('Admin batal menghapus data',()=>{
    cy.get('td').contains('MBB').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?');
    cy.get('.modal-footer > .btn-default').click();
  });
  
});
