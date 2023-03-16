/// <reference types="cypress"/>

describe('Automation Bidang Ilmu', ()=>{
 
  beforeEach(() => {
    cy.login();
    cy.modulakademik();
    cy.visit('/siakad/ms_bidangilmu'); 
  });

  it('Admin bisa membuka halaman', () => {
    cy.get('.content-header > h1').should('contain','Bidang Ilmu');
  });

  it('Admin bisa menambah data',()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idbidangilmu').type('PRW');
      cy.get('#i_namabidangilmu').type('Pariwisata');
      cy.get(':nth-child(3) > .btn-success > .fa').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idbidangilmu').clear();
      cy.get('#i_namabidangilmu').clear();
      cy.get('#i_idbidangilmu').type('KHT');
      cy.get('#i_namabidangilmu').type('Kehutanan');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
  });

  it('Admin tidak bisa menambah data',()=>{
      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idbidangilmu').clear();
      cy.get('#i_namabidangilmu').clear();
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idbidangilmu').clear();
      cy.get('#i_namabidangilmu').clear();
      cy.get('#i_idbidangilmu').type('Kmrt');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();

      cy.get('#wrap-button > .btn').click();
      cy.get('#i_idbidangilmu').clear();
      cy.get('#i_namabidangilmu').clear();
      cy.get('#i_namabidangilmu').type('Kemaritiman');
      cy.get(':nth-child(3) > .btn-success > .fa').click();
      cy.get('#modal-konfirmasi').should('be.visible').and('contain', 'Mohon mengisi isian yang bergaris merah').click();
      cy.get('.modal-footer > .btn').click();
  });

  it('Admin batal menambah data',()=>{
    cy.get('#wrap-button > .btn').click();
    cy.get('#insert-row-ms > :nth-child(3) > .btn-warning').click();
  });

  it('Admin bisa mengubah data',()=>{
      cy.get('td').contains('AKA').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
      cy.get('#u_idbidangilmu').clear().type('AKU').parent().next().next().find('.btn.btn-success.btn-xs.btn-flat').click();
      cy.get('.alert').should('contain','Pengubahan data bidangilmu berhasil');
  });

  it('Admin batal mengubah data',()=>{
    cy.get('td').contains('AKU').next().parent().find('.btn.btn-warning.btn-xs.btn-flat').click();
    cy.get(':nth-child(4) > :nth-child(3) > .btn-warning').click();
  });

  it('Admin bisa menghapus data',()=>{
    cy.get('td').contains('KHT').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?')
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data bidangilmu berhasil');
  });

  it('Admin tidak bisa menghapus data',()=>{
    cy.get('td').contains('AGR').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?');
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('.alert').should('contain','Penghapusan data bidangilmu gagal, data masih dijadikan referensi pada Data Pegawai');
    cy.get('.close').click();
  });

  it('Admin batal menghapus data',()=>{
    cy.get('td').contains('AGR').next().parent().find('.btn.btn-danger.btn-xs.btn-flat').click();
    cy.get('#modal-konfirmasi').contains('Apakah anda yakin akan menghapus data ini?');
    cy.get('.modal-footer > .btn-default').click();
  });
  
});
